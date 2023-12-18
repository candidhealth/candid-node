/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";

export declare namespace V3 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V3 {
    constructor(protected readonly options: V3.Options) {}

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
     */
    public async getExports(
        request: CandidApi.exports.v3.GetExportsRequest
    ): Promise<core.APIResponse<CandidApi.exports.v3.GetExportsResponse, CandidApi.exports.v3.getExports.Error>> {
        const { startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("start_date", startDate);
        _queryParams.append("end_date", endDate);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/exports/v3"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
