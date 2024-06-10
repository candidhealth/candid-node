/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export interface StreetAddressBase {
    address1: string;
    address2?: string;
    city: string;
    state: CandidApi.State;
    /** 5-digit zip code */
    zipCode: string;
}
