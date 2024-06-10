/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const FeeScheduleUploadRequest: core.serialization.Schema<
    serializers.feeSchedules.v3.FeeScheduleUploadRequest.Raw,
    CandidApi.feeSchedules.v3.FeeScheduleUploadRequest
> = core.serialization.object({
    dryRun: core.serialization.property("dry_run", core.serialization.boolean()),
    rates: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../../../..")).feeSchedules.v3.RateUpload)
    ),
});

export declare namespace FeeScheduleUploadRequest {
    interface Raw {
        dry_run: boolean;
        rates: serializers.feeSchedules.v3.RateUpload.Raw[];
    }
}
