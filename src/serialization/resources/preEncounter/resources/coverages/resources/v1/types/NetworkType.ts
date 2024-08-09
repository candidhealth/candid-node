/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const NetworkType: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.NetworkType.Raw,
    CandidApi.preEncounter.coverages.v1.NetworkType
> = core.serialization.enum_([
    "09",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "AM",
    "BL",
    "CH",
    "CI",
    "DS",
    "FI",
    "HM",
    "LM",
    "MA",
    "MB",
    "MC",
    "OF",
    "TV",
    "VA",
    "WC",
    "ZZ",
]);

export declare namespace NetworkType {
    type Raw =
        | "09"
        | "11"
        | "12"
        | "13"
        | "14"
        | "15"
        | "16"
        | "17"
        | "AM"
        | "BL"
        | "CH"
        | "CI"
        | "DS"
        | "FI"
        | "HM"
        | "LM"
        | "MA"
        | "MB"
        | "MC"
        | "OF"
        | "TV"
        | "VA"
        | "WC"
        | "ZZ";
}