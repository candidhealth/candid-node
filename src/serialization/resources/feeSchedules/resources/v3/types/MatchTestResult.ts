/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DimensionMatch } from "./DimensionMatch";
import { ThresholdMatch } from "./ThresholdMatch";

export const MatchTestResult: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchTestResult.Raw,
    CandidApi.feeSchedules.v3.MatchTestResult
> = core.serialization.object({
    dimensions: DimensionMatch,
    threshold: ThresholdMatch,
});

export declare namespace MatchTestResult {
    export interface Raw {
        dimensions: DimensionMatch.Raw;
        threshold: ThresholdMatch.Raw;
    }
}
