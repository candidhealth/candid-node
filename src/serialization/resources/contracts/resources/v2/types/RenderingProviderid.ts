/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const RenderingProviderid: core.serialization.Schema<
    serializers.contracts.v2.RenderingProviderid.Raw,
    CandidApi.contracts.v2.RenderingProviderid
> = core.serialization.string().transform({
    transform: CandidApi.contracts.v2.RenderingProviderid,
    untransform: (value) => value,
});

export declare namespace RenderingProviderid {
    type Raw = string;
}