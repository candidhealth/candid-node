/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TypeOfBillFrequencyCode: core.serialization.Schema<
    serializers.x12.v1.TypeOfBillFrequencyCode.Raw,
    CandidApi.x12.v1.TypeOfBillFrequencyCode
> = core.serialization.enum_([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "M",
    "O",
    "P",
    "Q",
    "X",
    "Y",
    "Z",
]);

export declare namespace TypeOfBillFrequencyCode {
    export type Raw =
        | "0"
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "7"
        | "8"
        | "9"
        | "A"
        | "B"
        | "C"
        | "D"
        | "E"
        | "F"
        | "G"
        | "H"
        | "I"
        | "J"
        | "K"
        | "M"
        | "O"
        | "P"
        | "Q"
        | "X"
        | "Y"
        | "Z";
}
