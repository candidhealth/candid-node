/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * A coverage object with immutable server-owned properties.
 */
export interface Coverage
    extends CandidApi.preEncounter.BaseModel,
        CandidApi.preEncounter.coverages.v1.MutableCoverage {
    id: CandidApi.preEncounter.CoverageId;
}
