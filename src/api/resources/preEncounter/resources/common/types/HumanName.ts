/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface HumanName {
    family: string;
    given: string[];
    use: CandidApi.preEncounter.NameUse;
    period?: CandidApi.preEncounter.Period;
    suffix?: string;
}
