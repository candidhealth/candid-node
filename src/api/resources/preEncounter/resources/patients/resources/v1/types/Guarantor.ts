/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface Guarantor {
    name: CandidApi.preEncounter.HumanName;
    telecom: CandidApi.preEncounter.ContactPoint;
    email?: string;
    birthDate: string;
    address: CandidApi.preEncounter.Address;
}
