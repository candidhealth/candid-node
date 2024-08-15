/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

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
     * Import an existing invoice from a third party service to reflect state in Candid.
     *
     * @param {CandidApi.importInvoice.v1.CreateImportInvoiceRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.importInvoice.v1.importInvoice({
     *         externalPaymentAccountConfigId: CandidApi.PaymentAccountConfigId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         patientExternalId: CandidApi.PatientExternalId("string"),
     *         externalCustomerIdentifier: "string",
     *         note: "string",
     *         dueDate: "2023-01-15",
     *         items: [{}],
     *         status: CandidApi.invoices.v2.InvoiceStatus.Draft,
     *         externalIdentifier: "string",
     *         customerInvoiceUrl: "string"
     *     })
     */
    public async importInvoice(
        request: CandidApi.importInvoice.v1.CreateImportInvoiceRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.importInvoice.v1.ImportInvoice, CandidApi.importInvoice.v1.importInvoice.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/import-invoice/v1"
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
            body: serializers.importInvoice.v1.CreateImportInvoiceRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.importInvoice.v1.importInvoice.Error._unknown(_response.error),
        };
    }

    /**
     * Returns all Invoices for the authenticated user's organziation with all filters applied.
     *
     * @param {CandidApi.importInvoice.v1.SearchImportedInvoicesRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.importInvoice.v1.getMulti({
     *         patientExternalId: CandidApi.PatientExternalId("string"),
     *         encounterExternalId: CandidApi.EncounterExternalId("string"),
     *         note: "string",
     *         dueDateBefore: "2023-01-15",
     *         dueDateAfter: "2023-01-15",
     *         status: CandidApi.invoices.v2.InvoiceStatus.Draft,
     *         limit: 1,
     *         sort: CandidApi.invoices.v2.InvoiceSortField.CreatedAt,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.importInvoice.v1.SearchImportedInvoicesRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.importInvoice.v1.ImportInvoicesPage, CandidApi.importInvoice.v1.getMulti.Error>
    > {
        const {
            patientExternalId,
            encounterExternalId,
            note,
            dueDateBefore,
            dueDateAfter,
            status,
            limit,
            sort,
            sortDirection,
            pageToken,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
        }

        if (encounterExternalId != null) {
            _queryParams["encounter_external_id"] = encounterExternalId;
        }

        if (note != null) {
            _queryParams["note"] = note;
        }

        if (dueDateBefore != null) {
            _queryParams["due_date_before"] = dueDateBefore;
        }

        if (dueDateAfter != null) {
            _queryParams["due_date_after"] = dueDateAfter;
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
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
                "/api/import-invoice/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.26.1",
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
                body: serializers.importInvoice.v1.ImportInvoicesPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.importInvoice.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieve and view an import invoice
     *
     * @param {CandidApi.InvoiceId} invoiceId - InvoiceId to be returned
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.importInvoice.v1.get(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        invoiceId: CandidApi.InvoiceId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.importInvoice.v1.ImportInvoice, CandidApi.importInvoice.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/import-invoice/v1/${encodeURIComponent(serializers.InvoiceId.jsonOrThrow(invoiceId))}`
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.importInvoice.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.importInvoice.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.importInvoice.v1.get.Error.Raw,
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
            error: CandidApi.importInvoice.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Update the information on the imported invoice
     *
     * @param {CandidApi.InvoiceId} invoiceId
     * @param {CandidApi.importInvoice.v1.ImportInvoiceUpdateRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.importInvoice.v1.update(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         customerInvoiceUrl: "string",
     *         status: CandidApi.invoices.v2.InvoiceStatus.Draft,
     *         note: "string",
     *         dueDate: "2023-01-15",
     *         items: {
     *             updateType: CandidApi.importInvoice.v1.InvoiceItemUpdateType.Append,
     *             items: [{}]
     *         }
     *     })
     */
    public async update(
        invoiceId: CandidApi.InvoiceId,
        request: CandidApi.importInvoice.v1.ImportInvoiceUpdateRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.importInvoice.v1.ImportInvoice, CandidApi.importInvoice.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/import-invoice/v1/${encodeURIComponent(serializers.InvoiceId.jsonOrThrow(invoiceId))}`
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
            body: serializers.importInvoice.v1.ImportInvoiceUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.importInvoice.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.importInvoice.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.importInvoice.v1.update.Error.Raw,
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
            error: CandidApi.importInvoice.v1.update.Error._unknown(_response.error),
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
