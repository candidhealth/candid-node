/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const RemitDraftId: core.serialization.Schema<
    serializers.remitDrafts.v1.RemitDraftId.Raw,
    CandidApi.remitDrafts.v1.RemitDraftId
> = core.serialization.string().transform({
    transform: CandidApi.remitDrafts.v1.RemitDraftId,
    untransform: (value) => value,
});

export declare namespace RemitDraftId {
    export type Raw = string;
}
