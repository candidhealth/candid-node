/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface WorkQueue {
    workQueueId: CandidApi.WorkQueueId;
    displayName: string;
    description?: string;
    category: CandidApi.workQueues.v1.WorkQueueCategory;
    createdAt: Date;
    createdBy: CandidApi.users.v2.UserV2;
}
