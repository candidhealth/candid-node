/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface RenderingProvider extends CandidApi.encounterProviders.v2.EncounterProviderBase {
    address?: CandidApi.StreetAddressLongZip;
    /**
     * A National Provider Identifier is a unique 10-digit identification
     * number issued to health care providers in the United States
     *
     */
    npi: string;
    taxonomyCode?: string;
}
