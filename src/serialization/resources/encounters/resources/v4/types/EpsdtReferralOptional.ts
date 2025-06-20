/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EpsdtReferralConditionIndicatorCode } from "../../../../commons/types/EpsdtReferralConditionIndicatorCode";

export const EpsdtReferralOptional: core.serialization.ObjectSchema<
    serializers.encounters.v4.EpsdtReferralOptional.Raw,
    CandidApi.encounters.v4.EpsdtReferralOptional
> = core.serialization.object({
    conditionIndicator1: core.serialization.property(
        "condition_indicator1",
        EpsdtReferralConditionIndicatorCode.optional(),
    ),
    conditionIndicator2: core.serialization.property(
        "condition_indicator2",
        EpsdtReferralConditionIndicatorCode.optional(),
    ),
    conditionIndicator3: core.serialization.property(
        "condition_indicator3",
        EpsdtReferralConditionIndicatorCode.optional(),
    ),
});

export declare namespace EpsdtReferralOptional {
    export interface Raw {
        condition_indicator1?: EpsdtReferralConditionIndicatorCode.Raw | null;
        condition_indicator2?: EpsdtReferralConditionIndicatorCode.Raw | null;
        condition_indicator3?: EpsdtReferralConditionIndicatorCode.Raw | null;
    }
}
