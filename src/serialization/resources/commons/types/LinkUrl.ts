/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const LinkUrl: core.serialization.Schema<serializers.LinkUrl.Raw, CandidApi.LinkUrl> = core.serialization
    .string()
    .transform({
        transform: CandidApi.LinkUrl,
        untransform: (value) => value,
    });

export declare namespace LinkUrl {
    type Raw = string;
}
