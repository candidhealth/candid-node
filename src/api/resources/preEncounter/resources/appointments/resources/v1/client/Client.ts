/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
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
     * Adds an appointment. VersionConflictError is returned when the placer_appointment_id is already in use.
     *
     * @param {CandidApi.preEncounter.appointments.v1.MutableAppointment} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.create({
     *         patientId: CandidApi.preEncounter.patients.v1.PatientId("string"),
     *         checkedIn: true,
     *         assignedPatientLocation: "string",
     *         attendingDoctor: {},
     *         referringDoctor: {},
     *         startTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         serviceDuration: 1,
     *         services: [{
     *                 universalServiceIdentifier: CandidApi.preEncounter.appointments.v1.UniversalServiceIdentifier.MdVisit,
     *                 startTimestamp: new Date("2024-01-15T09:30:00.000Z")
     *             }],
     *         placerAppointmentId: "string",
     *         appointmentReason: CandidApi.preEncounter.appointments.v1.AppointmentReason.Checkup,
     *         appointmentType: CandidApi.preEncounter.appointments.v1.AppointmentType.Complete,
     *         locationResourceId: "string",
     *         workQueue: CandidApi.preEncounter.appointments.v1.AppointmentWorkQueue.EmergentIssue
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.appointments.v1.MutableAppointment,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/appointments/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
                    return {
                        ok: false,
                        error: serializers.preEncounter.appointments.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.appointments.v1.create.Error.Raw,
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
            error: CandidApi.preEncounter.appointments.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Gets an appointment.
     *
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.get(CandidApi.preEncounter.appointments.v1.AppointmentId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.appointments.v1.AppointmentId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/appointments/v1/${encodeURIComponent(
                    serializers.preEncounter.appointments.v1.AppointmentId.jsonOrThrow(id)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                            }
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
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.getHistory(CandidApi.preEncounter.appointments.v1.AppointmentId("string"))
     */
    public async getHistory(
        id: CandidApi.preEncounter.appointments.v1.AppointmentId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment[],
            CandidApi.preEncounter.appointments.v1.getHistory.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/appointments/v1/${encodeURIComponent(
                    serializers.preEncounter.appointments.v1.AppointmentId.jsonOrThrow(id)
                )}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                            }
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
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.appointments.v1.MutableAppointment} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.update(CandidApi.preEncounter.appointments.v1.AppointmentId("string"), "string", {
     *         patientId: CandidApi.preEncounter.patients.v1.PatientId("string"),
     *         checkedIn: true,
     *         assignedPatientLocation: "string",
     *         attendingDoctor: {},
     *         referringDoctor: {},
     *         startTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         serviceDuration: 1,
     *         services: [{
     *                 universalServiceIdentifier: CandidApi.preEncounter.appointments.v1.UniversalServiceIdentifier.MdVisit,
     *                 startTimestamp: new Date("2024-01-15T09:30:00.000Z")
     *             }],
     *         placerAppointmentId: "string",
     *         appointmentReason: CandidApi.preEncounter.appointments.v1.AppointmentReason.Checkup,
     *         appointmentType: CandidApi.preEncounter.appointments.v1.AppointmentType.Complete,
     *         locationResourceId: "string",
     *         workQueue: CandidApi.preEncounter.appointments.v1.AppointmentWorkQueue.EmergentIssue
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.appointments.v1.AppointmentId,
        version: string,
        request: CandidApi.preEncounter.appointments.v1.MutableAppointment,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment,
            CandidApi.preEncounter.appointments.v1.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/appointments/v1/${encodeURIComponent(
                    serializers.preEncounter.appointments.v1.AppointmentId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
                            }
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
     * Sets an appointment as deactivated. The path must contain the most recent version to prevent race conditions. Deactivating historic versions is not supported. Subsequent updates via PUT to the appointment will "reactivate" the appointment and set the deactivated flag to false.
     *
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentId} id
     * @param {string} version
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.deactivate(CandidApi.preEncounter.appointments.v1.AppointmentId("string"), "string")
     */
    public async deactivate(
        id: CandidApi.preEncounter.appointments.v1.AppointmentId,
        version: string,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.appointments.v1.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/appointments/v1/${encodeURIComponent(
                    serializers.preEncounter.appointments.v1.AppointmentId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.appointments.v1.deactivate.Error._unknown(_response.error),
        };
    }

    /**
     * Searches for appointments that match the query parameters.
     *
     * @param {CandidApi.preEncounter.appointments.v1.AppointmentsSearchRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.appointments.v1.getMulti({
     *         checkedIn: true,
     *         patientId: CandidApi.preEncounter.patients.v1.PatientId("string"),
     *         minStartTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         maxStartTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *         placerAppointmentId: "string",
     *         workQueue: CandidApi.preEncounter.appointments.v1.AppointmentWorkQueue.EmergentIssue,
     *         sortField: CandidApi.preEncounter.appointments.v1.AppointmentSortField.StartTimestamp,
     *         sortDirection: CandidApi.preEncounter.SortDirection.Asc,
     *         limit: 1
     *     })
     */
    public async getMulti(
        request: CandidApi.preEncounter.appointments.v1.AppointmentsSearchRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.appointments.v1.Appointment[],
            CandidApi.preEncounter.appointments.v1.getMulti.Error
        >
    > {
        const {
            checkedIn,
            patientId,
            minStartTimestamp,
            maxStartTimestamp,
            placerAppointmentId,
            workQueue,
            sortField,
            sortDirection,
            limit,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (checkedIn != null) {
            _queryParams["checked_in"] = checkedIn.toString();
        }

        if (patientId != null) {
            _queryParams["patient_id"] = patientId;
        }

        if (minStartTimestamp != null) {
            _queryParams["min_start_timestamp"] = minStartTimestamp.toISOString();
        }

        if (maxStartTimestamp != null) {
            _queryParams["max_start_timestamp"] = maxStartTimestamp.toISOString();
        }

        if (placerAppointmentId != null) {
            _queryParams["placer_appointment_id"] = placerAppointmentId;
        }

        if (workQueue != null) {
            _queryParams["work_queue"] = workQueue;
        }

        if (sortField != null) {
            _queryParams["sort_field"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/appointments/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.preEncounter.appointments.v1.getMulti.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.appointments.v1.getMulti.Error._unknown(_response.error),
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
