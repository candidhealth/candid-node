/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

/**
 * @example
 *     {
 *         serviceFacilityId: CandidApi.ServiceFacilityId("2861487B-232C-4DED-A874-616A5DB0688F"),
 *         organizationName: "Test Organization",
 *         address: {
 *             address1: "123 Main St",
 *             address2: "Apt 1",
 *             city: "New York",
 *             state: CandidApi.State.Ny,
 *             zipCode: "10001",
 *             zipPlusFourCode: "1234"
 *         }
 *     }
 */
export interface EncounterServiceFacility {
    serviceFacilityId: CandidApi.ServiceFacilityId;
    organizationName: string;
    address: CandidApi.StreetAddressLongZip;
}
