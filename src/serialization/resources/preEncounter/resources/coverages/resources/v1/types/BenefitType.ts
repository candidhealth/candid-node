/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const BenefitType: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.BenefitType.Raw,
    CandidApi.preEncounter.coverages.v1.BenefitType
> = core.serialization.enum_([
    "DEDUCTIBLE",
    "DEDUCTIBLE_REMAINING",
    "DEDUCTIBLE_YEAR_TO_DATE",
    "OOP_MAX",
    "OOP_MAX_REMAINING",
    "OOP_YEAR_TO_DATE",
    "COPAY",
    "COINSURANCE",
]);

export declare namespace BenefitType {
    type Raw =
        | "DEDUCTIBLE"
        | "DEDUCTIBLE_REMAINING"
        | "DEDUCTIBLE_YEAR_TO_DATE"
        | "OOP_MAX"
        | "OOP_MAX_REMAINING"
        | "OOP_YEAR_TO_DATE"
        | "COPAY"
        | "COINSURANCE";
}
