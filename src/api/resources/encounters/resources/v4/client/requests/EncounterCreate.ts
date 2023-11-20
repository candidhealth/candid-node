/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

export interface EncounterCreate extends CandidApi.encounters.v4.EncounterBase {
    /**
     * Contains the identification information of the individual receiving medical services.
     *
     */
    patient: CandidApi.PatientCreate;
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
     * The provider who referred the services that were rendered.
     * All physicians who order services or refer Medicare beneficiaries must
     * report this data.
     * If a claim involves multiple referring physicians, create a separate
     * encounter for each physician.
     *
     */
    referringProvider?: CandidApi.encounterProviders.v2.ReferringProvider;
    /**
     * Encounter Service facility is typically the location a medical service was rendered, such as a provider office or hospital. For telehealth, service facility can represent the provider's location when the service was delivered (e.g., home), or the location where an in-person visit would have taken place, whichever is easier to identify. If the provider is in-network, service facility may be defined in payer contracts. Box 32 on the CMS-1500 claim form. Note that for an in-network claim to be successfully adjudicated, the service facility address listed on claims must match what was provided to the payer during the credentialing process.
     *
     */
    serviceFacility?: CandidApi.EncounterServiceFacilityBase;
    /**
     * Subscriber_primary is required when responsible_party is INSURANCE_PAY (i.e. when the claim should be billed to insurance).
     * These are not required fields when responsible_party is SELF_PAY (i.e. when the claim should be billed to the patient).
     * However, if you collect this for patients, even self-pay, we recommend including it when sending encounters to Candid.
     * Note: Cash Pay is no longer a valid payer_id in v4, please use responsible party to define self-pay claims.
     *
     */
    subscriberPrimary?: CandidApi.SubscriberCreate;
    /**
     * Please always include this when you have it, even for self-pay claims.
     *
     */
    subscriberSecondary?: CandidApi.SubscriberCreate;
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
     * Personal and contact info for the guarantor of the patient responsibility.
     *
     */
    guarantor?: CandidApi.guarantor.v1.GuarantorCreate;
    /**
     * ***This field is in beta.***
     * To be included for claims that have been submitted outside of Candid.
     * Candid supports posting remits and payments to these claims and working them in-platform (e.g. editing, resubmitting).
     *
     */
    externalClaimSubmission?: CandidApi.claimSubmission.v1.ExternalClaimSubmissionCreate;
}
