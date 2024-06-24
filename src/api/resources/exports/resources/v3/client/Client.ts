/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace V3 {
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
     * caller will receive a 422 response. If the file has already been generated, it will be served. Please email
     * our [Support team](mailto:support@joincandidhealth.com) with any data requests outside of these stated guarantees.
     *
     * @param {CandidApi.exports.v3.GetExportsRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.exports.v3.getExports({
     *         startDate: "2023-10-01",
     *         endDate: "2023-10-02"
     *     })
     */
    public async getExports(
        request: CandidApi.exports.v3.GetExportsRequest,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.exports.v3.GetExportsResponse, CandidApi.exports.v3.getExports.Error>> {
        const { startDate, endDate } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["start_date"] = startDate;
        _queryParams["end_date"] = endDate;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                "/api/exports/v3"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.20.1",
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
                body: await serializers.exports.v3.GetExportsResponse.parseOrThrow(_response.body, {
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
                        error: await serializers.exports.v3.getExports.Error.parseOrThrow(
                            _response.error.body as serializers.exports.v3.getExports.Error.Raw,
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
