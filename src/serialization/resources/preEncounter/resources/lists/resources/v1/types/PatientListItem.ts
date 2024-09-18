/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Patient } from "../../../../patients/resources/v1/types/Patient";
import { MutableCoverage } from "../../../../coverages/resources/v1/types/MutableCoverage";
import { MutableAppointment } from "../../../../appointments/resources/v1/types/MutableAppointment";

export const PatientListItem: core.serialization.ObjectSchema<
    serializers.preEncounter.lists.v1.PatientListItem.Raw,
    CandidApi.preEncounter.lists.v1.PatientListItem
> = core.serialization.object({
    patient: Patient,
    primaryCoverage: core.serialization.property("primary_coverage", MutableCoverage.optional()),
    nextAppointment: core.serialization.property("next_appointment", MutableAppointment.optional()),
});

export declare namespace PatientListItem {
    interface Raw {
        patient: Patient.Raw;
        primary_coverage?: MutableCoverage.Raw | null;
        next_appointment?: MutableAppointment.Raw | null;
    }
}
