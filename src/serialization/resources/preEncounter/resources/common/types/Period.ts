/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Period: core.serialization.ObjectSchema<
    serializers.preEncounter.Period.Raw,
    CandidApi.preEncounter.Period
> = core.serialization.object({
    start: core.serialization.string().optional(),
    end: core.serialization.string().optional(),
});

export declare namespace Period {
    interface Raw {
        start?: string | null;
        end?: string | null;
    }
}
