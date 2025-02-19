/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CanonicalNonInsurancePayerId: core.serialization.Schema<
    serializers.preEncounter.CanonicalNonInsurancePayerId.Raw,
    CandidApi.preEncounter.CanonicalNonInsurancePayerId
> = core.serialization.string().transform({
    transform: CandidApi.preEncounter.CanonicalNonInsurancePayerId,
    untransform: (value) => value,
});

export declare namespace CanonicalNonInsurancePayerId {
    export type Raw = string;
}
