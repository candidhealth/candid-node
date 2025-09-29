const core = require('@actions/core');
const {context} = require('@actions/github');
const axios = require('axios');
const yaml = require('yaml');
const fs = require('fs');

const createPagerDutyIncident = async (alert, apiKey, userEmail) => {
    try {
        core.info("Sending PagerDuty alert");
        core.info(JSON.stringify(alert));
        const response = await axios.post("https://api.pagerduty.com/incidents", alert, {
            headers: {
                Authorization: `Token token=${apiKey}`,
                "Content-Type": "application/json",
                From: userEmail,
            }
        });

        if (response.status === 201) {
            console.log(`Successfully sent PagerDuty alert. Response: ${JSON.stringify(response.data)}`);
        } else {
            core.setFailed(
                `PagerDuty API returned status code ${response.status} - ${JSON.stringify(response.data)}`
            );
        }
    } catch (error) {
      if (error.response) {
        core.info(JSON.stringify(error.response.data));
        core.info(JSON.stringify(error.response.status));
        core.info(JSON.stringify(error.response.headers));
      } else if (error.request) {
        core.info(JSON.stringify(error.request));
      } else {
        core.info('Error', JSON.stringify(error.message));
      }
      core.info(JSON.stringify(error.config));
      core.setFailed(error.message);
    }
}


const main = async () => {
  try {
    const pagerDutyApiKey = core.getInput('pagerduty-api-key');
    const pagerDutyGitHubServiceId = core.getInput('pagerduty-service-id');
    const pagerDutyUserId = core.getInput('pagerduty-user-id')
    const pagerDutyUserEmail = core.getInput('pagerduty-user-email')

    const assignments = !pagerDutyUserId ? undefined : [
      {
          at: new Date().toISOString(),
          assignee: {
              "id": pagerDutyUserId,
              "type": "user_reference",
              "self": `https://api.pagerduty.com/users/${pagerDutyUserId}`,
          }
      }
    ];

    const alert = {
        incident: {
            type: "incident",
            title: `${context.repo.repo}: Error in "${context.workflow}"`,
            service: {
                id: pagerDutyGitHubServiceId,
                type: "service_reference",
            },
            urgency: "high",
            incident_key: `${context.repo.repo}:${context.runId}`,
            body: {
                type: "incident_body",
                details: `https://github.com/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`
            },
            assignments,
        },
    };
    await createPagerDutyIncident(alert, pagerDutyApiKey, pagerDutyUserEmail);
  } catch (error) {
      core.setFailed(error.message);
  }

}

main();