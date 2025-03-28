/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         limit: 1,
 *         patientExternalId: CandidApi.PatientExternalId("string"),
 *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         unattributed: true,
 *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         sources: "MANUAL_ENTRY",
 *         sort: "payment_source",
 *         sortDirection: "asc",
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
 *     }
 */
export interface GetMultiPatientPaymentsRequest {
    /**
     * Defaults to 100. The value must be greater than 0 and less than 1000.
     */
    limit?: number;
    patientExternalId?: CandidApi.PatientExternalId;
    claimId?: CandidApi.ClaimId;
    serviceLineId?: CandidApi.ServiceLineId;
    billingProviderId?: CandidApi.ProviderId;
    /**
     * returns payments with unattributed allocations if set to true
     */
    unattributed?: boolean;
    invoiceId?: CandidApi.InvoiceId;
    sources?: CandidApi.PatientTransactionSource | CandidApi.PatientTransactionSource[];
    /**
     * Defaults to payment_timestamp
     */
    sort?: CandidApi.patientPayments.v4.PatientPaymentSortField;
    /**
     * Sort direction. Defaults to descending order if not provided.
     */
    sortDirection?: CandidApi.SortDirection;
    pageToken?: CandidApi.PageToken;
}
