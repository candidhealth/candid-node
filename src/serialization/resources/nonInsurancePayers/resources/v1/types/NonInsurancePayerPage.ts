/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NonInsurancePayer } from "./NonInsurancePayer";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const NonInsurancePayerPage: core.serialization.ObjectSchema<
    serializers.nonInsurancePayers.v1.NonInsurancePayerPage.Raw,
    CandidApi.nonInsurancePayers.v1.NonInsurancePayerPage
> = core.serialization
    .object({
        items: core.serialization.list(NonInsurancePayer),
    })
    .extend(ResourcePage);

export declare namespace NonInsurancePayerPage {
    export interface Raw extends ResourcePage.Raw {
        items: NonInsurancePayer.Raw[];
    }
}
