/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Contract } from "./Contract";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const ContractsPage: core.serialization.ObjectSchema<
    serializers.contracts.v2.ContractsPage.Raw,
    CandidApi.contracts.v2.ContractsPage
> = core.serialization
    .object({
        items: core.serialization.list(Contract),
    })
    .extend(ResourcePage);

export declare namespace ContractsPage {
    export interface Raw extends ResourcePage.Raw {
        items: Contract.Raw[];
    }
}
