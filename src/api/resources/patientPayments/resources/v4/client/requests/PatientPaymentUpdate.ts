/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface PatientPaymentUpdate {
    paymentTimestamp?: Date;
    paymentNote?: CandidApi.NoteUpdate;
    invoice?: CandidApi.InvoiceUpdate;
}
