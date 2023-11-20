/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const JobStatus: core.serialization.Schema<serializers.jobs.v1.JobStatus.Raw, CandidApi.jobs.v1.JobStatus> =
    core.serialization.enum_(["SUCCEEDED", "FAILED", "QUEUED", "IN_PROGRESS"]);

export declare namespace JobStatus {
    type Raw = "SUCCEEDED" | "FAILED" | "QUEUED" | "IN_PROGRESS";
}
