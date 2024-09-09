/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const NonInsurancePayerId: core.serialization.Schema<
    serializers.nonInsurancePayers.v1.NonInsurancePayerId.Raw,
    CandidApi.nonInsurancePayers.v1.NonInsurancePayerId
> = core.serialization.string().transform({
    transform: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId,
    untransform: (value) => value,
});

export declare namespace NonInsurancePayerId {
    type Raw = string;
}