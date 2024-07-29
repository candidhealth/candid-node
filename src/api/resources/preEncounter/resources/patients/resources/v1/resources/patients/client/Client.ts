/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../../../environments";
import * as core from "../../../../../../../../../../core";
import * as CandidApi from "../../../../../../../../../index";
import * as serializers from "../../../../../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace Patients {
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

export class Patients {
    constructor(protected readonly _options: Patients.Options = {}) {}

    /**
     * Adds a patient. VersionConflictError is returned when the patient's external ID is already in use.
     *
     * @param {CandidApi.preEncounter.patients.v1.MutablePatient} request
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.create({
     *         name: {
     *             family: "string",
     *             given: ["string"],
     *             use: CandidApi.preEncounter.NameUse.Usual,
     *             period: {}
     *         },
     *         otherNames: [{
     *                 family: "string",
     *                 given: ["string"],
     *                 use: CandidApi.preEncounter.NameUse.Usual,
     *                 period: {}
     *             }],
     *         gender: CandidApi.preEncounter.Gender.Female,
     *         birthDate: "2023-01-15",
     *         maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
     *         deceased: new Date("2024-01-15T09:30:00.000Z"),
     *         multipleBirth: 1,
     *         primaryAddress: {
     *             use: CandidApi.preEncounter.AddressUse.Home,
     *             line: ["string"],
     *             city: "string",
     *             state: "string",
     *             postalCode: "string",
     *             country: "string",
     *             period: {}
     *         },
     *         otherAddresses: [{
     *                 use: CandidApi.preEncounter.AddressUse.Home,
     *                 line: ["string"],
     *                 city: "string",
     *                 state: "string",
     *                 postalCode: "string",
     *                 country: "string",
     *                 period: {}
     *             }],
     *         primaryTelecom: {
     *             value: "string",
     *             use: CandidApi.preEncounter.ContactPointUse.Home,
     *             period: {
     *                 start: "2023-01-15",
     *                 end: "2023-01-15"
     *             }
     *         },
     *         otherTelecoms: [{
     *                 value: "string",
     *                 use: CandidApi.preEncounter.ContactPointUse.Home,
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }],
     *         photo: "string",
     *         language: "string",
     *         externalProvenance: {
     *             externalId: "string",
     *             systemName: "string"
     *         },
     *         contacts: [{
     *                 relationship: [CandidApi.preEncounter.Relationship.Self],
     *                 name: {
     *                     family: "string",
     *                     given: ["string"],
     *                     use: CandidApi.preEncounter.NameUse.Usual,
     *                     period: {}
     *                 },
     *                 gender: CandidApi.preEncounter.Gender.Female,
     *                 telecoms: [{
     *                         value: "string",
     *                         use: CandidApi.preEncounter.ContactPointUse.Home,
     *                         period: {
     *                             start: "2023-01-15",
     *                             end: "2023-01-15"
     *                         }
     *                     }],
     *                 addresses: [{
     *                         use: CandidApi.preEncounter.AddressUse.Home,
     *                         line: ["string"],
     *                         city: "string",
     *                         state: "string",
     *                         postalCode: "string",
     *                         country: "string",
     *                         period: {}
     *                     }],
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }],
     *         generalPractitioners: [{
     *                 name: {
     *                     family: "string",
     *                     given: ["string"],
     *                     use: CandidApi.preEncounter.NameUse.Usual,
     *                     period: {}
     *                 },
     *                 telecoms: [{
     *                         value: "string",
     *                         use: CandidApi.preEncounter.ContactPointUse.Home,
     *                         period: {
     *                             start: "2023-01-15",
     *                             end: "2023-01-15"
     *                         }
     *                     }],
     *                 addresses: [{
     *                         use: CandidApi.preEncounter.AddressUse.Home,
     *                         line: ["string"],
     *                         city: "string",
     *                         state: "string",
     *                         postalCode: "string",
     *                         country: "string",
     *                         period: {}
     *                     }],
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.patients.v1.MutablePatient,
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient,
            CandidApi.preEncounter.patients.v1.patients.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.patients.v1.MutablePatient.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.preEncounter.patients.v1.patients.create.Error.Raw)?.errorName
            ) {
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.patients.create.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.patients.create.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.patients.create.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a patient.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.get(CandidApi.preEncounter.patients.v1.PatientId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient,
            CandidApi.preEncounter.patients.v1.patients.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
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
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.patients.v1.patients.get.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.patients.get.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.patients.get.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.patients.get.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a patient along with it's full history. The return list is ordered by version ascending.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.getHistory(CandidApi.preEncounter.patients.v1.PatientId("string"))
     */
    public async getHistory(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient[],
            CandidApi.preEncounter.patients.v1.patients.getHistory.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
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
                body: serializers.preEncounter.patients.v1.patients.getHistory.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.preEncounter.patients.v1.patients.getHistory.Error.Raw)?.errorName
            ) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.patients.getHistory.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.patients.getHistory.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.patients.getHistory.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a patient. The path must contain the most recent version to prevent races. Updating historic versions is not supported.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {number} version
     * @param {CandidApi.preEncounter.patients.v1.MutablePatient} request
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.update(CandidApi.preEncounter.patients.v1.PatientId("string"), 1, {
     *         name: {
     *             family: "string",
     *             given: ["string"],
     *             use: CandidApi.preEncounter.NameUse.Usual,
     *             period: {}
     *         },
     *         otherNames: [{
     *                 family: "string",
     *                 given: ["string"],
     *                 use: CandidApi.preEncounter.NameUse.Usual,
     *                 period: {}
     *             }],
     *         gender: CandidApi.preEncounter.Gender.Female,
     *         birthDate: "2023-01-15",
     *         maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
     *         deceased: new Date("2024-01-15T09:30:00.000Z"),
     *         multipleBirth: 1,
     *         primaryAddress: {
     *             use: CandidApi.preEncounter.AddressUse.Home,
     *             line: ["string"],
     *             city: "string",
     *             state: "string",
     *             postalCode: "string",
     *             country: "string",
     *             period: {}
     *         },
     *         otherAddresses: [{
     *                 use: CandidApi.preEncounter.AddressUse.Home,
     *                 line: ["string"],
     *                 city: "string",
     *                 state: "string",
     *                 postalCode: "string",
     *                 country: "string",
     *                 period: {}
     *             }],
     *         primaryTelecom: {
     *             value: "string",
     *             use: CandidApi.preEncounter.ContactPointUse.Home,
     *             period: {
     *                 start: "2023-01-15",
     *                 end: "2023-01-15"
     *             }
     *         },
     *         otherTelecoms: [{
     *                 value: "string",
     *                 use: CandidApi.preEncounter.ContactPointUse.Home,
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }],
     *         photo: "string",
     *         language: "string",
     *         externalProvenance: {
     *             externalId: "string",
     *             systemName: "string"
     *         },
     *         contacts: [{
     *                 relationship: [CandidApi.preEncounter.Relationship.Self],
     *                 name: {
     *                     family: "string",
     *                     given: ["string"],
     *                     use: CandidApi.preEncounter.NameUse.Usual,
     *                     period: {}
     *                 },
     *                 gender: CandidApi.preEncounter.Gender.Female,
     *                 telecoms: [{
     *                         value: "string",
     *                         use: CandidApi.preEncounter.ContactPointUse.Home,
     *                         period: {
     *                             start: "2023-01-15",
     *                             end: "2023-01-15"
     *                         }
     *                     }],
     *                 addresses: [{
     *                         use: CandidApi.preEncounter.AddressUse.Home,
     *                         line: ["string"],
     *                         city: "string",
     *                         state: "string",
     *                         postalCode: "string",
     *                         country: "string",
     *                         period: {}
     *                     }],
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }],
     *         generalPractitioners: [{
     *                 name: {
     *                     family: "string",
     *                     given: ["string"],
     *                     use: CandidApi.preEncounter.NameUse.Usual,
     *                     period: {}
     *                 },
     *                 telecoms: [{
     *                         value: "string",
     *                         use: CandidApi.preEncounter.ContactPointUse.Home,
     *                         period: {
     *                             start: "2023-01-15",
     *                             end: "2023-01-15"
     *                         }
     *                     }],
     *                 addresses: [{
     *                         use: CandidApi.preEncounter.AddressUse.Home,
     *                         line: ["string"],
     *                         city: "string",
     *                         state: "string",
     *                         postalCode: "string",
     *                         country: "string",
     *                         period: {}
     *                     }],
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             }]
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        version: number,
        request: CandidApi.preEncounter.patients.v1.MutablePatient,
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient,
            CandidApi.preEncounter.patients.v1.patients.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.patients.v1.MutablePatient.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.preEncounter.patients.v1.patients.update.Error.Raw)?.errorName
            ) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.patients.update.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.patients.update.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.patients.update.Error._unknown(_response.error),
        };
    }

    /**
     * Sets a patient as deactivated. The path must contain the most recent version to prevent races. Dactivating historic versions is not supported. Subsequent updates via PUT to the patient will "reactivate" the patient and set the deactivated flag to false.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {number} version
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.deactivate(CandidApi.preEncounter.patients.v1.PatientId("string"), 1)
     */
    public async deactivate(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        version: number,
        requestOptions?: Patients.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.patients.v1.patients.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
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
                (_response.error.body as serializers.preEncounter.patients.v1.patients.deactivate.Error.Raw)?.errorName
            ) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.patients.deactivate.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.patients.deactivate.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.patients.deactivate.Error._unknown(_response.error),
        };
    }

    /**
     * Searches for patients that match the query parameters.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientsSearchRequest} request
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.search({
     *         nameContains: "string"
     *     })
     */
    public async search(
        request: CandidApi.preEncounter.patients.v1.PatientsSearchRequest = {},
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient[],
            CandidApi.preEncounter.patients.v1.patients.search.Error
        >
    > {
        const { nameContains } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (nameContains != null) {
            _queryParams["name_contains"] = nameContains;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
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
                body: serializers.preEncounter.patients.v1.patients.search.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.patients.v1.patients.search.Error._unknown(_response.error),
        };
    }

    /**
     * Scans up to 100 patient updates. The since query parameter is inclusive, and the result list is ordered by updatedAt descending.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientScanRequest} request
     * @param {Patients.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.patients.scan({
     *         since: new Date("2024-01-15T09:30:00.000Z")
     *     })
     */
    public async scan(
        request: CandidApi.preEncounter.patients.v1.PatientScanRequest,
        requestOptions?: Patients.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient[],
            CandidApi.preEncounter.patients.v1.patients.scan.Error
        >
    > {
        const { since } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["since"] = since.toISOString();
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1/updates/scan"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.24.3",
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
                body: serializers.preEncounter.patients.v1.patients.scan.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.patients.v1.patients.scan.Error._unknown(_response.error),
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
