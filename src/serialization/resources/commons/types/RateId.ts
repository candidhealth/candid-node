/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const RateId: core.serialization.Schema<serializers.RateId.Raw, CandidApi.RateId> = core.serialization
    .string()
    .transform({
        transform: CandidApi.RateId,
        untransform: (value) => value,
    });

export declare namespace RateId {
    type Raw = string;
}
