/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ContractingProviderId } from "../../types/ContractingProviderId";
import { RenderingProviderid } from "../../types/RenderingProviderid";
import { ContractBase } from "../../types/ContractBase";

export const ContractCreate: core.serialization.Schema<
    serializers.contracts.v2.ContractCreate.Raw,
    CandidApi.contracts.v2.ContractCreate
> = core.serialization
    .object({
        contractingProviderId: core.serialization.property("contracting_provider_id", ContractingProviderId),
        renderingProviderIds: core.serialization.property(
            "rendering_provider_ids",
            core.serialization.set(RenderingProviderid),
        ),
        payerUuid: core.serialization.property("payer_uuid", core.serialization.string()),
    })
    .extend(ContractBase);

export declare namespace ContractCreate {
    export interface Raw extends ContractBase.Raw {
        contracting_provider_id: ContractingProviderId.Raw;
        rendering_provider_ids: RenderingProviderid.Raw[];
        payer_uuid: string;
    }
}
