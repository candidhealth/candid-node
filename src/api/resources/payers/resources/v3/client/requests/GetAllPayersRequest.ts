/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface GetAllPayersRequest {
    /**
     * Maximum number of entities per page, defaults to 100.
     */
    limit?: number;
    searchTerm?: string;
    pageToken?: CandidApi.PageToken;
}
