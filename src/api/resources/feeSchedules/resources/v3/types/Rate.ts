/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * A comprehensive rate including the current rate value and all values for historic time ranges. The time ranges specified by each RateEntry are disjoint. A rate must always have at least one entry.
 */
export interface Rate {
    rateId: CandidApi.RateId;
    /** The dimension values that distinguish this rate from others. */
    dimensions: CandidApi.feeSchedules.v3.Dimensions;
    /** The version of this rate in the system. */
    version: number;
    updatedAt: string;
    updatedBy: CandidApi.UserId;
    entries: CandidApi.feeSchedules.v3.RateEntry[];
}
