/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const PatientExternalId: core.serialization.Schema<
    serializers.PatientExternalId.Raw,
    CandidApi.PatientExternalId
> = core.serialization.string();

export declare namespace PatientExternalId {
    type Raw = string;
}
