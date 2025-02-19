/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { State } from "./State";

export const StreetAddressBase: core.serialization.ObjectSchema<
    serializers.StreetAddressBase.Raw,
    CandidApi.StreetAddressBase
> = core.serialization.object({
    address1: core.serialization.string(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string(),
    state: State,
    zipCode: core.serialization.property("zip_code", core.serialization.string()),
});

export declare namespace StreetAddressBase {
    export interface Raw {
        address1: string;
        address2?: string | null;
        city: string;
        state: State.Raw;
        zip_code: string;
    }
}
