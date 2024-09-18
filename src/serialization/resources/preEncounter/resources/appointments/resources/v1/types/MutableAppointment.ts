/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PatientId } from "../../../../common/types/PatientId";
import { AppointmentStatus } from "./AppointmentStatus";
import { Service } from "./Service";
import { AppointmentWorkQueue } from "./AppointmentWorkQueue";

export const MutableAppointment: core.serialization.ObjectSchema<
    serializers.preEncounter.appointments.v1.MutableAppointment.Raw,
    CandidApi.preEncounter.appointments.v1.MutableAppointment
> = core.serialization.object({
    patientId: core.serialization.property("patient_id", PatientId),
    startTimestamp: core.serialization.property("start_timestamp", core.serialization.date()),
    status: AppointmentStatus.optional(),
    serviceDuration: core.serialization.property("service_duration", core.serialization.number()),
    services: core.serialization.list(Service),
    placerAppointmentId: core.serialization.property("placer_appointment_id", core.serialization.string().optional()),
    estimatedCopayCents: core.serialization.property("estimated_copay_cents", core.serialization.number().optional()),
    estimatedPatientResponsibilityCents: core.serialization.property(
        "estimated_patient_responsibility_cents",
        core.serialization.number().optional()
    ),
    patientDepositCents: core.serialization.property("patient_deposit_cents", core.serialization.number().optional()),
    checkedInTimestamp: core.serialization.property("checked_in_timestamp", core.serialization.date().optional()),
    notes: core.serialization.string().optional(),
    locationResourceId: core.serialization.property("location_resource_id", core.serialization.string().optional()),
    automatedEligibilityCheckComplete: core.serialization.property(
        "automated_eligibility_check_complete",
        core.serialization.boolean().optional()
    ),
    workQueue: core.serialization.property("work_queue", AppointmentWorkQueue.optional()),
});

export declare namespace MutableAppointment {
    interface Raw {
        patient_id: PatientId.Raw;
        start_timestamp: string;
        status?: AppointmentStatus.Raw | null;
        service_duration: number;
        services: Service.Raw[];
        placer_appointment_id?: string | null;
        estimated_copay_cents?: number | null;
        estimated_patient_responsibility_cents?: number | null;
        patient_deposit_cents?: number | null;
        checked_in_timestamp?: string | null;
        notes?: string | null;
        location_resource_id?: string | null;
        automated_eligibility_check_complete?: boolean | null;
        work_queue?: AppointmentWorkQueue.Raw | null;
    }
}
