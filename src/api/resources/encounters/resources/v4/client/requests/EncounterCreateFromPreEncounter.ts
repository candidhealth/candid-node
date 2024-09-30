/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         preEncounterPatientId: CandidApi.PreEncounterPatientId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         preEncounterAppointmentId: CandidApi.PreEncounterAppointmentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         billingProvider: {
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             taxId: "string",
 *             npi: "string",
 *             taxonomyCode: "string",
 *             firstName: "string",
 *             lastName: "string",
 *             organizationName: "string"
 *         },
 *         renderingProvider: {
 *             npi: "string",
 *             taxonomyCode: "string",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             firstName: "string",
 *             lastName: "string",
 *             organizationName: "string"
 *         },
 *         initialReferringProvider: {
 *             npi: "string",
 *             taxonomyCode: "string",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             qualifier: CandidApi.QualifierCode.Dq,
 *             firstName: "string",
 *             lastName: "string",
 *             organizationName: "string"
 *         },
 *         supervisingProvider: {
 *             npi: "string",
 *             taxonomyCode: "string",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             firstName: "string",
 *             lastName: "string",
 *             organizationName: "string"
 *         },
 *         serviceFacility: {
 *             organizationName: "string",
 *             npi: "string",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             }
 *         },
 *         diagnoses: [{
 *                 name: "string",
 *                 codeType: CandidApi.DiagnosisTypeCode.Abf,
 *                 code: "string"
 *             }],
 *         clinicalNotes: [{
 *                 category: CandidApi.encounters.v4.NoteCategory.Clinical,
 *                 notes: [{
 *                         text: "string",
 *                         authorName: "string",
 *                         authorNpi: CandidApi.Npi("string"),
 *                         timestamp: new Date("2024-01-15T09:30:00.000Z")
 *                     }]
 *             }],
 *         billingNotes: [{
 *                 text: "string"
 *             }],
 *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *         patientHistories: [{
 *                 category: CandidApi.encounters.v4.PatientHistoryCategoryEnum.PresentIllness,
 *                 questions: [{
 *                         id: CandidApi.encounters.v4.IntakeQuestionId("6E7FBCE4-A8EA-46D0-A8D8-FF83CA3BB176"),
 *                         text: "Do you have any allergies?",
 *                         responses: [{
 *                                 response: "No allergies",
 *                                 followUps: [{
 *                                         id: CandidApi.encounters.v4.IntakeFollowUpId("4F3D57F9-AC94-49D6-87E4-E804B709917A"),
 *                                         text: "Do you have any allergies?",
 *                                         response: "No allergies"
 *                                     }]
 *                             }]
 *                     }]
 *             }],
 *         serviceLines: [{
 *                 modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
 *                 procedureCode: "string",
 *                 quantity: CandidApi.Decimal("string"),
 *                 units: CandidApi.ServiceLineUnits.Mj,
 *                 chargeAmountCents: 1,
 *                 diagnosisPointers: [1],
 *                 drugIdentification: {
 *                     serviceIdQualifier: CandidApi.serviceLines.v2.ServiceIdQualifier.EanUcc13,
 *                     nationalDrugCode: "string",
 *                     nationalDrugUnitCount: "string",
 *                     measurementUnitCode: CandidApi.serviceLines.v2.MeasurementUnitCode.Milliliters,
 *                     linkSequenceNumber: "string",
 *                     pharmacyPrescriptionNumber: "string",
 *                     conversionFormula: "string"
 *                 },
 *                 placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *                 description: "string",
 *                 dateOfService: "2023-01-15",
 *                 endDateOfService: "2023-01-15",
 *                 orderingProvider: {
 *                     npi: "string",
 *                     taxonomyCode: "string",
 *                     address: {
 *                         address1: "123 Main St",
 *                         address2: "Apt 1",
 *                         city: "New York",
 *                         state: CandidApi.State.Ny,
 *                         zipCode: "10001",
 *                         zipPlusFourCode: "1234"
 *                     },
 *                     firstName: "string",
 *                     lastName: "string",
 *                     organizationName: "string"
 *                 }
 *             }],
 *         externalClaimSubmission: {
 *             claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
 *             patientControlNumber: "PATIENT_CONTROL_NUMBER",
 *             submissionRecords: [{
 *                     submittedAt: new Date("2023-01-01T13:00:00.000Z"),
 *                     claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
 *                     payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
 *                     intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic
 *                 }, {
 *                     submittedAt: new Date("2023-01-04T12:00:00.000Z"),
 *                     claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Replacement,
 *                     payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
 *                     intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper
 *                 }]
 *         },
 *         tagIds: [CandidApi.TagId("string")],
 *         schemaInstances: [{
 *                 schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
 *                 content: {
 *                     "provider_category": "internist",
 *                     "is_urgent_care": true,
 *                     "bmi": 24.2,
 *                     "age": 38
 *                 }
 *             }],
 *         externalId: CandidApi.EncounterExternalId("string"),
 *         dateOfService: "2023-01-15",
 *         endDateOfService: "2023-01-15",
 *         patientAuthorizedRelease: true,
 *         benefitsAssignedToProvider: true,
 *         providerAcceptsAssignment: true,
 *         appointmentType: "string",
 *         existingMedications: [{
 *                 name: "Lisinopril",
 *                 rxCui: CandidApi.encounters.v4.RxCui("860975"),
 *                 dosage: "10mg",
 *                 dosageForm: "Tablet",
 *                 frequency: "Once Daily",
 *                 asNeeded: true
 *             }],
 *         vitals: {
 *             heightIn: 70,
 *             weightLbs: 165,
 *             bloodPressureSystolicMmhg: 115,
 *             bloodPressureDiastolicMmhg: 85,
 *             bodyTemperatureF: 98,
 *             hemoglobinGdl: 15.1,
 *             hematocritPct: 51.2
 *         },
 *         interventions: [{
 *                 name: "Physical Therapy Session",
 *                 category: CandidApi.encounters.v4.InterventionCategory.Lifestyle,
 *                 description: "A session focused on improving muscular strength, flexibility, and range of motion post-injury.",
 *                 medication: {
 *                     name: "Lisinopril",
 *                     rxCui: CandidApi.encounters.v4.RxCui("860975"),
 *                     dosage: "10mg",
 *                     dosageForm: "Tablet",
 *                     frequency: "Once Daily",
 *                     asNeeded: true
 *                 },
 *                 labs: [{
 *                         name: "Genetic Health Labs",
 *                         code: "GH12345",
 *                         codeType: CandidApi.encounters.v4.LabCodeType.Quest
 *                     }]
 *             }],
 *         payToAddress: {
 *             address1: "123 Main St",
 *             address2: "Apt 1",
 *             city: "New York",
 *             state: CandidApi.State.Ny,
 *             zipCode: "10001",
 *             zipPlusFourCode: "1234"
 *         },
 *         synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
 *         billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
 *         additionalInformation: "string",
 *         serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
 *         admissionDate: "2023-01-15",
 *         dischargeDate: "2023-01-15",
 *         onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
 *         lastMenstrualPeriodDate: "2023-01-15",
 *         delayReasonCode: CandidApi.DelayReasonCode.C1
 *     }
 */
