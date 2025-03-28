/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NameUse } from "./NameUse";
import { Period } from "./Period";

export const HumanName: core.serialization.ObjectSchema<
    serializers.preEncounter.HumanName.Raw,
    CandidApi.preEncounter.HumanName
> = core.serialization.object({
    family: core.serialization.string(),
    given: core.serialization.list(core.serialization.string()),
    use: NameUse,
    period: Period.optional(),
    suffix: core.serialization.string().optional(),
});

export declare namespace HumanName {
    export interface Raw {
        family: string;
        given: string[];
        use: NameUse.Raw;
        period?: Period.Raw | null;
        suffix?: string | null;
    }
}
