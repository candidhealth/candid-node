/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * @example
 *     {
 *         claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
 *         patientControlNumber: "PATIENT_CONTROL_NUMBER",
 *         submissionRecords: [{
 *                 submittedAt: new Date("2023-01-01T13:00:00.000Z"),
 *                 claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
 *                 payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary
 *             }, {
 *                 submittedAt: new Date("2023-01-04T12:00:00.000Z"),
 *                 claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Corrected,
 *                 payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary
 *             }]
 *     }
 *
 * @example
 *     {
 *         claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
 *         patientControlNumber: "123XYZABC",
 *         submissionRecords: []
 *     }
 */
export interface ExternalClaimSubmissionCreate {
    /** When the claim was created in the external system. */
    claimCreatedAt: Date;
    /**
     * The Patient Control Number sent on the claim to the payer. To guarantee compatibility with all payers, this field must consist
     * only of uppercase letters and numbers and be no more than 14 characters long.
     */
    patientControlNumber: string;
    /**
     * A successful claim submission record will be created for each value provided.
     * An empty list may be provided for cases where the claim originated in an external system but was never submitted to a payer.
     */
    submissionRecords: CandidApi.claimSubmission.v1.ClaimSubmissionRecordCreate[];
}
