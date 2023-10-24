/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface EncounterBase {
    /**
     * A client-specified unique ID to associate with this encounter;
     * for example, your internal encounter ID or a Dr. Chrono encounter ID.
     * This field should not contain PHI.
     *
     */
    externalId: CandidApi.EncounterExternalId;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-24.
     * This date must be the local date in the timezone where the service occurred.
     * Box 24a on the CMS-1500 claim form.
     * If service occurred over a range of dates, this should be the start date.
     *
     */
    dateOfService: CandidApi.Date_;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     * This date must be the local date in the timezone where the service occurred.
     * If omitted, the Encounter is assumed to be for a single day.
     * Must not be temporally before the date_of_service field.
     *
     */
    endDateOfService?: CandidApi.Date_;
    /** Box 23 on the CMS-1500 claim form. */
    priorAuthorizationNumber?: CandidApi.encounters.v4.PriorAuthorizationNumber;
    /**
     * Whether this patient has authorized the release of medical information
     * for billing purpose.
     * Box 12 on the CMS-1500 claim form.
     *
     */
    patientAuthorizedRelease: boolean;
    /**
     * Whether this patient has authorized insurance payments to be made to you,
     * not them. If false, patient may receive reimbursement.
     * Box 13 on the CMS-1500 claim form.
     *
     */
    benefitsAssignedToProvider: boolean;
    /**
     * Whether you have accepted the patient's authorization for insurance payments
     * to be made to you, not them.
     * Box 27 on the CMS-1500 claim form.
     *
     */
    providerAcceptsAssignment: boolean;
    /**
     * Human-readable description of the appointment type (ex: "Acupuncture - Headaches").
     *
     */
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
     *
     */
    synchronicity?: CandidApi.encounters.v4.SynchronicityType;
    /**
     * Defines if the Encounter is to be billed by Candid to the responsible_party.
     * Examples for when this should be set to NOT_BILLABLE include
     * if the Encounter has not occurred yet or if there is no intention of ever billing the responsible_party.
     *
     */
    billableStatus: CandidApi.encounters.v4.BillableStatusType;
    /**
     * Defines the party to be billed with the initial balance owed on the claim.
     *
     */
    responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType;
    /**
     * Defines additional information on the claim needed by the payer.
     * Box 19 on the CMS-1500 claim form.
     *
     */
    additionalInformation?: string;
}
