/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ProcedureModifier } from "../../../../commons/types/ProcedureModifier";

export const MatchModifiers: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchModifiers.Raw,
    CandidApi.feeSchedules.v3.MatchModifiers
> = core.serialization.object({
    value: core.serialization.set(ProcedureModifier),
    match: core.serialization.boolean(),
    explanation: core.serialization.string(),
});

export declare namespace MatchModifiers {
    export interface Raw {
        value: ProcedureModifier.Raw[];
        match: boolean;
        explanation: string;
    }
}
