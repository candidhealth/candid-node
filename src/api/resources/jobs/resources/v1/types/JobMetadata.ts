/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * Metadata for a job
 *
 * @example
 *     {
 *         type: "claim_job_metadata",
 *         action: {
 *             type: "resubmit_fresh_claim_action"
 *         },
 *         workQueueId: CandidApi.WorkQueueId("1503a782-35f6-45a7-b5c3-53ca2ebe8887"),
 *         claimId: CandidApi.ClaimId("92215dff-4a79-4dd7-af02-59c16f99cdba"),
 *         claimMetadata: {
 *             encounterId: CandidApi.EncounterId("2132a68b-7acb-46c2-ba93-852b5daa1f98"),
 *             patientFirstName: "John",
 *             patientLastName: "Doe",
 *             dateOfService: "2021-01-01",
 *             claimStatus: CandidApi.ClaimStatus.Paid
 *         }
 *     }
 */
export type JobMetadata = CandidApi.jobs.v1.JobMetadata.ClaimJobMetadata;

export declare namespace JobMetadata {
    interface ClaimJobMetadata extends CandidApi.jobs.v1.ClaimJobMetadata {
        type: "claim_job_metadata";
    }
}
