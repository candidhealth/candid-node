/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { StreetAddressLongZip } from "../../commons/types/StreetAddressLongZip";

export const EncounterServiceFacilityBase: core.serialization.ObjectSchema<
    serializers.EncounterServiceFacilityBase.Raw,
    CandidApi.EncounterServiceFacilityBase
> = core.serialization.object({
    organizationName: core.serialization.property("organization_name", core.serialization.string()),
    npi: core.serialization.string().optional(),
    address: StreetAddressLongZip,
});

export declare namespace EncounterServiceFacilityBase {
    interface Raw {
        organization_name: string;
        npi?: string | null;
        address: StreetAddressLongZip.Raw;
    }
}
