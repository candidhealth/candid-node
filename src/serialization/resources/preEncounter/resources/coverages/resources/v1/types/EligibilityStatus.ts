/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const EligibilityStatus: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.EligibilityStatus.Raw,
    CandidApi.preEncounter.coverages.v1.EligibilityStatus
> = core.serialization.enum_(["ACTIVE", "INACTIVE", "UNKNOWN"]);

export declare namespace EligibilityStatus {
    type Raw = "ACTIVE" | "INACTIVE" | "UNKNOWN";
}
