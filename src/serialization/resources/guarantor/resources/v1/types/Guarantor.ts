/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Guarantor: core.serialization.ObjectSchema<
    serializers.guarantor.v1.Guarantor.Raw,
    CandidApi.guarantor.v1.Guarantor
> = core.serialization
    .object({
        guarantorId: core.serialization.property(
            "guarantor_id",
            core.serialization.lazy(async () => (await import("../../../../..")).guarantor.v1.GuarantorId)
        ),
        phoneNumbers: core.serialization.property(
            "phone_numbers",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).PhoneNumber)
            )
        ),
        phoneConsent: core.serialization.property("phone_consent", core.serialization.boolean()),
        email: core.serialization.lazy(async () => (await import("../../../../..")).Email).optional(),
        emailConsent: core.serialization.property("email_consent", core.serialization.boolean()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).guarantor.v1.GuarantorBase));

export declare namespace Guarantor {
    interface Raw extends serializers.guarantor.v1.GuarantorBase.Raw {
        guarantor_id: serializers.guarantor.v1.GuarantorId.Raw;
        phone_numbers: serializers.PhoneNumber.Raw[];
        phone_consent: boolean;
        email?: serializers.Email.Raw | null;
        email_consent: boolean;
    }
}
