/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const RefundReason: core.serialization.Schema<serializers.RefundReason.Raw, CandidApi.RefundReason> =
    core.serialization.enum_(["OVERCHARGED"]);

export declare namespace RefundReason {
    type Raw = "OVERCHARGED";
}
