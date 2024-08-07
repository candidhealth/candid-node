/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * The unique identifier for a User in the database
 */
export type UserId = string & {
    preEncounter_UserId: void;
};

export function UserId(value: string): CandidApi.preEncounter.UserId {
    return value as unknown as CandidApi.preEncounter.UserId;
}
