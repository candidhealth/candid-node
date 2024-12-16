/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreetAddressLongZip } from "../../../../commons/types/StreetAddressLongZip";
import { BillingProviderCommercialLicenseType } from "../../../../commons/types/BillingProviderCommercialLicenseType";
import { EncounterProviderBase } from "./EncounterProviderBase";

export const BillingProvider: core.serialization.ObjectSchema<
    serializers.encounterProviders.v2.BillingProvider.Raw,
    CandidApi.encounterProviders.v2.BillingProvider
> = core.serialization
    .object({
        address: StreetAddressLongZip,
        taxId: core.serialization.property("tax_id", core.serialization.string()),
        npi: core.serialization.string(),
        taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
        providerCommercialLicenseType: core.serialization.property(
            "provider_commercial_license_type",
            BillingProviderCommercialLicenseType.optional()
        ),
    })
    .extend(EncounterProviderBase);

export declare namespace BillingProvider {
    interface Raw extends EncounterProviderBase.Raw {
        address: StreetAddressLongZip.Raw;
        tax_id: string;
        npi: string;
        taxonomy_code?: string | null;
        provider_commercial_license_type?: BillingProviderCommercialLicenseType.Raw | null;
    }
}
