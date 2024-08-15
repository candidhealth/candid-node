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
     * @param {CandidApi.contracts.v2.ContractId} contractId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contracts.v2.get(CandidApi.contracts.v2.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        contractId: CandidApi.contracts.v2.ContractId,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/contracts/v2/${encodeURIComponent(serializers.contracts.v2.ContractId.jsonOrThrow(contractId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.25.0",
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
                body: serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.contracts.v2.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.contracts.v2.get.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.get.Error.Raw,
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
            error: CandidApi.contracts.v2.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.contracts.v2.GetMultiContractsRequest} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contracts.v2.getMulti({
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         limit: 1,
     *         contractingProviderId: CandidApi.contracts.v2.ContractingProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         renderingProviderIds: CandidApi.contracts.v2.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         payerNames: "string",
     *         states: CandidApi.State.Aa,
     *         contractStatus: CandidApi.contracts.v2.ContractStatus.Pending
     *     })
     */
    public async getMulti(
        request: CandidApi.contracts.v2.GetMultiContractsRequest = {},
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractsPage, CandidApi.contracts.v2.getMulti.Error>> {
        const { pageToken, limit, contractingProviderId, renderingProviderIds, payerNames, states, contractStatus } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (contractingProviderId != null) {
            _queryParams["contracting_provider_id"] = contractingProviderId;
        }

        if (renderingProviderIds != null) {
            if (Array.isArray(renderingProviderIds)) {
                _queryParams["rendering_provider_ids"] = renderingProviderIds.map((item) => item);
            } else {
                _queryParams["rendering_provider_ids"] = renderingProviderIds;
            }
        }

        if (payerNames != null) {
            if (Array.isArray(payerNames)) {
                _queryParams["payer_names"] = payerNames.map((item) => item);
            } else {
                _queryParams["payer_names"] = payerNames;
            }
        }

        if (states != null) {
            if (Array.isArray(states)) {
                _queryParams["states"] = states.map((item) => item);
            } else {
                _queryParams["states"] = states;
            }
        }

        if (contractStatus != null) {
            _queryParams["contract_status"] = contractStatus;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/contracts/v2"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.25.0",
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
                body: serializers.contracts.v2.ContractsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.contracts.v2.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new contract within the user's current organization
     *
     * @param {CandidApi.contracts.v2.ContractCreate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contracts.v2.create({
     *         contractingProviderId: CandidApi.contracts.v2.ContractingProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         renderingProviderIds: new Set([CandidApi.contracts.v2.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]),
     *         payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         effectiveDate: CandidApi.Date_("string"),
     *         expirationDate: CandidApi.Date_("string"),
     *         regions: {
     *             type: "states"
     *         },
     *         contractStatus: CandidApi.contracts.v2.ContractStatus.Pending,
     *         authorizedSignatory: {},
     *         commercialInsuranceTypes: {
     *             type: "allApply"
     *         },
     *         medicareInsuranceTypes: {
     *             type: "allApply"
     *         },
     *         medicaidInsuranceTypes: {
     *             type: "allApply"
     *         }
     *     })
     */
    public async create(
        request: CandidApi.contracts.v2.ContractCreate,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/contracts/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.25.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.contracts.v2.ContractCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.contracts.v2.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.contracts.v2.ContractId} contractId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contracts.v2.delete(CandidApi.contracts.v2.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        contractId: CandidApi.contracts.v2.ContractId,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.contracts.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/contracts/v2/${encodeURIComponent(serializers.contracts.v2.ContractId.jsonOrThrow(contractId))}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.25.0",
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
            switch ((_response.error.body as serializers.contracts.v2.delete.Error.Raw)?.errorName) {
                case "ContractIsLinkedToFeeScheduleHttpError":
                    return {
                        ok: false,
                        error: serializers.contracts.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.delete.Error.Raw,
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
            error: CandidApi.contracts.v2.delete.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.contracts.v2.ContractId} contractId
     * @param {CandidApi.contracts.v2.ContractUpdate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contracts.v2.update(CandidApi.contracts.v2.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         renderingProviderIds: new Set([CandidApi.contracts.v2.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]),
     *         effectiveDate: CandidApi.Date_("string"),
     *         expirationDate: {
     *             type: "set",
     *             value: CandidApi.Date_("string")
     *         },
     *         regions: {
     *             type: "set",
     *             value: {
     *                 type: "states",
     *                 states: [CandidApi.State.Aa]
     *             }
     *         },
     *         contractStatus: CandidApi.contracts.v2.ContractStatus.Pending,
     *         authorizedSignatory: {
     *             type: "set",
     *             firstName: "string",
     *             lastName: "string",
     *             title: "string",
     *             email: "string",
     *             phone: "string",
     *             fax: "string"
     *         },
     *         commercialInsuranceTypes: {
     *             type: "allApply"
     *         },
     *         medicareInsuranceTypes: {
     *             type: "allApply"
     *         },
     *         medicaidInsuranceTypes: {
     *             type: "allApply"
     *         }
     *     })
     */
    public async update(
        contractId: CandidApi.contracts.v2.ContractId,
        request: CandidApi.contracts.v2.ContractUpdate = {},
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/contracts/v2/${encodeURIComponent(serializers.contracts.v2.ContractId.jsonOrThrow(contractId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.25.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.contracts.v2.ContractUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.contracts.v2.update.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.contracts.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.update.Error.Raw,
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
            error: CandidApi.contracts.v2.update.Error._unknown(_response.error),
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
