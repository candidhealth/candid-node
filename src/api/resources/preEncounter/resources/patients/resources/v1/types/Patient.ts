/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * A patient object with immutable server-owned properties.
 */
export interface Patient extends CandidApi.preEncounter.BaseModel, CandidApi.preEncounter.patients.v1.MutablePatient {
    /** The unique UUID identifier for a Patient.  Patient ID is used in machine contexts. */
    id: CandidApi.preEncounter.PatientId;
    /** The medical record number for the patient.  Human-friendly Candid generated MRNs are of the form "YYMMDDXXXX", where "YYYYMMDD" is the date of patient creation and "XXXX" is a zero-padded incrementing integer. */
    mrn: string;
}
