/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Relationship } from "../../../../common/types/Relationship";
import { HumanName } from "../../../../common/types/HumanName";
import { ContactPoint } from "../../../../common/types/ContactPoint";
import { Address } from "../../../../common/types/Address";
import { Period } from "../../../../common/types/Period";

export const Contact: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.Contact.Raw,
    CandidApi.preEncounter.patients.v1.Contact
> = core.serialization.object({
    relationship: core.serialization.list(Relationship),
    name: HumanName,
    telecoms: core.serialization.list(ContactPoint),
    addresses: core.serialization.list(Address),
    period: Period.optional(),
    hipaaAuthorization: core.serialization.property("hipaa_authorization", core.serialization.boolean().optional()),
});

export declare namespace Contact {
    interface Raw {
        relationship: Relationship.Raw[];
        name: HumanName.Raw;
        telecoms: ContactPoint.Raw[];
        addresses: Address.Raw[];
        period?: Period.Raw | null;
        hipaa_authorization?: boolean | null;
    }
}
