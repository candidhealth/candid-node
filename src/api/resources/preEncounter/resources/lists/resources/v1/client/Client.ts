/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../serialization/index";

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
     * Gets patients with dependent objects for patients that match the query parameters.
     *
     * @param {CandidApi.preEncounter.lists.v1.PatientListRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.lists.v1.getPatientList({
     *         pageToken: CandidApi.preEncounter.PageToken("string"),
     *         limit: 1,
     *         sortField: "string",
     *         sortDirection: CandidApi.preEncounter.SortDirection.Asc,
     *         filters: CandidApi.preEncounter.lists.v1.FilterQueryString("string")
     *     })
     */
    public async getPatientList(
        request: CandidApi.preEncounter.lists.v1.PatientListRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.lists.v1.PatientListPage,
            CandidApi.preEncounter.lists.v1.getPatientList.Error
        >
    > {
        const { pageToken, limit, sortField, sortDirection, filters } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (sortField != null) {
            _queryParams["sort_field"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        if (filters != null) {
            _queryParams["filters"] = filters;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/lists/v1/patient"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.2",
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
                body: serializers.preEncounter.lists.v1.PatientListPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.lists.v1.getPatientList.Error.Raw)?.errorName) {
                case "BadRequestError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.lists.v1.getPatientList.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.lists.v1.getPatientList.Error.Raw,
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
            error: CandidApi.preEncounter.lists.v1.getPatientList.Error._unknown(_response.error),
        };
    }

    /**
     * Searches for appointments that match the query parameters.
     *
     * @param {CandidApi.preEncounter.lists.v1.AppointmentsGetListRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.lists.v1.getAppointmentList({
     *         sortField: "string",
     *         sortDirection: CandidApi.preEncounter.SortDirection.Asc,
     *         limit: 1,
     *         pageToken: CandidApi.preEncounter.PageToken("string"),
     *         filters: CandidApi.preEncounter.lists.v1.FilterQueryString("string")
     *     })
     */
    public async getAppointmentList(
        request: CandidApi.preEncounter.lists.v1.AppointmentsGetListRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.lists.v1.AppointmentListPage,
            CandidApi.preEncounter.lists.v1.getAppointmentList.Error
        >
    > {
        const { sortField, sortDirection, limit, pageToken, filters } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (sortField != null) {
            _queryParams["sort_field"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (filters != null) {
            _queryParams["filters"] = filters;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/lists/v1/appointment"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.2",
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
                body: serializers.preEncounter.lists.v1.AppointmentListPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.lists.v1.getAppointmentList.Error._unknown(_response.error),
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
