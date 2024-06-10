/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         name: "Test Service Facility",
 *         aliases: ["Test Service Facility Alias"],
 *         description: "Test Service Facility Description",
 *         status: CandidApi.organizationServiceFacilities.v2.ServiceFacilityStatus.Active,
 *         operationalStatus: CandidApi.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus.Closed,
 *         mode: CandidApi.organizationServiceFacilities.v2.ServiceFacilityMode.Instance,
 *         type: CandidApi.organizationServiceFacilities.v2.ServiceFacilityType.DiagnosticsOrTherapeuticsUnit,
 *         physicalType: CandidApi.organizationServiceFacilities.v2.ServiceFacilityPhysicalType.Site,
 *         telecoms: ["555-555-5555"],
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
export interface OrganizationServiceFacilityUpdate {
    /** The name of the service facility. */
    name?: string;
    /** A list of alternate names for the service facility. */
    aliases?: string[];
    /** A description of the service facility. */
    description?: string;
    /**
     * An NPI specific to the service facility if applicable, i.e. if it has one and is not under the billing provider's NPI.
     * Box 32 section (a) of the CMS-1500 claim form.
     */
    npi?: string;
    /** The status of the service facility. */
    status?: CandidApi.organizationServiceFacilities.v2.ServiceFacilityStatus;
    /** The operational status of the service facility. */
    operationalStatus?: CandidApi.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus;
    /** The mode of the service facility. */
    mode?: CandidApi.organizationServiceFacilities.v2.ServiceFacilityMode;
    /** The type of the service facility. */
    type?: CandidApi.organizationServiceFacilities.v2.ServiceFacilityType;
    /** The physical type of the service facility. */
    physicalType?: CandidApi.organizationServiceFacilities.v2.ServiceFacilityPhysicalType;
    /** A list of contact methods for the service facility. */
    telecoms?: string[];
    /** The address of the service facility. */
    address?: CandidApi.StreetAddressLongZip;
}
