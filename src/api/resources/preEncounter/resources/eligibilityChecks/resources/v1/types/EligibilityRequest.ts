/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * An object representing the data for an eligibility request.
 */
export interface EligibilityRequest {
    /** Supported payer ID values can be found [here](https://www.stedi.com/healthcare/network). */
    payerId: string;
    provider: CandidApi.preEncounter.eligibilityChecks.v1.Provider;
    /** The primary policyholder for the insurance plan or a dependent with a unique member ID. <Note>If a dependent has a unique member ID, include their information here and leave dependent undefined.</Note> */
    subscriber: CandidApi.preEncounter.coverages.v1.MemberInfo;
    /** <Note>If a dependent has a unique member ID, include their information as subscriber and leave this field undefined.</Note> */
    dependent?: CandidApi.preEncounter.coverages.v1.MemberInfo;
    encounter?: CandidApi.preEncounter.eligibilityChecks.v1.Encounter;
}
