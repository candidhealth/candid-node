/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * An object representing patient demographics information.
 */
export interface MutablePatient {
    name: CandidApi.preEncounter.HumanName;
    /** Other names for the patient. */
    otherNames: CandidApi.preEncounter.HumanName[];
    gender: CandidApi.preEncounter.Gender;
    birthDate: string;
    maritalStatus?: CandidApi.preEncounter.MaritalStatus;
    /** Time of death for the patient. Leave unset if the patient is not deceased. */
    deceased?: Date;
    /** The number of siblings the patient was born with. Leave unset if the patient was not part of a multiple birth. */
    multipleBirth?: number;
    /** The primary address for the patient. */
    primaryAddress: CandidApi.preEncounter.Address;
    /** Other addresses for the patient. */
    otherAddresses: CandidApi.preEncounter.Address[];
    /** The primary phone number for the patient. */
    primaryTelecom: CandidApi.preEncounter.ContactPoint;
    /** Other phone numbers for the patient. */
    otherTelecoms: CandidApi.preEncounter.ContactPoint[];
    photo?: string;
    language?: string;
    /** Information about the upstream system that owns this patient data. Leave unset if Candid owns patient data. */
    externalProvenance?: CandidApi.preEncounter.ExternalProvenance;
    /** Contacts for the patient. */
    contacts: CandidApi.preEncounter.Contact[];
    generalPractitioners: CandidApi.preEncounter.ExternalProvider[];
}
