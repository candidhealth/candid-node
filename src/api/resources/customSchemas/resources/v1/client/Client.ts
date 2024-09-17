/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

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
     * Returns all custom schemas.
     *
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.customSchemas.v1.getMulti()
     */
    public async getMulti(
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.customSchemas.v1.SchemaGetMultiResponse, CandidApi.customSchemas.v1.getMulti.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/custom-schemas/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.32.0",
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
                body: serializers.customSchemas.v1.SchemaGetMultiResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.customSchemas.v1.getMulti.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.customSchemas.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.customSchemas.v1.getMulti.Error.Raw,
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
            error: CandidApi.customSchemas.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Return a custom schema with a given ID.
     *
     * @param {CandidApi.SchemaId} schemaId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.customSchemas.v1.get(CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"))
     */
    public async get(
        schemaId: CandidApi.SchemaId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.customSchemas.v1.Schema, CandidApi.customSchemas.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/custom-schemas/v1/${encodeURIComponent(serializers.SchemaId.jsonOrThrow(schemaId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.32.0",
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
                body: serializers.customSchemas.v1.Schema.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.customSchemas.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.customSchemas.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.customSchemas.v1.get.Error.Raw,
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
            error: CandidApi.customSchemas.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Create custom schema with a set of typed keys. Schema keys can be referenced as inputs in user-configurable rules in the Rules
     * Engine, and key-value pairs can be attached to claims via the Encounters API.
     *
     * @param {CandidApi.customSchemas.v1.SchemaCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.customSchemas.v1.create({
     *         name: "General Medicine",
     *         description: "Values associated with a generic visit",
     *         fields: [{
     *                 key: "provider_category",
     *                 type: CandidApi.Primitive.String
     *             }, {
     *                 key: "is_urgent_care",
     *                 type: CandidApi.Primitive.Boolean
     *             }, {
     *                 key: "bmi",
     *                 type: CandidApi.Primitive.Double
     *             }, {
     *                 key: "age",
     *                 type: CandidApi.Primitive.Integer
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.customSchemas.v1.SchemaCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.customSchemas.v1.Schema, CandidApi.customSchemas.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/custom-schemas/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.32.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.customSchemas.v1.SchemaCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.customSchemas.v1.Schema.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.customSchemas.v1.create.Error.Raw)?.errorName) {
                case "SchemaValidationHttpFailure":
                    return {
                        ok: false,
                        error: serializers.customSchemas.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.customSchemas.v1.create.Error.Raw,
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
            error: CandidApi.customSchemas.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Update the name, description, or keys on a preexisting schema.
     *
     * @param {CandidApi.SchemaId} schemaId
     * @param {CandidApi.customSchemas.v1.SchemaUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.customSchemas.v1.update(CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"), {
     *         name: "General Medicine and Health",
     *         description: "Values collected during all visits",
     *         fieldsToAdd: [{
     *                 key: "visit_type",
     *                 type: CandidApi.Primitive.String
     *             }]
     *     })
     */
    public async update(
        schemaId: CandidApi.SchemaId,
        request: CandidApi.customSchemas.v1.SchemaUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.customSchemas.v1.Schema, CandidApi.customSchemas.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/custom-schemas/v1/${encodeURIComponent(serializers.SchemaId.jsonOrThrow(schemaId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.32.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.customSchemas.v1.SchemaUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.customSchemas.v1.Schema.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.customSchemas.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "SchemaValidationHttpFailure":
                    return {
                        ok: false,
                        error: serializers.customSchemas.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.customSchemas.v1.update.Error.Raw,
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
            error: CandidApi.customSchemas.v1.update.Error._unknown(_response.error),
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
