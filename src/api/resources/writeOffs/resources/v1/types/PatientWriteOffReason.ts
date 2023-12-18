/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PatientWriteOffReason =
    | "SMALL_BALANCE"
    | "CHARITY_OR_FINANCIAL_ASSISTANCE"
    | "PATIENT_EXPERIENCE_OR_SERVICE_RECOVERY"
    | "OON_COURTESY_ADJUSTMENT"
    | "PROMPT_PAY_DISCOUNT"
    | "BAD_DEBT"
    | "COLLECTION_AGENCY"
    | "OTHER"
    | "UNKNOWN";

export const PatientWriteOffReason = {
    SmallBalance: "SMALL_BALANCE",
    CharityOrFinancialAssistance: "CHARITY_OR_FINANCIAL_ASSISTANCE",
    PatientExperienceOrServiceRecovery: "PATIENT_EXPERIENCE_OR_SERVICE_RECOVERY",
    OonCourtesyAdjustment: "OON_COURTESY_ADJUSTMENT",
    PromptPayDiscount: "PROMPT_PAY_DISCOUNT",
    BadDebt: "BAD_DEBT",
    CollectionAgency: "COLLECTION_AGENCY",
    Other: "OTHER",
    Unknown: "UNKNOWN",
} as const;
