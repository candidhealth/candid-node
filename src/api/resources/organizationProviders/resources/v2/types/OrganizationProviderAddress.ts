/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface OrganizationProviderAddress {
    /** The address of the provider */
    address: CandidApi.StreetAddressLongZip;
    /** The address type of the provider */
    addressType: CandidApi.organizationProviders.v2.AddressType;
}
