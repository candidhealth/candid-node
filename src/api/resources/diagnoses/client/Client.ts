/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CandidApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace Diagnoses {
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

export class Diagnoses {
    constructor(protected readonly _options: Diagnoses.Options = {}) {}

    /**
     * Creates a new diagnosis for an encounter
     *
     * @param {CandidApi.StandaloneDiagnosisCreate} request
     * @param {Diagnoses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.diagnoses.create({
     *         encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         name: "string",
     *         codeType: CandidApi.DiagnosisTypeCode.Abf,
     *         code: "string"
     *     })
     */
    public async create(
        request: CandidApi.StandaloneDiagnosisCreate,
        requestOptions?: Diagnoses.RequestOptions
    ): Promise<core.APIResponse<CandidApi.Diagnosis, CandidApi.diagnoses.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/diagnoses/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.StandaloneDiagnosisCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.Diagnosis.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.diagnoses.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the diagnosis record matching the provided `diagnosis_id`
     *
     * @param {CandidApi.DiagnosisId} diagnosisId
     * @param {CandidApi.DiagnosisUpdate} request
     * @param {Diagnoses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.diagnoses.update(CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         name: "string",
     *         codeType: CandidApi.DiagnosisTypeCode.Abf,
     *         code: "string"
     *     })
     */
    public async update(
        diagnosisId: CandidApi.DiagnosisId,
        request: CandidApi.DiagnosisUpdate = {},
        requestOptions?: Diagnoses.RequestOptions
    ): Promise<core.APIResponse<CandidApi.Diagnosis, CandidApi.diagnoses.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/diagnoses/v2/${encodeURIComponent(serializers.DiagnosisId.jsonOrThrow(diagnosisId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DiagnosisUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.Diagnosis.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.diagnoses.update.Error.Raw)?.errorName) {
                case "DiagnosisNotFoundHTTPError":
                    return {
                        ok: false,
                        error: serializers.diagnoses.update.Error.parseOrThrow(
                            _response.error.body as serializers.diagnoses.update.Error.Raw,
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
            error: CandidApi.diagnoses.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the diagnosis record associated with the provided `diagnosis_id`
     *
     * @param {CandidApi.DiagnosisId} diagnosisId
     * @param {Diagnoses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.diagnoses.delete(CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        diagnosisId: CandidApi.DiagnosisId,
        requestOptions?: Diagnoses.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.diagnoses.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/diagnoses/v2/${encodeURIComponent(serializers.DiagnosisId.jsonOrThrow(diagnosisId))}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
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
            switch ((_response.error.body as serializers.diagnoses.delete.Error.Raw)?.errorName) {
                case "DiagnosisNotFoundHTTPError":
                    return {
                        ok: false,
                        error: serializers.diagnoses.delete.Error.parseOrThrow(
                            _response.error.body as serializers.diagnoses.delete.Error.Raw,
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
            error: CandidApi.diagnoses.delete.Error._unknown(_response.error),
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
