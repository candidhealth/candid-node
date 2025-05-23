/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CoverageId: core.serialization.Schema<
    serializers.preEncounter.CoverageId.Raw,
    CandidApi.preEncounter.CoverageId
> = core.serialization.string().transform({
    transform: CandidApi.preEncounter.CoverageId,
    untransform: (value) => value,
});

export declare namespace CoverageId {
    export type Raw = string;
}
