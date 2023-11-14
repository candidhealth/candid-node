/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface InsuranceRefundCreate {
    payerId: CandidApi.payers.v3.PayerId;
    amountCents: number;
    refundTimestamp?: Date;
    refundNote?: string;
    allocations: CandidApi.AllocationCreate[];
    refundReason?: CandidApi.RefundReason;
}
