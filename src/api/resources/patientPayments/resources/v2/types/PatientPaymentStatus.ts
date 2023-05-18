/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PatientPaymentStatus =
    | "PENDING"
    | "paid"
    | "CANCELED"
    | "voided"
    | "FAILED"
    | "COMPLETED"
    | "succeeded"
    | "pending"
    | "failed"
    | "requires_action"
    | "canceled";

export const PatientPaymentStatus = {
    Pending: "PENDING",
    Paid: "paid",
    Canceled: "CANCELED",
    Voided: "voided",
    Failed: "FAILED",
    Completed: "COMPLETED",
    StripeSucceeded: "succeeded",
    StripePending: "pending",
    StripeFailed: "failed",
    StripeRequiresAction: "requires_action",
    StripeCanceled: "canceled",
} as const;
