/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ChargeCaptureStatus =
    | "planned"
    | "not-billable"
    | "billable"
    | "aborted"
    | "billed"
    | "entered-in-error"
    | "unknown";

export const ChargeCaptureStatus = {
    Planned: "planned",
    NotBillable: "not-billable",
    Billable: "billable",
    Aborted: "aborted",
    Billed: "billed",
    EnteredInError: "entered-in-error",
    Unknown: "unknown",
} as const;
