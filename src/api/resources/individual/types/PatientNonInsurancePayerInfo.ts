/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

/**
 * @example
 *     {
 *         nonInsurancePayer: {
 *             nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("EB7623AB-D5BC-4B25-B257-2B8FCEC578DE"),
 *             name: "Sunrise Foundation",
 *             category: "Foundation",
 *             description: "Sunrise Foundation is a non-profit organization that provides financial assistance to patients in need.",
 *             enabled: true,
 *             address: {
 *                 address1: "123 Main St",
 *                 city: "San Francisco",
 *                 state: CandidApi.State.Ca,
 *                 zipCode: "94105"
 *             },
 *             clinicalTrials: []
 *         },
 *         memberId: "123456789",
 *         clinicalTrialInfo: []
 *     }
 */
export interface PatientNonInsurancePayerInfo {
    nonInsurancePayer: CandidApi.nonInsurancePayers.v1.NonInsurancePayer;
    memberId?: string;
    /** A patient cannot be associated with a given trial more than once */
    clinicalTrialInfo: CandidApi.PatientClinicalTrialInfo[];
}
