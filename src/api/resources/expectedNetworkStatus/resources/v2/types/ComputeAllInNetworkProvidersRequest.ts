/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ComputeAllInNetworkProvidersRequest {
    /**
     * For some payers, payer routing depends on whether the rendered service qualifies as a behavioral health visit
     * (e.g. Blue Shield of California routes to Magellan for behavioral health visits).
     *
     * For post appointment payer routing, Candid uses a CPT code list to determine whether the appointment qualifies as a
     * behavioral health visit
     * (see “Inputs: Service Type” in the appendix for list of qualifying CPT codes and behavioral health routing logic).
     * Since CPT codes are not available pre-appointment, the service type input is used to determine whether the appointment is expected
     * to qualify as behavioral health.
     */
    serviceType: CandidApi.expectedNetworkStatus.v2.ServiceType;
    /** Expected place of service */
    placeOfServiceCode: CandidApi.FacilityTypeCode;
    /** Information present on the patient's insurance card */
    subscriberInformation: CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusSubscriberInformation;
    patientAddress: CandidApi.StreetAddressShortZip;
    billingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId;
    /** The id of the service facility where the appointment will be rendered */
    organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId;
    /** Expected date of service */
    dateOfService: string;
}
