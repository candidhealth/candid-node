/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface AppointmentListItem {
    appointment: CandidApi.preEncounter.appointments.v1.Appointment;
    patient: CandidApi.preEncounter.patients.v1.MutablePatientWithMrn;
    primaryCoverage?: CandidApi.preEncounter.coverages.v1.MutableCoverage;
    primaryServiceType?: CandidApi.preEncounter.appointments.v1.UniversalServiceIdentifier;
}
