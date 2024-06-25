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
        environment?: core.Supplier<environments.CandidApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Returns all non-ERA originated insurance payments satisfying the search criteria
     *
     * @param {CandidApi.insurancePayments.v1.GetMultiInsurancePaymentRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insurancePayments.v1.getMulti({
     *         limit: 1,
     *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sort: CandidApi.insurancePayments.v1.InsurancePaymentSortField.AmountCents,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.insurancePayments.v1.GetMultiInsurancePaymentRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.insurancePayments.v1.InsurancePaymentsPage,
            CandidApi.insurancePayments.v1.getMulti.Error
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
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-payments/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insurancePayments.v1.InsurancePaymentsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insurancePayments.v1.getMulti.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.insurancePayments.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.insurancePayments.v1.getMulti.Error.Raw,
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
            error: CandidApi.insurancePayments.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created insurance payment by its `insurance_payment_id`.
     * If the payment does not exist, a `403` will be thrown.
     *
     * @param {CandidApi.insurancePayments.v1.InsurancePaymentId} insurancePaymentId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insurancePayments.v1.get(CandidApi.insurancePayments.v1.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        insurancePaymentId: CandidApi.insurancePayments.v1.InsurancePaymentId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insurancePayments.v1.InsurancePayment, CandidApi.insurancePayments.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-payments/v1/${encodeURIComponent(
                    await serializers.insurancePayments.v1.InsurancePaymentId.jsonOrThrow(insurancePaymentId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insurancePayments.v1.InsurancePayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insurancePayments.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: await serializers.insurancePayments.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.insurancePayments.v1.get.Error.Raw,
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
            error: CandidApi.insurancePayments.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new insurance payment record and returns the newly created `InsurancePayment` object. This endpoint
     * should only be used for insurance payments that do not have a corresponding ERA (for example: a settlement check
     * from a payer). If the payment is an ERA, then you should used the insurance-adjudications API.
     *
     * @param {CandidApi.insurancePayments.v1.InsurancePaymentCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insurancePayments.v1.create({
     *         payerIdentifier: {
     *             type: "payer_info"
     *         },
     *         amountCents: 1,
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: "string",
     *         allocations: [{}]
     *     })
     */
    public async create(
        request: CandidApi.insurancePayments.v1.InsurancePaymentCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insurancePayments.v1.InsurancePayment, CandidApi.insurancePayments.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-payments/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.insurancePayments.v1.InsurancePaymentCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insurancePayments.v1.InsurancePayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insurancePayments.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.insurancePayments.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.insurancePayments.v1.create.Error.Raw,
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
            error: CandidApi.insurancePayments.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient payment record matching the provided insurance_payment_id. If updating the payment amount,
     * then the allocations must be appropriately updated as well.
     *
     * @param {CandidApi.insurancePayments.v1.InsurancePaymentId} insurancePaymentId
     * @param {CandidApi.insurancePayments.v1.InsurancePaymentUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insurancePayments.v1.update(CandidApi.insurancePayments.v1.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: {
     *             type: "set",
     *             value: "string"
     *         }
     *     })
     */
    public async update(
        insurancePaymentId: CandidApi.insurancePayments.v1.InsurancePaymentId,
        request: CandidApi.insurancePayments.v1.InsurancePaymentUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.insurancePayments.v1.InsurancePayment, CandidApi.insurancePayments.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-payments/v1/${encodeURIComponent(
                    await serializers.insurancePayments.v1.InsurancePaymentId.jsonOrThrow(insurancePaymentId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.insurancePayments.v1.InsurancePaymentUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insurancePayments.v1.InsurancePayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insurancePayments.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.insurancePayments.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.insurancePayments.v1.update.Error.Raw,
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
            error: CandidApi.insurancePayments.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the insurance payment record matching the provided `insurance_payment_id`.
     * If the matching record's organization_id does not match the authenticated user's
     * current organization_id, then a response code of `403` will be returned.
     *
     * @param {CandidApi.insurancePayments.v1.InsurancePaymentId} insurancePaymentId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insurancePayments.v1.delete(CandidApi.insurancePayments.v1.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        insurancePaymentId: CandidApi.insurancePayments.v1.InsurancePaymentId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.insurancePayments.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-payments/v1/${encodeURIComponent(
                    await serializers.insurancePayments.v1.InsurancePaymentId.jsonOrThrow(insurancePaymentId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
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
            switch ((_response.error.body as serializers.insurancePayments.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.insurancePayments.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.insurancePayments.v1.delete.Error.Raw,
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
            error: CandidApi.insurancePayments.v1.delete.Error._unknown(_response.error),
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
