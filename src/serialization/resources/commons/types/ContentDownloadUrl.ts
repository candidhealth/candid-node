/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const ContentDownloadUrl: core.serialization.Schema<
    serializers.ContentDownloadUrl.Raw,
    CandidApi.ContentDownloadUrl
> = core.serialization.string();

export declare namespace ContentDownloadUrl {
    type Raw = string;
}
