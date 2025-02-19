/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AppointmentStatus: core.serialization.Schema<
    serializers.preEncounter.appointments.v1.AppointmentStatus.Raw,
    CandidApi.preEncounter.appointments.v1.AppointmentStatus
> = core.serialization.enum_(["PENDING", "NOT_READY", "READY", "CHECKED_IN"]);

export declare namespace AppointmentStatus {
    export type Raw = "PENDING" | "NOT_READY" | "READY" | "CHECKED_IN";
}
