/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * The unique identifier for a Patient
 */
export type PatientId = string & {
    preEncounter_PatientId: void;
};

export function PatientId(value: string): CandidApi.preEncounter.PatientId {
    return value as unknown as CandidApi.preEncounter.PatientId;
}
