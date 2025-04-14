/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace V3 {
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

export class V3 {
    constructor(protected readonly _options: V3.Options = {}) {}

    /**
     * Retrieve CSV-formatted reports on claim submissions and outcomes. This endpoint returns Export objects that contain an
     * authenticated URL to a customer's reports with a 2min TTL. The schema for the CSV export can be found [here](https://app.joincandidhealth.com/files/exports_schema.csv).
     *
     * **Schema changes:** Changing column order, removing columns, or changing the name of a column is considered a
     * [Breaking Change](../../../api-principles/breaking-changes). Adding new columns to the end of the Exports file is not considered a
     * Breaking Change and happens periodically. For this reason, it is important that any downstream automation or processes built on top
     * of Candid Health's export files be resilient to the addition of new columns at the end of the file.
     *
     * **SLA guarantees:** Files for a given date are guaranteed to be available after 3 business days. For example, Friday's file will be
     * available by Wednesday at the latest. If file generation is still in progress upon request before 3 business days have passed, the
     * caller will receive a 422 response. If the file has already been generated, it will be served. Historic files should be available
     * up to 90 days in the past by default. Please email our [Support team](mailto:support@joincandidhealth.com) with any data requests
     * outside of these stated guarantees.
     *
     * **New Customers:** This endpoint is not enabled by default for new Candid customers. To have this endpoint enabled for your organization,
     * please email our [Support team](mailto:support@joincandidhealth.com) with the request.
     *
     * @param {CandidApi.exports.v3.GetExportsRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.exports.v3.getExports({
     *         startDate: "2023-10-01",
     *         endDate: "2023-10-02"
     *     })
     */
    public async getExports(
        request: CandidApi.exports.v3.GetExportsRequest,
        requestOptions?: V3.RequestOptions,
    ): Promise<core.APIResponse<CandidApi.exports.v3.GetExportsResponse, CandidApi.exports.v3.getExports.Error>> {
        const { startDate, endDate } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["start_date"] = startDate;
        _queryParams["end_date"] = endDate;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/exports/v3",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.4",
                "User-Agent": "candidhealth/0.40.4",
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
                body: serializers.exports.v3.GetExportsResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.exports.v3.getExports.Error.Raw)?.errorName) {
                case "HttpRequestValidationsError":
                case "ExportFilesUnavailableError":
                case "MissingDailyIncrementalExportFileError":
                case "ExportNotYetAvailableError":
                case "ExportDateTooEarlyError":
                    return {
                        ok: false,
                        error: serializers.exports.v3.getExports.Error.parseOrThrow(
                            _response.error.body as serializers.exports.v3.getExports.Error.Raw,
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
            error: CandidApi.exports.v3.getExports.Error._unknown(_response.error),
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