export interface EncounterCreateFromPreEncounter extends CandidApi.encounters.v4.EncounterBase {
    preEncounterPatientId: CandidApi.PreEncounterPatientId;
    preEncounterAppointmentId: CandidApi.PreEncounterAppointmentId;
    /**
     * The billing provider is the provider or business entity submitting the claim. Billing provider may be, but is not necessarily, the same person/NPI as the rendering provider. From a payer's perspective, this represents the person or entity being reimbursed. When a contract exists with the target payer, the billing provider should be the entity contracted with the payer. In some circumstances, this will be an individual provider. In that case, submit that provider's NPI and the tax ID (TIN) that the provider gave to the payer during contracting. In other cases, the billing entity will be a medical group. If so, submit the group NPI and the group's tax ID. Box 33 on the CMS-1500 claim form.
     *
     */
    billingProvider: CandidApi.encounterProviders.v2.BillingProvider;
    /**
     * The rendering provider is the practitioner -- physician, nurse practitioner, etc. -- performing the service.
     * For telehealth services, the rendering provider performs the visit, asynchronous communication, or other service. The rendering provider address should generally be the same as the service facility address.
     *
     */
    renderingProvider: CandidApi.encounterProviders.v2.RenderingProvider;
    /**
     * The second iteration of Loop ID-2310. Use code "P3 - Primary Care Provider" in this loop to
     * indicate the initial referral from the primary care provider or whatever provider wrote the initial referral for this patient's episode of care being billed/reported in this transaction.
     *
     */
    initialReferringProvider?: CandidApi.encounterProviders.v2.InitialReferringProvider;
    /**
     * Required when the rendering provider is supervised by a physician. If not required by this implementation guide, do not send.
     *
     */
    supervisingProvider?: CandidApi.encounterProviders.v2.SupervisingProvider;
    /**
     * Encounter Service facility is typically the location a medical service was rendered, such as a provider office or hospital. For telehealth, service facility can represent the provider's location when the service was delivered (e.g., home), or the location where an in-person visit would have taken place, whichever is easier to identify. If the provider is in-network, service facility may be defined in payer contracts. Box 32 on the CMS-1500 claim form. Note that for an in-network claim to be successfully adjudicated, the service facility address listed on claims must match what was provided to the payer during the credentialing process.
     *
     */
    serviceFacility?: CandidApi.EncounterServiceFacilityBase;
    /**
     * Ideally, this field should contain no more than 12 diagnoses. However, more diagnoses
     * may be submitted at this time, and coders will later prioritize the 12 that will be
     * submitted to the payor.
     *
     */
    diagnoses: CandidApi.DiagnosisCreate[];
    /** Holds a collection of clinical observations made by healthcare providers during patient encounters. */
    clinicalNotes?: CandidApi.encounters.v4.ClinicalNoteCategoryCreate[];
    /**
     * Spot to store misc, human-readable, notes about this encounter to be used
     * in the billing process.
     *
     */
    billingNotes?: CandidApi.billingNotes.v2.BillingNoteBase[];
    /**
     * Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set).
     *
     */
    placeOfServiceCode: CandidApi.FacilityTypeCode;
    patientHistories?: CandidApi.encounters.v4.PatientHistoryCategory[];
    /**
     * Each service line must be linked to a diagnosis. Concretely,
     * `service_line.diagnosis_pointers`must contain at least one entry which should be
     * in bounds of the diagnoses list field.
     *
     */
    serviceLines?: CandidApi.serviceLines.v2.ServiceLineCreate[];
    /**
     * ***This field is in beta.***
     * To be included for claims that have been submitted outside of Candid.
     * Candid supports posting remits and payments to these claims and working them in-platform (e.g. editing, resubmitting).
     *
     */
    externalClaimSubmission?: CandidApi.claimSubmission.v1.ExternalClaimSubmissionCreate;
    /** Names of tags that should be on the encounter. */
    tagIds?: CandidApi.TagId[];
    /**
     * Key-value pairs that must adhere to a schema created via the Custom Schema API. Multiple schema
     * instances cannot be created for the same schema on an encounter.
     *
     */
    schemaInstances?: CandidApi.customSchemas.v1.SchemaInstance[];
}
