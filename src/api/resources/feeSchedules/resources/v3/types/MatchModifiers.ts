/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * Match information for procedure modifiers
 */
export interface MatchModifiers {
    value: Set<CandidApi.ProcedureModifier>;
    match: boolean;
    explanation: string;
}
