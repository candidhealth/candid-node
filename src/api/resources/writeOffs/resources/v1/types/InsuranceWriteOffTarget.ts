/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type InsuranceWriteOffTarget =
    | CandidApi.writeOffs.v1.InsuranceWriteOffTarget.ServiceLineId
    | CandidApi.writeOffs.v1.InsuranceWriteOffTarget.ClaimId
    | CandidApi.writeOffs.v1.InsuranceWriteOffTarget.BillingProviderId;

export declare namespace InsuranceWriteOffTarget {
    interface ServiceLineId {
        type: "service_line_id";
        value: CandidApi.ServiceLineId;
    }

    interface ClaimId {
        type: "claim_id";
        value: CandidApi.ClaimId;
    }

    interface BillingProviderId {
        type: "billing_provider_id";
        value: CandidApi.ProviderId;
    }
}
