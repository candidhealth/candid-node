/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const InsuranceTypeCode: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.InsuranceTypeCode.Raw,
    CandidApi.preEncounter.coverages.v1.InsuranceTypeCode
> = core.serialization.enum_([
    "01",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "41",
    "42",
    "43",
    "47",
    "AP",
    "C1",
    "CO",
    "CP",
    "D",
    "DB",
    "E",
    "EP",
    "FF",
    "GP",
    "HA",
    "HB",
    "HD",
    "HG",
    "HM",
    "HN",
    "HP",
    "HS",
    "IN",
    "IP",
    "LC",
    "LD",
    "LI",
    "LT",
    "M",
    "MA",
    "MB",
    "MC",
    "MD",
    "ME",
    "MF",
    "MH",
    "MI",
    "MJ",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MR",
    "MT",
    "MV",
    "OA",
    "OT",
    "PE",
    "PL",
    "PP",
    "PR",
    "PS",
    "QM",
    "RP",
    "SP",
    "TF",
    "U",
    "WC",
    "WU",
]);

export declare namespace InsuranceTypeCode {
    export type Raw =
        | "01"
        | "12"
        | "13"
        | "14"
        | "15"
        | "16"
        | "17"
        | "18"
        | "19"
        | "41"
        | "42"
        | "43"
        | "47"
        | "AP"
        | "C1"
        | "CO"
        | "CP"
        | "D"
        | "DB"
        | "E"
        | "EP"
        | "FF"
        | "GP"
        | "HA"
        | "HB"
        | "HD"
        | "HG"
        | "HM"
        | "HN"
        | "HP"
        | "HS"
        | "IN"
        | "IP"
        | "LC"
        | "LD"
        | "LI"
        | "LT"
        | "M"
        | "MA"
        | "MB"
        | "MC"
        | "MD"
        | "ME"
        | "MF"
        | "MH"
        | "MI"
        | "MJ"
        | "MK"
        | "ML"
        | "MM"
        | "MN"
        | "MO"
        | "MP"
        | "MR"
        | "MT"
        | "MV"
        | "OA"
        | "OT"
        | "PE"
        | "PL"
        | "PP"
        | "PR"
        | "PS"
        | "QM"
        | "RP"
        | "SP"
        | "TF"
        | "U"
        | "WC"
        | "WU";
}
