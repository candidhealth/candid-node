/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { CoverageValue } from "./CoverageValue";

export const PlanCoverageDetails: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.PlanCoverageDetails.Raw,
    CandidApi.preEncounter.coverages.v1.PlanCoverageDetails
> = core.serialization.object({
    deductible: CoverageValue.optional(),
    deductibleRemaining: core.serialization.property("deductible_remaining", CoverageValue.optional()),
    oopMax: core.serialization.property("oop_max", CoverageValue.optional()),
    oopMaxRemaining: core.serialization.property("oop_max_remaining", CoverageValue.optional()),
    additionalNotes: core.serialization.property("additional_notes", core.serialization.string().optional()),
});

export declare namespace PlanCoverageDetails {
    interface Raw {
        deductible?: CoverageValue.Raw | null;
        deductible_remaining?: CoverageValue.Raw | null;
        oop_max?: CoverageValue.Raw | null;
        oop_max_remaining?: CoverageValue.Raw | null;
        additional_notes?: string | null;
    }
}