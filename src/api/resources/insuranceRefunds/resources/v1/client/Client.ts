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
     * Returns all insurance refunds satisfying the search criteria AND whose organization_id matches
     * the current organization_id of the authenticated user.
     *
     * @param {CandidApi.insuranceRefunds.v1.GetMultiInsuranceRefundsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.insuranceRefunds.v1.getMulti({
     *         limit: 1,
     *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sort: CandidApi.insuranceRefunds.v1.InsuranceRefundSortField.AmountCents,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.insuranceRefunds.v1.GetMultiInsuranceRefundsRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceRefunds.v1.InsuranceRefundsPage,
            CandidApi.insuranceRefunds.v1.getMulti.Error
        >
    > {
        const { limit, payerUuid, claimId, serviceLineId, billingProviderId, sort, sortDirection, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (payerUuid != null) {
            _queryParams["payer_uuid"] = payerUuid;
        }

        if (claimId != null) {
            _queryParams["claim_id"] = claimId;
        }

        if (serviceLineId != null) {
            _queryParams["service_line_id"] = serviceLineId;
        }

        if (billingProviderId != null) {
            _queryParams["billing_provider_id"] = billingProviderId;
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
                "/api/insurance-refunds/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.insuranceRefunds.v1.InsuranceRefundsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insuranceRefunds.v1.getMulti.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.insuranceRefunds.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceRefunds.v1.getMulti.Error.Raw,
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
            error: CandidApi.insuranceRefunds.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created insurance refund by its `insurance_refund_id`.
     * If the refund does not exist, a `403` will be thrown.
     *
     * @param {CandidApi.insuranceRefunds.v1.InsuranceRefundId} insuranceRefundId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.insuranceRefunds.v1.get(CandidApi.insuranceRefunds.v1.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/insurance-refunds/v1/${encodeURIComponent(
                    serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(insuranceRefundId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insuranceRefunds.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.insuranceRefunds.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceRefunds.v1.get.Error.Raw,
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
            error: CandidApi.insuranceRefunds.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new insurance refund record and returns the newly created `InsuranceRefund` object.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     *
     * @param {CandidApi.insuranceRefunds.v1.InsuranceRefundCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.insuranceRefunds.v1.create({
     *         payerIdentifier: {
     *             type: "payer_info"
     *         },
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
        request: CandidApi.insuranceRefunds.v1.InsuranceRefundCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/insurance-refunds/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.insuranceRefunds.v1.InsuranceRefundCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insuranceRefunds.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.insuranceRefunds.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceRefunds.v1.create.Error.Raw,
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
            error: CandidApi.insuranceRefunds.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient refund record matching the provided insurance_refund_id. If updating the refund amount,
     * then the allocations must be appropriately updated as well.
     *
     * @param {CandidApi.insuranceRefunds.v1.InsuranceRefundId} insuranceRefundId
     * @param {CandidApi.insuranceRefunds.v1.InsuranceRefundUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.insuranceRefunds.v1.update(CandidApi.insuranceRefunds.v1.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         refundNote: {
     *             type: "set",
     *             value: "string"
     *         },
     *         refundReason: {
     *             type: "set",
     *             value: CandidApi.RefundReason.Overcharged
     *         }
     *     })
     */
    public async update(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId,
        request: CandidApi.insuranceRefunds.v1.InsuranceRefundUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/insurance-refunds/v1/${encodeURIComponent(
                    serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(insuranceRefundId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.insuranceRefunds.v1.InsuranceRefundUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insuranceRefunds.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.insuranceRefunds.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceRefunds.v1.update.Error.Raw,
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
            error: CandidApi.insuranceRefunds.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the insurance refund record matching the provided `insurance_refund_id`.
     * If the matching record's organization_id does not match the authenticated user's
     * current organization_id, then a response code of `403` will be returned.
     *
     * @param {CandidApi.insuranceRefunds.v1.InsuranceRefundId} insuranceRefundId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.insuranceRefunds.v1.delete(CandidApi.insuranceRefunds.v1.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.insuranceRefunds.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/insurance-refunds/v1/${encodeURIComponent(
                    serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(insuranceRefundId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
            switch ((_response.error.body as serializers.insuranceRefunds.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.insuranceRefunds.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceRefunds.v1.delete.Error.Raw,
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
            error: CandidApi.insuranceRefunds.v1.delete.Error._unknown(_response.error),
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
