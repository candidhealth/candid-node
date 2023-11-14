/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface PatientRefundCreate {
    amountCents: number;
    refundTimestamp?: Date;
    refundNote?: string;
    patientExternalId: CandidApi.PatientExternalId;
    allocations: CandidApi.AllocationCreate[];
    invoice?: CandidApi.InvoiceId;
    refundReason?: CandidApi.RefundReason;
}