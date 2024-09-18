/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface PlanMetadata {
    insuranceType?: string;
    insuranceTypeCode?: string;
    planName?: string;
    memberId?: string;
    groupNumber?: string;
    startDate?: string;
    endDate?: string;
    planDates?: CandidApi.preEncounter.coverages.v1.PlanDate[];
}
