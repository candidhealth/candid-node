/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ChargeCaptureBundleId } from "../../../../commons/types/ChargeCaptureBundleId";
import { EncounterId } from "../../../../commons/types/EncounterId";
import { ChargeCaptureBundleStatus } from "./ChargeCaptureBundleStatus";
import { ChargeCapture } from "../../../../chargeCapture/resources/v1/types/ChargeCapture";
import { ChargeBundleError } from "./ChargeBundleError";

export const ChargeCaptureBundle: core.serialization.ObjectSchema<
    serializers.chargeCaptureBundles.v1.ChargeCaptureBundle.Raw,
    CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundle
> = core.serialization.object({
    id: ChargeCaptureBundleId,
    createdEncounterId: core.serialization.property("created_encounter_id", EncounterId.optional()),
    status: ChargeCaptureBundleStatus,
    chargeCaptures: core.serialization.property("charge_captures", core.serialization.list(ChargeCapture)),
    errors: core.serialization.list(ChargeBundleError),
});

export declare namespace ChargeCaptureBundle {
    interface Raw {
        id: ChargeCaptureBundleId.Raw;
        created_encounter_id?: EncounterId.Raw | null;
        status: ChargeCaptureBundleStatus.Raw;
        charge_captures: ChargeCapture.Raw[];
        errors: ChargeBundleError.Raw[];
    }
}
