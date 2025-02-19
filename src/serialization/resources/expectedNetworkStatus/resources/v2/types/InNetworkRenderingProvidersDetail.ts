/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OrganizationProviderId } from "../../../../organizationProviders/resources/v2/types/OrganizationProviderId";
import { PayerUuid } from "../../../../payers/resources/v3/types/PayerUuid";

export const InNetworkRenderingProvidersDetail: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v2.InNetworkRenderingProvidersDetail.Raw,
    CandidApi.expectedNetworkStatus.v2.InNetworkRenderingProvidersDetail
> = core.serialization.object({
    renderingProviders: core.serialization.property(
        "rendering_providers",
        core.serialization.list(OrganizationProviderId),
    ),
    routedPayerUuid: core.serialization.property("routed_payer_uuid", PayerUuid),
    routedBillingProviderId: core.serialization.property("routed_billing_provider_id", OrganizationProviderId),
});

export declare namespace InNetworkRenderingProvidersDetail {
    export interface Raw {
        rendering_providers: OrganizationProviderId.Raw[];
        routed_payer_uuid: PayerUuid.Raw;
        routed_billing_provider_id: OrganizationProviderId.Raw;
    }
}
