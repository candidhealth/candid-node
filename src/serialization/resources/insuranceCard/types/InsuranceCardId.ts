/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const InsuranceCardId: core.serialization.Schema<serializers.InsuranceCardId.Raw, CandidApi.InsuranceCardId> =
    core.serialization.string();

export declare namespace InsuranceCardId {
    type Raw = string;
}
