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
     * Import an existing invoice from a third party service to reflect state in Candid.
     *
     * @param {CandidApi.importInvoice.v1.CreateImportInvoiceRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.importInvoice.v1.importInvoice({
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
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                "/api/import-invoice/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.importInvoice.v1.CreateImportInvoiceRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
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
     * Retrieve and view an import invoice
     *
     * @param {CandidApi.InvoiceId} invoiceId - InvoiceId to be returned
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.importInvoice.v1.get(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        invoiceId: CandidApi.InvoiceId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.importInvoice.v1.ImportInvoice, CandidApi.importInvoice.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/import-invoice/v1/${encodeURIComponent(await serializers.InvoiceId.jsonOrThrow(invoiceId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.20.0",
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
                body: await serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
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
                        error: await serializers.importInvoice.v1.get.Error.parseOrThrow(
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
     *     await candidApi.importInvoice.v1.update(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
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
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/import-invoice/v1/${encodeURIComponent(await serializers.InvoiceId.jsonOrThrow(invoiceId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.20.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.importInvoice.v1.ImportInvoiceUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.importInvoice.v1.ImportInvoice.parseOrThrow(_response.body, {
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
                        error: await serializers.importInvoice.v1.update.Error.parseOrThrow(
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
