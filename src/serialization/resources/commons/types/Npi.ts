/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const Npi: core.serialization.Schema<serializers.Npi.Raw, CandidApi.Npi> = core.serialization.string();

export declare namespace Npi {
    type Raw = string;
}
