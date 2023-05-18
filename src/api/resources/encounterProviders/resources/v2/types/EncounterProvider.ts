/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface EncounterProvider extends CandidApi.encounterProviders.v2.EncounterProviderBase {
    providerId: CandidApi.encounterProviders.v2.ProviderId;
    address: CandidApi.StreetAddressLongZip;
    taxId?: string;
    npi: string;
    taxonomyCode?: string;
}
