/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         refundTimestamp: "2024-01-15T09:30:00Z",
 *         refundNote: {
 *             type: "set",
 *             value: "string"
 *         },
 *         refundReason: {
 *             type: "set",
 *             value: "OVERCHARGED"
 *         }
 *     }
 */
export interface InsuranceRefundUpdate {
    refundTimestamp?: Date;
    refundNote?: CandidApi.NoteUpdate;
    refundReason?: CandidApi.RefundReasonUpdate;
}
