/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export type PayerId = string & {
    payers_v3_PayerId: void;
};

export function PayerId(value: string): CandidApi.payers.v3.PayerId {
    return value as unknown as CandidApi.payers.v3.PayerId;
}