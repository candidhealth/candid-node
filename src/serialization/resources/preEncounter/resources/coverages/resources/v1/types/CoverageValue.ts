/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const CoverageValue: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.CoverageValue.Raw,
    CandidApi.preEncounter.coverages.v1.CoverageValue
> = core.serialization.object({
    family: core.serialization.number().optional(),
    individual: core.serialization.number().optional(),
    employeeAndSpouse: core.serialization.number().optional(),
    employeeAndChildren: core.serialization.number().optional(),
});

export declare namespace CoverageValue {
    export interface Raw {
        family?: number | null;
        individual?: number | null;
        employeeAndSpouse?: number | null;
        employeeAndChildren?: number | null;
    }
}
