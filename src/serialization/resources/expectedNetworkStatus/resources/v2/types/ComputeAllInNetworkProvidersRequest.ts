/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ServiceType } from "./ServiceType";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";
import { ExpectedNetworkStatusSubscriberInformation } from "./ExpectedNetworkStatusSubscriberInformation";
import { StreetAddressShortZip } from "../../../../commons/types/StreetAddressShortZip";
import { OrganizationProviderId } from "../../../../organizationProviders/resources/v2/types/OrganizationProviderId";
import { OrganizationServiceFacilityId } from "../../../../organizationServiceFacilities/resources/v2/types/OrganizationServiceFacilityId";

export const ComputeAllInNetworkProvidersRequest: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest.Raw,
    CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest
> = core.serialization.object({
    serviceType: core.serialization.property("service_type", ServiceType),
    placeOfServiceCode: core.serialization.property("place_of_service_code", FacilityTypeCode),
    subscriberInformation: core.serialization.property(
        "subscriber_information",
        ExpectedNetworkStatusSubscriberInformation,
    ),
    patientAddress: core.serialization.property("patient_address", StreetAddressShortZip),
    billingProviderId: core.serialization.property("billing_provider_id", OrganizationProviderId),
    organizationServiceFacilityId: core.serialization.property(
        "organization_service_facility_id",
        OrganizationServiceFacilityId,
    ),
    dateOfService: core.serialization.property("date_of_service", core.serialization.string()),
});

export declare namespace ComputeAllInNetworkProvidersRequest {
    export interface Raw {
        service_type: ServiceType.Raw;
        place_of_service_code: FacilityTypeCode.Raw;
        subscriber_information: ExpectedNetworkStatusSubscriberInformation.Raw;
        patient_address: StreetAddressShortZip.Raw;
        billing_provider_id: OrganizationProviderId.Raw;
        organization_service_facility_id: OrganizationServiceFacilityId.Raw;
        date_of_service: string;
    }
}
