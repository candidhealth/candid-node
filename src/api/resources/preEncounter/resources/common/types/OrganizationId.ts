/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * The unique identifier for an Organization in the database
 */
export type OrganizationId = string & {
    preEncounter_OrganizationId: void;
};

export function OrganizationId(value: string): CandidApi.preEncounter.OrganizationId {
    return value as unknown as CandidApi.preEncounter.OrganizationId;
}
