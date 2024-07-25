/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace V4 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class V4 {
    constructor(protected readonly _options: V4.Options = {}) {}

    /**
     * Returns all patient payments satisfying the search criteria AND whose organization_id matches
     * the current organization_id of the authenticated user.
     *
     * @param {CandidApi.patientPayments.v4.GetMultiPatientPaymentsRequest} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.patientPayments.v4.getMulti({
     *         limit: 1,
     *         patientExternalId: CandidApi.PatientExternalId("string"),
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         unattributed: true,
     *         invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sources: CandidApi.PatientTransactionSource.ManualEntry,
     *         sort: CandidApi.patientPayments.v4.PatientPaymentSortField.PaymentSource,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.patientPayments.v4.GetMultiPatientPaymentsRequest = {},
        requestOptions?: V4.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPaymentsPage, CandidApi.patientPayments.v4.getMulti.Error>
    > {
        const {
            limit,
            patientExternalId,
            claimId,
            serviceLineId,
            billingProviderId,
            unattributed,
            invoiceId,
            sources,
            sort,
            sortDirection,
            pageToken,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
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

        if (unattributed != null) {
            _queryParams["unattributed"] = unattributed.toString();
        }

        if (invoiceId != null) {
            _queryParams["invoice_id"] = invoiceId;
        }

        if (sources != null) {
            if (Array.isArray(sources)) {
                _queryParams["sources"] = sources.map((item) => item);
            } else {
                _queryParams["sources"] = sources;
            }
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
                "/api/patient-payments/v4"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.0-2a6d412",
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
                body: await serializers.patientPayments.v4.PatientPaymentsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientPayments.v4.getMulti.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientPayments.v4.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.patientPayments.v4.getMulti.Error.Raw,
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
            error: CandidApi.patientPayments.v4.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created patient payment by its `patient_payment_id`.
     *
     * @param {CandidApi.patientPayments.v4.PatientPaymentId} patientPaymentId
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.patientPayments.v4.get(CandidApi.patientPayments.v4.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId,
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/patient-payments/v4/${encodeURIComponent(
                    await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(patientPaymentId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.0-2a6d412",
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
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientPayments.v4.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: await serializers.patientPayments.v4.get.Error.parseOrThrow(
                            _response.error.body as serializers.patientPayments.v4.get.Error.Raw,
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
            error: CandidApi.patientPayments.v4.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new patient payment record and returns the newly created PatientPayment object.
     * The allocations can describe whether the payment is being applied toward a specific service line,
     * claim, or billing provider.
     *
     * @param {CandidApi.patientPayments.v4.PatientPaymentCreate} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.patientPayments.v4.create({
     *         amountCents: 1,
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: "string",
     *         patientExternalId: CandidApi.PatientExternalId("string"),
     *         allocations: [{
     *                 amountCents: 1,
     *                 target: {
     *                     type: "service_line_by_id",
     *                     value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *                 }
     *             }],
     *         invoice: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *     })
     */
    public async create(
        request: CandidApi.patientPayments.v4.PatientPaymentCreate,
        requestOptions?: V4.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/patient-payments/v4"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.0-2a6d412",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.patientPayments.v4.PatientPaymentCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientPayments.v4.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientPayments.v4.create.Error.parseOrThrow(
                            _response.error.body as serializers.patientPayments.v4.create.Error.Raw,
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
            error: CandidApi.patientPayments.v4.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient payment record matching the provided patient_payment_id.
     *
     * @param {CandidApi.patientPayments.v4.PatientPaymentId} patientPaymentId
     * @param {CandidApi.patientPayments.v4.PatientPaymentUpdate} request
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.patientPayments.v4.update(CandidApi.patientPayments.v4.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         paymentNote: {
     *             type: "set",
     *             value: "string"
     *         },
     *         invoice: {
     *             type: "set",
     *             value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *         }
     *     })
     */
    public async update(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId,
        request: CandidApi.patientPayments.v4.PatientPaymentUpdate = {},
        requestOptions?: V4.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/patient-payments/v4/${encodeURIComponent(
                    await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(patientPaymentId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.0-2a6d412",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.patientPayments.v4.PatientPaymentUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientPayments.v4.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientPayments.v4.update.Error.parseOrThrow(
                            _response.error.body as serializers.patientPayments.v4.update.Error.Raw,
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
            error: CandidApi.patientPayments.v4.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the patient payment record matching the provided patient_payment_id.
     *
     * @param {CandidApi.patientPayments.v4.PatientPaymentId} patientPaymentId
     * @param {V4.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.patientPayments.v4.delete(CandidApi.patientPayments.v4.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId,
        requestOptions?: V4.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.patientPayments.v4.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/patient-payments/v4/${encodeURIComponent(
                    await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(patientPaymentId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.0-2a6d412",
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
            switch ((_response.error.body as serializers.patientPayments.v4.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientPayments.v4.delete.Error.parseOrThrow(
                            _response.error.body as serializers.patientPayments.v4.delete.Error.Raw,
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
            error: CandidApi.patientPayments.v4.delete.Error._unknown(_response.error),
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
