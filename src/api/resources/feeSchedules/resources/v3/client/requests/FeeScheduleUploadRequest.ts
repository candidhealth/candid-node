/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface FeeScheduleUploadRequest {
    dryRun: boolean;
    rates: CandidApi.feeSchedules.v3.RateUpload[];
}