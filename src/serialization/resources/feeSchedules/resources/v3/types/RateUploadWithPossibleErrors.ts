/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const RateUploadWithPossibleErrors: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.RateUploadWithPossibleErrors.Raw,
    CandidApi.feeSchedules.v3.RateUploadWithPossibleErrors
> = core.serialization.object({
    rateUpload: core.serialization.property(
        "rate_upload",
        core.serialization.lazy(async () => (await import("../../../../..")).feeSchedules.v3.RateUpload)
    ),
    existingRate: core.serialization.property(
        "existing_rate",
        core.serialization.lazyObject(async () => (await import("../../../../..")).feeSchedules.v3.Rate).optional()
    ),
    possibleErrors: core.serialization.property(
        "possible_errors",
        core.serialization.list(
            core.serialization.lazy(async () => (await import("../../../../..")).feeSchedules.v3.ValidationError)
        )
    ),
});

export declare namespace RateUploadWithPossibleErrors {
    interface Raw {
        rate_upload: serializers.feeSchedules.v3.RateUpload.Raw;
        existing_rate?: serializers.feeSchedules.v3.Rate.Raw | null;
        possible_errors: serializers.feeSchedules.v3.ValidationError.Raw[];
    }
}
