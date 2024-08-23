/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PlanCoverage } from "./PlanCoverage";
import { ServiceCoverage } from "./ServiceCoverage";

export const CoverageBenefits: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.CoverageBenefits.Raw,
    CandidApi.preEncounter.coverages.v1.CoverageBenefits
> = core.serialization.object({
    planCoverage: core.serialization.property("plan_coverage", PlanCoverage.optional()),
    serviceSpecificCoverage: core.serialization.property(
        "service_specific_coverage",
        core.serialization.list(ServiceCoverage).optional()
    ),
});

export declare namespace CoverageBenefits {
    interface Raw {
        plan_coverage?: PlanCoverage.Raw | null;
        service_specific_coverage?: ServiceCoverage.Raw[] | null;
    }
}
