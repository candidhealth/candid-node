/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PlanDate } from "./PlanDate";
import { ExpandedMemberInfo } from "./ExpandedMemberInfo";

export const PlanMetadata: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.PlanMetadata.Raw,
    CandidApi.preEncounter.coverages.v1.PlanMetadata
> = core.serialization.object({
    payerName: core.serialization.property("payer_name", core.serialization.string().optional()),
    insuranceType: core.serialization.property("insurance_type", core.serialization.string().optional()),
    insuranceTypeCode: core.serialization.property("insurance_type_code", core.serialization.string().optional()),
    planName: core.serialization.property("plan_name", core.serialization.string().optional()),
    memberId: core.serialization.property("member_id", core.serialization.string().optional()),
    groupNumber: core.serialization.property("group_number", core.serialization.string().optional()),
    startDate: core.serialization.property("start_date", core.serialization.string().optional()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
    planDates: core.serialization.property("plan_dates", core.serialization.list(PlanDate).optional()),
    subscriber: ExpandedMemberInfo.optional(),
    dependent: ExpandedMemberInfo.optional(),
});

export declare namespace PlanMetadata {
    export interface Raw {
        payer_name?: string | null;
        insurance_type?: string | null;
        insurance_type_code?: string | null;
        plan_name?: string | null;
        member_id?: string | null;
        group_number?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        plan_dates?: PlanDate.Raw[] | null;
        subscriber?: ExpandedMemberInfo.Raw | null;
        dependent?: ExpandedMemberInfo.Raw | null;
    }
}
