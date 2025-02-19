/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ContractingProviderId: core.serialization.Schema<
    serializers.contracts.v2.ContractingProviderId.Raw,
    CandidApi.contracts.v2.ContractingProviderId
> = core.serialization.string().transform({
    transform: CandidApi.contracts.v2.ContractingProviderId,
    untransform: (value) => value,
});

export declare namespace ContractingProviderId {
    export type Raw = string;
}
