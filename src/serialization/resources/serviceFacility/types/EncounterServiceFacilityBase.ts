/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const EncounterServiceFacilityBase: core.serialization.ObjectSchema<
    serializers.EncounterServiceFacilityBase.Raw,
    CandidApi.EncounterServiceFacilityBase
> = core.serialization.object({
    organizationName: core.serialization.property("organization_name", core.serialization.string()),
    npi: core.serialization.string().optional(),
    address: core.serialization.lazyObject(async () => (await import("../../..")).StreetAddressLongZip),
});

export declare namespace EncounterServiceFacilityBase {
    interface Raw {
        organization_name: string;
        npi?: string | null;
        address: serializers.StreetAddressLongZip.Raw;
    }
}
