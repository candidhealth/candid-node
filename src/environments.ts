/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CandidApiEnvironmentUrls {
    candidApi: string;
    preEncounter: string;
}

export const CandidApiEnvironment = {
    Production: {
        candidApi: "https://api.joincandidhealth.com",
        preEncounter: "https://pre-api.joincandidhealth.com",
    },
    Staging: {
        candidApi: "https://api-staging.joincandidhealth.com",
        preEncounter: "https://pre-api-staging.joincandidhealth.com",
    },
    CandidStaging: {
        candidApi: "https://staging-api.joincandidhealth.com",
        preEncounter: "https://staging-pre-api.joincandidhealth.com",
    },
} as const;

export type CandidApiEnvironment =
    | typeof CandidApiEnvironment.Production
    | typeof CandidApiEnvironment.Staging
    | typeof CandidApiEnvironment.CandidStaging;
