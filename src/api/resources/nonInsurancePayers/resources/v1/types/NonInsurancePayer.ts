/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("EB7623AB-D5BC-4B25-B257-2B8FCEC578DE"),
 *         name: "Sunrise Foundation",
 *         category: "Foundation",
 *         description: "Sunrise Foundation is a non-profit organization that provides financial assistance to patients in need.",
 *         enabled: true,
 *         address: {
 *             address1: "123 Main St",
 *             city: "San Francisco",
 *             state: CandidApi.State.Ca,
 *             zipCode: "94105"
 *         },
 *         clinicalTrials: []
 *     }
 */
export interface NonInsurancePayer {
    nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId;
    name: string;
    description?: string;
    category?: string;
    enabled: boolean;
    address?: CandidApi.StreetAddressShortZip;
    clinicalTrials: CandidApi.clinicalTrials.v1.ClinicalTrial[];
}
