/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InvoiceStatus = "draft" | "open" | "paid" | "void" | "uncollectible" | "held";
export const InvoiceStatus = {
    Draft: "draft",
    Open: "open",
    Paid: "paid",
    Void: "void",
    Uncollectible: "uncollectible",
    Held: "held",
} as const;
