/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const EligibilityCheckStatus: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.EligibilityCheckStatus.Raw,
    CandidApi.preEncounter.coverages.v1.EligibilityCheckStatus
> = core.serialization.enum_(["CREATED", "COMPLETED", "FAILED", "PENDING"]);

export declare namespace EligibilityCheckStatus {
    type Raw = "CREATED" | "COMPLETED" | "FAILED" | "PENDING";
}