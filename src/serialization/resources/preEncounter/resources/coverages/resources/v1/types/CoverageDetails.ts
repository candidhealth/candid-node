/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { BenefitType } from "./BenefitType";
import { CoverageLevel } from "./CoverageLevel";
import { CoverageValueUnit } from "./CoverageValueUnit";

export const CoverageDetails: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.CoverageDetails.Raw,
    CandidApi.preEncounter.coverages.v1.CoverageDetails
> = core.serialization.object({
    type: BenefitType,
    coverageLevel: CoverageLevel,
    unit: CoverageValueUnit,
    value: core.serialization.number(),
    additionalNotes: core.serialization.property("additional_notes", core.serialization.string().optional()),
});

export declare namespace CoverageDetails {
    interface Raw {
        type: BenefitType.Raw;
        coverageLevel: CoverageLevel.Raw;
        unit: CoverageValueUnit.Raw;
        value: number;
        additional_notes?: string | null;
    }
}
