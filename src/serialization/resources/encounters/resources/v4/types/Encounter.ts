/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EncounterId } from "../../../../commons/types/EncounterId";
import { Claim } from "../../../../claims/types/Claim";
import { Patient } from "../../../../individual/types/Patient";
import { Guarantor } from "../../../../guarantor/resources/v1/types/Guarantor";
import { EncounterProvider } from "../../../../encounterProviders/resources/v2/types/EncounterProvider";
import { EncounterServiceFacility } from "../../../../serviceFacility/types/EncounterServiceFacility";
import { Subscriber } from "../../../../individual/types/Subscriber";
import { PriorAuthorizationNumber } from "./PriorAuthorizationNumber";
import { ResponsiblePartyType } from "./ResponsiblePartyType";
import { LinkUrl } from "../../../../commons/types/LinkUrl";
import { Diagnosis } from "../../../../diagnoses/types/Diagnosis";
import { ClinicalNoteCategory } from "./ClinicalNoteCategory";
import { BillingNote } from "../../../../billingNotes/resources/v2/types/BillingNote";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";
import { PatientHistoryCategory } from "./PatientHistoryCategory";
import { PatientPayment } from "../../../../patientPayments/resources/v3/types/PatientPayment";
import { Tag } from "../../../../tags/types/Tag";
import { CodingAttributionType } from "./CodingAttributionType";
import { WorkQueueId } from "../../../../commons/types/WorkQueueId";
import { EncounterOwnerOfNextActionType } from "./EncounterOwnerOfNextActionType";
import { EncounterSubmissionOriginType } from "./EncounterSubmissionOriginType";
import { SchemaInstance } from "../../../../customSchemas/resources/v1/types/SchemaInstance";
import { EpsdtReferral } from "./EpsdtReferral";
import { EncounterBase } from "./EncounterBase";

export const Encounter: core.serialization.ObjectSchema<
    serializers.encounters.v4.Encounter.Raw,
    CandidApi.encounters.v4.Encounter
> = core.serialization
    .object({
        patientControlNumber: core.serialization.property(
            "patient_control_number",
            core.serialization.string().optional(),
        ),
        encounterId: core.serialization.property("encounter_id", EncounterId),
        claims: core.serialization.list(Claim),
        patient: Patient,
        guarantor: Guarantor.optional(),
        billingProvider: core.serialization.property("billing_provider", EncounterProvider),
        renderingProvider: core.serialization.property("rendering_provider", EncounterProvider),
        referringProvider: core.serialization.property("referring_provider", EncounterProvider.optional()),
        initialReferringProvider: core.serialization.property(
            "initial_referring_provider",
            EncounterProvider.optional(),
        ),
        supervisingProvider: core.serialization.property("supervising_provider", EncounterProvider.optional()),
        serviceFacility: core.serialization.property("service_facility", EncounterServiceFacility),
        subscriberPrimary: core.serialization.property("subscriber_primary", Subscriber.optional()),
        subscriberSecondary: core.serialization.property("subscriber_secondary", Subscriber.optional()),
        priorAuthorizationNumber: core.serialization.property(
            "prior_authorization_number",
            PriorAuthorizationNumber.optional(),
        ),
        responsibleParty: core.serialization.property("responsible_party", ResponsiblePartyType),
        url: LinkUrl,
        diagnoses: core.serialization.list(Diagnosis),
        clinicalNotes: core.serialization.property("clinical_notes", core.serialization.list(ClinicalNoteCategory)),
        billingNotes: core.serialization.property("billing_notes", core.serialization.list(BillingNote).optional()),
        placeOfServiceCode: core.serialization.property("place_of_service_code", FacilityTypeCode.optional()),
        placeOfServiceCodeAsSubmitted: core.serialization.property(
            "place_of_service_code_as_submitted",
            FacilityTypeCode.optional(),
        ),
        patientHistories: core.serialization.property(
            "patient_histories",
            core.serialization.list(PatientHistoryCategory),
        ),
        patientPayments: core.serialization.property("patient_payments", core.serialization.list(PatientPayment)),
        tags: core.serialization.list(Tag),
        codingAttribution: core.serialization.property("coding_attribution", CodingAttributionType.optional()),
        workQueueId: core.serialization.property("work_queue_id", WorkQueueId.optional()),
        workQueueMembershipActivatedAt: core.serialization.property(
            "work_queue_membership_activated_at",
            core.serialization.date().optional(),
        ),
        ownerOfNextAction: core.serialization.property("owner_of_next_action", EncounterOwnerOfNextActionType),
        submissionOrigin: core.serialization.property("submission_origin", EncounterSubmissionOriginType),
        schemaInstances: core.serialization.property("schema_instances", core.serialization.list(SchemaInstance)),
        referralNumber: core.serialization.property("referral_number", core.serialization.string().optional()),
        epsdtReferral: core.serialization.property("epsdt_referral", EpsdtReferral.optional()),
        lastSubmittedAt: core.serialization.property("last_submitted_at", core.serialization.date().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    })
    .extend(EncounterBase);

export declare namespace Encounter {
    export interface Raw extends EncounterBase.Raw {
        patient_control_number?: string | null;
        encounter_id: EncounterId.Raw;
        claims: Claim.Raw[];
        patient: Patient.Raw;
        guarantor?: Guarantor.Raw | null;
        billing_provider: EncounterProvider.Raw;
        rendering_provider: EncounterProvider.Raw;
        referring_provider?: EncounterProvider.Raw | null;
        initial_referring_provider?: EncounterProvider.Raw | null;
        supervising_provider?: EncounterProvider.Raw | null;
        service_facility: EncounterServiceFacility.Raw;
        subscriber_primary?: Subscriber.Raw | null;
        subscriber_secondary?: Subscriber.Raw | null;
        prior_authorization_number?: PriorAuthorizationNumber.Raw | null;
        responsible_party: ResponsiblePartyType.Raw;
        url: LinkUrl.Raw;
        diagnoses: Diagnosis.Raw[];
        clinical_notes: ClinicalNoteCategory.Raw[];
        billing_notes?: BillingNote.Raw[] | null;
        place_of_service_code?: FacilityTypeCode.Raw | null;
        place_of_service_code_as_submitted?: FacilityTypeCode.Raw | null;
        patient_histories: PatientHistoryCategory.Raw[];
        patient_payments: PatientPayment.Raw[];
        tags: Tag.Raw[];
        coding_attribution?: CodingAttributionType.Raw | null;
        work_queue_id?: WorkQueueId.Raw | null;
        work_queue_membership_activated_at?: string | null;
        owner_of_next_action: EncounterOwnerOfNextActionType.Raw;
        submission_origin: EncounterSubmissionOriginType.Raw;
        schema_instances: SchemaInstance.Raw[];
        referral_number?: string | null;
        epsdt_referral?: EpsdtReferral.Raw | null;
        last_submitted_at?: string | null;
        created_at: string;
    }
}
