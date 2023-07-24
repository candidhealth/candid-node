/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Encounter: core.serialization.ObjectSchema<
    serializers.encounters.v4.Encounter.Raw,
    CandidApi.encounters.v4.Encounter
> = core.serialization
    .object({
        encounterId: core.serialization.property(
            "encounter_id",
            core.serialization.lazy(async () => (await import("../../../../..")).EncounterId)
        ),
        claims: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).Claim)
        ),
        patient: core.serialization.lazyObject(async () => (await import("../../../../..")).Patient),
        guarantor: core.serialization
            .lazyObject(async () => (await import("../../../../..")).guarantor.v1.Guarantor)
            .optional(),
        billingProvider: core.serialization.property(
            "billing_provider",
            core.serialization.lazyObject(
                async () => (await import("../../../../..")).encounterProviders.v2.EncounterProvider
            )
        ),
        renderingProvider: core.serialization.property(
            "rendering_provider",
            core.serialization.lazyObject(
                async () => (await import("../../../../..")).encounterProviders.v2.EncounterProvider
            )
        ),
        referringProvider: core.serialization.property(
            "referring_provider",
            core.serialization
                .lazyObject(async () => (await import("../../../../..")).encounterProviders.v2.EncounterProvider)
                .optional()
        ),
        serviceFacility: core.serialization.property(
            "service_facility",
            core.serialization.lazyObject(async () => (await import("../../../../..")).EncounterServiceFacility)
        ),
        subscriberPrimary: core.serialization.property(
            "subscriber_primary",
            core.serialization.lazyObject(async () => (await import("../../../../..")).Subscriber).optional()
        ),
        subscriberSecondary: core.serialization.property(
            "subscriber_secondary",
            core.serialization.lazyObject(async () => (await import("../../../../..")).Subscriber).optional()
        ),
        url: core.serialization.lazy(async () => (await import("../../../../..")).LinkUrl),
        diagnoses: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).Diagnosis)
        ),
        clinicalNotes: core.serialization.property(
            "clinical_notes",
            core.serialization.list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../..")).encounters.v4.ClinicalNoteCategory
                )
            )
        ),
        billingNotes: core.serialization.property(
            "billing_notes",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../../../..")).BillingNote))
                .optional()
        ),
        placeOfServiceCode: core.serialization.property(
            "place_of_service_code",
            core.serialization.lazy(async () => (await import("../../../../..")).FacilityTypeCode).optional()
        ),
        placeOfServiceCodeAsSubmitted: core.serialization.property(
            "place_of_service_code_as_submitted",
            core.serialization.lazy(async () => (await import("../../../../..")).FacilityTypeCode).optional()
        ),
        patientHistories: core.serialization.property(
            "patient_histories",
            core.serialization.list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../..")).encounters.v4.PatientHistoryCategory
                )
            )
        ),
        patientPayments: core.serialization.property(
            "patient_payments",
            core.serialization.list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../..")).patientPayments.v3.PatientPayment
                )
            )
        ),
        tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../../..")).Tag)),
        codingAttribution: core.serialization.property(
            "coding_attribution",
            core.serialization
                .lazy(async () => (await import("../../../../..")).encounters.v4.CodingAttributionType)
                .optional()
        ),
        workQueueId: core.serialization.property(
            "work_queue_id",
            core.serialization.lazy(async () => (await import("../../../../..")).WorkQueueId).optional()
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).encounters.v4.EncounterBase));

export declare namespace Encounter {
    interface Raw extends serializers.encounters.v4.EncounterBase.Raw {
        encounter_id: serializers.EncounterId.Raw;
        claims: serializers.Claim.Raw[];
        patient: serializers.Patient.Raw;
        guarantor?: serializers.guarantor.v1.Guarantor.Raw | null;
        billing_provider: serializers.encounterProviders.v2.EncounterProvider.Raw;
        rendering_provider: serializers.encounterProviders.v2.EncounterProvider.Raw;
        referring_provider?: serializers.encounterProviders.v2.EncounterProvider.Raw | null;
        service_facility: serializers.EncounterServiceFacility.Raw;
        subscriber_primary?: serializers.Subscriber.Raw | null;
        subscriber_secondary?: serializers.Subscriber.Raw | null;
        url: serializers.LinkUrl.Raw;
        diagnoses: serializers.Diagnosis.Raw[];
        clinical_notes: serializers.encounters.v4.ClinicalNoteCategory.Raw[];
        billing_notes?: serializers.BillingNote.Raw[] | null;
        place_of_service_code?: serializers.FacilityTypeCode.Raw | null;
        place_of_service_code_as_submitted?: serializers.FacilityTypeCode.Raw | null;
        patient_histories: serializers.encounters.v4.PatientHistoryCategory.Raw[];
        patient_payments: serializers.patientPayments.v3.PatientPayment.Raw[];
        tags: serializers.Tag.Raw[];
        coding_attribution?: serializers.encounters.v4.CodingAttributionType.Raw | null;
        work_queue_id?: serializers.WorkQueueId.Raw | null;
    }
}
