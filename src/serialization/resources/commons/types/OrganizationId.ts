/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const OrganizationId: core.serialization.Schema<serializers.OrganizationId.Raw, CandidApi.OrganizationId> =
    core.serialization.string().transform({
        transform: CandidApi.OrganizationId,
        untransform: (value) => value,
    });

export declare namespace OrganizationId {
    export type Raw = string;
}
