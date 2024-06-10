/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const MatchTestResult: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchTestResult.Raw,
    CandidApi.feeSchedules.v3.MatchTestResult
> = core.serialization.object({
    dimensions: core.serialization.lazyObject(
        async () => (await import("../../../../..")).feeSchedules.v3.DimensionMatch
    ),
    threshold: core.serialization.lazyObject(
        async () => (await import("../../../../..")).feeSchedules.v3.ThresholdMatch
    ),
});

export declare namespace MatchTestResult {
    interface Raw {
        dimensions: serializers.feeSchedules.v3.DimensionMatch.Raw;
        threshold: serializers.feeSchedules.v3.ThresholdMatch.Raw;
    }
}
