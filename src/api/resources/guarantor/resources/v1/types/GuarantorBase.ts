/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface GuarantorBase {
    firstName: string;
    lastName: string;
    externalId: string;
    dateOfBirth?: string;
    address: CandidApi.StreetAddressShortZip;
}
