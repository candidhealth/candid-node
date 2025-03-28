/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const AuthorizedSignatory: core.serialization.ObjectSchema<
    serializers.contracts.v2.AuthorizedSignatory.Raw,
    CandidApi.contracts.v2.AuthorizedSignatory
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    fax: core.serialization.string().optional(),
});

export declare namespace AuthorizedSignatory {
    export interface Raw {
        first_name?: string | null;
        last_name?: string | null;
        title?: string | null;
        email?: string | null;
        phone?: string | null;
        fax?: string | null;
    }
}
