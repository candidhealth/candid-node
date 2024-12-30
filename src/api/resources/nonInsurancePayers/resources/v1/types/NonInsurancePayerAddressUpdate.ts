/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type NonInsurancePayerAddressUpdate =
    | CandidApi.nonInsurancePayers.v1.NonInsurancePayerAddressUpdate.Remove
    | CandidApi.nonInsurancePayers.v1.NonInsurancePayerAddressUpdate.Set;

export declare namespace NonInsurancePayerAddressUpdate {
    interface Remove {
        type: "remove";
    }

    interface Set {
        type: "set";
        value?: CandidApi.StreetAddressShortZip;
    }
}