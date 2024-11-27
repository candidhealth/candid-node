/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Tag } from "./Tag";
import { ResourcePage } from "../../../../common/types/ResourcePage";

export const TagPage: core.serialization.ObjectSchema<
    serializers.preEncounter.tags.v1.TagPage.Raw,
    CandidApi.preEncounter.tags.v1.TagPage
> = core.serialization
    .object({
        items: core.serialization.list(Tag),
    })
    .extend(ResourcePage);

export declare namespace TagPage {
    interface Raw extends ResourcePage.Raw {
        items: Tag.Raw[];
    }
}
