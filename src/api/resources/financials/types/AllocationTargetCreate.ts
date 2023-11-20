/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export type AllocationTargetCreate =
    | CandidApi.AllocationTargetCreate.ServiceLineById
    | CandidApi.AllocationTargetCreate.ClaimById
    | CandidApi.AllocationTargetCreate.BillingProviderById
    | CandidApi.AllocationTargetCreate.Unattributed;

export declare namespace AllocationTargetCreate {
    interface ServiceLineById {
        type: "service_line_by_id";
        value: CandidApi.ServiceLineId;
    }

    interface ClaimById {
        type: "claim_by_id";
        value: CandidApi.ClaimId;
    }

    interface BillingProviderById {
        type: "billing_provider_by_id";
        value: CandidApi.ProviderId;
    }

    interface Unattributed {
        type: "unattributed";
    }
}
