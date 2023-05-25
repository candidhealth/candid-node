/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const WorkQueueCategoryType: core.serialization.Schema<
    serializers.workQueues.v1.WorkQueueCategoryType.Raw,
    CandidApi.workQueues.v1.WorkQueueCategoryType
> = core.serialization.enum_(["PRE_SUBMISSION", "REJECTIONS", "DENIALS", "POST_SUBMISSION", "STALE_CLAIMS", "CUSTOM"]);

export declare namespace WorkQueueCategoryType {
    type Raw = "PRE_SUBMISSION" | "REJECTIONS" | "DENIALS" | "POST_SUBMISSION" | "STALE_CLAIMS" | "CUSTOM";
}