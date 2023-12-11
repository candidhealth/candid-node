/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface InsuranceRefundUpdate {
    refundTimestamp?: Date;
    refundNote?: CandidApi.NoteUpdate;
    payerIdentifier: CandidApi.payers.v3.PayerIdentifier;
    allocations?: CandidApi.AllocationAmountUpdate;
    invoice?: CandidApi.InvoiceUpdate;
    refundReason?: CandidApi.RefundReasonUpdate;
}
