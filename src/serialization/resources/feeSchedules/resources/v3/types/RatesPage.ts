/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Rate } from "./Rate";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const RatesPage: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.RatesPage.Raw,
    CandidApi.feeSchedules.v3.RatesPage
> = core.serialization
    .object({
        rates: core.serialization.list(Rate),
    })
    .extend(ResourcePage);

export declare namespace RatesPage {
    export interface Raw extends ResourcePage.Raw {
        rates: Rate.Raw[];
    }
}
