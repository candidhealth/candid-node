/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * Match information for state or zip code
 */
export interface MatchGeo {
    zipCode?: string;
    state?: CandidApi.State;
    match: boolean;
    explanation: string;
}
