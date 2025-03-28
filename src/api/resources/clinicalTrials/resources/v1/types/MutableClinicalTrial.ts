/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface MutableClinicalTrial {
    name: string;
    /** Must be 8 characters long */
    clinicalTrialNumber: string;
    clinicalTrialPhase?: CandidApi.clinicalTrials.v1.ClinicalTrialPhase;
}
