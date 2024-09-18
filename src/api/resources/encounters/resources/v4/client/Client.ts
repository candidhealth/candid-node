/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace V4 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class V4 {
    constructor(protected readonly _options: V4.Options = {}) {}

    /**
     * @param {CandidApi.encounters.v4.GetAllEncountersRequest} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.encounters.v4.getAll({
     *         limit: 100,
     *         claimStatus: CandidApi.ClaimStatus.BillerReceived,
     *         sort: CandidApi.encounters.v4.EncounterSortOptions.CreatedAtAsc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         dateOfServiceMin: "2019-08-24",
     *         dateOfServiceMax: "2019-08-25",
     *         primaryPayerNames: "Medicare,Medicaid",
     *         searchTerm: "doe",
     *         externalId: CandidApi.EncounterExternalId("123456"),
     *         diagnosesUpdatedSince: new Date("2019-08-24T14:15:22.000Z")
     *     })
     */
    public async getAll(
        request: CandidApi.encounters.v4.GetAllEncountersRequest = {},
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<CandidApi.encounters.v4.EncounterPage, CandidApi.encounters.v4.getAll.Error>> {
        const {
            limit,
            claimStatus,
            sort,
            pageToken,
            dateOfServiceMin,
            dateOfServiceMax,
            primaryPayerNames,
            searchTerm,
            externalId,
            diagnosesUpdatedSince,
            tagIds,
            workQueueId,
            billableStatus,
            responsibleParty,
            ownerOfNextAction,
            patientExternalId,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (claimStatus != null) {
            _queryParams["claim_status"] = claimStatus;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (dateOfServiceMin != null) {
            _queryParams["date_of_service_min"] = dateOfServiceMin;
        }

        if (dateOfServiceMax != null) {
            _queryParams["date_of_service_max"] = dateOfServiceMax;
        }

        if (primaryPayerNames != null) {
            _queryParams["primary_payer_names"] = primaryPayerNames;
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (externalId != null) {
            _queryParams["external_id"] = externalId;
        }

        if (diagnosesUpdatedSince != null) {
            _queryParams["diagnoses_updated_since"] = diagnosesUpdatedSince.toISOString();
        }

        if (tagIds != null) {
            if (Array.isArray(tagIds)) {
                _queryParams["tag_ids"] = tagIds.map((item) => item);
            } else {
                _queryParams["tag_ids"] = tagIds;
            }
        }

        if (workQueueId != null) {
            _queryParams["work_queue_id"] = workQueueId;
        }

        if (billableStatus != null) {
            _queryParams["billable_status"] = billableStatus;
        }

        if (responsibleParty != null) {
            _queryParams["responsible_party"] = responsibleParty;
        }

        if (ownerOfNextAction != null) {
            _queryParams["owner_of_next_action"] = ownerOfNextAction;
        }

        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/encounters/v4"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.encounters.v4.EncounterPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v4.getAll.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.EncounterId} encounterId
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.encounters.v4.get(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        encounterId: CandidApi.EncounterId,
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<CandidApi.encounters.v4.Encounter, CandidApi.encounters.v4.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/encounters/v4/${encodeURIComponent(serializers.EncounterId.jsonOrThrow(encounterId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.encounters.v4.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v4.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.encounters.v4.EncounterCreate} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.encounters.v4.create({
     *         dateOfService: "2023-01-15",
     *         endDateOfService: "2023-01-15",
     *         patient: {
     *             phoneNumbers: [{
     *                     number: "1234567890",
     *                     type: CandidApi.PhoneNumberType.Home
     *                 }],
     *             phoneConsent: true,
     *             email: CandidApi.Email("johndoe@joincandidhealth.com"),
     *             nonInsurancePayers: [CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
     *             emailConsent: true,
     *             externalId: "string",
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             gender: CandidApi.Gender.Male
     *         },
     *         billingProvider: {
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             taxId: "string",
     *             npi: "string",
     *             taxonomyCode: "string",
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         renderingProvider: {
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             npi: "string",
     *             taxonomyCode: "string",
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         referringProvider: {
     *             npi: "string",
     *             taxonomyCode: "string",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         initialReferringProvider: {
     *             npi: "string",
     *             taxonomyCode: "string",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             qualifier: CandidApi.QualifierCode.Dq,
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         supervisingProvider: {
     *             npi: "string",
     *             taxonomyCode: "string",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         serviceFacility: {
     *             organizationName: "string",
     *             npi: "string",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             }
     *         },
     *         subscriberPrimary: {
     *             insuranceCard: {
     *                 memberId: "string",
     *                 payerName: "string",
     *                 payerId: "string",
     *                 rxBin: "string",
     *                 rxPcn: "string",
     *                 imageUrlFront: "string",
     *                 imageUrlBack: "string",
     *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
     *                 groupNumber: "string",
     *                 planName: "string",
     *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
     *                 insuranceType: CandidApi.InsuranceTypeCode.C01
     *             },
     *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             gender: CandidApi.Gender.Male
     *         },
     *         subscriberSecondary: {
     *             insuranceCard: {
     *                 memberId: "string",
     *                 payerName: "string",
     *                 payerId: "string",
     *                 rxBin: "string",
     *                 rxPcn: "string",
     *                 imageUrlFront: "string",
     *                 imageUrlBack: "string",
     *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
     *                 groupNumber: "string",
     *                 planName: "string",
     *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
     *                 insuranceType: CandidApi.InsuranceTypeCode.C01
     *             },
     *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             gender: CandidApi.Gender.Male
     *         },
     *         diagnoses: [{
     *                 name: "string",
     *                 codeType: CandidApi.DiagnosisTypeCode.Abf,
     *                 code: "string"
     *             }],
     *         clinicalNotes: [{
     *                 category: CandidApi.encounters.v4.NoteCategory.Clinical,
     *                 notes: [{
     *                         text: "string",
     *                         authorName: "string",
     *                         authorNpi: CandidApi.Npi("string"),
     *                         timestamp: new Date("2024-01-15T09:30:00.000Z")
     *                     }]
     *             }],
     *         billingNotes: [{
     *                 text: "string"
     *             }],
     *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *         patientHistories: [{
     *                 category: CandidApi.encounters.v4.PatientHistoryCategoryEnum.PresentIllness,
     *                 questions: [{
     *                         id: CandidApi.encounters.v4.IntakeQuestionId("6E7FBCE4-A8EA-46D0-A8D8-FF83CA3BB176"),
     *                         text: "Do you have any allergies?",
     *                         responses: [{
     *                                 response: "No allergies",
     *                                 followUps: [{
     *                                         id: CandidApi.encounters.v4.IntakeFollowUpId("4F3D57F9-AC94-49D6-87E4-E804B709917A"),
     *                                         text: "Do you have any allergies?",
     *                                         response: "No allergies"
     *                                     }]
     *                             }]
     *                     }]
     *             }],
     *         serviceLines: [{
     *                 modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
     *                 procedureCode: "string",
     *                 quantity: CandidApi.Decimal("string"),
     *                 units: CandidApi.ServiceLineUnits.Mj,
     *                 chargeAmountCents: 1,
     *                 diagnosisPointers: [1],
     *                 drugIdentification: {
     *                     serviceIdQualifier: CandidApi.serviceLines.v2.ServiceIdQualifier.EanUcc13,
     *                     nationalDrugCode: "string",
     *                     nationalDrugUnitCount: "string",
     *                     measurementUnitCode: CandidApi.serviceLines.v2.MeasurementUnitCode.Milliliters,
     *                     linkSequenceNumber: "string",
     *                     pharmacyPrescriptionNumber: "string",
     *                     conversionFormula: "string"
     *                 },
     *                 placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *                 description: "string",
     *                 dateOfService: "2023-01-15",
     *                 endDateOfService: "2023-01-15",
     *                 orderingProvider: {
     *                     npi: "string",
     *                     taxonomyCode: "string",
     *                     address: {
     *                         address1: "123 Main St",
     *                         address2: "Apt 1",
     *                         city: "New York",
     *                         state: CandidApi.State.Ny,
     *                         zipCode: "10001",
     *                         zipPlusFourCode: "1234"
     *                     },
     *                     firstName: "string",
     *                     lastName: "string",
     *                     organizationName: "string"
     *                 }
     *             }],
     *         guarantor: {
     *             phoneNumbers: [{
     *                     number: "1234567890",
     *                     type: CandidApi.PhoneNumberType.Home
     *                 }],
     *             phoneConsent: true,
     *             email: CandidApi.Email("johndoe@joincandidhealth.com"),
     *             emailConsent: true,
     *             firstName: "string",
     *             lastName: "string",
     *             externalId: "string",
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             }
     *         },
     *         externalClaimSubmission: {
     *             claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
     *             patientControlNumber: "PATIENT_CONTROL_NUMBER",
     *             submissionRecords: [{
     *                     submittedAt: new Date("2023-01-01T13:00:00.000Z"),
     *                     claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
     *                     payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                     intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic
     *                 }, {
     *                     submittedAt: new Date("2023-01-04T12:00:00.000Z"),
     *                     claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Replacement,
     *                     payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                     intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper
     *                 }]
     *         },
     *         tagIds: [CandidApi.TagId("string")],
     *         schemaInstances: [{
     *                 schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
     *                 content: {
     *                     "provider_category": "internist",
     *                     "is_urgent_care": true,
     *                     "bmi": 24.2,
     *                     "age": 38
     *                 }
     *             }],
     *         externalId: CandidApi.EncounterExternalId("string"),
     *         priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
     *         patientAuthorizedRelease: true,
     *         benefitsAssignedToProvider: true,
     *         providerAcceptsAssignment: true,
     *         appointmentType: "string",
     *         existingMedications: [{
     *                 name: "Lisinopril",
     *                 rxCui: CandidApi.encounters.v4.RxCui("860975"),
     *                 dosage: "10mg",
     *                 dosageForm: "Tablet",
     *                 frequency: "Once Daily",
     *                 asNeeded: true
     *             }],
     *         vitals: {
     *             heightIn: 70,
     *             weightLbs: 165,
     *             bloodPressureSystolicMmhg: 115,
     *             bloodPressureDiastolicMmhg: 85,
     *             bodyTemperatureF: 98,
     *             hemoglobinGdl: 15.1,
     *             hematocritPct: 51.2
     *         },
     *         interventions: [{
     *                 name: "Physical Therapy Session",
     *                 category: CandidApi.encounters.v4.InterventionCategory.Lifestyle,
     *                 description: "A session focused on improving muscular strength, flexibility, and range of motion post-injury.",
     *                 medication: {
     *                     name: "Lisinopril",
     *                     rxCui: CandidApi.encounters.v4.RxCui("860975"),
     *                     dosage: "10mg",
     *                     dosageForm: "Tablet",
     *                     frequency: "Once Daily",
     *                     asNeeded: true
     *                 },
     *                 labs: [{
     *                         name: "Genetic Health Labs",
     *                         code: "GH12345",
     *                         codeType: CandidApi.encounters.v4.LabCodeType.Quest
     *                     }]
     *             }],
     *         payToAddress: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: CandidApi.State.Ny,
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
     *         billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
     *         responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
     *         additionalInformation: "string",
     *         serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
     *         admissionDate: "2023-01-15",
     *         dischargeDate: "2023-01-15",
     *         onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
     *         lastMenstrualPeriodDate: "2023-01-15",
     *         delayReasonCode: CandidApi.DelayReasonCode.C1
     *     })
     */
    public async create(
        request: CandidApi.encounters.v4.EncounterCreate,
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<CandidApi.encounters.v4.Encounter, CandidApi.encounters.v4.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/encounters/v4"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.encounters.v4.EncounterCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.encounters.v4.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.encounters.v4.create.Error.Raw)?.errorName) {
                case "EncounterExternalIdUniquenessError":
                case "EncounterPatientControlNumberUniquenessError":
                case "EntityNotFoundError":
                case "EncounterGuarantorMissingContactInfoError":
                case "HttpRequestValidationsError":
                case "CashPayPayerError":
                case "SchemaInstanceValidationHttpFailure":
                    return {
                        ok: false,
                        error: serializers.encounters.v4.create.Error.parseOrThrow(
                            _response.error.body as serializers.encounters.v4.create.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.encounters.v4.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.EncounterId} encounterId
     * @param {CandidApi.encounters.v4.EncounterUpdate} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.encounters.v4.update(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
     *         externalId: CandidApi.EncounterExternalId("string"),
     *         dateOfService: "2023-01-15",
     *         diagnosisIds: [CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
     *         tagIds: [CandidApi.TagId("string")],
     *         clinicalNotes: [{
     *                 category: CandidApi.encounters.v4.NoteCategory.Clinical,
     *                 notes: [{
     *                         text: "string",
     *                         authorName: "string",
     *                         authorNpi: CandidApi.Npi("string"),
     *                         timestamp: new Date("2024-01-15T09:30:00.000Z")
     *                     }]
     *             }],
     *         payToAddress: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: CandidApi.State.Ny,
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
     *         responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
     *         providerAcceptsAssignment: true,
     *         benefitsAssignedToProvider: true,
     *         synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
     *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *         placeOfServiceCodeAsSubmitted: CandidApi.FacilityTypeCode.Pharmacy,
     *         appointmentType: "string",
     *         endDateOfService: "2023-01-15",
     *         subscriberPrimary: {
     *             insuranceCard: {
     *                 memberId: "string",
     *                 payerName: "string",
     *                 payerId: "string",
     *                 rxBin: "string",
     *                 rxPcn: "string",
     *                 imageUrlFront: "string",
     *                 imageUrlBack: "string",
     *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
     *                 groupNumber: "string",
     *                 planName: "string",
     *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
     *                 insuranceType: CandidApi.InsuranceTypeCode.C01
     *             },
     *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             gender: CandidApi.Gender.Male
     *         },
     *         subscriberSecondary: {
     *             insuranceCard: {
     *                 memberId: "string",
     *                 payerName: "string",
     *                 payerId: "string",
     *                 rxBin: "string",
     *                 rxPcn: "string",
     *                 imageUrlFront: "string",
     *                 imageUrlBack: "string",
     *                 emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
     *                 groupNumber: "string",
     *                 planName: "string",
     *                 planType: CandidApi.SourceOfPaymentCode.SelfPay,
     *                 insuranceType: CandidApi.InsuranceTypeCode.C01
     *             },
     *             patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *             dateOfBirth: "2023-01-15",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             gender: CandidApi.Gender.Male
     *         },
     *         additionalInformation: "string",
     *         serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
     *         admissionDate: "2023-01-15",
     *         dischargeDate: "2023-01-15",
     *         onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
     *         lastMenstrualPeriodDate: "2023-01-15",
     *         delayReasonCode: CandidApi.DelayReasonCode.C1,
     *         patientAuthorizedRelease: true,
     *         schemaInstances: [{
     *                 schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
     *                 content: {
     *                     "provider_category": "internist",
     *                     "is_urgent_care": true,
     *                     "bmi": 24.2,
     *                     "age": 38
     *                 }
     *             }],
     *         vitals: {
     *             heightIn: 70,
     *             weightLbs: 165,
     *             bloodPressureSystolicMmhg: 115,
     *             bloodPressureDiastolicMmhg: 85,
     *             bodyTemperatureF: 98,
     *             hemoglobinGdl: 15.1,
     *             hematocritPct: 51.2
     *         }
     *     })
     */
    public async update(
        encounterId: CandidApi.EncounterId,
        request: CandidApi.encounters.v4.EncounterUpdate = {},
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<CandidApi.encounters.v4.Encounter, CandidApi.encounters.v4.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/encounters/v4/${encodeURIComponent(serializers.EncounterId.jsonOrThrow(encounterId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.encounters.v4.EncounterUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.encounters.v4.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.encounters.v4.update.Error.Raw)?.errorName) {
                case "EncounterExternalIdUniquenessError":
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "HttpRequestValidationsError":
                case "SchemaInstanceValidationHttpFailure":
                    return {
                        ok: false,
                        error: serializers.encounters.v4.update.Error.parseOrThrow(
                            _response.error.body as serializers.encounters.v4.update.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.encounters.v4.update.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
