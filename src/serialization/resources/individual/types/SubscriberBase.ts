/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const SubscriberBase: core.serialization.ObjectSchema<serializers.SubscriberBase.Raw, CandidApi.SubscriberBase> =
    core.serialization
        .object({
            patientRelationshipToSubscriberCode: core.serialization.property(
                "patient_relationship_to_subscriber_code",
                core.serialization.lazy(async () => (await import("../../..")).PatientRelationshipToInsuredCodeAll)
            ),
            dateOfBirth: core.serialization.property(
                "date_of_birth",
                core.serialization.lazy(async () => (await import("../../..")).Date_).optional()
            ),
            address: core.serialization
                .lazyObject(async () => (await import("../../..")).StreetAddressShortZip)
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).IndividualBase));

export declare namespace SubscriberBase {
    interface Raw extends serializers.IndividualBase.Raw {
        patient_relationship_to_subscriber_code: serializers.PatientRelationshipToInsuredCodeAll.Raw;
        date_of_birth?: serializers.Date_.Raw | null;
        address?: serializers.StreetAddressShortZip.Raw | null;
    }
}
