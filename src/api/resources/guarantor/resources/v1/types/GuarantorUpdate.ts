/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface GuarantorUpdate {
    firstName?: string;
    lastName?: string;
    /** A unique identifier for the guarantor assigned by an external system. */
    externalId?: string;
    /** Date formatted as YYYY-MM-DD; eg: 2019-08-25. */
    dateOfBirth?: string;
    address?: CandidApi.StreetAddressShortZip;
    phoneNumbers?: CandidApi.PhoneNumber[];
    phoneConsent?: boolean;
    email?: CandidApi.Email;
    emailConsent?: boolean;
}