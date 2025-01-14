/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         data: {
 *             diagnoses: [],
 *             interventions: [],
 *             externalClaimSubmission: {
 *                 claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
 *                 patientControlNumber: "PATIENT_CONTROL_NUMBER",
 *                 submissionRecords: [{
 *                         submittedAt: new Date("2023-01-01T13:00:00.000Z"),
 *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
 *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
 *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic
 *                     }, {
 *                         submittedAt: new Date("2023-01-04T12:00:00.000Z"),
 *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Replacement,
 *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
 *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper
 *                     }]
 *             },
 *             serviceLines: [],
 *             patientHistories: [],
 *             billingNotes: [],
 *             benefitsAssignedToProvider: true,
 *             priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
 *             externalId: CandidApi.EncounterExternalId("string"),
 *             dateOfService: "2023-01-15",
 *             tagIds: [],
 *             clinicalNotes: [],
 *             payToAddress: {
 *                 address1: "123 Main St",
 *                 address2: "Apt 1",
 *                 city: "New York",
 *                 state: CandidApi.State.Ny,
 *                 zipCode: "10001",
 *                 zipPlusFourCode: "1234"
 *             },
 *             billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
 *             responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
 *             providerAcceptsAssignment: true,
 *             synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
 *             placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *             appointmentType: "string",
 *             endDateOfService: "2023-01-15",
 *             subscriberPrimary: {
 *                 insuranceCard: {
 *                     memberId: "string",
 *                     payerName: "string",
 *                     payerId: "string"
 *                 },
 *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *                 firstName: "string",
 *                 lastName: "string",
 *                 gender: CandidApi.Gender.Male
 *             },
 *             subscriberSecondary: {
 *                 insuranceCard: {
 *                     memberId: "string",
 *                     payerName: "string",
 *                     payerId: "string"
 *                 },
 *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
 *                 firstName: "string",
 *                 lastName: "string",
 *                 gender: CandidApi.Gender.Male
 *             },
 *             additionalInformation: "string",
 *             serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
 *             admissionDate: "2023-01-15",
 *             dischargeDate: "2023-01-15",
 *             onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
 *             lastMenstrualPeriodDate: "2023-01-15",
 *             delayReasonCode: CandidApi.DelayReasonCode.C1,
 *             patient: {},
 *             patientAuthorizedRelease: true,
 *             schemaInstances: [],
 *             vitals: {
 *                 heightIn: 70,
 *                 weightLbs: 165,
 *                 bloodPressureSystolicMmhg: 115,
 *                 bloodPressureDiastolicMmhg: 85,
 *                 bodyTemperatureF: 98,
 *                 hemoglobinGdl: 15.1,
 *                 hematocritPct: 51.2
 *             },
 *             existingMedications: [],
 *             renderingProvider: {},
 *             serviceFacility: {
 *                 organizationName: "Test Organization",
 *                 address: {
 *                     address1: "123 Main St",
 *                     address2: "Apt 1",
 *                     city: "New York",
 *                     state: CandidApi.State.Ny,
 *                     zipCode: "10001",
 *                     zipPlusFourCode: "1234"
 *                 }
 *             },
 *             guarantor: {},
 *             billingProvider: {},
 *             supervisingProvider: {},
 *             referringProvider: {},
 *             initialReferringProvider: {},
 *             referralNumber: "string"
 *         },
 *         chargeExternalId: "string",
 *         ehrSourceUrl: "string",
 *         patientExternalId: "string",
 *         status: CandidApi.chargeCapture.v1.ChargeCaptureStatus.Planned,
 *         dateOfService: "2023-01-15"
 *     }
 */
export interface ChargeCaptureUpdate {
    data?: CandidApi.chargeCapture.v1.ChargeCaptureData;
    /**
     * A client-specified unique ID to associate with this encounter;
     * for example, your internal encounter ID or a Dr. Chrono encounter ID.
     * This field should not contain PHI.
     *
     */
    chargeExternalId?: string;
    /**
     * External URL reference that links to Charge Capture details within the external system (e.g. the EHR visit page).
     * Send full URL format for the external link (e.g. https://emr_charge_capture_url.com/123).
     *
     */
    ehrSourceUrl?: string;
    /** The patient ID from the external EMR platform for the patient */
    patientExternalId?: string;
    /** the status of the charge capture */
    status?: CandidApi.chargeCapture.v1.ChargeCaptureStatus;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-24.
     * This date must be the local date in the timezone where the service occurred.
     *
     */
    dateOfService?: string;
}
