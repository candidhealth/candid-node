/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ChargeCaptureData } from "../../types/ChargeCaptureData";
import { ChargeCaptureStatus } from "../../types/ChargeCaptureStatus";

export const ChargeCaptureUpdate: core.serialization.Schema<
    serializers.chargeCapture.v1.ChargeCaptureUpdate.Raw,
    CandidApi.chargeCapture.v1.ChargeCaptureUpdate
> = core.serialization.object({
    data: ChargeCaptureData.optional(),
    chargeExternalId: core.serialization.property("charge_external_id", core.serialization.string().optional()),
    ehrSourceUrl: core.serialization.property("ehr_source_url", core.serialization.string().optional()),
    originatingSystem: core.serialization.property("originating_system", core.serialization.string().optional()),
    claimCreationCategory: core.serialization.property(
        "claim_creation_category",
        core.serialization.string().optional(),
    ),
    patientExternalId: core.serialization.property("patient_external_id", core.serialization.string().optional()),
    status: ChargeCaptureStatus.optional(),
});

export declare namespace ChargeCaptureUpdate {
    export interface Raw {
        data?: ChargeCaptureData.Raw | null;
        charge_external_id?: string | null;
        ehr_source_url?: string | null;
        originating_system?: string | null;
        claim_creation_category?: string | null;
        patient_external_id?: string | null;
        status?: ChargeCaptureStatus.Raw | null;
    }
}
