/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

/**
 * @example
 *     {
 *         claimId: CandidApi.ClaimId("DD9D7F82-37B5-449D-AA63-26925398335B"),
 *         status: CandidApi.ClaimStatus.BillerReceived,
 *         clearinghouse: "Change Healthcare",
 *         clearinghouseClaimId: "5BA7C3AB-2BC2-496C-8B10-6CAC73D0729D",
 *         payerClaimId: "9BB9F259-9756-4F16-8F53-9DBB9F7EB1BB",
 *         serviceLines: [{
 *                 modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
 *                 chargeAmountCents: 10000,
 *                 allowedAmountCents: 8000,
 *                 insuranceBalanceCents: 0,
 *                 patientBalanceCents: 2000,
 *                 paidAmountCents: 8000,
 *                 patientResponsibilityCents: 2000,
 *                 diagnosisIdZero: CandidApi.DiagnosisId("4AC84BCD-12F5-4F86-A57B-E06749127C98"),
 *                 diagnosisIdOne: CandidApi.DiagnosisId("EEA5CA5A-8B43-45FD-8CBD-C6CC1103E759"),
 *                 diagnosisIdTwo: CandidApi.DiagnosisId("5C4AA029-2DB9-4202-916E-E93C708F65FF"),
 *                 diagnosisIdThree: CandidApi.DiagnosisId("81795126-A3AC-443C-B47E-7259A16AB4A2"),
 *                 serviceLineEraData: {
 *                     serviceLineAdjustments: [{
 *                             createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                             adjustmentGroupCode: "CO",
 *                             adjustmentReasonCode: "CO",
 *                             adjustmentAmountCents: 1000,
 *                             adjustmentNote: "test_note"
 *                         }],
 *                     remittanceAdviceRemarkCodes: ["N362"]
 *                 },
 *                 serviceLineManualAdjustments: [{
 *                         createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                         adjustmentGroupCode: "CO",
 *                         adjustmentReasonCode: "CO",
 *                         adjustmentAmountCents: 1000,
 *                         adjustmentNote: "test_note"
 *                     }],
 *                 relatedInvoices: [{
 *                         id: CandidApi.InvoiceId("901BE2F1-41BC-456E-9987-4FE2F84F9D75"),
 *                         createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                         updatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *                         organzationId: CandidApi.OrganizationId("F13F73D4-4344-46EA-9D93-33BCFFBB9F36"),
 *                         sourceId: "9B626577-8808-4F28-9ED1-F0DFF0D49BBC",
 *                         sourceCustomerId: "624D1972-8C69-4C2F-AEFA-10856F734DB3",
 *                         patientExternalId: CandidApi.PatientExternalId("10FED4D6-4C5A-48DF-838A-EEF45A74788D"),
 *                         note: "test_note",
 *                         dueDate: CandidApi.Date_("2023-10-10"),
 *                         status: CandidApi.InvoiceStatus.Draft,
 *                         url: "https://example.com",
 *                         customerInvoiceUrl: "https://example.com",
 *                         items: [{
 *                                 serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *                                 amountCents: 500
 *                             }]
 *                     }],
 *                 denialReason: {
 *                     reason: CandidApi.serviceLines.v2.DenialReasonContent.AuthorizationRequired
 *                 },
 *                 placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *                 serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *                 procedureCode: "99213",
 *                 quantity: CandidApi.Decimal("1"),
 *                 units: CandidApi.ServiceLineUnits.Mj,
 *                 claimId: CandidApi.ClaimId("026A1FB8-748E-4859-A2D7-3EA9E07D25AE"),
 *                 dateOfServiceRange: {
 *                     startDate: CandidApi.Date_("2023-01-01"),
 *                     endDate: CandidApi.Date_("2023-01-03")
 *                 },
 *                 dateOfService: "2023-01-01",
 *                 endDateOfService: "2023-01-03",
 *                 testResult: {
 *                     type: "hemoglobin",
 *                     value: 2.4
 *                 }
 *             }],
 *         eras: [{
 *                 eraId: CandidApi.EraId("4D844EF1-2253-43CD-A4F1-6DB7E65CB54B"),
 *                 checkNumber: "CHK12345",
 *                 checkDate: CandidApi.Date_("2023-10-12")
 *             }]
 *     }
 */
export interface Claim {
    claimId: CandidApi.ClaimId;
    status: CandidApi.ClaimStatus;
    clearinghouse?: string;
    clearinghouseClaimId?: string;
    payerClaimId?: string;
    cliaNumber?: string;
    serviceLines: CandidApi.serviceLines.v2.ServiceLine[];
    eras: CandidApi.Era[];
}
