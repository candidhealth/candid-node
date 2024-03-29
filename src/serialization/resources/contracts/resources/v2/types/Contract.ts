/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Contract: core.serialization.ObjectSchema<
    serializers.contracts.v2.Contract.Raw,
    CandidApi.contracts.v2.Contract
> = core.serialization
    .object({
        contractId: core.serialization.property(
            "contract_id",
            core.serialization.lazy(async () => (await import("../../../../..")).contracts.v2.ContractId)
        ),
        contractingProvider: core.serialization.property(
            "contracting_provider",
            core.serialization.lazyObject(
                async () => (await import("../../../../..")).organizationProviders.v2.OrganizationProvider
            )
        ),
        providerCount: core.serialization.property("provider_count", core.serialization.number()),
        payer: core.serialization.lazyObject(async () => (await import("../../../../..")).payers.v3.Payer).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).contracts.v2.ContractBase));

export declare namespace Contract {
    interface Raw extends serializers.contracts.v2.ContractBase.Raw {
        contract_id: serializers.contracts.v2.ContractId.Raw;
        contracting_provider: serializers.organizationProviders.v2.OrganizationProvider.Raw;
        provider_count: number;
        payer?: serializers.payers.v3.Payer.Raw | null;
    }
}
