/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CandidApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace ServiceFacility {
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

export class ServiceFacility {
    constructor(protected readonly _options: ServiceFacility.Options = {}) {}

    /**
     * @param {CandidApi.ServiceFacilityId} serviceFacilityId
     * @param {CandidApi.EncounterServiceFacilityUpdate} request
     * @param {ServiceFacility.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.serviceFacility.update(CandidApi.ServiceFacilityId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         organizationName: "string",
     *         npi: "string",
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: CandidApi.State.Ny,
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         }
     *     })
     */
    public async update(
        serviceFacilityId: CandidApi.ServiceFacilityId,
        request: CandidApi.EncounterServiceFacilityUpdate = {},
        requestOptions?: ServiceFacility.RequestOptions
    ): Promise<core.APIResponse<CandidApi.EncounterServiceFacility, CandidApi.serviceFacility.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/service_facility/v2/${encodeURIComponent(
                    await serializers.ServiceFacilityId.jsonOrThrow(serviceFacilityId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.22.2-15e24b1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.EncounterServiceFacilityUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.EncounterServiceFacility.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.serviceFacility.update.Error._unknown(_response.error),
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
