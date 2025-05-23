/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreetAddressShortZipOptional } from "../../../../commons/types/StreetAddressShortZipOptional";
import { EncounterProviderBase } from "./EncounterProviderBase";

export const SupervisingProviderUpdateWithOptionalAddress: core.serialization.ObjectSchema<
    serializers.encounterProviders.v2.SupervisingProviderUpdateWithOptionalAddress.Raw,
    CandidApi.encounterProviders.v2.SupervisingProviderUpdateWithOptionalAddress
> = core.serialization
    .object({
        npi: core.serialization.string().optional(),
        taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
        address: StreetAddressShortZipOptional.optional(),
    })
    .extend(EncounterProviderBase);

export declare namespace SupervisingProviderUpdateWithOptionalAddress {
    export interface Raw extends EncounterProviderBase.Raw {
        npi?: string | null;
        taxonomy_code?: string | null;
        address?: StreetAddressShortZipOptional.Raw | null;
    }
}
