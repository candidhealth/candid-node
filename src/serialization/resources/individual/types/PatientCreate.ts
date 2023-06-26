/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const PatientCreate: core.serialization.ObjectSchema<serializers.PatientCreate.Raw, CandidApi.PatientCreate> =
    core.serialization
        .object({
            phoneNumbers: core.serialization.property(
                "phone_numbers",
                core.serialization
                    .list(core.serialization.lazyObject(async () => (await import("../../..")).PhoneNumber))
                    .optional()
            ),
            phoneConsent: core.serialization.property("phone_consent", core.serialization.boolean().optional()),
            email: core.serialization.lazy(async () => (await import("../../..")).Email).optional(),
            emailConsent: core.serialization.property("email_consent", core.serialization.boolean().optional()),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).PatientBase));

export declare namespace PatientCreate {
    interface Raw extends serializers.PatientBase.Raw {
        phone_numbers?: serializers.PhoneNumber.Raw[] | null;
        phone_consent?: boolean | null;
        email?: serializers.Email.Raw | null;
        email_consent?: boolean | null;
    }
}
