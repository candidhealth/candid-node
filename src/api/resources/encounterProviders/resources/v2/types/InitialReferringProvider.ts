/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface InitialReferringProvider extends CandidApi.encounterProviders.v2.EncounterProviderBase {
    /**
     * A National Provider Identifier is a unique 10-digit identification
     * number issued to health care providers in the United States
     */
    npi: string;
    taxonomyCode?: string;
    address?: CandidApi.StreetAddressLongZip;
    qualifier?: CandidApi.QualifierCode;
}
