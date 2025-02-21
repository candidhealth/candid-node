/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * An object representing patient demographics information.
 */
export interface MutablePatient {
    name: CandidApi.preEncounter.HumanName;
    /** Other names for the patient. */
    otherNames: CandidApi.preEncounter.HumanName[];
    /** Other identifiers for the patient. */
    otherIdentifiers?: CandidApi.preEncounter.ExternalIdentifier[];
    gender?: CandidApi.preEncounter.Gender;
    birthDate: string;
    socialSecurityNumber?: string;
    /** The biological sex of the patient. This corresponds to the HL7 AdministrativeGender https://www.hl7.org/fhir/valueset-administrative-gender.html */
    biologicalSex: CandidApi.preEncounter.Sex;
    /** The sexual orientation of the patient. */
    sexualOrientation?: CandidApi.preEncounter.SexualOrientation;
    race?: CandidApi.preEncounter.Race;
    ethnicity?: CandidApi.preEncounter.Ethnicity;
    disabilityStatus?: CandidApi.preEncounter.DisabilityStatus;
    maritalStatus?: CandidApi.preEncounter.patients.v1.MaritalStatus;
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
    email?: string;
    electronicCommunicationOptIn?: boolean;
    photo?: string;
    language?: string;
    /** Information about the upstream system that owns this patient data. Leave unset if Candid owns patient data. */
    externalProvenance?: CandidApi.preEncounter.patients.v1.ExternalProvenance;
    /** Contacts for the patient. */
    contacts: CandidApi.preEncounter.patients.v1.Contact[];
    generalPractitioners: CandidApi.preEncounter.ExternalProvider[];
    filingOrder: CandidApi.preEncounter.patients.v1.FilingOrder;
    nonInsurancePayers?: CandidApi.preEncounter.CanonicalNonInsurancePayerId[];
    nonInsurancePayerAssociations?: CandidApi.preEncounter.CanonicalNonInsurancePayerAssociation[];
    guarantor?: CandidApi.preEncounter.patients.v1.Guarantor;
    selfPay?: boolean;
    authorizations?: CandidApi.preEncounter.patients.v1.Authorization[];
    referrals?: CandidApi.preEncounter.patients.v1.Referral[];
    primaryServiceFacilityId?: string;
    /** If this value is defined, the customer will not be invoiced. */
    doNotInvoiceReason?: CandidApi.preEncounter.patients.v1.DoNotInvoiceReason;
    noteIds?: CandidApi.preEncounter.NoteId[];
    tagIds?: CandidApi.preEncounter.TagId[];
}
