/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const EncounterCreate: core.serialization.Schema<
    serializers.encounters.v3.EncounterCreate.Raw,
    CandidApi.encounters.v3.EncounterCreate
> = core.serialization
    .object({
        patient: core.serialization.lazyObject(async () => (await import("../../../../../..")).PatientCreate),
        billingProvider: core.serialization.property(
            "billing_provider",
            core.serialization.lazyObject(
                async () => (await import("../../../../../..")).encounterProviders.v2.BillingProvider
            )
        ),
        renderingProvider: core.serialization.property(
            "rendering_provider",
            core.serialization.lazyObject(
                async () => (await import("../../../../../..")).encounterProviders.v2.RenderingProvider
            )
        ),
        referringProvider: core.serialization.property(
            "referring_provider",
            core.serialization
                .lazyObject(async () => (await import("../../../../../..")).encounterProviders.v2.ReferringProvider)
                .optional()
        ),
        serviceFacility: core.serialization.property(
            "service_facility",
            core.serialization
                .lazyObject(async () => (await import("../../../../../..")).EncounterServiceFacilityBase)
                .optional()
        ),
        subscriberPrimary: core.serialization.property(
            "subscriber_primary",
            core.serialization.lazyObject(async () => (await import("../../../../../..")).SubscriberCreate).optional()
        ),
        subscriberSecondary: core.serialization.property(
            "subscriber_secondary",
            core.serialization.lazyObject(async () => (await import("../../../../../..")).SubscriberCreate).optional()
        ),
        diagnoses: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../../..")).DiagnosisCreate)
        ),
        clinicalNotes: core.serialization.property(
            "clinical_notes",
            core.serialization
                .list(
                    core.serialization.lazyObject(
                        async () => (await import("../../../../../..")).encounters.v3.ClinicalNoteCategoryCreate
                    )
                )
                .optional()
        ),
        billingNotes: core.serialization.property(
            "billing_notes",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../../../../..")).BillingNoteBase))
                .optional()
        ),
        placeOfServiceCode: core.serialization.property(
            "place_of_service_code",
            core.serialization.lazy(async () => (await import("../../../../../..")).FacilityTypeCode)
        ),
        patientHistories: core.serialization.property(
            "patient_histories",
            core.serialization
                .list(
                    core.serialization.lazyObject(
                        async () => (await import("../../../../../..")).encounters.v3.PatientHistoryCategory
                    )
                )
                .optional()
        ),
        serviceLines: core.serialization.property(
            "service_lines",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../../../../..")).ServiceLineCreate))
                .optional()
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../../..")).encounters.v3.EncounterBase));

export declare namespace EncounterCreate {
    interface Raw extends serializers.encounters.v3.EncounterBase.Raw {
        patient: serializers.PatientCreate.Raw;
        billing_provider: serializers.encounterProviders.v2.BillingProvider.Raw;
        rendering_provider: serializers.encounterProviders.v2.RenderingProvider.Raw;
        referring_provider?: serializers.encounterProviders.v2.ReferringProvider.Raw | null;
        service_facility?: serializers.EncounterServiceFacilityBase.Raw | null;
        subscriber_primary?: serializers.SubscriberCreate.Raw | null;
        subscriber_secondary?: serializers.SubscriberCreate.Raw | null;
        diagnoses: serializers.DiagnosisCreate.Raw[];
        clinical_notes?: serializers.encounters.v3.ClinicalNoteCategoryCreate.Raw[] | null;
        billing_notes?: serializers.BillingNoteBase.Raw[] | null;
        place_of_service_code: serializers.FacilityTypeCode.Raw;
        patient_histories?: serializers.encounters.v3.PatientHistoryCategory.Raw[] | null;
        service_lines?: serializers.ServiceLineCreate.Raw[] | null;
    }
}
