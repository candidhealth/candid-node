/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ChargeCaptureBundleStatus: core.serialization.Schema<
    serializers.chargeCaptureBundles.v1.ChargeCaptureBundleStatus.Raw,
    CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundleStatus
> = core.serialization.enum_(["not-started", "in-progress", "in-error", "successful", "successful-dry-run", "aborted"]);

export declare namespace ChargeCaptureBundleStatus {
    export type Raw = "not-started" | "in-progress" | "in-error" | "successful" | "successful-dry-run" | "aborted";
}
