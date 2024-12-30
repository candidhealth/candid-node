/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
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

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * @param {CandidApi.chargeCapture.v1.CreateChargeCaptureRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCapture.v1.create({
     *         data: {
     *             diagnoses: [],
     *             interventions: [],
     *             externalClaimSubmission: {
     *                 claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
     *                 patientControlNumber: "PATIENT_CONTROL_NUMBER",
     *                 submissionRecords: [{
     *                         submittedAt: new Date("2023-01-01T13:00:00.000Z"),
     *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
     *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic
     *                     }, {
     *                         submittedAt: new Date("2023-01-04T12:00:00.000Z"),
     *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Replacement,
     *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper
     *                     }]
     *             },
     *             serviceLines: [],
     *             patientHistories: [],
     *             billingNotes: [],
     *             benefitsAssignedToProvider: true,
     *             priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
     *             externalId: CandidApi.EncounterExternalId("string"),
     *             dateOfService: "2023-01-15",
     *             tagIds: [],
     *             clinicalNotes: [],
     *             payToAddress: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
     *             responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
     *             providerAcceptsAssignment: true,
     *             synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
     *             placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *             appointmentType: "string",
     *             endDateOfService: "2023-01-15",
     *             subscriberPrimary: {
     *                 insuranceCard: {
     *                     memberId: "string",
     *                     payerName: "string",
     *                     payerId: "string"
     *                 },
     *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *                 firstName: "string",
     *                 lastName: "string",
     *                 gender: CandidApi.Gender.Male
     *             },
     *             subscriberSecondary: {
     *                 insuranceCard: {
     *                     memberId: "string",
     *                     payerName: "string",
     *                     payerId: "string"
     *                 },
     *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *                 firstName: "string",
     *                 lastName: "string",
     *                 gender: CandidApi.Gender.Male
     *             },
     *             additionalInformation: "string",
     *             serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
     *             admissionDate: "2023-01-15",
     *             dischargeDate: "2023-01-15",
     *             onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
     *             lastMenstrualPeriodDate: "2023-01-15",
     *             delayReasonCode: CandidApi.DelayReasonCode.C1,
     *             patient: {},
     *             patientAuthorizedRelease: true,
     *             schemaInstances: [],
     *             vitals: {
     *                 heightIn: 70,
     *                 weightLbs: 165,
     *                 bloodPressureSystolicMmhg: 115,
     *                 bloodPressureDiastolicMmhg: 85,
     *                 bodyTemperatureF: 98,
     *                 hemoglobinGdl: 15.1,
     *                 hematocritPct: 51.2
     *             },
     *             existingMedications: [],
     *             renderingProvider: {},
     *             serviceFacility: {
     *                 organizationName: "Test Organization",
     *                 address: {
     *                     address1: "123 Main St",
     *                     address2: "Apt 1",
     *                     city: "New York",
     *                     state: CandidApi.State.Ny,
     *                     zipCode: "10001",
     *                     zipPlusFourCode: "1234"
     *                 }
     *             },
     *             guarantor: {},
     *             billingProvider: {},
     *             supervisingProvider: {},
     *             referringProvider: {},
     *             initialReferringProvider: {},
     *             referralNumber: "string"
     *         },
     *         encounterExternalId: CandidApi.EncounterExternalId("string"),
     *         ehrSourceUrl: "string",
     *         patientExternalId: "string",
     *         status: CandidApi.chargeCapture.v1.ChargeCaptureStatus.Planned
     *     })
     */
    public async create(
        request: CandidApi.chargeCapture.v1.CreateChargeCaptureRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.chargeCapture.v1.ChargeCapture, CandidApi.chargeCapture.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/charge_captures/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.37.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.chargeCapture.v1.CreateChargeCaptureRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.chargeCapture.v1.ChargeCapture.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCapture.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "HttpRequestValidationsError":
                case "SchemaInstanceValidationHttpFailure":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.chargeCapture.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCapture.v1.create.Error.Raw,
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
            error: CandidApi.chargeCapture.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ChargeCaptureId} chargeCaptureId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCapture.v1.delete(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        chargeCaptureId: CandidApi.ChargeCaptureId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.chargeCapture.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/charge_captures/v1/${encodeURIComponent(
                    serializers.ChargeCaptureId.jsonOrThrow(chargeCaptureId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.37.0",
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
                body: undefined,
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCapture.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "NotImplementedError":
                    return {
                        ok: false,
                        error: serializers.chargeCapture.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCapture.v1.delete.Error.Raw,
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
            error: CandidApi.chargeCapture.v1.delete.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ChargeCaptureId} chargeCaptureId
     * @param {CandidApi.chargeCapture.v1.ChargeCaptureUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCapture.v1.update(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         data: {
     *             diagnoses: [],
     *             interventions: [],
     *             externalClaimSubmission: {
     *                 claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
     *                 patientControlNumber: "PATIENT_CONTROL_NUMBER",
     *                 submissionRecords: [{
     *                         submittedAt: new Date("2023-01-01T13:00:00.000Z"),
     *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Original,
     *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic
     *                     }, {
     *                         submittedAt: new Date("2023-01-04T12:00:00.000Z"),
     *                         claimFrequencyCode: CandidApi.claimSubmission.v1.ClaimFrequencyTypeCode.Replacement,
     *                         payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
     *                         intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper
     *                     }]
     *             },
     *             serviceLines: [],
     *             patientHistories: [],
     *             billingNotes: [],
     *             benefitsAssignedToProvider: true,
     *             priorAuthorizationNumber: CandidApi.encounters.v4.PriorAuthorizationNumber("string"),
     *             externalId: CandidApi.EncounterExternalId("string"),
     *             dateOfService: "2023-01-15",
     *             tagIds: [],
     *             clinicalNotes: [],
     *             payToAddress: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: CandidApi.State.Ny,
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             billableStatus: CandidApi.encounters.v4.BillableStatusType.Billable,
     *             responsibleParty: CandidApi.encounters.v4.ResponsiblePartyType.InsurancePay,
     *             providerAcceptsAssignment: true,
     *             synchronicity: CandidApi.encounters.v4.SynchronicityType.Synchronous,
     *             placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *             appointmentType: "string",
     *             endDateOfService: "2023-01-15",
     *             subscriberPrimary: {
     *                 insuranceCard: {
     *                     memberId: "string",
     *                     payerName: "string",
     *                     payerId: "string"
     *                 },
     *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *                 firstName: "string",
     *                 lastName: "string",
     *                 gender: CandidApi.Gender.Male
     *             },
     *             subscriberSecondary: {
     *                 insuranceCard: {
     *                     memberId: "string",
     *                     payerName: "string",
     *                     payerId: "string"
     *                 },
     *                 patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
     *                 firstName: "string",
     *                 lastName: "string",
     *                 gender: CandidApi.Gender.Male
     *             },
     *             additionalInformation: "string",
     *             serviceAuthorizationExceptionCode: CandidApi.encounters.v4.ServiceAuthorizationExceptionCode.C1,
     *             admissionDate: "2023-01-15",
     *             dischargeDate: "2023-01-15",
     *             onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
     *             lastMenstrualPeriodDate: "2023-01-15",
     *             delayReasonCode: CandidApi.DelayReasonCode.C1,
     *             patient: {},
     *             patientAuthorizedRelease: true,
     *             schemaInstances: [],
     *             vitals: {
     *                 heightIn: 70,
     *                 weightLbs: 165,
     *                 bloodPressureSystolicMmhg: 115,
     *                 bloodPressureDiastolicMmhg: 85,
     *                 bodyTemperatureF: 98,
     *                 hemoglobinGdl: 15.1,
     *                 hematocritPct: 51.2
     *             },
     *             existingMedications: [],
     *             renderingProvider: {},
     *             serviceFacility: {
     *                 organizationName: "Test Organization",
     *                 address: {
     *                     address1: "123 Main St",
     *                     address2: "Apt 1",
     *                     city: "New York",
     *                     state: CandidApi.State.Ny,
     *                     zipCode: "10001",
     *                     zipPlusFourCode: "1234"
     *                 }
     *             },
     *             guarantor: {},
     *             billingProvider: {},
     *             supervisingProvider: {},
     *             referringProvider: {},
     *             initialReferringProvider: {},
     *             referralNumber: "string"
     *         },
     *         encounterExternalId: CandidApi.EncounterExternalId("string"),
     *         ehrSourceUrl: "string",
     *         patientExternalId: "string",
     *         status: CandidApi.chargeCapture.v1.ChargeCaptureStatus.Planned
     *     })
     */
    public async update(
        chargeCaptureId: CandidApi.ChargeCaptureId,
        request: CandidApi.chargeCapture.v1.ChargeCaptureUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.chargeCapture.v1.ChargeCapture, CandidApi.chargeCapture.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/charge_captures/v1/${encodeURIComponent(
                    serializers.ChargeCaptureId.jsonOrThrow(chargeCaptureId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.37.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.chargeCapture.v1.ChargeCaptureUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.chargeCapture.v1.ChargeCapture.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCapture.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "HttpRequestValidationsError":
                case "SchemaInstanceValidationHttpFailure":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.chargeCapture.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCapture.v1.update.Error.Raw,
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
            error: CandidApi.chargeCapture.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ChargeCaptureId} chargeCaptureId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCapture.v1.get(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        chargeCaptureId: CandidApi.ChargeCaptureId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.chargeCapture.v1.ChargeCapture, CandidApi.chargeCapture.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/charge_captures/v1/${encodeURIComponent(
                    serializers.ChargeCaptureId.jsonOrThrow(chargeCaptureId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.37.0",
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
                body: serializers.chargeCapture.v1.ChargeCapture.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.chargeCapture.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.chargeCapture.v1.GetAllChargeCapturesRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCapture.v1.getAll({
     *         limit: 1,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         patientExternalId: "string",
     *         status: CandidApi.chargeCapture.v1.ChargeCaptureStatus.Planned,
     *         externalId: CandidApi.EncounterExternalId("string")
     *     })
     */
    public async getAll(
        request: CandidApi.chargeCapture.v1.GetAllChargeCapturesRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.chargeCapture.v1.ChargeCapturePage, CandidApi.chargeCapture.v1.getAll.Error>
    > {
        const { limit, pageToken, patientExternalId, status, externalId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (externalId != null) {
            _queryParams["external_id"] = externalId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/charge_captures/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.37.0",
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
                body: serializers.chargeCapture.v1.ChargeCapturePage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCapture.v1.getAll.Error.Raw)?.errorName) {
                case "NotImplementedError":
                    return {
                        ok: false,
                        error: serializers.chargeCapture.v1.getAll.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCapture.v1.getAll.Error.Raw,
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
            error: CandidApi.chargeCapture.v1.getAll.Error._unknown(_response.error),
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