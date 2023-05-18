/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CandidApi } from "";

export interface ContractBase {
    /** The starting day upon which the contract is effective */
    effectiveDate: CandidApi.Date;
    /** An optional end day upon which the contract expires */
    expirationDate?: CandidApi.Date;
    /**
     * The state(s) to which the contract's coverage extends.
     * It may also be set to "national" for the entirety of the US.
     *
     */
    regions: CandidApi.Regions;
    contractStatus?: CandidApi.ContractStatus;
    authorizedSignatory?: CandidApi.AuthorizedSignatory;
}
