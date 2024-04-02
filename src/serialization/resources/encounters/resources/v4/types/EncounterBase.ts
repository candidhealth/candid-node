/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const EncounterBase: core.serialization.ObjectSchema<
    serializers.encounters.v4.EncounterBase.Raw,
    CandidApi.encounters.v4.EncounterBase
> = core.serialization.object({
    externalId: core.serialization.property(
        "external_id",
        core.serialization.lazy(async () => (await import("../../../../..")).EncounterExternalId)
    ),
    priorAuthorizationNumber: core.serialization.property(
        "prior_authorization_number",
        core.serialization
            .lazy(async () => (await import("../../../../..")).encounters.v4.PriorAuthorizationNumber)
            .optional()
    ),
    patientAuthorizedRelease: core.serialization.property("patient_authorized_release", core.serialization.boolean()),
    benefitsAssignedToProvider: core.serialization.property(
        "benefits_assigned_to_provider",
        core.serialization.boolean()
    ),
    providerAcceptsAssignment: core.serialization.property("provider_accepts_assignment", core.serialization.boolean()),
    appointmentType: core.serialization.property("appointment_type", core.serialization.string().optional()),
    existingMedications: core.serialization.property(
        "existing_medications",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).encounters.v4.Medication))
            .optional()
    ),
    vitals: core.serialization.lazyObject(async () => (await import("../../../../..")).encounters.v4.Vitals).optional(),
    interventions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../../..")).encounters.v4.Intervention))
        .optional(),
    payToAddress: core.serialization.property(
        "pay_to_address",
        core.serialization.lazyObject(async () => (await import("../../../../..")).StreetAddressLongZip).optional()
    ),
    synchronicity: core.serialization
        .lazy(async () => (await import("../../../../..")).encounters.v4.SynchronicityType)
        .optional(),
    billableStatus: core.serialization.property(
        "billable_status",
        core.serialization.lazy(async () => (await import("../../../../..")).encounters.v4.BillableStatusType)
    ),
    responsibleParty: core.serialization.property(
        "responsible_party",
        core.serialization.lazy(async () => (await import("../../../../..")).encounters.v4.ResponsiblePartyType)
    ),
    additionalInformation: core.serialization.property(
        "additional_information",
        core.serialization.string().optional()
    ),
    serviceAuthorizationExceptionCode: core.serialization.property(
        "service_authorization_exception_code",
        core.serialization
            .lazy(async () => (await import("../../../../..")).encounters.v4.ServiceAuthorizationExceptionCode)
            .optional()
    ),
    admissionDate: core.serialization.property(
        "admission_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_).optional()
    ),
    dischargeDate: core.serialization.property(
        "discharge_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_).optional()
    ),
    onsetOfCurrentIllnessOrSymptomDate: core.serialization.property(
        "onset_of_current_illness_or_symptom_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_).optional()
    ),
    lastMenstrualPeriodDate: core.serialization.property(
        "last_menstrual_period_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_).optional()
    ),
    delayReasonCode: core.serialization.property(
        "delay_reason_code",
        core.serialization.lazy(async () => (await import("../../../../..")).DelayReasonCode).optional()
    ),
});

export declare namespace EncounterBase {
    interface Raw {
        external_id: serializers.EncounterExternalId.Raw;
        prior_authorization_number?: serializers.encounters.v4.PriorAuthorizationNumber.Raw | null;
        patient_authorized_release: boolean;
        benefits_assigned_to_provider: boolean;
        provider_accepts_assignment: boolean;
        appointment_type?: string | null;
        existing_medications?: serializers.encounters.v4.Medication.Raw[] | null;
        vitals?: serializers.encounters.v4.Vitals.Raw | null;
        interventions?: serializers.encounters.v4.Intervention.Raw[] | null;
        pay_to_address?: serializers.StreetAddressLongZip.Raw | null;
        synchronicity?: serializers.encounters.v4.SynchronicityType.Raw | null;
        billable_status: serializers.encounters.v4.BillableStatusType.Raw;
        responsible_party: serializers.encounters.v4.ResponsiblePartyType.Raw;
        additional_information?: string | null;
        service_authorization_exception_code?: serializers.encounters.v4.ServiceAuthorizationExceptionCode.Raw | null;
        admission_date?: serializers.Date_.Raw | null;
        discharge_date?: serializers.Date_.Raw | null;
        onset_of_current_illness_or_symptom_date?: serializers.Date_.Raw | null;
        last_menstrual_period_date?: serializers.Date_.Raw | null;
        delay_reason_code?: serializers.DelayReasonCode.Raw | null;
    }
}
