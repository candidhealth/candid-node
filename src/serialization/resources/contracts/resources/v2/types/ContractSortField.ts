/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ContractSortField: core.serialization.Schema<
    serializers.contracts.v2.ContractSortField.Raw,
    CandidApi.contracts.v2.ContractSortField
> = core.serialization.enum_([
    "created_at",
    "payer_name",
    "payer_id",
    "billing_provider_name",
    "effective_date",
    "contract_status",
]);

export declare namespace ContractSortField {
    export type Raw =
        | "created_at"
        | "payer_name"
        | "payer_id"
        | "billing_provider_name"
        | "effective_date"
        | "contract_status";
}
