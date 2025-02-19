/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../../index";

/**
 * @example
 *     {
 *         pageToken: CandidApi.preEncounter.PageToken("string"),
 *         limit: 1,
 *         sortField: CandidApi.preEncounter.lists.v1.SortFieldString("string"),
 *         sortDirection: "asc",
 *         filters: CandidApi.preEncounter.lists.v1.FilterQueryString("string")
 *     }
 */
export interface PatientListRequest {
    pageToken?: CandidApi.preEncounter.PageToken;
    limit?: number;
    /**
     * Defaults to patient.updatedAt.
     */
    sortField?: CandidApi.preEncounter.lists.v1.SortFieldString;
    /**
     * Defaults to ascending.
     */
    sortDirection?: CandidApi.preEncounter.SortDirection;
    filters?: CandidApi.preEncounter.lists.v1.FilterQueryString;
}
