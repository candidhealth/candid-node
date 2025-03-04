/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { AppointmentId } from "../../commons/types/AppointmentId";
import { PatientExternalId } from "../../commons/types/PatientExternalId";

export const AppointmentAllocationTarget: core.serialization.ObjectSchema<
    serializers.AppointmentAllocationTarget.Raw,
    CandidApi.AppointmentAllocationTarget
> = core.serialization.object({
    appointmentId: core.serialization.property("appointment_id", AppointmentId),
    patientExternalId: core.serialization.property("patient_external_id", PatientExternalId),
});

export declare namespace AppointmentAllocationTarget {
    export interface Raw {
        appointment_id: AppointmentId.Raw;
        patient_external_id: PatientExternalId.Raw;
    }
}
