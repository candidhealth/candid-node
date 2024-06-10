/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const TagColorEnum: core.serialization.Schema<serializers.TagColorEnum.Raw, CandidApi.TagColorEnum> =
    core.serialization.enum_(["black", "white", "gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]);

export declare namespace TagColorEnum {
    type Raw = "black" | "white" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
}
