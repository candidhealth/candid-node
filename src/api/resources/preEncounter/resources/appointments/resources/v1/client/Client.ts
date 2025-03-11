/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
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

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Adds an appointment. VersionConflictError is returned when the placer_appointment_id is already in use.
     *
     * @param {CandidApi.preEncounter.appointments.v1.MutableAppointment} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.create({
     *         patientId: CandidApi.preEncounter.PatientId("string"),
     *         startTimestamp: "2024-01-15T09:30:00Z",
     *         status: "PENDING",
     *         serviceDuration: 1,
     *         services: [{
     *                 universalServiceIdentifier: "MD_Visit",
     *                 startTimestamp: "2024-01-15T09:30:00Z"
     *             }],
     *         placerAppointmentId: "string",
     *         attendingDoctor: {
     *             name: {
     *                 family: "string",
     *                 given: ["string"],
     *                 use: "USUAL",
     *                 period: {}
     *             },
     *             type: "PRIMARY",
     *             npi: "string",
     *             telecoms: [{
     *                     value: "string",
     *                     use: "HOME"
     *                 }],
     *             addresses: [],
     *             period: {},
     *             canonicalId: CandidApi.preEncounter.CanonicalProviderId("string"),
     *             fax: "string"
     *         },
     *         estimatedCopayCents: 1,
     *         estimatedPatientResponsibilityCents: 1,
     *         patientDepositCents: 1,
     *         checkedInTimestamp: "2024-01-15T09:30:00Z",
     *         notes: "string",
     *         locationResourceId: "string",
     *         automatedEligibilityCheckComplete: true,
     *         workQueue: "EMERGENT_ISSUE"
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.appointments.v1.MutableAppointment,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                "/appointments/v1",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.appointments.v1.MutableAppointment.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.appointments.v1.Appointment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.appointments.v1.create.Error.Raw)?.errorName) {
                case "VersionConflictError":
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.create.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Gets all Visits within a given time range. The return list is ordered by start_time ascending.
     *
     * @param {CandidApi.preEncounter.appointments.v1.VisitsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.getVisits({
     *         pageToken: CandidApi.preEncounter.PageToken("string"),
     *         limit: 1,
     *         sortField: CandidApi.preEncounter.lists.v1.SortFieldString("string"),
     *         sortDirection: "asc",
     *         filters: CandidApi.preEncounter.lists.v1.FilterQueryString("string")
     *     })
     */
    public async getVisits(
        request: CandidApi.preEncounter.appointments.v1.VisitsRequest = {},
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.VisitsPage,
            CandidApi.preEncounter.appointments.v1.getVisits.Error
        >
    > {
        const { pageToken, limit, sortField, sortDirection, filters } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
            _queryParams["sort_direction"] = serializers.preEncounter.SortDirection.jsonOrThrow(sortDirection, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (filters != null) {
            _queryParams["filters"] = filters;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                "/appointments/v1/visits",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
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
                body: serializers.preEncounter.appointments.v1.VisitsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.appointments.v1.getVisits.Error.Raw)?.errorName) {
                case "BadRequestError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.getVisits.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.getVisits.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.getVisits.Error._unknown(_response.error),
        };
    }

    /**
     * Gets an appointment.
     *
     * @param {CandidApi.preEncounter.AppointmentId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.get(CandidApi.preEncounter.AppointmentId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.AppointmentId,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/appointments/v1/${encodeURIComponent(serializers.preEncounter.AppointmentId.jsonOrThrow(id))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                body: serializers.preEncounter.appointments.v1.Appointment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.appointments.v1.get.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.get.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Gets an appointment along with it's full history. The return list is ordered by version ascending.
     *
     * @param {CandidApi.preEncounter.AppointmentId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.getHistory(CandidApi.preEncounter.AppointmentId("string"))
     */
    public async getHistory(
        id: CandidApi.preEncounter.AppointmentId,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment[],
            CandidApi.preEncounter.appointments.v1.getHistory.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/appointments/v1/${encodeURIComponent(serializers.preEncounter.AppointmentId.jsonOrThrow(id))}/history`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                body: serializers.preEncounter.appointments.v1.getHistory.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.preEncounter.appointments.v1.getHistory.Error.Raw)?.errorName
            ) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.getHistory.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.getHistory.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.getHistory.Error._unknown(_response.error),
        };
    }

    /**
     * Updates an appointment. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.
     *
     * @param {CandidApi.preEncounter.AppointmentId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.appointments.v1.MutableAppointment} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.update(CandidApi.preEncounter.AppointmentId("string"), "string", {
     *         patientId: CandidApi.preEncounter.PatientId("string"),
     *         startTimestamp: "2024-01-15T09:30:00Z",
     *         status: "PENDING",
     *         serviceDuration: 1,
     *         services: [{
     *                 universalServiceIdentifier: "MD_Visit",
     *                 startTimestamp: "2024-01-15T09:30:00Z"
     *             }],
     *         placerAppointmentId: "string",
     *         attendingDoctor: {
     *             name: {
     *                 family: "string",
     *                 given: ["string"],
     *                 use: "USUAL",
     *                 period: {}
     *             },
     *             type: "PRIMARY",
     *             npi: "string",
     *             telecoms: [{
     *                     value: "string",
     *                     use: "HOME"
     *                 }],
     *             addresses: [],
     *             period: {},
     *             canonicalId: CandidApi.preEncounter.CanonicalProviderId("string"),
     *             fax: "string"
     *         },
     *         estimatedCopayCents: 1,
     *         estimatedPatientResponsibilityCents: 1,
     *         patientDepositCents: 1,
     *         checkedInTimestamp: "2024-01-15T09:30:00Z",
     *         notes: "string",
     *         locationResourceId: "string",
     *         automatedEligibilityCheckComplete: true,
     *         workQueue: "EMERGENT_ISSUE"
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.AppointmentId,
        version: string,
        request: CandidApi.preEncounter.appointments.v1.MutableAppointment,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/appointments/v1/${encodeURIComponent(serializers.preEncounter.AppointmentId.jsonOrThrow(id))}/${encodeURIComponent(version)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.appointments.v1.MutableAppointment.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.appointments.v1.Appointment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.appointments.v1.update.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.update.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Scans up to 100 appointment updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.
     *
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentScanRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.scan({
     *         since: "2024-01-15T09:30:00Z"
     *     })
     */
    public async scan(
        request: CandidApi.preEncounter.appointments.v1.AppointmentScanRequest,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment[],
            CandidApi.preEncounter.appointments.v1.scan.Error
        >
    > {
        const { since } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["since"] = since.toISOString();
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                "/appointments/v1/updates/scan",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
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
                body: serializers.preEncounter.appointments.v1.scan.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.appointments.v1.scan.Error._unknown(_response.error),
        };
    }

    /**
     * Sets an appointment as deactivated. The path must contain the most recent version to prevent race conditions. Deactivating historic versions is not supported. Subsequent updates via PUT to the appointment will "reactivate" the appointment and set the deactivated flag to false.
     *
     * @param {CandidApi.preEncounter.AppointmentId} id
     * @param {string} version
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.deactivate(CandidApi.preEncounter.AppointmentId("string"), "string")
     */
    public async deactivate(
        id: CandidApi.preEncounter.AppointmentId,
        version: string,
        requestOptions?: V1.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.appointments.v1.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).preEncounter,
                `/appointments/v1/${encodeURIComponent(serializers.preEncounter.AppointmentId.jsonOrThrow(id))}/${encodeURIComponent(version)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.11",
                "User-Agent": "candidhealth/0.39.11",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
            switch (
                (_response.error.body as serializers.preEncounter.appointments.v1.deactivate.Error.Raw)?.errorName
            ) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.deactivate.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.deactivate.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.deactivate.Error._unknown(_response.error),
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
