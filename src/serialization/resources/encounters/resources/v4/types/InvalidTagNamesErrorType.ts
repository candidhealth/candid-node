/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InvalidTagNamesErrorType: core.serialization.ObjectSchema<
    serializers.encounters.v4.InvalidTagNamesErrorType.Raw,
    CandidApi.encounters.v4.InvalidTagNamesErrorType
> = core.serialization.object({
    invalidTagNames: core.serialization.property(
        "invalid_tag_names",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace InvalidTagNamesErrorType {
    interface Raw {
        invalid_tag_names: string[];
    }
}