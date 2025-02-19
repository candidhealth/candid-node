/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ClaimAdjustmentGroupCodes } from "../../../../commons/types/ClaimAdjustmentGroupCodes";
import { Carc } from "./Carc";

export const ClaimAdjustmentReasonCode: core.serialization.ObjectSchema<
    serializers.x12.v1.ClaimAdjustmentReasonCode.Raw,
    CandidApi.x12.v1.ClaimAdjustmentReasonCode
> = core.serialization.object({
    groupCode: core.serialization.property("group_code", ClaimAdjustmentGroupCodes),
    reasonCode: core.serialization.property("reason_code", Carc),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
});

export declare namespace ClaimAdjustmentReasonCode {
    export interface Raw {
        group_code: ClaimAdjustmentGroupCodes.Raw;
        reason_code: Carc.Raw;
        amount_cents: number;
    }
}
