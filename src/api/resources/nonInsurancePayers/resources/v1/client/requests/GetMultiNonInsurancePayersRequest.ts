/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "string",
 *         category: "string",
 *         enabled: true,
 *         sort: "NAME",
 *         sortDirection: "asc",
 *         limit: 1,
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
 *     }
 */
export interface GetMultiNonInsurancePayersRequest {
    name?: string;
    category?: string;
    enabled?: boolean;
    sort?: CandidApi.nonInsurancePayers.v1.NonInsurancePayerSortField;
    sortDirection?: CandidApi.SortDirection;
    /**
     * Defaults to 100
     */
    limit?: number;
    pageToken?: CandidApi.PageToken;
}
