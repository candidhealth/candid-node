/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const PlanDate: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.PlanDate.Raw,
    CandidApi.preEncounter.coverages.v1.PlanDate
> = core.serialization.object({
    startDate: core.serialization.property("start_date", core.serialization.string()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
    fieldName: core.serialization.property("field_name", core.serialization.string()),
});

export declare namespace PlanDate {
    export interface Raw {
        start_date: string;
        end_date?: string | null;
        field_name: string;
    }
}
