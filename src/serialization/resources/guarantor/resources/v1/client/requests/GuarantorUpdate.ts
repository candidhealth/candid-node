/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const GuarantorUpdate: core.serialization.Schema<
    serializers.guarantor.v1.GuarantorUpdate.Raw,
    CandidApi.guarantor.v1.GuarantorUpdate
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string()),
    address: core.serialization
        .lazyObject(async () => (await import("../../../../../..")).StreetAddressLongZip)
        .optional(),
    contactInfo: core.serialization.property(
        "contact_info",
        core.serialization.lazyObject(async () => (await import("../../../../../..")).ContactInfo).optional()
    ),
});

export declare namespace GuarantorUpdate {
    interface Raw {
        first_name?: string | null;
        last_name?: string | null;
        external_id?: string | null;
        date_of_birth: string;
        address?: serializers.StreetAddressLongZip.Raw | null;
        contact_info?: serializers.ContactInfo.Raw | null;
    }
}