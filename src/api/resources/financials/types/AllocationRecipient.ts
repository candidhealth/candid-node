/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export type AllocationRecipient =
    | CandidApi.AllocationRecipient.ServiceLine
    | CandidApi.AllocationRecipient.Claim
    | CandidApi.AllocationRecipient.BillingProviderId;

export declare namespace AllocationRecipient {
    interface ServiceLine {
        type: "service_line";
        value: CandidApi.ServiceLineId;
    }

    interface Claim {
        type: "claim";
        value: CandidApi.ClaimId;
    }

    interface BillingProviderId {
        type: "billing_provider_id";
        value: CandidApi.ProviderId;
    }
}
