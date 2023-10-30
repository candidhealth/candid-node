/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const OrganizationServiceFacilityUpdate: core.serialization.ObjectSchema<
    serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate.Raw,
    CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate
> = core.serialization.object({
    name: core.serialization.string().optional(),
    aliases: core.serialization.list(core.serialization.string()).optional(),
    description: core.serialization.string().optional(),
    status: core.serialization
        .lazy(async () => (await import("../../../../..")).organizationServiceFacilities.v2.ServiceFacilityStatus)
        .optional(),
    operationalStatus: core.serialization.property(
        "operational_status",
        core.serialization
            .lazy(
                async () =>
                    (await import("../../../../..")).organizationServiceFacilities.v2.ServiceFacilityOperationalStatus
            )
            .optional()
    ),
    mode: core.serialization
        .lazy(async () => (await import("../../../../..")).organizationServiceFacilities.v2.ServiceFacilityMode)
        .optional(),
    type: core.serialization
        .lazy(async () => (await import("../../../../..")).organizationServiceFacilities.v2.ServiceFacilityType)
        .optional(),
    physicalType: core.serialization.property(
        "physical_type",
        core.serialization
            .lazy(
                async () =>
                    (await import("../../../../..")).organizationServiceFacilities.v2.ServiceFacilityPhysicalType
            )
            .optional()
    ),
    telecoms: core.serialization.list(core.serialization.string()).optional(),
    address: core.serialization
        .lazyObject(async () => (await import("../../../../..")).StreetAddressLongZip)
        .optional(),
});

export declare namespace OrganizationServiceFacilityUpdate {
    interface Raw {
        name?: string | null;
        aliases?: string[] | null;
        description?: string | null;
        status?: serializers.organizationServiceFacilities.v2.ServiceFacilityStatus.Raw | null;
        operational_status?: serializers.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus.Raw | null;
        mode?: serializers.organizationServiceFacilities.v2.ServiceFacilityMode.Raw | null;
        type?: serializers.organizationServiceFacilities.v2.ServiceFacilityType.Raw | null;
        physical_type?: serializers.organizationServiceFacilities.v2.ServiceFacilityPhysicalType.Raw | null;
        telecoms?: string[] | null;
        address?: serializers.StreetAddressLongZip.Raw | null;
    }
}
