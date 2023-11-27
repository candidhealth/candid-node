/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const EncounterUpdate: core.serialization.Schema<
    serializers.encounters.v4.EncounterUpdate.Raw,
    CandidApi.encounters.v4.EncounterUpdate
> = core.serialization.object({
    priorAuthorizationNumber: core.serialization.property(
        "prior_authorization_number",
        core.serialization
            .lazy(async () => (await import("../../../../../..")).encounters.v4.PriorAuthorizationNumber)
            .optional()
    ),
    externalId: core.serialization.property(
        "external_id",
        core.serialization.lazy(async () => (await import("../../../../../..")).EncounterExternalId).optional()
    ),
    dateOfService: core.serialization.property(
        "date_of_service",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
    diagnosisIds: core.serialization.property(
        "diagnosis_ids",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../../../..")).DiagnosisId))
            .optional()
    ),
    tagIds: core.serialization.property(
        "tag_ids",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../../../..")).TagId))
            .optional()
    ),
    clinicalNotes: core.serialization.property(
        "clinical_notes",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../../..")).encounters.v4.ClinicalNoteCategoryCreate
                )
            )
            .optional()
    ),
    payToAddress: core.serialization.property(
        "pay_to_address",
        core.serialization.lazyObject(async () => (await import("../../../../../..")).StreetAddressLongZip).optional()
    ),
    billableStatus: core.serialization.property(
        "billable_status",
        core.serialization
            .lazy(async () => (await import("../../../../../..")).encounters.v4.BillableStatusType)
            .optional()
    ),
    responsibleParty: core.serialization.property(
        "responsible_party",
        core.serialization
            .lazy(async () => (await import("../../../../../..")).encounters.v4.ResponsiblePartyType)
            .optional()
    ),
    providerAcceptsAssignment: core.serialization.property(
        "provider_accepts_assignment",
        core.serialization.boolean().optional()
    ),
    benefitsAssignedToProvider: core.serialization.property(
        "benefits_assigned_to_provider",
        core.serialization.boolean().optional()
    ),
    synchronicity: core.serialization
        .lazy(async () => (await import("../../../../../..")).encounters.v4.SynchronicityType)
        .optional(),
    placeOfServiceCode: core.serialization.property(
        "place_of_service_code",
        core.serialization.lazy(async () => (await import("../../../../../..")).FacilityTypeCode).optional()
    ),
    appointmentType: core.serialization.property("appointment_type", core.serialization.string().optional()),
    endDateOfService: core.serialization.property(
        "end_date_of_service",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
    subscriberSecondary: core.serialization.property(
        "subscriber_secondary",
        core.serialization.lazyObject(async () => (await import("../../../../../..")).SubscriberCreate).optional()
    ),
    additionalInformation: core.serialization.property(
        "additional_information",
        core.serialization.string().optional()
    ),
    serviceAuthorizationExceptionCode: core.serialization.property(
        "service_authorization_exception_code",
        core.serialization
            .lazy(async () => (await import("../../../../../..")).encounters.v4.ServiceAuthorizationExceptionCode)
            .optional()
    ),
    admissionDate: core.serialization.property(
        "admission_date",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
    dischargeDate: core.serialization.property(
        "discharge_date",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
    onsetOfCurrentIllnessOrSymptomDate: core.serialization.property(
        "onset_of_current_illness_or_symptom_date",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
    lastMenstrualPeriodDate: core.serialization.property(
        "last_menstrual_period_date",
        core.serialization.lazy(async () => (await import("../../../../../..")).Date_).optional()
    ),
});

export declare namespace EncounterUpdate {
    interface Raw {
        prior_authorization_number?: serializers.encounters.v4.PriorAuthorizationNumber.Raw | null;
        external_id?: serializers.EncounterExternalId.Raw | null;
        date_of_service?: serializers.Date_.Raw | null;
        diagnosis_ids?: serializers.DiagnosisId.Raw[] | null;
        tag_ids?: serializers.TagId.Raw[] | null;
        clinical_notes?: serializers.encounters.v4.ClinicalNoteCategoryCreate.Raw[] | null;
        pay_to_address?: serializers.StreetAddressLongZip.Raw | null;
        billable_status?: serializers.encounters.v4.BillableStatusType.Raw | null;
        responsible_party?: serializers.encounters.v4.ResponsiblePartyType.Raw | null;
        provider_accepts_assignment?: boolean | null;
        benefits_assigned_to_provider?: boolean | null;
        synchronicity?: serializers.encounters.v4.SynchronicityType.Raw | null;
        place_of_service_code?: serializers.FacilityTypeCode.Raw | null;
        appointment_type?: string | null;
        end_date_of_service?: serializers.Date_.Raw | null;
        subscriber_secondary?: serializers.SubscriberCreate.Raw | null;
        additional_information?: string | null;
        service_authorization_exception_code?: serializers.encounters.v4.ServiceAuthorizationExceptionCode.Raw | null;
        admission_date?: serializers.Date_.Raw | null;
        discharge_date?: serializers.Date_.Raw | null;
        onset_of_current_illness_or_symptom_date?: serializers.Date_.Raw | null;
        last_menstrual_period_date?: serializers.Date_.Raw | null;
    }
}
