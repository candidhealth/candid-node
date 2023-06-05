/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../..";

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
     *
     */
    dateOfService?: CandidApi.Date_;
    /**
     * Ideally, this field should contain no more than 12 diagnoses. However, more diagnoses
     * may be submitted at this time, and coders will later prioritize the 12 that will be
     * submitted to the payor.
     *
     */
    diagnosisIds?: CandidApi.DiagnosisId[];
    tagIds?: CandidApi.TagId[];
    clinicalNotes?: CandidApi.encounters.v4.ClinicalNoteCategoryCreate[];
    payToAddress?: CandidApi.StreetAddressLongZip;
    patientIsSelfGuarantor?: boolean;
    /**
     * If a patient is no longer a self-guarantor, a newly-created guarantor object can be passed
     * via this field. Note that patient_is_self_guarantor should be toggled to False
     *
     */
    guarantorId?: CandidApi.guarantor.v1.GuarantorId;
}
