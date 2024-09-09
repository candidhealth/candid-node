/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AppointmentWorkQueue: core.serialization.Schema<
    serializers.preEncounter.appointments.v1.AppointmentWorkQueue.Raw,
    CandidApi.preEncounter.appointments.v1.AppointmentWorkQueue
> = core.serialization.enum_(["EMERGENT_ISSUE", "NEW_PATIENT", "RETURNING_PATIENT"]);

export declare namespace AppointmentWorkQueue {
    type Raw = "EMERGENT_ISSUE" | "NEW_PATIENT" | "RETURNING_PATIENT";
}