/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         limit: 1,
 *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         sort: "amount_cents",
 *         sortDirection: "asc",
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
 *     }
 */
export interface GetMultiInsurancePaymentRequest {
    /**
     * Defaults to 100. The value must be greater than 0 and less than 1000.
     */
    limit?: number;
    payerUuid?: CandidApi.payers.v3.PayerUuid;
    claimId?: CandidApi.ClaimId;
    serviceLineId?: CandidApi.ServiceLineId;
    billingProviderId?: CandidApi.ProviderId;
    /**
     * Defaults to payment_timestamp
     */
    sort?: CandidApi.insurancePayments.v1.InsurancePaymentSortField;
    /**
     * Sort direction. Defaults to descending order if not provided.
     */
    sortDirection?: CandidApi.SortDirection;
    pageToken?: CandidApi.PageToken;
}
