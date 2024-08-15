/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
 *         paymentNote: {
 *             type: "set",
 *             value: "string"
 *         },
 *         invoiceId: {
 *             type: "set",
 *             value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
 *         }
 *     }
 */
export interface UpdateThirdPartyPayerPaymentRequest {
    paymentTimestamp?: Date;
    paymentNote?: CandidApi.NoteUpdate;
    invoiceId?: CandidApi.InvoiceUpdate;
}
