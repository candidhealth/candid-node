/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const Npi: core.serialization.Schema<serializers.Npi.Raw, CandidApi.Npi> = core.serialization
    .string()
    .transform({
        transform: CandidApi.Npi,
        untransform: (value) => value,
    });

export declare namespace Npi {
    export type Raw = string;
}
