/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PatientTransactionSource =
    | "MANUAL_ENTRY"
    | "CHARGEBEE"
    | "SQUARE"
    | "STRIPE"
    | "ELATION"
    | "CEDAR"
    | "HEALTHIE";
export const PatientTransactionSource = {
    ManualEntry: "MANUAL_ENTRY",
    Chargebee: "CHARGEBEE",
    Square: "SQUARE",
    Stripe: "STRIPE",
    Elation: "ELATION",
    Cedar: "CEDAR",
    Healthie: "HEALTHIE",
} as const;
