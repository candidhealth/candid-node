/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export interface SubscriberBase extends CandidApi.IndividualBase {
    patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll;
    dateOfBirth?: string;
    address?: CandidApi.StreetAddressShortZip;
}
