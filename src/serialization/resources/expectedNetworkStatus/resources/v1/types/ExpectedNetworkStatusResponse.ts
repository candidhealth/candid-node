/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ExpectedNetworkStatus } from "./ExpectedNetworkStatus";
import { ContractId } from "../../../../contracts/resources/v2/types/ContractId";

export const ExpectedNetworkStatusResponse: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v1.ExpectedNetworkStatusResponse.Raw,
    CandidApi.expectedNetworkStatus.v1.ExpectedNetworkStatusResponse
> = core.serialization.object({
    expectedNetworkStatus: core.serialization.property("expected_network_status", ExpectedNetworkStatus),
    explanation: core.serialization.string(),
    contractId: core.serialization.property("contract_id", ContractId.optional()),
});

export declare namespace ExpectedNetworkStatusResponse {
    export interface Raw {
        expected_network_status: ExpectedNetworkStatus.Raw;
        explanation: string;
        contract_id?: ContractId.Raw | null;
    }
}
