/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const MatchGeo: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchGeo.Raw,
    CandidApi.feeSchedules.v3.MatchGeo
> = core.serialization.object({
    zipCode: core.serialization.property("zip_code", core.serialization.string().optional()),
    state: core.serialization.lazy(async () => (await import("../../../../..")).State).optional(),
    match: core.serialization.boolean(),
    explanation: core.serialization.string(),
});

export declare namespace MatchGeo {
    interface Raw {
        zip_code?: string | null;
        state?: serializers.State.Raw | null;
        match: boolean;
        explanation: string;
    }
}