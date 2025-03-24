/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
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

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Adds an image. VersionConflictError is returned if a front or back of this coverage already exists.
     *
     * @param {CandidApi.preEncounter.images.v1.MutableImage} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.images.v1.create({
     *         fileName: "string",
     *         displayName: "string",
     *         fileType: "string",
     *         status: "PENDING",
     *         coverage: {
     *             id: CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *             side: "FRONT"
     *         },
     *         patient: {
     *             id: CandidApi.preEncounter.PatientId("string"),
     *             notes: "string"
     *         }
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.images.v1.MutableImage,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.images.v1.Image, CandidApi.preEncounter.images.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                "/images/v1",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.0",
                "User-Agent": "candidhealth/0.40.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.images.v1.MutableImage.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.images.v1.Image.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.images.v1.create.Error.Raw)?.errorName) {
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.images.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.images.v1.create.Error.Raw,
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
            error: CandidApi.preEncounter.images.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Gets an image by imageId.
     *
     * @param {CandidApi.preEncounter.images.v1.ImageId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.images.v1.get(CandidApi.preEncounter.images.v1.ImageId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.images.v1.ImageId,
        requestOptions?: V1.RequestOptions,
    ): Promise<core.APIResponse<CandidApi.preEncounter.images.v1.Image, CandidApi.preEncounter.images.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/images/v1/${encodeURIComponent(serializers.preEncounter.images.v1.ImageId.jsonOrThrow(id))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.0",
                "User-Agent": "candidhealth/0.40.0",
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
                body: serializers.preEncounter.images.v1.Image.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.images.v1.get.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.images.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.images.v1.get.Error.Raw,
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
            error: CandidApi.preEncounter.images.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Updates an Image. The path must contain the most recent version to prevent races.
     *
     * @param {CandidApi.preEncounter.images.v1.ImageId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.images.v1.MutableImage} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.images.v1.update(CandidApi.preEncounter.images.v1.ImageId("string"), "string", {
     *         fileName: "string",
     *         displayName: "string",
     *         fileType: "string",
     *         status: "PENDING",
     *         coverage: {
     *             id: CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *             side: "FRONT"
     *         },
     *         patient: {
     *             id: CandidApi.preEncounter.PatientId("string"),
     *             notes: "string"
     *         }
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.images.v1.ImageId,
        version: string,
        request: CandidApi.preEncounter.images.v1.MutableImage,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.images.v1.Image, CandidApi.preEncounter.images.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/images/v1/${encodeURIComponent(serializers.preEncounter.images.v1.ImageId.jsonOrThrow(id))}/${encodeURIComponent(version)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.0",
                "User-Agent": "candidhealth/0.40.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.images.v1.MutableImage.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.images.v1.Image.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.images.v1.update.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.images.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.images.v1.update.Error.Raw,
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
            error: CandidApi.preEncounter.images.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Sets an Image as deactivated. The path must contain the most recent version to prevent races.
     *
     * @param {CandidApi.preEncounter.images.v1.ImageId} id
     * @param {string} version
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.images.v1.deactivate(CandidApi.preEncounter.images.v1.ImageId("string"), "string")
     */
    public async deactivate(
        id: CandidApi.preEncounter.images.v1.ImageId,
        version: string,
        requestOptions?: V1.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.images.v1.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/images/v1/${encodeURIComponent(serializers.preEncounter.images.v1.ImageId.jsonOrThrow(id))}/${encodeURIComponent(version)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.0",
                "User-Agent": "candidhealth/0.40.0",
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
            switch ((_response.error.body as serializers.preEncounter.images.v1.deactivate.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.images.v1.deactivate.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.images.v1.deactivate.Error.Raw,
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
            error: CandidApi.preEncounter.images.v1.deactivate.Error._unknown(_response.error),
        };
    }

    /**
     * Searches for images that match the query parameters.
     *
     * @param {CandidApi.preEncounter.images.v1.ImageGetMultiRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.images.v1.getMulti({
     *         patientId: "string",
     *         coverageId: "string"
     *     })
     */
    public async getMulti(
        request: CandidApi.preEncounter.images.v1.ImageGetMultiRequest = {},
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.images.v1.Image[], CandidApi.preEncounter.images.v1.getMulti.Error>
    > {
        const { patientId, coverageId } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (patientId != null) {
            _queryParams["patient_id"] = patientId;
        }

        if (coverageId != null) {
            _queryParams["coverage_id"] = coverageId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                "/images/v1",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.0",
                "User-Agent": "candidhealth/0.40.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                body: serializers.preEncounter.images.v1.getMulti.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.images.v1.getMulti.Error._unknown(_response.error),
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
