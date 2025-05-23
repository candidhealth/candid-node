/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ChargeCapturePostBilledChangeId } from "../../../../../commons/types/ChargeCapturePostBilledChangeId";

export const ChargeCapturePostBilledChangeUpdate: core.serialization.Schema<
    serializers.chargeCapture.v1.ChargeCapturePostBilledChangeUpdate.Raw,
    CandidApi.chargeCapture.v1.ChargeCapturePostBilledChangeUpdate
> = core.serialization.object({
    chargeCaptureChangeIds: core.serialization.property(
        "charge_capture_change_ids",
        core.serialization.list(ChargeCapturePostBilledChangeId),
    ),
    resolved: core.serialization.boolean(),
});

export declare namespace ChargeCapturePostBilledChangeUpdate {
    export interface Raw {
        charge_capture_change_ids: ChargeCapturePostBilledChangeId.Raw[];
        resolved: boolean;
    }
}
