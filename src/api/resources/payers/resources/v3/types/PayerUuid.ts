/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type PayerUuid = string & {
    payers_v3_PayerUuid: void;
};

export function PayerUuid(value: string): CandidApi.payers.v3.PayerUuid {
    return value as unknown as CandidApi.payers.v3.PayerUuid;
}
