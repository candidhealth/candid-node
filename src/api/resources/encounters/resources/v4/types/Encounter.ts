/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         encounterId: CandidApi.EncounterId("B2506E84-4470-4CBA-8A68-6883367739E1"),
 *         claims: [{
 *                 claimId: CandidApi.ClaimId("DD9D7F82-37B5-449D-AA63-26925398335B"),
 *                 status: CandidApi.ClaimStatus.BillerReceived,
 *                 clearinghouse: "Change Healthcare",
 *                 clearinghouseClaimId: "5BA7C3AB-2BC2-496C-8B10-6CAC73D0729D",
 *                 payerClaimId: "9BB9F259-9756-4F16-8F53-9DBB9F7EB1BB",
 *                 serviceLines: [{
 *                         modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
 *                         chargeAmountCents: 10000,
 *                         allowedAmountCents: 8000,
 *                         insuranceBalanceCents: 0,
 *                         patientBalanceCents: 2000,
 *                         paidAmountCents: 8000,
 *                         patientResponsibilityCents: 2000,
 *                         diagnosisIdZero: CandidApi.DiagnosisId("4AC84BCD-12F5-4F86-A57B-E06749127C98"),
 *                         diagnosisIdOne: CandidApi.DiagnosisId("EEA5CA5A-8B43-45FD-8CBD-C6CC1103E759"),
 *                         diagnosisIdTwo: CandidApi.DiagnosisId("5C4AA029-2DB9-4202-916E-E93C708F65FF"),
 *                         diagnosisIdThree: CandidApi.DiagnosisId("81795126-A3AC-443C-B47E-7259A16AB4A2"),
 *                         serviceLineEraData: {
 *                             serviceLineAdjustments: [{
 *                                     createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                                     adjustmentGroupCode: "CO",
 *                                     adjustmentReasonCode: "CO",
 *                                     adjustmentAmountCents: 1000,
 *                                     adjustmentNote: "test_note"
 *                                 }],
 *                             remittanceAdviceRemarkCodes: ["N362"]
 *                         },
 *                         serviceLineManualAdjustments: [{
 *                                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                                 adjustmentGroupCode: "CO",
 *                                 adjustmentReasonCode: "CO",
 *                                 adjustmentAmountCents: 1000,
 *                                 adjustmentNote: "test_note"
 *                             }],
 *                         relatedInvoices: [{
 *                                 id: CandidApi.InvoiceId("901BE2F1-41BC-456E-9987-4FE2F84F9D75"),
 *                                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                                 updatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *                                 organzationId: CandidApi.OrganizationId("F13F73D4-4344-46EA-9D93-33BCFFBB9F36"),
 *                                 sourceId: "9B626577-8808-4F28-9ED1-F0DFF0D49BBC",
 *                                 sourceCustomerId: "624D1972-8C69-4C2F-AEFA-10856F734DB3",
 *                                 patientExternalId: CandidApi.PatientExternalId("10FED4D6-4C5A-48DF-838A-EEF45A74788D"),
 *                                 note: "test_note",
 *                                 dueDate: CandidApi.Date_("2023-10-10"),
 *                                 status: CandidApi.InvoiceStatus.Draft,
 *                                 url: "https://example.com",
 *                                 customerInvoiceUrl: "https://example.com",
 *                                 items: [{
 *                                         serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *                                         amountCents: 500
 *                                     }]
 *                             }],
 *                         denialReason: {
 *                             reason: CandidApi.serviceLines.v2.DenialReasonContent.AuthorizationRequired
 *                         },
 *                         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *                         serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *                         procedureCode: "99213",
 *                         quantity: CandidApi.Decimal("1"),
 *                         units: CandidApi.ServiceLineUnits.Mj,
 *                         claimId: CandidApi.ClaimId("026A1FB8-748E-4859-A2D7-3EA9E07D25AE"),
 *                         dateOfServiceRange: {
 *                             startDate: CandidApi.Date_("2023-01-01"),
 *                             endDate: CandidApi.Date_("2023-01-03")
 *                         },
 *                         dateOfService: "2023-01-01",
 *                         endDateOfService: "2023-01-03",
 *                         testResults: [{
 *                                 resultType: CandidApi.serviceLines.v2.TestResultType.Hemoglobin,
 *                                 value: 51
 *                             }]
 *                     }],
 *                 eras: [{
 *                         eraId: CandidApi.EraId("4D844EF1-2253-43CD-A4F1-6DB7E65CB54B"),
 *                         checkNumber: "CHK12345",
 *                         checkDate: CandidApi.Date_("2023-10-12")
 *                     }]
 *             }],
 *         patient: {
 *             individualId: CandidApi.IndividualId("93DDBEBF-4956-4482-9A6C-21499B7E4E5D"),
 *             phoneNumbers: [{
 *                     number: "1234567890",
 *                     type: CandidApi.PhoneNumberType.Home
 *                 }],
 *             nonInsurancePayers: [{
 *                     nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("EB7623AB-D5BC-4B25-B257-2B8FCEC578DE"),
 *                     name: "Sunrise Foundation",
 *                     category: "Foundation",
 *                     description: "Sunrise Foundation is a non-profit organization that provides financial assistance to patients in need.",
 *                     enabled: true
 *                 }],
 *             nonInsurancePayersInfo: [{
 *                     nonInsurancePayer: {
 *                         nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("EB7623AB-D5BC-4B25-B257-2B8FCEC578DE"),
 *                         name: "Sunrise Foundation",
 *                         category: "Foundation",
 *                         description: "Sunrise Foundation is a non-profit organization that provides financial assistance to patients in need.",
 *                         enabled: true
 *                     },
 *                     memberId: "123456789"
 *                 }],
 *             phoneConsent: true,
 *             email: CandidApi.Email("johndoe@joincandidhealth.com"),
 *             emailConsent: true,
 *             externalId: "49460F77-6456-41F1-AC6D-0AED08614D39",
 *             dateOfBirth: "2000-01-01",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             firstName: "John",
 *             lastName: "Doe",
 *             gender: CandidApi.Gender.Male
 *         },
 *         guarantor: {
 *             guarantorId: CandidApi.guarantor.v1.GuarantorId("8BBDBE63-58D3-4D40-98C9-40403C050977"),
 *             phoneNumbers: [{
 *                     number: "1234567890",
 *                     type: CandidApi.PhoneNumberType.Home
 *                 }],
 *             phoneConsent: true,
 *             email: CandidApi.Email("johndoe@joincandidhealth.com"),
 *             emailConsent: true,
 *             firstName: "John",
 *             lastName: "Doe",
 *             externalId: "49460F77-6456-41F1-AC6D-0AED08614D39",
 *             dateOfBirth: "2000-01-01",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             }
 *         },
 *         billingProvider: {
 *             providerId: CandidApi.encounterProviders.v2.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             taxId: "123456789",
 *             npi: "1234567890",
 *             taxonomyCode: "207Q00000X",
 *             firstName: "John",
 *             lastName: "Doe",
 *             organizationName: "Organization Name"
 *         },
 *         renderingProvider: {
 *             providerId: CandidApi.encounterProviders.v2.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             taxId: "123456789",
 *             npi: "1234567890",
 *             taxonomyCode: "207Q00000X",
 *             firstName: "John",
 *             lastName: "Doe",
 *             organizationName: "Organization Name"
 *         },
 *         referringProvider: {
 *             providerId: CandidApi.encounterProviders.v2.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             taxId: "123456789",
 *             npi: "1234567890",
 *             taxonomyCode: "207Q00000X",
 *             firstName: "John",
 *             lastName: "Doe",
 *             organizationName: "Organization Name"
 *         },
 *         serviceFacility: {
 *             serviceFacilityId: CandidApi.ServiceFacilityId("2861487B-232C-4DED-A874-616A5DB0688F"),
 *             organizationName: "Test Organization",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             }
 *         },
 *         subscriberPrimary: {
 *             individualId: CandidApi.IndividualId("797348A9-E7E8-4E59-8628-95390D079C0B"),
 *             insuranceCard: {
 *                 insuranceCardId: CandidApi.insuranceCards.v2.InsuranceCardId("CA5B7711-4419-4161-9B7C-3494AC40C8D4"),
 *                 memberId: "E85313B4-0FFC-4119-8042-8161A4ECFF0A",
 *                 payerName: "John Doe",
 *                 payerId: "836DDAA6-863F-4020-ACCA-205A689F0002",
 *                 rxBin: "610014",
 *                 rxPcn: "MEDDPRIME",
 *                 imageUrlFront: "https://s3.amazonaws.com/front.jpg",
 *                 imageUrlBack: "https://s3.amazonaws.com/back.jpg",
 *                 groupNumber: "ABC12345",
 *                 planName: "Silver PPO Plan",
 *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
 *                 insuranceType: CandidApi.InsuranceTypeCode.C12
 *             },
 *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *             dateOfBirth: "2000-01-01",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             firstName: "John",
 *             lastName: "Doe",
 *             gender: CandidApi.Gender.Male
 *         },
 *         subscriberSecondary: {
 *             individualId: CandidApi.IndividualId("797348A9-E7E8-4E59-8628-95390D079C0B"),
 *             insuranceCard: {
 *                 insuranceCardId: CandidApi.insuranceCards.v2.InsuranceCardId("CA5B7711-4419-4161-9B7C-3494AC40C8D4"),
 *                 memberId: "E85313B4-0FFC-4119-8042-8161A4ECFF0A",
 *                 payerName: "John Doe",
 *                 payerId: "836DDAA6-863F-4020-ACCA-205A689F0002",
 *                 rxBin: "610014",
 *                 rxPcn: "MEDDPRIME",
 *                 imageUrlFront: "https://s3.amazonaws.com/front.jpg",
 *                 imageUrlBack: "https://s3.amazonaws.com/back.jpg",
 *                 groupNumber: "ABC12345",
 *                 planName: "Silver PPO Plan",
 *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
 *                 insuranceType: CandidApi.InsuranceTypeCode.C12
 *             },
 *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *             dateOfBirth: "2000-01-01",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             firstName: "John",
 *             lastName: "Doe",
 *             gender: CandidApi.Gender.Male
 *         },
 *         url: CandidApi.LinkUrl("https://example.com"),
 *         diagnoses: [{
 *                 diagnosisId: CandidApi.DiagnosisId("5C770E00-4BBF-42AF-A73F-99C5E91FC0DB"),
 *                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 encounterId: CandidApi.EncounterId("3F63985B-51A4-4DD4-9418-7D50B2520792"),
 *                 name: "John Doe",
 *                 codeType: CandidApi.DiagnosisTypeCode.Abf,
 *                 code: "I10"
 *             }],
 *         clinicalNotes: [{
 *                 category: CandidApi.encounters.v4.NoteCategory.Clinical,
 *                 notes: ["Patient complained of mild chest pain."],
 *                 notesStructured: [{
 *                         text: "Mild chest pain since morning.",
 *                         authorName: "John Doe",
 *                         authorNpi: CandidApi.Npi("1234567890"),
 *                         timestamp: new Date("2023-01-01T00:00:00.000Z")
 *                     }]
 *             }],
 *         billingNotes: [{
 *                 billingNoteId: CandidApi.billingNotes.v2.BillingNoteId("99882EEA-936F-4E71-BC4F-520E4D14E3E2"),
 *                 encounterId: CandidApi.EncounterId("8BCFB6A8-2876-4111-9E3F-602B541FCF62"),
 *                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 authorAuth0Id: "F0DE3BF9-F9A1-4FA7-BF6B-28C0B46BADD8",
 *                 authorName: "John Doe",
 *                 text: "Patient was billed for an MRI."
 *             }],
 *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *         placeOfServiceCodeAsSubmitted: CandidApi.FacilityTypeCode.Pharmacy,
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
 *         patientPayments: [{
 *                 patientPaymentId: CandidApi.patientPayments.v3.PatientPaymentId("CF237BE1-E793-4BBF-8958-61D5179D1D0D"),
 *                 organizationId: CandidApi.OrganizationId("0788CA2A-B20D-4B8E-B8D4-07FA0B3B4907"),
 *                 sourceInternalId: "D1A76039-D5C5-4323-A2FC-B7C8B6AEF6A4",
 *                 source: CandidApi.patientPayments.v3.PatientPaymentSource.ManualEntry,
 *                 amountCents: 2000,
 *                 paymentTimestamp: new Date("2023-01-01T00:00:00.000Z"),
 *                 status: CandidApi.patientPayments.v3.PatientPaymentStatus.Pending,
 *                 paymentName: "John Doe",
 *                 paymentNote: "test payment note",
 *                 patientExternalId: CandidApi.PatientExternalId("B7437260-D6B4-48CF-B9D7-753C09F34E76"),
 *                 encounterExternalId: CandidApi.EncounterExternalId("0F26B9C3-199F-4CBB-A166-B87EA7C631BB"),
 *                 serviceLineId: CandidApi.ServiceLineId("B557DC86-C629-478C-850A-02D45AC11783")
 *             }],
 *         tags: [{
 *                 creatorId: "00EB5A46-35C6-441B-9751-AF307AEF5888",
 *                 tagId: CandidApi.TagId("void-claim-submitted"),
 *                 description: "to indicate claims where a void claim has been submitted",
 *                 color: CandidApi.TagColorEnum.Black
 *             }],
 *         codingAttribution: CandidApi.encounters.v4.CodingAttributionType.Candid,
 *         workQueueId: CandidApi.WorkQueueId("000856FE-1024-418F-BF96-2E7347AB4520"),
 *         workQueueMembershipActivatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *         ownerOfNextAction: CandidApi.encounters.v4.EncounterOwnerOfNextActionType.Candid,
 *         submissionOrigin: CandidApi.encounters.v4.EncounterSubmissionOriginType.Candid,
 *         externalId: CandidApi.EncounterExternalId("5C21490F-A9C0-45F4-B5DB-136E3AEC617A"),
 *         dateOfService: "2023-01-01",
 *         endDateOfService: "2023-01-05",
 *         priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("PA1234567"),
 *         patientAuthorizedRelease: true,
 *         benefitsAssignedToProvider: true,
 *         providerAcceptsAssignment: true,
 *         appointmentType: "Routine Checkup",
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
 *         responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
 *         serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
 *         admissionDate: "2023-01-01",
 *         dischargeDate: "2023-01-05",
 *         onsetOfCurrentIllnessOrSymptomDate: "2023-01-01",
 *         schemaInstances: [{
 *                 schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
 *                 content: {
 *                     "provider_category": "internist",
 *                     "is_urgent_care": true,
 *                     "bmi": 24.2,
 *                     "age": 38
 *                 }
 *             }]
 *     }
 */
