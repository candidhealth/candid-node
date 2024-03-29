/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const EraId: core.serialization.Schema<serializers.EraId.Raw, CandidApi.EraId> = core.serialization
    .string()
    .transform({
        transform: CandidApi.EraId,
        untransform: (value) => value,
    });

export declare namespace EraId {
    type Raw = string;
}
