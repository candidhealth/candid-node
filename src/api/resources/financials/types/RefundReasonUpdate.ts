/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export type RefundReasonUpdate = CandidApi.RefundReasonUpdate.Set | CandidApi.RefundReasonUpdate.Remove;

export declare namespace RefundReasonUpdate {
    interface Set {
        type: "set";
        value: CandidApi.RefundReason;
    }

    interface Remove {
        type: "remove";
    }
}
