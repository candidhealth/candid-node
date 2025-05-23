/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Superbill } from "./Superbill";

export const SuperbillResponse: core.serialization.ObjectSchema<
    serializers.superbills.v1.SuperbillResponse.Raw,
    CandidApi.superbills.v1.SuperbillResponse
> = core.serialization.object({
    superbills: core.serialization.list(Superbill),
});

export declare namespace SuperbillResponse {
    export interface Raw {
        superbills: Superbill.Raw[];
    }
}
