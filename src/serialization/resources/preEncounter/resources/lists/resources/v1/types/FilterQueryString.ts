/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const FilterQueryString: core.serialization.Schema<
    serializers.preEncounter.lists.v1.FilterQueryString.Raw,
    CandidApi.preEncounter.lists.v1.FilterQueryString
> = core.serialization.string().transform({
    transform: CandidApi.preEncounter.lists.v1.FilterQueryString,
    untransform: (value) => value,
});

export declare namespace FilterQueryString {
    type Raw = string;
}