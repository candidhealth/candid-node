/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * ChargeCapturePostBilledChange represents a change to a ChargeCapture that occurred after the ChargeCapture's status moved to BILLED. Action must be taken to resolve the update, and then the update should be marked as resolved.
 */
export interface ChargeCapturePostBilledChange {
    id: CandidApi.ChargeCapturePostBilledChangeId;
    message: string;
    resolved: boolean;
}
