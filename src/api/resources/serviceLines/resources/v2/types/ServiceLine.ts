/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
 *         chargeAmountCents: 10000,
 *         allowedAmountCents: 8000,
 *         insuranceBalanceCents: 0,
 *         patientBalanceCents: 2000,
 *         paidAmountCents: 8000,
 *         patientResponsibilityCents: 2000,
 *         diagnosisIdZero: CandidApi.DiagnosisId("4AC84BCD-12F5-4F86-A57B-E06749127C98"),
 *         diagnosisIdOne: CandidApi.DiagnosisId("EEA5CA5A-8B43-45FD-8CBD-C6CC1103E759"),
 *         diagnosisIdTwo: CandidApi.DiagnosisId("5C4AA029-2DB9-4202-916E-E93C708F65FF"),
 *         diagnosisIdThree: CandidApi.DiagnosisId("81795126-A3AC-443C-B47E-7259A16AB4A2"),
 *         serviceLineEraData: {
 *             serviceLineAdjustments: [{
 *                     createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                     adjustmentGroupCode: "CO",
 *                     adjustmentReasonCode: "CO",
 *                     adjustmentAmountCents: 1000,
 *                     adjustmentNote: "test_note"
 *                 }],
 *             remittanceAdviceRemarkCodes: ["N362"]
 *         },
 *         serviceLineManualAdjustments: [{
 *                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 adjustmentGroupCode: "CO",
 *                 adjustmentReasonCode: "CO",
 *                 adjustmentAmountCents: 1000,
 *                 adjustmentNote: "test_note"
 *             }],
 *         relatedInvoices: [{
 *                 id: CandidApi.InvoiceId("901BE2F1-41BC-456E-9987-4FE2F84F9D75"),
 *                 createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *                 organzationId: CandidApi.OrganizationId("F13F73D4-4344-46EA-9D93-33BCFFBB9F36"),
 *                 sourceId: "9B626577-8808-4F28-9ED1-F0DFF0D49BBC",
 *                 sourceCustomerId: "624D1972-8C69-4C2F-AEFA-10856F734DB3",
 *                 patientExternalId: CandidApi.PatientExternalId("10FED4D6-4C5A-48DF-838A-EEF45A74788D"),
 *                 note: "test_note",
 *                 dueDate: CandidApi.Date_("2023-10-10"),
 *                 status: CandidApi.InvoiceStatus.Draft,
 *                 url: "https://example.com",
 *                 customerInvoiceUrl: "https://example.com",
 *                 items: [{
 *                         serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *                         amountCents: 500
 *                     }]
 *             }],
 *         denialReason: {
 *             reason: CandidApi.serviceLines.v2.DenialReasonContent.AuthorizationRequired
 *         },
 *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
 *         serviceLineId: CandidApi.ServiceLineId("CED00F23-6E68-4678-9DBC-F5AA2969A565"),
 *         procedureCode: "99213",
 *         quantity: CandidApi.Decimal("1"),
 *         units: CandidApi.ServiceLineUnits.Mj,
 *         claimId: CandidApi.ClaimId("026A1FB8-748E-4859-A2D7-3EA9E07D25AE"),
 *         dateOfServiceRange: {
 *             startDate: CandidApi.Date_("2023-01-01"),
 *             endDate: CandidApi.Date_("2023-01-03")
 *         },
 *         dateOfService: "2023-01-01",
 *         endDateOfService: "2023-01-03",
 *         testResults: [{
 *                 resultType: CandidApi.serviceLines.v2.TestResultType.Hemoglobin,
 *                 value: 51
 *             }]
 *     }
 */
export interface ServiceLine {
    modifiers?: CandidApi.ProcedureModifier[];
    chargeAmountCents?: number;
    allowedAmountCents?: number;
    insuranceBalanceCents?: number;
    patientBalanceCents?: number;
    paidAmountCents?: number;
    primaryPaidAmountCents?: number;
    secondaryPaidAmountCents?: number;
    tertiaryPaidAmountCents?: number;
    patientResponsibilityCents?: number;
    diagnosisIdZero?: CandidApi.DiagnosisId;
    diagnosisIdOne?: CandidApi.DiagnosisId;
    diagnosisIdTwo?: CandidApi.DiagnosisId;
    diagnosisIdThree?: CandidApi.DiagnosisId;
    drugIdentification?: CandidApi.serviceLines.v2.DrugIdentification;
    serviceLineEraData?: CandidApi.serviceLines.v2.ServiceLineEraData;
    serviceLineManualAdjustments?: CandidApi.serviceLines.v2.ServiceLineAdjustment[];
    relatedInvoices?: CandidApi.Invoice[];
    relatedInvoiceInfo?: CandidApi.invoices.v2.InvoiceInfo[];
    denialReason?: CandidApi.serviceLines.v2.ServiceLineDenialReason;
    /** 837p Loop2300, SV105. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set). */
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    /** 837p Loop2300, SV105. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set). */
    placeOfServiceCodeAsSubmitted?: CandidApi.FacilityTypeCode;
    serviceLineId: CandidApi.ServiceLineId;
    procedureCode: string;
    orderingProvider?: CandidApi.encounterProviders.v2.EncounterProvider;
    /**
     * String representation of a Decimal that can be parsed by most libraries.
     * A ServiceLine quantity cannot contain more than one digit of precision.
     * Example: 1.1 is valid, 1.11 is not.
     */
    quantity: CandidApi.Decimal;
    units: CandidApi.ServiceLineUnits;
    claimId: CandidApi.ClaimId;
    /**
     * A range of dates of service for this service line. If the service line is for a single date, the end date
     * will be empty.
     */
    dateOfServiceRange: CandidApi.DateRangeOptionalEnd;
    /** A free-form description to clarify the related data elements and their content. Maps to SV1-01, C003-07 on the 837-P. */
    description?: string;
    dateOfService: string;
    endDateOfService?: string;
    /** Maps to MEA-02 on the 837-P. No more than 5 test results may be submitted per service line. */
    testResults?: CandidApi.serviceLines.v2.TestResult[];
}
