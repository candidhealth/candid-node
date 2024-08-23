/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface MutableCoverage {
    /** The status indiciating if the coverage is active or not. */
    status: CandidApi.preEncounter.coverages.v1.CoverageStatus;
    /** The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due. */
    subscriber: CandidApi.preEncounter.coverages.v1.Subscriber;
    /** The relationship of beneficiary (patient) to the subscriber. https://hl7.org/fhir/valueset-relationship.html */
    relationship: CandidApi.preEncounter.Relationship;
    /** The patient who benefits from the insurance coverage */
    patient: CandidApi.preEncounter.patients.v1.PatientId;
    insurancePlan: CandidApi.preEncounter.coverages.v1.InsurancePlan;
    /** A boolean indicating if the coverage has been verified by a user. */
    verified: boolean;
    /** A list of eligibility check metadata that have been initiated on this coverage. */
    eligibilityChecks?: CandidApi.preEncounter.coverages.v1.EligibilityCheckMetadata[];
    /** The eligibility of the patient for the coverage, manually verified by users. */
    benefits?: CandidApi.preEncounter.coverages.v1.CoverageBenefits;
}
