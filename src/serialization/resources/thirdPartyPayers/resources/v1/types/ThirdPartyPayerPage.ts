/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ThirdPartyPayer } from "./ThirdPartyPayer";
import { ResourcePage } from "../../../../commons/types/ResourcePage";

export const ThirdPartyPayerPage: core.serialization.ObjectSchema<
    serializers.thirdPartyPayers.v1.ThirdPartyPayerPage.Raw,
    CandidApi.thirdPartyPayers.v1.ThirdPartyPayerPage
> = core.serialization
    .object({
        items: core.serialization.list(ThirdPartyPayer),
    })
    .extend(ResourcePage);

export declare namespace ThirdPartyPayerPage {
    interface Raw extends ResourcePage.Raw {
        items: ThirdPartyPayer.Raw[];
    }
}