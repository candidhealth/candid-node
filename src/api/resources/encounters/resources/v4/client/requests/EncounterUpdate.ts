/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
 *         externalId: CandidApi.EncounterExternalId("string"),
 *         dateOfService: "2023-01-15",
 *         diagnosisIds: [CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
 *         tagIds: [CandidApi.TagId("string")],
 *         clinicalNotes: [{
 *                 category: CandidApi.encounters.v4.NoteCategory.Clinical,
 *                 notes: [{
 *                         text: "string",
 *                         authorName: "string",
 *                         authorNpi: CandidApi.Npi("string"),
 *                         timestamp: new Date("2024-01-15T09:30:00.000Z")
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
 *         billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
 *         responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
 *         providerAcceptsAssignment: true,
 *         benefitsAssignedToProvider: true,
 *         synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
 *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *         placeOfServiceCodeAsSubmitted: CandidApi.FacilityTypeCode.Pharmacy,
 *         appointmentType: "string",
 *         endDateOfService: "2023-01-15",
 *         subscriberPrimary: {
 *             insuranceCard: {
 *                 memberId: "string",
 *                 payerName: "string",
 *                 payerId: "string",
 *                 rxBin: "string",
 *                 rxPcn: "string",
 *                 imageUrlFront: "string",
 *                 imageUrlBack: "string",
 *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
 *                 groupNumber: "string",
 *                 planName: "string",
 *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
 *                 insuranceType: CandidApi.InsuranceTypeCode.C01
 *             },
 *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *             dateOfBirth: "2023-01-15",
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
 *             gender: CandidApi.Gender.Male
 *         },
 *         subscriberSecondary: {
 *             insuranceCard: {
 *                 memberId: "string",
 *                 payerName: "string",
 *                 payerId: "string",
 *                 rxBin: "string",
 *                 rxPcn: "string",
 *                 imageUrlFront: "string",
 *                 imageUrlBack: "string",
 *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
 *                 groupNumber: "string",
 *                 planName: "string",
 *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
 *                 insuranceType: CandidApi.InsuranceTypeCode.C01
 *             },
 *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *             dateOfBirth: "2023-01-15",
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
 *             gender: CandidApi.Gender.Male
 *         },
 *         additionalInformation: "string",
 *         serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
 *         admissionDate: "2023-01-15",
 *         dischargeDate: "2023-01-15",
 *         onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
 *         lastMenstrualPeriodDate: "2023-01-15",
 *         delayReasonCode: CandidApi.DelayReasonCode.C1,
 *         patient: {
 *             firstName: "string",
 *             lastName: "string",
 *             gender: CandidApi.Gender.Male,
 *             externalId: "string",
 *             dateOfBirth: "2023-01-15",
 *             address: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             phoneNumbers: [{
 *                     number: "1234567890",
 *                     type: CandidApi.PhoneNumberType.Home
 *                 }],
 *             phoneConsent: true,
 *             email: CandidApi.Email("johndoe@joincandidhealth.com"),
 *             emailConsent: true,
 *             nonInsurancePayers: [CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]
 *         },
 *         patientAuthorizedRelease: true,
 *         schemaInstances: [{
 *                 schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
 *                 content: {
 *                     "provider_category": "internist",
 *                     "is_urgent_care": true,
 *                     "bmi": 24.2,
 *                     "age": 38
 *                 }
 *             }],
 *         vitals: {
 *             heightIn: 70,
 *             weightLbs: 165,
 *             bloodPressureSystolicMmhg: 115,
 *             bloodPressureDiastolicMmhg: 85,
 *             bodyTemperatureF: 98,
 *             hemoglobinGdl: 15.1,
 *             hematocritPct: 51.2
 *         }
 *     }
 */
export interface EncounterUpdate {
    /** Box 23 on the CMS-1500 claim form. */
    priorAuthorizationNumber?: CandidApi.encounters.v4.PriorAuthorizationNumber;
    /**
     * A client-specified unique ID to associate with this encounter;
     * for example, your internal encounter ID or a Dr. Chrono encounter ID.
     * This field should not contain PHI.
     *
     */
    externalId?: CandidApi.EncounterExternalId;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-24.
     * This date must be the local date in the timezone where the service occurred.
     * Box 24a on the CMS-1500 claim form.
     * If service occurred over a range of dates, this should be the start date.
     * If service lines have distinct date_of_service values, updating the encounter's date_of_service will fail. If all service line date_of_service values are the same, updating the encounter's date_of_service will update all service line date_of_service values.
     *
     */
    dateOfService?: string;
    /**
     * Ideally, this field should contain no more than 12 diagnoses. However, more diagnoses
     * may be submitted at this time, and coders will later prioritize the 12 that will be
     * submitted to the payor.
     *
     */
    diagnosisIds?: CandidApi.DiagnosisId[];
    /** Names of tags that should be on the encounter.  Note all tags on encounter will be overridden with this list. */
    tagIds?: CandidApi.TagId[];
    /** Holds a collection of clinical observations made by healthcare providers during patient encounters. */
    clinicalNotes?: CandidApi.encounters.v4.ClinicalNoteCategoryCreate[];
    /** Specifies the address to which payments for the claim should be sent. */
    payToAddress?: CandidApi.StreetAddressLongZip;
    /**
     * Defines if the Encounter is to be billed by Candid to the responsible_party. Examples for when this should be set to NOT_BILLABLE include if the Encounter has not occurred yet or if there is no intention of ever billing the responsible_party.
     *
     */
    billableStatus?: CandidApi.encounters.v4.BillableStatusType;
    /**
     * Defines the party to be billed with the initial balance owed on the claim. Use SELF_PAY if you intend to bill self pay/cash pay.
     *
     */
    responsibleParty?: CandidApi.encounters.v4.ResponsiblePartyType;
    /**
     * Whether you have accepted the patient's authorization for insurance payments to be made to you, not them. Box 27 on the CMS-1500 claim form.
     *
     */
    providerAcceptsAssignment?: boolean;
    /**
     * Whether this patient has authorized insurance payments to be made to you, not them. If false, patient may receive reimbursement. Box 13 on the CMS-1500 claim form.
     *
     */
    benefitsAssignedToProvider?: boolean;
    /**
     * Whether or not this was a synchronous or asynchronous encounter. Asynchronous encounters occur when providers and patients communicate online using forms, instant messaging, or other pre-recorded digital mediums. Synchronous encounters occur in live, real-time settings where the patient interacts directly with the provider, such as over video or a phone call.
     *
     */
    synchronicity?: CandidApi.encounters.v4.SynchronicityType;
    /**
     * Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set).
     *
     */
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    /**
     * Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set).
     *
     */
    placeOfServiceCodeAsSubmitted?: CandidApi.FacilityTypeCode;
    /**
     * Human-readable description of the appointment type (ex: "Acupuncture - Headaches").
     *
     */
    appointmentType?: string;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     * This date must be the local date in the timezone where the service occurred.
     * If omitted, the Encounter is assumed to be for a single day.
     * Must not be temporally before the date_of_service field.
     * If service lines have distinct end_date_of_service values, updating the encounter's end_date_of_service will fail. If all service line end_date_of_service values are the same, updating the encounter's end_date_of_service will update all service line date_of_service values.
     *
     */
    endDateOfService?: string;
    /** Contains details of the primary insurance subscriber. */
    subscriberPrimary?: CandidApi.SubscriberCreate;
    /** Contains details of the secondary insurance subscriber. */
    subscriberSecondary?: CandidApi.SubscriberCreate;
    /**
     * Defines additional information on the claim needed by the payer.
     * Box 19 on the CMS-1500 claim form.
     *
     */
    additionalInformation?: string;
    /**
     * 837p Loop2300 REF*4N
     * Required when mandated by government law or regulation to obtain authorization for specific service(s) but, for the
     * reasons listed in one of the enum values of ServiceAuthorizationExceptionCode, the service was performed without
     * obtaining the authorization.
     *
     */
    serviceAuthorizationExceptionCode?: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode;
    /**
     * 837p Loop2300 DTP*435, CMS-1500 Box 18
     * Required on all ambulance claims when the patient was known to be admitted to the hospital.
     * OR
     * Required on all claims involving inpatient medical visits.
     *
     */
    admissionDate?: string;
    /**
     * 837p Loop2300 DTP*096, CMS-1500 Box 18
     * Required for inpatient claims when the patient was discharged from the facility and the discharge date is known.
     *
     */
    dischargeDate?: string;
    /**
     * 837p Loop2300 DTP*431, CMS-1500 Box 14
     * Required for the initial medical service or visit performed in response to a medical emergency when the date is available and is different than the date of service.
     * OR
     * This date is the onset of acute symptoms for the current illness or condition.
     *
     */
    onsetOfCurrentIllnessOrSymptomDate?: string;
    /**
     * 837p Loop2300 DTP*484, CMS-1500 Box 14
     * Required when, in the judgment of the provider, the services on this claim are related to the patient's pregnancy.
     *
     */
    lastMenstrualPeriodDate?: string;
    /**
     * 837i Loop2300, CLM-1300 Box 20
     * Code indicating the reason why a request was delayed
     *
     */
    delayReasonCode?: CandidApi.DelayReasonCode;
    /**
     * Contains the identification information of the individual receiving medical services.
     *
     */
    patient?: CandidApi.PatientUpdate;
    /**
     * Whether this patient has authorized the release of medical information
     * for billing purpose.
     * Box 12 on the CMS-1500 claim form.
     *
     */
    patientAuthorizedRelease?: boolean;
    /**
     * Key-value pairs that must adhere to a schema created via the Custom Schema API. Multiple schema
     * instances cannot be created for the same schema on an encounter. Updating schema instances utilizes PUT
     * semantics, so the schema instances on the encounter will be set to whatever inputs are provided. If null
     * is provided as an input, then the encounter's schema instances will be cleared.
     *
     */
    schemaInstances?: CandidApi.customSchemas.v1.SchemaInstance[];
    /**
     * If a vitals entity already exists for the encounter, then all values will be updated to the provided values.
     * Otherwise, a new vitals object will be created for the encounter.
     *
     */
    vitals?: CandidApi.encounters.v4.VitalsUpdate;
}
