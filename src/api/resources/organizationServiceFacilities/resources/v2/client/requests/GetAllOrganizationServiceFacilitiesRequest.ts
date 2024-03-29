/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface GetAllOrganizationServiceFacilitiesRequest {
    /**
     * Limit the number of results returned. Defaults to 100.
     */
    limit?: number;
    /**
     * Filter to a name or a part of a name.
     */
    name?: string;
    /**
     * The page token to continue paging through a previous request.
     */
    pageToken?: CandidApi.PageToken;
}
