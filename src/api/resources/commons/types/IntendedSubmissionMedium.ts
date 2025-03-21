/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The medium (paper or electronic) via which we intended to submit the claim. The clearinghouse to which we sent the claim may use a different medium in certain cases, e.g., if the payer does not support electronic claims.
 */
export type IntendedSubmissionMedium = "paper" | "electronic";
export const IntendedSubmissionMedium = {
    Paper: "paper",
    Electronic: "electronic",
} as const;
