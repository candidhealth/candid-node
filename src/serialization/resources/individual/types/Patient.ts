/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { IndividualId } from "./IndividualId";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Email } from "../../commons/types/Email";
import { NonInsurancePayer } from "../../nonInsurancePayers/resources/v1/types/NonInsurancePayer";
import { PatientNonInsurancePayerInfo } from "./PatientNonInsurancePayerInfo";
import { PatientBase } from "./PatientBase";

export const Patient: core.serialization.ObjectSchema<serializers.Patient.Raw, CandidApi.Patient> = core.serialization
    .object({
        individualId: core.serialization.property("individual_id", IndividualId),
        phoneNumbers: core.serialization.property("phone_numbers", core.serialization.list(PhoneNumber)),
        phoneConsent: core.serialization.property("phone_consent", core.serialization.boolean()),
        email: Email.optional(),
        emailConsent: core.serialization.property("email_consent", core.serialization.boolean()),
        nonInsurancePayers: core.serialization.property(
            "non_insurance_payers",
            core.serialization.list(NonInsurancePayer),
        ),
        nonInsurancePayersInfo: core.serialization.property(
            "non_insurance_payers_info",
            core.serialization.list(PatientNonInsurancePayerInfo),
        ),
    })
    .extend(PatientBase);

export declare namespace Patient {
    export interface Raw extends PatientBase.Raw {
        individual_id: IndividualId.Raw;
        phone_numbers: PhoneNumber.Raw[];
        phone_consent: boolean;
        email?: Email.Raw | null;
        email_consent: boolean;
        non_insurance_payers: NonInsurancePayer.Raw[];
        non_insurance_payers_info: PatientNonInsurancePayerInfo.Raw[];
    }
}
