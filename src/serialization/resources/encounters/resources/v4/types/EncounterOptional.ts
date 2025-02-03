/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PriorAuthorizationNumber } from "./PriorAuthorizationNumber";
import { EncounterExternalId } from "../../../../commons/types/EncounterExternalId";
import { TagId } from "../../../../tags/types/TagId";
import { ClinicalNoteCategoryCreate } from "./ClinicalNoteCategoryCreate";
import { StreetAddressLongZip } from "../../../../commons/types/StreetAddressLongZip";
import { BillableStatusType } from "./BillableStatusType";
import { ResponsiblePartyType } from "./ResponsiblePartyType";
import { SynchronicityType } from "./SynchronicityType";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";
import { SubscriberCreate } from "../../../../individual/types/SubscriberCreate";
import { ServiceAuthorizationExceptionCode } from "./ServiceAuthorizationExceptionCode";
import { DelayReasonCode } from "../../../../commons/types/DelayReasonCode";
import { PatientUpdate } from "../../../../individual/types/PatientUpdate";
import { SchemaInstance } from "../../../../customSchemas/resources/v1/types/SchemaInstance";
import { VitalsUpdate } from "./VitalsUpdate";
import { Medication } from "./Medication";
import { RenderingProviderUpdate } from "../../../../encounterProviders/resources/v2/types/RenderingProviderUpdate";
import { EncounterServiceFacilityUpdate } from "../../../../serviceFacility/types/EncounterServiceFacilityUpdate";
import { GuarantorUpdate } from "../../../../guarantor/resources/v1/types/GuarantorUpdate";
import { BillingProviderUpdate } from "../../../../encounterProviders/resources/v2/types/BillingProviderUpdate";
import { SupervisingProviderUpdate } from "../../../../encounterProviders/resources/v2/types/SupervisingProviderUpdate";
import { ReferringProviderUpdate } from "../../../../encounterProviders/resources/v2/types/ReferringProviderUpdate";
import { InitialReferringProviderUpdate } from "../../../../encounterProviders/resources/v2/types/InitialReferringProviderUpdate";
import { EpsdtReferral } from "./EpsdtReferral";

export const EncounterOptional: core.serialization.ObjectSchema<
    serializers.encounters.v4.EncounterOptional.Raw,
    CandidApi.encounters.v4.EncounterOptional
