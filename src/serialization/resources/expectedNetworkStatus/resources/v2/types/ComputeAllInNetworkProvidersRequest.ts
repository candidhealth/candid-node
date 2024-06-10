/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ComputeAllInNetworkProvidersRequest: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest.Raw,
    CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest
> = core.serialization.object({
    serviceType: core.serialization.property(
        "service_type",
        core.serialization.lazy(async () => (await import("../../../../..")).expectedNetworkStatus.v2.ServiceType)
    ),
    placeOfServiceCode: core.serialization.property(
        "place_of_service_code",
        core.serialization.lazy(async () => (await import("../../../../..")).FacilityTypeCode)
    ),
    subscriberInformation: core.serialization.property(
        "subscriber_information",
        core.serialization.lazyObject(
            async () =>
                (await import("../../../../..")).expectedNetworkStatus.v2.ExpectedNetworkStatusSubscriberInformation
        )
    ),
    patientAddress: core.serialization.property(
        "patient_address",
        core.serialization.lazyObject(async () => (await import("../../../../..")).StreetAddressShortZip)
    ),
    billingProviderId: core.serialization.property(
        "billing_provider_id",
        core.serialization.lazy(
            async () => (await import("../../../../..")).organizationProviders.v2.OrganizationProviderId
        )
    ),
    organizationServiceFacilityId: core.serialization.property(
        "organization_service_facility_id",
        core.serialization.lazy(
            async () => (await import("../../../../..")).organizationServiceFacilities.v2.OrganizationServiceFacilityId
        )
    ),
    dateOfService: core.serialization.property("date_of_service", core.serialization.string()),
});

export declare namespace ComputeAllInNetworkProvidersRequest {
    interface Raw {
        service_type: serializers.expectedNetworkStatus.v2.ServiceType.Raw;
        place_of_service_code: serializers.FacilityTypeCode.Raw;
        subscriber_information: serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusSubscriberInformation.Raw;
        patient_address: serializers.StreetAddressShortZip.Raw;
        billing_provider_id: serializers.organizationProviders.v2.OrganizationProviderId.Raw;
        organization_service_facility_id: serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.Raw;
        date_of_service: string;
    }
}
