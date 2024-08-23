/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * A token that can be used to retrieve the next or previous page of results
 */
export type PageToken = string & {
    preEncounter_PageToken: void;
};

export function PageToken(value: string): CandidApi.preEncounter.PageToken {
    return value as unknown as CandidApi.preEncounter.PageToken;
}
