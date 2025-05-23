/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PatientExternalId } from "../../../../commons/types/PatientExternalId";

export const Superbill: core.serialization.ObjectSchema<
    serializers.superbills.v1.Superbill.Raw,
    CandidApi.superbills.v1.Superbill
> = core.serialization.object({
    superbillId: core.serialization.property("superbill_id", core.serialization.string()),
    patientExternalId: core.serialization.property("patient_external_id", PatientExternalId),
    authedUrl: core.serialization.property("authed_url", core.serialization.string()),
    dateRangeMin: core.serialization.property("date_range_min", core.serialization.string()),
    dateRangeMax: core.serialization.property("date_range_max", core.serialization.string()),
    fileName: core.serialization.property("file_name", core.serialization.string()),
});

export declare namespace Superbill {
    export interface Raw {
        superbill_id: string;
        patient_external_id: PatientExternalId.Raw;
        authed_url: string;
        date_range_min: string;
        date_range_max: string;
        file_name: string;
    }
}
