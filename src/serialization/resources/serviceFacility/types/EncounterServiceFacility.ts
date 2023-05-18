/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const EncounterServiceFacility: core.serialization.ObjectSchema<
    serializers.EncounterServiceFacility.Raw,
    CandidApi.EncounterServiceFacility
> = core.serialization.object({
    serviceFacilityId: core.serialization.property(
        "service_facility_id",
        core.serialization.lazy(async () => (await import("../../..")).ServiceFacilityId)
    ),
    organizationName: core.serialization.property("organization_name", core.serialization.string()),
    address: core.serialization.lazyObject(async () => (await import("../../..")).StreetAddressLongZip),
});

export declare namespace EncounterServiceFacility {
    interface Raw {
        service_facility_id: serializers.ServiceFacilityId.Raw;
        organization_name: string;
        address: serializers.StreetAddressLongZip.Raw;
    }
}
