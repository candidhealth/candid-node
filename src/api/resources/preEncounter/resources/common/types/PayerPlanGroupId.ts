/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * The unique identifier for a PayerPlanGroup in the database
 */
export type PayerPlanGroupId = string & {
    preEncounter_PayerPlanGroupId: void;
};

export function PayerPlanGroupId(value: string): CandidApi.preEncounter.PayerPlanGroupId {
    return value as unknown as CandidApi.preEncounter.PayerPlanGroupId;
}
