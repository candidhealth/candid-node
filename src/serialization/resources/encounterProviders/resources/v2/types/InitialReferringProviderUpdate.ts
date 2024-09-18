/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreetAddressLongZip } from "../../../../commons/types/StreetAddressLongZip";
import { QualifierCode } from "../../../../commons/types/QualifierCode";
import { EncounterProviderBase } from "./EncounterProviderBase";

export const InitialReferringProviderUpdate: core.serialization.ObjectSchema<
    serializers.encounterProviders.v2.InitialReferringProviderUpdate.Raw,
    CandidApi.encounterProviders.v2.InitialReferringProviderUpdate
> = core.serialization
    .object({
        npi: core.serialization.string().optional(),
        taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
        address: StreetAddressLongZip.optional(),
        qualifier: QualifierCode.optional(),
    })
    .extend(EncounterProviderBase);

export declare namespace InitialReferringProviderUpdate {
    interface Raw extends EncounterProviderBase.Raw {
        npi?: string | null;
        taxonomy_code?: string | null;
        address?: StreetAddressLongZip.Raw | null;
        qualifier?: QualifierCode.Raw | null;
    }
}