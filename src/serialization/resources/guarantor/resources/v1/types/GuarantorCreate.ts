/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PhoneNumber } from "../../../../commons/types/PhoneNumber";
import { Email } from "../../../../commons/types/Email";
import { GuarantorBase } from "./GuarantorBase";

export const GuarantorCreate: core.serialization.ObjectSchema<
    serializers.guarantor.v1.GuarantorCreate.Raw,
    CandidApi.guarantor.v1.GuarantorCreate
> = core.serialization
    .object({
        phoneNumbers: core.serialization.property("phone_numbers", core.serialization.list(PhoneNumber).optional()),
        phoneConsent: core.serialization.property("phone_consent", core.serialization.boolean().optional()),
        email: Email.optional(),
        emailConsent: core.serialization.property("email_consent", core.serialization.boolean().optional()),
    })
    .extend(GuarantorBase);

export declare namespace GuarantorCreate {
    export interface Raw extends GuarantorBase.Raw {
        phone_numbers?: PhoneNumber.Raw[] | null;
        phone_consent?: boolean | null;
        email?: Email.Raw | null;
        email_consent?: boolean | null;
    }
}
