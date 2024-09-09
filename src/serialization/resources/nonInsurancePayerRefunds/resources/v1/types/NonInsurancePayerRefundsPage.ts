/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NonInsurancePayerRefund } from "./NonInsurancePayerRefund";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const NonInsurancePayerRefundsPage: core.serialization.ObjectSchema<
    serializers.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundsPage.Raw,
    CandidApi.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundsPage
> = core.serialization
    .object({
        items: core.serialization.list(NonInsurancePayerRefund),
    })
    .extend(ResourcePage);

export declare namespace NonInsurancePayerRefundsPage {
    interface Raw extends ResourcePage.Raw {
        items: NonInsurancePayerRefund.Raw[];
    }
}