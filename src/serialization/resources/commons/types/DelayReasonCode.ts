/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const DelayReasonCode: core.serialization.Schema<serializers.DelayReasonCode.Raw, CandidApi.DelayReasonCode> =
    core.serialization.enum_(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "15", "16", "17"]);

export declare namespace DelayReasonCode {
    type Raw = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "15" | "16" | "17";
}