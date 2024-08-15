/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V2 {
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

export class V2 {
    constructor(protected readonly _options: V2.Options = {}) {}

    /**
     * @param {CandidApi.serviceLines.v2.ServiceLineCreateStandalone} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.serviceLines.v2.create({
     *         modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
     *         chargeAmountCents: 1,
     *         diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         denialReason: {},
     *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *         procedureCode: "string",
     *         quantity: CandidApi.Decimal("string"),
     *         units: CandidApi.ServiceLineUnits.Mj,
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         description: "string",
     *         dateOfService: "2023-01-15",
     *         endDateOfService: "2023-01-15"
     *     })
     */
    public async create(
        request: CandidApi.serviceLines.v2.ServiceLineCreateStandalone,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.serviceLines.v2.ServiceLine, CandidApi.serviceLines.v2.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/service-lines/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.26.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
                            }
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
     *         modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
     *         chargeAmountCents: 1,
     *         diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         denialReason: {},
     *         placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
     *         units: CandidApi.ServiceLineUnits.Mj,
     *         procedureCode: "string",
     *         quantity: CandidApi.Decimal("string"),
     *         description: "string",
     *         dateOfService: "2023-01-15",
     *         endDateOfService: "2023-01-15"
     *     })
     */
    public async update(
        serviceLineId: CandidApi.ServiceLineId,
        request: CandidApi.serviceLines.v2.ServiceLineUpdate,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.serviceLines.v2.ServiceLine, CandidApi.serviceLines.v2.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/service-lines/v2/${encodeURIComponent(serializers.ServiceLineId.jsonOrThrow(serviceLineId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.26.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.serviceLines.v2.update.Error._unknown(_response.error),
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