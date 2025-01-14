/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ChargeCaptureData } from "../../types/ChargeCaptureData";
import { ChargeCaptureStatus } from "../../types/ChargeCaptureStatus";

export const CreateChargeCaptureRequest: core.serialization.Schema<
    serializers.chargeCapture.v1.CreateChargeCaptureRequest.Raw,
    CandidApi.chargeCapture.v1.CreateChargeCaptureRequest
> = core.serialization.object({
    data: ChargeCaptureData,
    chargeExternalId: core.serialization.property("charge_external_id", core.serialization.string()),
    ehrSourceUrl: core.serialization.property("ehr_source_url", core.serialization.string().optional()),
    dateOfService: core.serialization.property("date_of_service", core.serialization.string().optional()),
    patientExternalId: core.serialization.property("patient_external_id", core.serialization.string()),
    status: ChargeCaptureStatus,
});

export declare namespace CreateChargeCaptureRequest {
    interface Raw {
        data: ChargeCaptureData.Raw;
        charge_external_id: string;
        ehr_source_url?: string | null;
        date_of_service?: string | null;
        patient_external_id: string;
        status: ChargeCaptureStatus.Raw;
    }
}
