/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SexualOrientation: core.serialization.Schema<
    serializers.preEncounter.SexualOrientation.Raw,
    CandidApi.preEncounter.SexualOrientation
> = core.serialization.enum_(["HETEROSEXUAL", "HOMOSEXUAL", "BISEXUAL", "TWO_SPIRIT", "OTHER", "UNKNOWN", "REFUSED"]);

export declare namespace SexualOrientation {
    type Raw = "HETEROSEXUAL" | "HOMOSEXUAL" | "BISEXUAL" | "TWO_SPIRIT" | "OTHER" | "UNKNOWN" | "REFUSED";
}
