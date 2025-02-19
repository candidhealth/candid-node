/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { HumanName } from "../../../../common/types/HumanName";
import { ContactPoint } from "../../../../common/types/ContactPoint";
import { Address } from "../../../../common/types/Address";

export const Guarantor: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.Guarantor.Raw,
    CandidApi.preEncounter.patients.v1.Guarantor
> = core.serialization.object({
    name: HumanName,
    telecom: ContactPoint.optional(),
    email: core.serialization.string().optional(),
    birthDate: core.serialization.property("birth_date", core.serialization.string()),
    address: Address,
});

export declare namespace Guarantor {
    export interface Raw {
        name: HumanName.Raw;
        telecom?: ContactPoint.Raw | null;
        email?: string | null;
        birth_date: string;
        address: Address.Raw;
    }
}
