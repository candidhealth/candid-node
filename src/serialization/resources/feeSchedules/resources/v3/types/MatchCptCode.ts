/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const MatchCptCode: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchCptCode.Raw,
    CandidApi.feeSchedules.v3.MatchCptCode
> = core.serialization.object({
    value: core.serialization.string(),
    match: core.serialization.boolean(),
    explanation: core.serialization.string(),
});

export declare namespace MatchCptCode {
    interface Raw {
        value: string;
        match: boolean;
        explanation: string;
    }
}
