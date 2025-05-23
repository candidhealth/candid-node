/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Address } from "./Address";

export const ExpandedMemberInfo: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.ExpandedMemberInfo.Raw,
    CandidApi.preEncounter.coverages.v1.ExpandedMemberInfo
> = core.serialization.object({
    memberId: core.serialization.property("member_id", core.serialization.string().optional()),
    groupNumber: core.serialization.property("group_number", core.serialization.string().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    middleName: core.serialization.property("middle_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
    gender: core.serialization.string().optional(),
    address: Address.optional(),
});

export declare namespace ExpandedMemberInfo {
    export interface Raw {
        member_id?: string | null;
        group_number?: string | null;
        first_name?: string | null;
        middle_name?: string | null;
        last_name?: string | null;
        date_of_birth?: string | null;
        gender?: string | null;
        address?: Address.Raw | null;
    }
}
