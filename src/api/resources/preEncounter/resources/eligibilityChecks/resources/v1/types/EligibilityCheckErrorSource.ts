/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * enum to represent the source of an error in an eligibility check
 */
export type EligibilityCheckErrorSource = "CANDID" | "STEDI";
export const EligibilityCheckErrorSource = {
    Candid: "CANDID",
    Stedi: "STEDI",
} as const;
