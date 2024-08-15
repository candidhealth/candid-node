/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { NoteUpdate } from "../../../../../financials/types/NoteUpdate";
import { InvoiceUpdate } from "../../../../../financials/types/InvoiceUpdate";

export const UpdateThirdPartyPayerPaymentRequest: core.serialization.Schema<
    serializers.thirdPartyPayerPayments.v1.UpdateThirdPartyPayerPaymentRequest.Raw,
    CandidApi.thirdPartyPayerPayments.v1.UpdateThirdPartyPayerPaymentRequest
> = core.serialization.object({
    paymentTimestamp: core.serialization.property("payment_timestamp", core.serialization.date().optional()),
    paymentNote: core.serialization.property("payment_note", NoteUpdate.optional()),
    invoiceId: core.serialization.property("invoice_id", InvoiceUpdate.optional()),
});

export declare namespace UpdateThirdPartyPayerPaymentRequest {
    interface Raw {
        payment_timestamp?: string | null;
        payment_note?: NoteUpdate.Raw | null;
        invoice_id?: InvoiceUpdate.Raw | null;
    }
}
