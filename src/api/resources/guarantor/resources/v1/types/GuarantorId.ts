/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export type GuarantorId = string & {
    guarantor_v1_GuarantorId: void;
};

export function GuarantorId(value: string): CandidApi.guarantor.v1.GuarantorId {
    return value as unknown as CandidApi.guarantor.v1.GuarantorId;
}