/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface OutOfNetworkStatus {
    explanation: CandidApi.expectedNetworkStatus.v2.Explanation;
    routedPayerUuid: CandidApi.payers.v3.PayerUuid;
    routedBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId;
}
