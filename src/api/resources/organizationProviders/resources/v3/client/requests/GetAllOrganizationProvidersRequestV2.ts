/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         limit: 100,
 *         searchTerm: "john",
 *         npi: "1234567890",
 *         isRendering: true,
 *         isBilling: true,
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
 *         sort: "provider_name:asc"
 *     }
 */
export interface GetAllOrganizationProvidersRequestV2 {
    /**
     * Limit the number of results returned. Defaults to 100.
     */
    limit?: number;
    /**
     * Filter to a name or a part of a name.
     */
    searchTerm?: string;
    /**
     * Filter to a specific NPI.
     */
    npi?: string;
    /**
     * Filter to only rendering providers.
     */
    isRendering?: boolean;
    /**
     * Filter to only billing providers.
     */
    isBilling?: boolean;
    /**
     * The page token to continue paging through a previous request.
     */
    pageToken?: CandidApi.PageToken;
    /**
     * Defaults to PROVIDER_NAME_ASC.
     */
    sort?: CandidApi.organizationProviders.v2.OrganizationProviderSortOptions;
}
