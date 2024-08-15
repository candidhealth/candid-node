/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ThirdPartyPayerPayment } from "./ThirdPartyPayerPayment";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const ThirdPartyPayerPaymentsPage: core.serialization.ObjectSchema<
    serializers.thirdPartyPayerPayments.v1.ThirdPartyPayerPaymentsPage.Raw,
    CandidApi.thirdPartyPayerPayments.v1.ThirdPartyPayerPaymentsPage
> = core.serialization
    .object({
        items: core.serialization.list(ThirdPartyPayerPayment),
    })
    .extend(ResourcePage);

export declare namespace ThirdPartyPayerPaymentsPage {
    interface Raw extends ResourcePage.Raw {
        items: ThirdPartyPayerPayment.Raw[];
    }
}
