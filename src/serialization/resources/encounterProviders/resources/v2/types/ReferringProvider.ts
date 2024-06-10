/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreetAddressLongZip } from "../../../../commons/types/StreetAddressLongZip";
import { EncounterProviderBase } from "./EncounterProviderBase";

export const ReferringProvider: core.serialization.ObjectSchema<
    serializers.encounterProviders.v2.ReferringProvider.Raw,
    CandidApi.encounterProviders.v2.ReferringProvider
> = core.serialization
    .object({
        npi: core.serialization.string(),
        taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
        address: StreetAddressLongZip.optional(),
    })
    .extend(EncounterProviderBase);

export declare namespace ReferringProvider {
    interface Raw extends EncounterProviderBase.Raw {
        npi: string;
        taxonomy_code?: string | null;
        address?: StreetAddressLongZip.Raw | null;
    }
}
