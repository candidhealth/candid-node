/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export type PatientPaymentId = string & {
    patientPayments_v4_PatientPaymentId: void;
};

export function PatientPaymentId(value: string): CandidApi.patientPayments.v4.PatientPaymentId {
    return value as unknown as CandidApi.patientPayments.v4.PatientPaymentId;
}