export interface Encounter extends CandidApi.encounters.v4.EncounterBase {
    /**
     * A patient control number (PCN) is a unique identifier assigned to a patient within a healthcare system or facility.
     * It's used to track and manage a patient's medical records, treatments, and other healthcare-related information.
     */
    patientControlNumber?: string;
    encounterId: CandidApi.EncounterId;
    claims: CandidApi.Claim[];
    /** Contains the identification information of the individual receiving medical services. */
    patient: CandidApi.Patient;
    /** Personal and contact info for the guarantor of the patient responsibility. */
    guarantor?: CandidApi.guarantor.v1.Guarantor;
    /** The billing provider is the provider or business entity submitting the claim. Billing provider may be, but is not necessarily, the same person/NPI as the rendering provider. From a payer's perspective, this represents the person or entity being reimbursed. When a contract exists with the target payer, the billing provider should be the entity contracted with the payer. In some circumstances, this will be an individual provider. In that case, submit that provider's NPI and the tax ID (TIN) that the provider gave to the payer during contracting. In other cases, the billing entity will be a medical group. If so, submit the group NPI and the group's tax ID. Box 33 on the CMS-1500 claim form. */
    billingProvider: CandidApi.encounterProviders.v2.EncounterProvider;
    /**
     * The rendering provider is the practitioner -- physician, nurse practitioner, etc. -- performing the service.
     * For telehealth services, the rendering provider performs the visit, asynchronous communication, or other service. The rendering provider address should generally be the same as the service facility address.
     */
    renderingProvider: CandidApi.encounterProviders.v2.EncounterProvider;
    referringProvider?: CandidApi.encounterProviders.v2.EncounterProvider;
    initialReferringProvider?: CandidApi.encounterProviders.v2.EncounterProvider;
    supervisingProvider?: CandidApi.encounterProviders.v2.EncounterProvider;
    /** Encounter Service facility is typically the location a medical service was rendered, such as a provider office or hospital. For telehealth, service facility can represent the provider's location when the service was delivered (e.g., home), or the location where an in-person visit would have taken place, whichever is easier to identify. If the provider is in-network, service facility may be defined in payer contracts. Box 32 on the CMS-1500 claim form. Note that for an in-network claim to be successfully adjudicated, the service facility address listed on claims must match what was provided to the payer during the credentialing process. */
    serviceFacility: CandidApi.EncounterServiceFacility;
    /**
     * Subscriber_primary is required when responsible_party is INSURANCE_PAY (i.e. when the claim should be billed to insurance).
     * These are not required fields when responsible_party is SELF_PAY (i.e. when the claim should be billed to the patient).
     * However, if you collect this for patients, even self-pay, we recommend including it when sending encounters to Candid.
     * Note: Cash Pay is no longer a valid payer_id in v4, please use responsible party to define self-pay claims.
     */
    subscriberPrimary?: CandidApi.Subscriber;
    /** Contains details of the secondary insurance subscriber. */
    subscriberSecondary?: CandidApi.Subscriber;
    /** Box 23 on the CMS-1500 claim form. */
    priorAuthorizationNumber?: CandidApi.encounters.v4.PriorAuthorizationNumber;
    /** Defines the party to be billed with the initial balance owed on the claim. */
    responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType;
    /** URL that links directly to the claim created in Candid. */
    url: CandidApi.LinkUrl;
    /** Ideally, this field should contain no more than 12 diagnoses. However, more diagnoses may be submitted at this time, and coders will later prioritize the 12 that will be submitted to the payor. */
    diagnoses: CandidApi.Diagnosis[];
    /** Holds a collection of clinical observations made by healthcare providers during patient encounters. */
    clinicalNotes: CandidApi.encounters.v4.ClinicalNoteCategory[];
    /**
     * Spot to store misc, human-readable, notes about this encounter to be
     * used in the billing process.
     */
    billingNotes?: CandidApi.billingNotes.v2.BillingNote[];
    /** Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set). */
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    /** Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set). */
    placeOfServiceCodeAsSubmitted?: CandidApi.FacilityTypeCode;
    patientHistories: CandidApi.encounters.v4.PatientHistoryCategory[];
    patientPayments: CandidApi.patientPayments.v3.PatientPayment[];
    tags: CandidApi.Tag[];
    /** The entity that performed the coding of medical services for the claim. */
    codingAttribution?: CandidApi.encounters.v4.CodingAttributionType;
    workQueueId?: CandidApi.WorkQueueId;
    workQueueMembershipActivatedAt?: Date;
    /** The party who is responsible for taking the next action on an Encounter, as defined by ownership of open Tasks. */
    ownerOfNextAction: CandidApi.encounters.v4.EncounterOwnerOfNextActionType;
    /**
     * The party who originally submitted the Claim.
     * For Claims originating in Candid, this will be EncounterSubmissionOriginType.CANDID.
     * For Encounters created with an external_claim_submission object, this will be EncounterSubmissionOriginType.EXTERNAL.
     */
    submissionOrigin: CandidApi.encounters.v4.EncounterSubmissionOriginType;
    /**
     * Key-value pairs that must adhere to a schema created via the Custom Schema API. Multiple schema
     * instances cannot be created for the same schema on an encounter.
     */
    schemaInstances: CandidApi.customSchemas.v1.SchemaInstance[];
}
