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
     * Returns all non-insurance payer payments
     *
     * @param {CandidApi.nonInsurancePayerPayments.v1.GetMultiNonInsurancePayerPaymentRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayerPayments.v1.getMulti({
     *         limit: 1,
     *         nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         checkNumber: "string",
     *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sort: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentSortField.AmountCents,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.nonInsurancePayerPayments.v1.GetMultiNonInsurancePayerPaymentRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentsPage,
            CandidApi.nonInsurancePayerPayments.v1.getMulti.Error
        >
    > {
        const { limit, nonInsurancePayerId, checkNumber, invoiceId, sort, sortDirection, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (nonInsurancePayerId != null) {
            _queryParams["non_insurance_payer_id"] = nonInsurancePayerId;
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
                "/api/non-insurance-payer-payments/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
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
                body: serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentsPage.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayerPayments.v1.getMulti.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayerPayments.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayerPayments.v1.getMulti.Error.Raw,
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
            error: CandidApi.nonInsurancePayerPayments.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created non-insurance payer payment by its `non_insurance_payer_payment_id`.
     *
     * @param {CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId} nonInsurancePayerPaymentId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayerPayments.v1.get(CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        nonInsurancePayerPaymentId: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPayment,
            CandidApi.nonInsurancePayerPayments.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/non-insurance-payer-payments/v1/${encodeURIComponent(
                    serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId.jsonOrThrow(
                        nonInsurancePayerPaymentId
                    )
                )}`
            ),
            method: "GET",
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
                body: serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayerPayments.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayerPayments.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayerPayments.v1.get.Error.Raw,
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
            error: CandidApi.nonInsurancePayerPayments.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayerPayments.v1.create({
     *         nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         amountCents: 1,
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: "string",
     *         checkNumber: "string",
     *         allocations: [{
     *                 amountCents: 1,
     *                 target: {
     *                     type: "service_line_by_id",
     *                     value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *                 }
     *             }],
     *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *     })
     */
    public async create(
        request: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPayment,
            CandidApi.nonInsurancePayerPayments.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/non-insurance-payer-payments/v1"
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
            body: serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayerPayments.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayerPayments.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayerPayments.v1.create.Error.Raw,
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
            error: CandidApi.nonInsurancePayerPayments.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId} nonInsurancePayerPaymentId
     * @param {CandidApi.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayerPayments.v1.update(CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: {
     *             type: "set",
     *             value: "string"
     *         },
     *         invoiceId: {
     *             type: "set",
     *             value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *         }
     *     })
     */
    public async update(
        nonInsurancePayerPaymentId: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId,
        request: CandidApi.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPayment,
            CandidApi.nonInsurancePayerPayments.v1.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/non-insurance-payer-payments/v1/${encodeURIComponent(
                    serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId.jsonOrThrow(
                        nonInsurancePayerPaymentId
                    )
                )}`
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
            body: serializers.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayerPayments.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayerPayments.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayerPayments.v1.update.Error.Raw,
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
            error: CandidApi.nonInsurancePayerPayments.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the non-insurance payer payment record matching the provided `non_insurance_payer_payment_id`.
     *
     * @param {CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId} nonInsurancePayerPaymentId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayerPayments.v1.delete(CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        nonInsurancePayerPaymentId: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.nonInsurancePayerPayments.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/non-insurance-payer-payments/v1/${encodeURIComponent(
                    serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId.jsonOrThrow(
                        nonInsurancePayerPaymentId
                    )
                )}`
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
            switch ((_response.error.body as serializers.nonInsurancePayerPayments.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayerPayments.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayerPayments.v1.delete.Error.Raw,
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
            error: CandidApi.nonInsurancePayerPayments.v1.delete.Error._unknown(_response.error),
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
