/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface EncounterBase {
    /**
     * A client-specified unique ID to associate with this encounter;
     * for example, your internal encounter ID or a Dr. Chrono encounter ID.
     * This field should not contain PHI.
     */
    externalId: CandidApi.EncounterExternalId;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-24.
     * This date must be the local date in the timezone where the service occurred.
     * Box 24a on the CMS-1500 claim form.
     * If service occurred over a range of dates, this should be the start date.
     * date_of_service must be defined on either the encounter or the service lines but not both.
     * If there are greater than zero service lines, it is recommended to specify date_of_service on the service_line instead of on the encounter to prepare for future API versions.
     */
    dateOfService?: string;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     * This date must be the local date in the timezone where the service occurred.
     * If omitted, the Encounter is assumed to be for a single day.
     * Must not be temporally before the date_of_service field.
     * If there are greater than zero service lines, it is recommended to specify end_date_of_service on the service_line instead of on the encounter to prepare for future API versions.
     */
    endDateOfService?: string;
    /**
     * Whether this patient has authorized the release of medical information
     * for billing purpose.
     * Box 12 on the CMS-1500 claim form.
     */
    patientAuthorizedRelease: boolean;
    /**
     * Whether this patient has authorized insurance payments to be made to you,
     * not them. If false, patient may receive reimbursement.
     * Box 13 on the CMS-1500 claim form.
     */
    benefitsAssignedToProvider: boolean;
    /**
     * Whether you have accepted the patient's authorization for insurance payments
     * to be made to you, not them.
     * Box 27 on the CMS-1500 claim form.
     */
    providerAcceptsAssignment: boolean;
    /** Human-readable description of the appointment type (ex: "Acupuncture - Headaches"). */
    appointmentType?: string;
    existingMedications?: CandidApi.encounters.v4.Medication[];
    vitals?: CandidApi.encounters.v4.Vitals;
    interventions?: CandidApi.encounters.v4.Intervention[];
    /** Specifies the address to which payments for the claim should be sent. */
    payToAddress?: CandidApi.StreetAddressLongZip;
    /**
     * Whether or not this was a synchronous or asynchronous encounter.
     * Asynchronous encounters occur when providers and patients communicate online using
     * forms, instant messaging, or other pre-recorded digital mediums.
     * Synchronous encounters occur in live, real-time settings where the patient interacts
     * directly with the provider, such as over video or a phone call.
     */
    synchronicity?: CandidApi.encounters.v4.SynchronicityType;
    /**
     * Defines if the Encounter is to be billed by Candid to the responsible_party.
     * Examples for when this should be set to NOT_BILLABLE include
     * if the Encounter has not occurred yet or if there is no intention of ever billing the responsible_party.
     */
    billableStatus: CandidApi.encounters.v4.BillableStatusType;
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
     * Required when, in the judgment of the provider, the services on this claim are related to the patient's pregnancy.
     */
    lastMenstrualPeriodDate?: string;
    /**
     * 837i Loop2300, CLM-1300 Box 20
     * Code indicating the reason why a request was delayed
     */
    delayReasonCode?: CandidApi.DelayReasonCode;
    /** Refers to REF\*9F on the 837p. Value cannot be greater than 50 characters. */
    referralNumber?: string;
}
