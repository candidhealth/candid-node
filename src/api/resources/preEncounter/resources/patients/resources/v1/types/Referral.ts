/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface Referral {
    provider: CandidApi.preEncounter.ExternalProvider;
    referralNumber: string;
    period?: CandidApi.preEncounter.Period;
    notes?: string;
}
