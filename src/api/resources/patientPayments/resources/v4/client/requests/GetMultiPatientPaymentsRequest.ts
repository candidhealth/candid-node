/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface GetMultiPatientPaymentsRequest {
    /**
     * Defaults to 100. The value must be greater than 0 and less than 1000.
     */
    limit?: number;
    patientExternalId?: CandidApi.PatientExternalId;
    claimId?: CandidApi.ClaimId;
    serviceLineId?: CandidApi.ServiceLineId;
    billingProviderId?: CandidApi.ProviderId;
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
