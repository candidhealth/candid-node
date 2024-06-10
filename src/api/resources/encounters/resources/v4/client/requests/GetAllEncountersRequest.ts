/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         limit: 100,
 *         claimStatus: CandidApi.ClaimStatus.BillerReceived,
 *         sort: CandidApi.encounters.v4.EncounterSortOptions.CreatedAtAsc,
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
 *         dateOfServiceMin: CandidApi.Date_("2019-08-24"),
 *         dateOfServiceMax: CandidApi.Date_("2019-08-25"),
 *         primaryPayerNames: "Medicare,Medicaid",
 *         searchTerm: "doe",
 *         externalId: CandidApi.EncounterExternalId("123456"),
 *         diagnosesUpdatedSince: new Date("2019-08-24T14:15:22.000Z")
 *     }
 */
export interface GetAllEncountersRequest {
    /**
     * Maximum number of entities per page, defaults to 100.
     */
    limit?: number;
    /**
     * Indicates the current status of an insurance claim within the billing process.
     */
    claimStatus?: CandidApi.ClaimStatus;
    /**
     * Defaults to created_at:desc.
     */
    sort?: CandidApi.encounters.v4.EncounterSortOptions;
    pageToken?: CandidApi.PageToken;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     */
    dateOfServiceMin?: CandidApi.Date_;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     */
    dateOfServiceMax?: CandidApi.Date_;
    /**
     * Comma delimited string.
     */
    primaryPayerNames?: string;
    /**
     * Filter by any of the following fields: encounter_id, claim_id, patient external_id,
     * patient date of birth, patient first name, patient last name,
     * or encounter external id.
     */
    searchTerm?: string;
    /**
     * Filter to an exact match on encounter external_id, if one exists.
     */
    externalId?: CandidApi.EncounterExternalId;
    /**
     * ISO 8601 timestamp; ideally in UTC (although not required): 2019-08-24T14:15:22Z.
     */
    diagnosesUpdatedSince?: Date;
    /**
     * Filter by name of tags on encounters.
     */
    tagIds?: CandidApi.TagId | CandidApi.TagId[];
    workQueueId?: CandidApi.WorkQueueId;
    /**
     * Defines if the Encounter is to be billed by Candid to the responsible_party. Examples for when this should be set to NOT_BILLABLE include if the Encounter has not occurred yet or if there is no intention of ever billing the responsible_party.
     */
    billableStatus?: CandidApi.encounters.v4.BillableStatusType;
    /**
     * Defines the party to be billed with the initial balance owed on the claim. Use SELF_PAY if you intend to bill self pay/cash pay.
     */
    responsibleParty?: CandidApi.encounters.v4.ResponsiblePartyType;
    /**
     * The party who is responsible for taking the next action on an Encounter, as defined by ownership of open Tasks.
     */
    ownerOfNextAction?: CandidApi.encounters.v4.EncounterOwnerOfNextActionType;
    /**
     * The patient ID from the external EMR platform for the patient
     */
    patientExternalId?: string;
}