> = core.serialization.object({
    benefitsAssignedToProvider: core.serialization.property(
        "benefits_assigned_to_provider",
        core.serialization.boolean().optional()
    ),
    priorAuthorizationNumber: core.serialization.property(
        "prior_authorization_number",
        PriorAuthorizationNumber.optional()
    ),
    externalId: core.serialization.property("external_id", EncounterExternalId.optional()),
    dateOfService: core.serialization.property("date_of_service", core.serialization.string().optional()),
    tagIds: core.serialization.property("tag_ids", core.serialization.list(TagId).optional()),
    clinicalNotes: core.serialization.property(
        "clinical_notes",
        core.serialization.list(ClinicalNoteCategoryCreate).optional()
    ),
    payToAddress: core.serialization.property("pay_to_address", StreetAddressLongZip.optional()),
    billableStatus: core.serialization.property("billable_status", BillableStatusType.optional()),
    responsibleParty: core.serialization.property("responsible_party", ResponsiblePartyType.optional()),
    providerAcceptsAssignment: core.serialization.property(
        "provider_accepts_assignment",
        core.serialization.boolean().optional()
    ),
    synchronicity: SynchronicityType.optional(),
    placeOfServiceCode: core.serialization.property("place_of_service_code", FacilityTypeCode.optional()),
    appointmentType: core.serialization.property("appointment_type", core.serialization.string().optional()),
    endDateOfService: core.serialization.property("end_date_of_service", core.serialization.string().optional()),
    subscriberPrimary: core.serialization.property("subscriber_primary", SubscriberCreate.optional()),
    subscriberSecondary: core.serialization.property("subscriber_secondary", SubscriberCreate.optional()),
    additionalInformation: core.serialization.property(
        "additional_information",
        core.serialization.string().optional()
    ),
    serviceAuthorizationExceptionCode: core.serialization.property(
        "service_authorization_exception_code",
        ServiceAuthorizationExceptionCode.optional()
    ),
    admissionDate: core.serialization.property("admission_date", core.serialization.string().optional()),
    dischargeDate: core.serialization.property("discharge_date", core.serialization.string().optional()),
    onsetOfCurrentIllnessOrSymptomDate: core.serialization.property(
        "onset_of_current_illness_or_symptom_date",
        core.serialization.string().optional()
    ),
    lastMenstrualPeriodDate: core.serialization.property(
        "last_menstrual_period_date",
        core.serialization.string().optional()
    ),
    delayReasonCode: core.serialization.property("delay_reason_code", DelayReasonCode.optional()),
    patient: PatientUpdate.optional(),
    patientAuthorizedRelease: core.serialization.property(
        "patient_authorized_release",
        core.serialization.boolean().optional()
    ),
    schemaInstances: core.serialization.property(
        "schema_instances",
        core.serialization.list(SchemaInstance).optional()
    ),
    vitals: VitalsUpdate.optional(),
    existingMedications: core.serialization.property(
        "existing_medications",
        core.serialization.list(Medication).optional()
    ),
    renderingProvider: core.serialization.property("rendering_provider", RenderingProviderUpdate.optional()),
    serviceFacility: core.serialization.property("service_facility", EncounterServiceFacilityUpdate.optional()),
    guarantor: GuarantorUpdate.optional(),
    billingProvider: core.serialization.property("billing_provider", BillingProviderUpdate.optional()),
    supervisingProvider: core.serialization.property("supervising_provider", SupervisingProviderUpdate.optional()),
    referringProvider: core.serialization.property("referring_provider", ReferringProviderUpdate.optional()),
    initialReferringProvider: core.serialization.property(
        "initial_referring_provider",
        InitialReferringProviderUpdate.optional()
    ),
    referralNumber: core.serialization.property("referral_number", core.serialization.string().optional()),
    epsdtReferral: core.serialization.property("epsdt_referral", EpsdtReferral.optional()),
});

export declare namespace EncounterOptional {
    interface Raw {
        benefits_assigned_to_provider?: boolean | null;
        prior_authorization_number?: PriorAuthorizationNumber.Raw | null;
        external_id?: EncounterExternalId.Raw | null;
        date_of_service?: string | null;
        tag_ids?: TagId.Raw[] | null;
        clinical_notes?: ClinicalNoteCategoryCreate.Raw[] | null;
        pay_to_address?: StreetAddressLongZip.Raw | null;
        billable_status?: BillableStatusType.Raw | null;
        responsible_party?: ResponsiblePartyType.Raw | null;
        provider_accepts_assignment?: boolean | null;
        synchronicity?: SynchronicityType.Raw | null;
        place_of_service_code?: FacilityTypeCode.Raw | null;
        appointment_type?: string | null;
        end_date_of_service?: string | null;
        subscriber_primary?: SubscriberCreate.Raw | null;
        subscriber_secondary?: SubscriberCreate.Raw | null;
        additional_information?: string | null;
        service_authorization_exception_code?: ServiceAuthorizationExceptionCode.Raw | null;
        admission_date?: string | null;
        discharge_date?: string | null;
        onset_of_current_illness_or_symptom_date?: string | null;
        last_menstrual_period_date?: string | null;
        delay_reason_code?: DelayReasonCode.Raw | null;
        patient?: PatientUpdate.Raw | null;
        patient_authorized_release?: boolean | null;
        schema_instances?: SchemaInstance.Raw[] | null;
        vitals?: VitalsUpdate.Raw | null;
        existing_medications?: Medication.Raw[] | null;
        rendering_provider?: RenderingProviderUpdate.Raw | null;
        service_facility?: EncounterServiceFacilityUpdate.Raw | null;
        guarantor?: GuarantorUpdate.Raw | null;
        billing_provider?: BillingProviderUpdate.Raw | null;
        supervising_provider?: SupervisingProviderUpdate.Raw | null;
        referring_provider?: ReferringProviderUpdate.Raw | null;
        initial_referring_provider?: InitialReferringProviderUpdate.Raw | null;
        referral_number?: string | null;
        epsdt_referral?: EpsdtReferral.Raw | null;
    }
}
