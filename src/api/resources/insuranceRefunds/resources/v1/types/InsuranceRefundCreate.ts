/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface InsuranceRefundCreate {
    payerIdentifier: CandidApi.payers.v3.PayerIdentifier;
    amountCents: number;
    refundTimestamp?: Date;
    refundNote?: string;
    allocations: CandidApi.AllocationCreate[];
    refundReason?: CandidApi.RefundReason;
}
