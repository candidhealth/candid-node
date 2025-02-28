/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V2 {
    export interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class V2 {
    constructor(protected readonly _options: V2.Options = {}) {}

    /**
     * @param {CandidApi.serviceLines.v2.ServiceLineCreateStandalone} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.serviceLines.v2.create({
     *         modifiers: ["22"],
     *         chargeAmountCents: 1,
     *         diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         denialReason: {
     *             reason: "Authorization Required"
     *         },
     *         placeOfServiceCode: "01",
     *         procedureCode: "string",
     *         quantity: CandidApi.Decimal("string"),
     *         units: "MJ",
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         description: "string",
     *         dateOfService: "2023-01-15",
     *         endDateOfService: "2023-01-15",
     *         drugIdentification: {
     *             serviceIdQualifier: "EN",
     *             nationalDrugCode: "string",
     *             nationalDrugUnitCount: "string",
     *             measurementUnitCode: "ML",
     *             linkSequenceNumber: "string",
     *             pharmacyPrescriptionNumber: "string",
     *             conversionFormula: "string",
     *             drugDescription: "string"
     *         },
     *         orderingProvider: {
     *             npi: "string",
     *             taxonomyCode: "string",
     *             address: {
     *                 address1: "123 Main St",
     *                 address2: "Apt 1",
     *                 city: "New York",
     *                 state: "NY",
     *                 zipCode: "10001",
     *                 zipPlusFourCode: "1234"
     *             },
     *             firstName: "string",
     *             lastName: "string",
     *             organizationName: "string"
     *         },
     *         testResults: [{
     *                 value: 1.1,
     *                 resultType: "HEMATOCRIT"
     *             }],
     *         hasEpsdtIndicator: true,
     *         hasFamilyPlanningIndicator: true
     *     })
     */
    public async create(
        request: CandidApi.serviceLines.v2.ServiceLineCreateStandalone,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<CandidApi.serviceLines.v2.ServiceLine, CandidApi.serviceLines.v2.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/service-lines/v2",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.10",
                "User-Agent": "candidhealth/0.39.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.serviceLines.v2.ServiceLineCreateStandalone.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.serviceLines.v2.ServiceLine.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.serviceLines.v2.create.Error.Raw)?.errorName) {
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: serializers.serviceLines.v2.create.Error.parseOrThrow(
                            _response.error.body as serializers.serviceLines.v2.create.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.serviceLines.v2.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ServiceLineId} serviceLineId
     * @param {CandidApi.serviceLines.v2.ServiceLineUpdate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.serviceLines.v2.update(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         editReason: "string",
     *         modifiers: ["22"],
     *         chargeAmountCents: 1,
     *         diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         drugIdentification: {
     *             serviceIdQualifier: "EN",
     *             nationalDrugCode: "string",
     *             nationalDrugUnitCount: "string",
     *             measurementUnitCode: "ML",
     *             linkSequenceNumber: "string",
     *             pharmacyPrescriptionNumber: "string",
     *             conversionFormula: "string",
     *             drugDescription: "string"
     *         },
     *         denialReason: {
     *             reason: "Authorization Required"
     *         },
     *         placeOfServiceCode: "01",
     *         units: "MJ",
     *         procedureCode: "string",
     *         quantity: CandidApi.Decimal("string"),
     *         description: "string",
     *         dateOfService: "2023-01-15",
     *         endDateOfService: "2023-01-15",
     *         testResults: [{
     *                 value: 1.1,
     *                 resultType: "HEMATOCRIT"
     *             }],
     *         hasEpsdtIndicator: true,
     *         hasFamilyPlanningIndicator: true
     *     })
     */
    public async update(
        serviceLineId: CandidApi.ServiceLineId,
        request: CandidApi.serviceLines.v2.ServiceLineUpdate,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<CandidApi.serviceLines.v2.ServiceLine, CandidApi.serviceLines.v2.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/service-lines/v2/${encodeURIComponent(serializers.ServiceLineId.jsonOrThrow(serviceLineId))}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.10",
                "User-Agent": "candidhealth/0.39.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.serviceLines.v2.ServiceLineUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.serviceLines.v2.ServiceLine.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.serviceLines.v2.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: serializers.serviceLines.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.serviceLines.v2.update.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.serviceLines.v2.update.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ServiceLineId} serviceLineId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.serviceLines.v2.delete(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        serviceLineId: CandidApi.ServiceLineId,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.serviceLines.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/service-lines/v2/${encodeURIComponent(serializers.ServiceLineId.jsonOrThrow(serviceLineId))}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.10",
                "User-Agent": "candidhealth/0.39.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
            switch ((_response.error.body as serializers.serviceLines.v2.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.serviceLines.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.serviceLines.v2.delete.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.serviceLines.v2.delete.Error._unknown(_response.error),
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
