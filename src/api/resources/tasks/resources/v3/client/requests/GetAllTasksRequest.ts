/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         limit: 1,
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
 *         status: "finished",
 *         taskType: "CUSTOMER_DATA_REQUEST",
 *         categories: "string",
 *         updatedSince: "2024-01-15T09:30:00Z",
 *         encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         searchTerm: "string",
 *         assignedToId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         dateOfServiceMin: "2023-01-15",
 *         dateOfServiceMax: "2023-01-15",
 *         billingProviderNpi: "string",
 *         sort: "updated_at:asc"
 *     }
 */
export interface GetAllTasksRequest {
    /**
     * Defaults to 100
     */
    limit?: number;
    pageToken?: CandidApi.PageToken;
    status?: CandidApi.tasks.TaskStatus;
    taskType?: CandidApi.tasks.TaskType;
    /**
     * Only return tasks with categories that match one in this comma-separated list.
     */
    categories?: string;
    /**
     * Only return tasks updated on or after this date-time
     */
    updatedSince?: Date;
    /**
     * Only return tasks associated with this encounter
     */
    encounterId?: CandidApi.EncounterId;
    /**
     * Query tasks by encounter_id, claim_id, task_id, or external_id
     */
    searchTerm?: string;
    /**
     * Only return tasks assigned to this user
     */
    assignedToId?: CandidApi.UserId;
    /**
     * The minimum date of service for the linked encounter
     */
    dateOfServiceMin?: string;
    /**
     * The maximum date of service for the linked encounter
     */
    dateOfServiceMax?: string;
    /**
     * The NPI of the billing provider associated with the task's claim
     */
    billingProviderNpi?: string;
    /**
     * Defaults to updated_at:desc
     */
    sort?: CandidApi.tasks.v3.TaskSortOptions;
}
