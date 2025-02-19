/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const ClaimAdjustmentGroupCodes: core.serialization.Schema<
    serializers.ClaimAdjustmentGroupCodes.Raw,
    CandidApi.ClaimAdjustmentGroupCodes
> = core.serialization.enum_(["CO", "CR", "DE", "MA", "OA", "PI", "PR", "RR", "NC", "UNKNOWN"]);

export declare namespace ClaimAdjustmentGroupCodes {
    export type Raw = "CO" | "CR" | "DE" | "MA" | "OA" | "PI" | "PR" | "RR" | "NC" | "UNKNOWN";
}
