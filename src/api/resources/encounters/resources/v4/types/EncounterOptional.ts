/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface EncounterOptional {
    /** Whether this patient has authorized insurance payments to be made to you, not them. If false, patient may receive reimbursement. Box 13 on the CMS-1500 claim form. */
    benefitsAssignedToProvider?: boolean;
    /** Box 23 on the CMS-1500 claim form. */
    priorAuthorizationNumber?: CandidApi.encounters.v4.PriorAuthorizationNumber;
    /**
     * A client-specified unique ID to associate with this encounter;
     * for example, your internal encounter ID or a Dr. Chrono encounter ID.
     * This field should not contain PHI.
     */
    externalId?: CandidApi.EncounterExternalId;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-24.
     * This date must be the local date in the timezone where the service occurred.
     * Box 24a on the CMS-1500 claim form.
     * If service occurred over a range of dates, this should be the start date.
     * If service lines have distinct date_of_service values, updating the encounter's date_of_service will fail. If all service line date_of_service values are the same, updating the encounter's date_of_service will update all service line date_of_service values.
     */
    dateOfService?: string;
    /** Names of tags that should be on the encounter. Note all tags on encounter will be overridden with this list. */
    tagIds?: CandidApi.TagId[];
    /** Holds a collection of clinical observations made by healthcare providers during patient encounters. */
    clinicalNotes?: CandidApi.encounters.v4.ClinicalNoteCategoryCreate[];
    /** Specifies the address to which payments for the claim should be sent. */
    payToAddress?: CandidApi.StreetAddressLongZip;
    /** Defines if the Encounter is to be billed by Candid to the responsible_party. Examples for when this should be set to NOT_BILLABLE include if the Encounter has not occurred yet or if there is no intention of ever billing the responsible_party. */
    billableStatus?: CandidApi.encounters.v4.BillableStatusType;
    /** Defines the party to be billed with the initial balance owed on the claim. Use SELF_PAY if you intend to bill self pay/cash pay. */
    responsibleParty?: CandidApi.encounters.v4.ResponsiblePartyType;
    /** Whether you have accepted the patient's authorization for insurance payments to be made to you, not them. Box 27 on the CMS-1500 claim form. */
    providerAcceptsAssignment?: boolean;
    /** Whether or not this was a synchronous or asynchronous encounter. Asynchronous encounters occur when providers and patients communicate online using forms, instant messaging, or other pre-recorded digital mediums. Synchronous encounters occur in live, real-time settings where the patient interacts directly with the provider, such as over video or a phone call. */
    synchronicity?: CandidApi.encounters.v4.SynchronicityType;
    /** Box 24B on the CMS-1500 claim form. 837p Loop2300, CLM-05-1. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set). */
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    /** Human-readable description of the appointment type (ex: "Acupuncture - Headaches"). */
    appointmentType?: string;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     * This date must be the local date in the timezone where the service occurred.
     * If omitted, the Encounter is assumed to be for a single day.
     * Must not be temporally before the date_of_service field.
     * If service lines have distinct end_date_of_service values, updating the encounter's end_date_of_service will fail. If all service line end_date_of_service values are the same, updating the encounter's end_date_of_service will update all service line date_of_service values.
     */
    endDateOfService?: string;
    /** Contains details of the primary insurance subscriber. */
    subscriberPrimary?: CandidApi.SubscriberCreate;
    /** Contains details of the secondary insurance subscriber. */
    subscriberSecondary?: CandidApi.SubscriberCreate;
    /**
     * Defines additional information on the claim needed by the payer.
     * Box 19 on the CMS-1500 claim form.
     */
    additionalInformation?: string;
    /**
     * 837p Loop2300 REF\*4N
     * Required when mandated by government law or regulation to obtain authorization for specific service(s) but, for the
     * reasons listed in one of the enum values of ServiceAuthorizationExceptionCode, the service was performed without
     * obtaining the authorization.
     */
    serviceAuthorizationExceptionCode?: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode;
    /**
     * 837p Loop2300 DTP\*435, CMS-1500 Box 18
     * Required on all ambulance claims when the patient was known to be admitted to the hospital.
     * OR
     * Required on all claims involving inpatient medical visits.
     */
    admissionDate?: string;
    /**
     * 837p Loop2300 DTP\*096, CMS-1500 Box 18
     * Required for inpatient claims when the patient was discharged from the facility and the discharge date is known.
     */
    dischargeDate?: string;
    /**
     * 837p Loop2300 DTP\*431, CMS-1500 Box 14
     * Required for the initial medical service or visit performed in response to a medical emergency when the date is available and is different than the date of service.
     * OR
     * This date is the onset of acute symptoms for the current illness or condition.
     */
    onsetOfCurrentIllnessOrSymptomDate?: string;
    /**
     * 837p Loop2300 DTP\*484, CMS-1500 Box 14
     * Required when, in the judgment of the provider, the services on this claim are related to the patient's pregnancy.de
     */
    lastMenstrualPeriodDate?: string;
    /**
     * 837i Loop2300, CLM-1300 Box 20
     * Code indicating the reason why a request was delayed
     */
    delayReasonCode?: CandidApi.DelayReasonCode;
    /** Contains the identification information of the individual receiving medical services. */
    patient?: CandidApi.PatientUpdate;
    /**
     * Whether this patient has authorized the release of medical information
     * for billing purpose.
     * Box 12 on the CMS-1500 claim form.
     */
    patientAuthorizedRelease?: boolean;
    /**
     * Key-value pairs that must adhere to a schema created via the Custom Schema API. Multiple schema
     * instances cannot be created for the same schema on an encounter. Updating schema instances utilizes PUT
     * semantics, so the schema instances on the encounter will be set to whatever inputs are provided. If null
     * is provided as an input, then the encounter's schema instances will be cleared.
     */
    schemaInstances?: CandidApi.customSchemas.v1.SchemaInstance[];
    /**
     * If a vitals entity already exists for the encounter, then all values will be updated to the provided values.
     * Otherwise, a new vitals object will be created for the encounter.
     */
    vitals?: CandidApi.encounters.v4.VitalsUpdate;
    /**
     * Existing medications that should be on the encounter.
     * Note all current existing medications on encounter will be overridden with this list.
     */
    existingMedications?: CandidApi.encounters.v4.Medication[];
    /**
     * The rendering provider is the practitioner -- physician, nurse practitioner, etc. -- performing the service.
     * For telehealth services, the rendering provider performs the visit, asynchronous communication, or other service. The rendering provider address should generally be the same as the service facility address.
     */
    renderingProvider?: CandidApi.encounterProviders.v2.RenderingProviderUpdate;
    /** Encounter Service facility is typically the location a medical service was rendered, such as a provider office or hospital. For telehealth, service facility can represent the provider's location when the service was delivered (e.g., home), or the location where an in-person visit would have taken place, whichever is easier to identify. If the provider is in-network, service facility may be defined in payer contracts. Box 32 on the CMS-1500 claim form. Note that for an in-network claim to be successfully adjudicated, the service facility address listed on claims must match what was provided to the payer during the credentialing process. */
    serviceFacility?: CandidApi.EncounterServiceFacilityUpdate;
    /** Personal and contact info for the guarantor of the patient responsibility. */
    guarantor?: CandidApi.guarantor.v1.GuarantorUpdate;
    /** The billing provider is the provider or business entity submitting the claim. Billing provider may be, but is not necessarily, the same person/NPI as the rendering provider. From a payer's perspective, this represents the person or entity being reimbursed. When a contract exists with the target payer, the billing provider should be the entity contracted with the payer. In some circumstances, this will be an individual provider. In that case, submit that provider's NPI and the tax ID (TIN) that the provider gave to the payer during contracting. In other cases, the billing entity will be a medical group. If so, submit the group NPI and the group's tax ID. Box 33 on the CMS-1500 claim form. */
    billingProvider?: CandidApi.encounterProviders.v2.BillingProviderUpdate;
    /** Required when the rendering provider is supervised by a physician. If not required by this implementation guide, do not send. */
    supervisingProvider?: CandidApi.encounterProviders.v2.SupervisingProviderUpdate;
    /**
     * The final provider who referred the services that were rendered.
     * All physicians who order services or refer Medicare beneficiaries must
     * report this data.
     */
    referringProvider?: CandidApi.encounterProviders.v2.ReferringProviderUpdate;
    /**
     * The second iteration of Loop ID-2310. Use code "P3 - Primary Care Provider" in this loop to
     * indicate the initial referral from the primary care provider or whatever provider wrote the initial referral for this patient's episode of care being billed/reported in this transaction.
     */
    initialReferringProvider?: CandidApi.encounterProviders.v2.InitialReferringProviderUpdate;
    /** Refers to REF\*9F on the 837p. Value cannot be greater than 50 characters. */
    referralNumber?: string;
    /** Refers Box 24H on the CMS1500 form and Loop 2300 CRC - EPSDT Referral on the 837P form */
    epsdtReferral?: CandidApi.encounters.v4.EpsdtReferral;
    /** Refers to Loop 2300 - Segment PWK on the 837P form. No more than 10 entries are permitted. */
    claimSupplementalInformation?: CandidApi.encounters.v4.ClaimSupplementalInformation[];
}
