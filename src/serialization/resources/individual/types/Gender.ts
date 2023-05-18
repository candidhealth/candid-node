/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const Gender: core.serialization.Schema<serializers.Gender.Raw, CandidApi.Gender> = core.serialization.enum_([
    "male",
    "female",
    "other",
    "not_given",
    "unknown",
]);

export declare namespace Gender {
    type Raw = "male" | "female" | "other" | "not_given" | "unknown";
}
