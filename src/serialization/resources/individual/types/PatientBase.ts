/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const PatientBase: core.serialization.ObjectSchema<serializers.PatientBase.Raw, CandidApi.PatientBase> =
    core.serialization
        .object({
            externalId: core.serialization.property("external_id", core.serialization.string()),
            dateOfBirth: core.serialization.property(
                "date_of_birth",
                core.serialization.lazy(async () => (await import("../../..")).Date_)
            ),
            address: core.serialization.lazyObject(async () => (await import("../../..")).StreetAddressShortZip),
            contactInfo: core.serialization.property(
                "contact_info",
                core.serialization.lazyObject(async () => (await import("../../..")).ContactInfo).optional()
            ),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).IndividualBase));

export declare namespace PatientBase {
    interface Raw extends serializers.IndividualBase.Raw {
        external_id: string;
        date_of_birth: serializers.Date_.Raw;
        address: serializers.StreetAddressShortZip.Raw;
        contact_info?: serializers.ContactInfo.Raw | null;
    }
}
