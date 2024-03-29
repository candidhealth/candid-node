/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const AllocationTarget: core.serialization.Schema<serializers.AllocationTarget.Raw, CandidApi.AllocationTarget> =
    core.serialization
        .union("type", {
            service_line: core.serialization.lazyObject(
                async () => (await import("../../..")).ServiceLineAllocationTarget
            ),
            claim: core.serialization.lazyObject(async () => (await import("../../..")).ClaimAllocationTarget),
            billing_provider_id: core.serialization.lazyObject(
                async () => (await import("../../..")).BillingProviderAllocationTarget
            ),
            unattributed: core.serialization.object({}),
        })
        .transform<CandidApi.AllocationTarget>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace AllocationTarget {
    type Raw =
        | AllocationTarget.ServiceLine
        | AllocationTarget.Claim
        | AllocationTarget.BillingProviderId
        | AllocationTarget.Unattributed;

    interface ServiceLine extends serializers.ServiceLineAllocationTarget.Raw {
        type: "service_line";
    }

    interface Claim extends serializers.ClaimAllocationTarget.Raw {
        type: "claim";
    }

    interface BillingProviderId extends serializers.BillingProviderAllocationTarget.Raw {
        type: "billing_provider_id";
    }

    interface Unattributed {
        type: "unattributed";
    }
}
