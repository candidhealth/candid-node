/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
 *         refundNote: {
 *             type: "set",
 *             value: "string"
 *         },
 *         refundReason: {
 *             type: "set",
 *             value: CandidApi.RefundReason.Overcharged
 *         }
 *     }
 */
export interface InsuranceRefundUpdate {
    refundTimestamp?: Date;
    refundNote?: CandidApi.NoteUpdate;
    refundReason?: CandidApi.RefundReasonUpdate;
}
