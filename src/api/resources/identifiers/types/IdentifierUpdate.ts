/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export interface IdentifierUpdate {
    identifierId: CandidApi.IdentifierId;
    identifierCode?: CandidApi.IdentifierCode;
    identifierValue?: CandidApi.IdentifierValue;
    period?: CandidApi.RemovableDateRangeOptionalEnd;
}