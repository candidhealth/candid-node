/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ThirdPartyPayer {
    thirdPartyPayerId: CandidApi.thirdPartyPayers.v1.ThirdPartyPayerId;
    name: string;
    description?: string;
    category?: string;
    enabled: boolean;
}