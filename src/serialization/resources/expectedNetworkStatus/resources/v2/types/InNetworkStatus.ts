/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InNetworkStatus: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v2.InNetworkStatus.Raw,
    CandidApi.expectedNetworkStatus.v2.InNetworkStatus
> = core.serialization.object({
    routedPayerUuid: core.serialization.property(
        "routed_payer_uuid",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerUuid)
    ),
    routedBillingProviderId: core.serialization.property(
        "routed_billing_provider_id",
        core.serialization.lazy(
            async () => (await import("../../../../..")).organizationProviders.v2.OrganizationProviderId
        )
    ),
});

export declare namespace InNetworkStatus {
    interface Raw {
        routed_payer_uuid: serializers.payers.v3.PayerUuid.Raw;
        routed_billing_provider_id: serializers.organizationProviders.v2.OrganizationProviderId.Raw;
    }
}
