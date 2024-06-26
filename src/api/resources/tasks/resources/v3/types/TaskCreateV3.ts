/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface TaskCreateV3 {
    encounterId: CandidApi.EncounterId;
    taskType: CandidApi.tasks.TaskType;
    description: string;
    blocksClaimSubmission?: boolean;
    assigneeUserId?: CandidApi.UserId;
    category?: CandidApi.tasks.TaskCategory;
    workQueueId: CandidApi.WorkQueueId;
}
