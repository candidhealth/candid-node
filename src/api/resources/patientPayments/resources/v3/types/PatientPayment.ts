/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         patientPaymentId: CandidApi.patientPayments.v3.PatientPaymentId("CF237BE1-E793-4BBF-8958-61D5179D1D0D"),
 *         organizationId: CandidApi.OrganizationId("0788CA2A-B20D-4B8E-B8D4-07FA0B3B4907"),
 *         sourceInternalId: "D1A76039-D5C5-4323-A2FC-B7C8B6AEF6A4",
 *         source: CandidApi.patientPayments.v3.PatientPaymentSource.ManualEntry,
 *         amountCents: 2000,
 *         paymentTimestamp: "2023-01-01T00:00:00Z",
 *         status: CandidApi.patientPayments.v3.PatientPaymentStatus.Pending,
 *         paymentName: "John Doe",
 *         paymentNote: "test payment note",
 *         patientExternalId: CandidApi.PatientExternalId("B7437260-D6B4-48CF-B9D7-753C09F34E76"),
 *         encounterExternalId: CandidApi.EncounterExternalId("0F26B9C3-199F-4CBB-A166-B87EA7C631BB"),
 *         serviceLineId: CandidApi.ServiceLineId("B557DC86-C629-478C-850A-02D45AC11783")
 *     }
 */
export interface PatientPayment {
    patientPaymentId: CandidApi.patientPayments.v3.PatientPaymentId;
    organizationId: CandidApi.OrganizationId;
    sourceInternalId: string;
    source: CandidApi.patientPayments.v3.PatientPaymentSource;
    amountCents: number;
    paymentTimestamp?: Date;
    status?: CandidApi.patientPayments.v3.PatientPaymentStatus;
    paymentName?: string;
    paymentNote?: string;
    patientExternalId?: CandidApi.PatientExternalId;
    encounterExternalId?: CandidApi.EncounterExternalId;
    serviceLineId?: CandidApi.ServiceLineId;
}
