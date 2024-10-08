/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface Contact {
    relationship: CandidApi.preEncounter.Relationship[];
    name: CandidApi.preEncounter.HumanName;
    telecoms: CandidApi.preEncounter.ContactPoint[];
    addresses: CandidApi.preEncounter.Address[];
    period?: CandidApi.preEncounter.Period;
    hipaaAuthorization?: boolean;
}
