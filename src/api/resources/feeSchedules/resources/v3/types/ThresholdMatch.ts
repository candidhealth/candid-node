/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * Threshold and dollar amount matching for a service line
 */
export interface ThresholdMatch {
    threshold: CandidApi.feeSchedules.v3.PayerThreshold;
    rateCents: number;
    match: boolean;
    explanation: string;
}