/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ErrorBase4Xx: core.serialization.ObjectSchema<
    serializers.preEncounter.ErrorBase4Xx.Raw,
    CandidApi.preEncounter.ErrorBase4Xx
> = core.serialization.object({
    message: core.serialization.string(),
    data: core.serialization.unknown().optional(),
});

export declare namespace ErrorBase4Xx {
    export interface Raw {
        message: string;
        data?: unknown | null;
    }
}
