/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * The patient's active coverages, in order of primary, secondary, etc.
 */
export interface FilingOrder {
    coverages: CandidApi.preEncounter.CoverageId[];
}
