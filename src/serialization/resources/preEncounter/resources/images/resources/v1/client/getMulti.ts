/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Image } from "../types/Image";

export const Response: core.serialization.Schema<
    serializers.preEncounter.images.v1.getMulti.Response.Raw,
    CandidApi.preEncounter.images.v1.Image[]
> = core.serialization.list(Image);

export declare namespace Response {
    export type Raw = Image.Raw[];
}
