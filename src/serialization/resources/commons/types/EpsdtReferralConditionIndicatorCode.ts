/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const EpsdtReferralConditionIndicatorCode: core.serialization.Schema<
    serializers.EpsdtReferralConditionIndicatorCode.Raw,
    CandidApi.EpsdtReferralConditionIndicatorCode
> = core.serialization.enum_(["AV", "NU", "S2", "ST"]);

export declare namespace EpsdtReferralConditionIndicatorCode {
    export type Raw = "AV" | "NU" | "S2" | "ST";
}
