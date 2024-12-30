/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * The field to order by. Valid values are either keys on the list item object or a special ordering "similar_name:<search_string>" (Ex: similar_name:John). Similar name ordering uses trigrams to fuzzy match patient name to the search criteria. Path names are camelCase.
 */
export type SortFieldString = string & {
    preEncounter_lists_v1_SortFieldString: void;
};

export function SortFieldString(value: string): CandidApi.preEncounter.lists.v1.SortFieldString {
    return value as unknown as CandidApi.preEncounter.lists.v1.SortFieldString;
}