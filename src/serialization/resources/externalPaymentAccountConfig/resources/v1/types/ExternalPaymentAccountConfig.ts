/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PaymentAccountConfigId } from "../../../../paymentAccountConfigs/types/PaymentAccountConfigId";

export const ExternalPaymentAccountConfig: core.serialization.ObjectSchema<
    serializers.externalPaymentAccountConfig.v1.ExternalPaymentAccountConfig.Raw,
    CandidApi.externalPaymentAccountConfig.v1.ExternalPaymentAccountConfig
> = core.serialization.object({
    id: PaymentAccountConfigId,
    accountName: core.serialization.property("account_name", core.serialization.string()),
});

export declare namespace ExternalPaymentAccountConfig {
    export interface Raw {
        id: PaymentAccountConfigId.Raw;
        account_name: string;
    }
}
