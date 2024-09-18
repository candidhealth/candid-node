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
     * Returns all third party payer refunds satisfying the search criteria
     *
     * @param {CandidApi.thirdPartyPayerRefunds.v1.GetMultiThirdPartyPayerRefundsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thirdPartyPayerRefunds.v1.getMulti({
     *         limit: 1,
     *         thirdPartyPayerId: CandidApi.thirdPartyPayers.v1.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         checkNumber: "string",
     *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sort: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundSortField.AmountCents,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.thirdPartyPayerRefunds.v1.GetMultiThirdPartyPayerRefundsRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundsPage,
            CandidApi.thirdPartyPayerRefunds.v1.getMulti.Error
        >
    > {
        const { limit, thirdPartyPayerId, checkNumber, invoiceId, sort, sortDirection, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (thirdPartyPayerId != null) {
            _queryParams["third_party_payer_id"] = thirdPartyPayerId;
        }

        if (checkNumber != null) {
            if (Array.isArray(checkNumber)) {
                _queryParams["check_number"] = checkNumber.map((item) => item);
            } else {
                _queryParams["check_number"] = checkNumber;
            }
        }

        if (invoiceId != null) {
            _queryParams["invoice_id"] = invoiceId;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/third-party-payer-refunds/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.0",
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
                body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.thirdPartyPayerRefunds.v1.getMulti.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.thirdPartyPayerRefunds.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.thirdPartyPayerRefunds.v1.getMulti.Error.Raw,
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
            error: CandidApi.thirdPartyPayerRefunds.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created third party payer refund by its `third_party_payer_refund_id`.
     *
     * @param {CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId} thirdPartyPayerRefundId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thirdPartyPayerRefunds.v1.get(CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        thirdPartyPayerRefundId: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund,
            CandidApi.thirdPartyPayerRefunds.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/third-party-payer-refunds/v1/${encodeURIComponent(
                    serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId.jsonOrThrow(thirdPartyPayerRefundId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.0",
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
                body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.thirdPartyPayerRefunds.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.thirdPartyPayerRefunds.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.thirdPartyPayerRefunds.v1.get.Error.Raw,
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
            error: CandidApi.thirdPartyPayerRefunds.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new third party payer refund record and returns the newly created `ThirdPartyPayerRefund` object.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     *
     * @param {CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thirdPartyPayerRefunds.v1.create({
     *         thirdPartyPayerId: CandidApi.thirdPartyPayers.v1.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         amountCents: 1,
     *         refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         refundNote: "string",
     *         allocations: [{
     *                 amountCents: 1,
     *                 target: {
     *                     type: "service_line_by_id",
     *                     value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *                 }
     *             }],
     *         refundReason: CandidApi.RefundReason.Overcharged
     *     })
     */
    public async create(
        request: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund,
            CandidApi.thirdPartyPayerRefunds.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/third-party-payer-refunds/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.thirdPartyPayerRefunds.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.thirdPartyPayerRefunds.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.thirdPartyPayerRefunds.v1.create.Error.Raw,
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
            error: CandidApi.thirdPartyPayerRefunds.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the third party payer refund record matching the provided third_party_payer_refund_id. If updating the refund amount,
     * then the allocations must be appropriately updated as well.
     *
     * @param {CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId} thirdPartyPayerRefundId
     * @param {CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thirdPartyPayerRefunds.v1.update(CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         refundNote: {
     *             type: "set",
     *             value: "string"
     *         },
     *         refundReason: {
     *             type: "set",
     *             value: CandidApi.RefundReason.Overcharged
     *         },
     *         invoiceId: {
     *             type: "set",
     *             value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *         }
     *     })
     */
    public async update(
        thirdPartyPayerRefundId: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId,
        request: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund,
            CandidApi.thirdPartyPayerRefunds.v1.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/third-party-payer-refunds/v1/${encodeURIComponent(
                    serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId.jsonOrThrow(thirdPartyPayerRefundId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.thirdPartyPayerRefunds.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.thirdPartyPayerRefunds.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.thirdPartyPayerRefunds.v1.update.Error.Raw,
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
            error: CandidApi.thirdPartyPayerRefunds.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the third party payer refund record matching the provided `third_party_payer_refund_id`.
     *
     * @param {CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId} thirdPartyPayerRefundId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thirdPartyPayerRefunds.v1.delete(CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        thirdPartyPayerRefundId: CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.thirdPartyPayerRefunds.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/third-party-payer-refunds/v1/${encodeURIComponent(
                    serializers.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundId.jsonOrThrow(thirdPartyPayerRefundId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.0",
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
            switch ((_response.error.body as serializers.thirdPartyPayerRefunds.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.thirdPartyPayerRefunds.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.thirdPartyPayerRefunds.v1.delete.Error.Raw,
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
            error: CandidApi.thirdPartyPayerRefunds.v1.delete.Error._unknown(_response.error),
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
