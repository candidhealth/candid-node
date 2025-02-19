/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { EligibilityStatus } from "./EligibilityStatus";

export const LatestEligibilityCheck: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.LatestEligibilityCheck.Raw,
    CandidApi.preEncounter.coverages.v1.LatestEligibilityCheck
> = core.serialization.object({
    checkId: core.serialization.property("check_id", core.serialization.string()),
    status: EligibilityStatus,
    initiatedAt: core.serialization.property("initiated_at", core.serialization.date()),
});

export declare namespace LatestEligibilityCheck {
    export interface Raw {
        check_id: string;
        status: EligibilityStatus.Raw;
        initiated_at: string;
    }
}
