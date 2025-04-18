/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { PatientRelationshipToInsuredCodeAll } from "../../commons/types/PatientRelationshipToInsuredCodeAll";
import { StreetAddressShortZip } from "../../commons/types/StreetAddressShortZip";
import { IndividualBase } from "./IndividualBase";

export const SubscriberBase: core.serialization.ObjectSchema<serializers.SubscriberBase.Raw, CandidApi.SubscriberBase> =
    core.serialization
        .object({
            patientRelationshipToSubscriberCode: core.serialization.property(
                "patient_relationship_to_subscriber_code",
                PatientRelationshipToInsuredCodeAll,
            ),
            dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
            address: StreetAddressShortZip.optional(),
        })
        .extend(IndividualBase);

export declare namespace SubscriberBase {
    export interface Raw extends IndividualBase.Raw {
        patient_relationship_to_subscriber_code: PatientRelationshipToInsuredCodeAll.Raw;
        date_of_birth?: string | null;
        address?: StreetAddressShortZip.Raw | null;
    }
}
