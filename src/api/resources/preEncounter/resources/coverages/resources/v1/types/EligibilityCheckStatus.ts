/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * enum to represent the statuses of eligibility checks
 */
export type EligibilityCheckStatus = "CREATED" | "COMPLETED" | "FAILED" | "PENDING";

export const EligibilityCheckStatus = {
    Created: "CREATED",
    Completed: "COMPLETED",
    Failed: "FAILED",
    Pending: "PENDING",
} as const;