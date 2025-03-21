/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { NoteUpdate } from "../../../../../financials/types/NoteUpdate";
import { InvoiceUpdate } from "../../../../../financials/types/InvoiceUpdate";

export const UpdateNonInsurancePayerPaymentRequest: core.serialization.Schema<
    serializers.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest.Raw,
    CandidApi.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest
> = core.serialization.object({
    paymentTimestamp: core.serialization.property("payment_timestamp", core.serialization.date().optional()),
    paymentNote: core.serialization.property("payment_note", NoteUpdate.optional()),
    invoiceId: core.serialization.property("invoice_id", InvoiceUpdate.optional()),
});

export declare namespace UpdateNonInsurancePayerPaymentRequest {
    export interface Raw {
        payment_timestamp?: string | null;
        payment_note?: NoteUpdate.Raw | null;
        invoice_id?: InvoiceUpdate.Raw | null;
    }
}
