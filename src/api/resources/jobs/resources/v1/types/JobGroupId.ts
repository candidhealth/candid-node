/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export type JobGroupId = string & {
    jobs_v1_JobGroupId: void;
};

export function JobGroupId(value: string): CandidApi.jobs.v1.JobGroupId {
    return value as unknown as CandidApi.jobs.v1.JobGroupId;
}