/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";

export declare namespace V1 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V1 {
    constructor(protected readonly options: V1.Options) {}

    /**
     * **This endpoint is incubating.**
     * Retrieves a previously created write off by its `write_off_id`.
     *
     */
    public async get(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/write-offs/v1/${await serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * **This endpoint is incubating.**
     * Creates one or many write-offs given a specific set of allocations.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     *
     */
    public async create(
        request: CandidApi.writeOffs.v1.CreateWriteOffsRequest
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff[], CandidApi.writeOffs.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/write-offs/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            body: await serializers.writeOffs.v1.CreateWriteOffsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.create.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * **This endpoint is incubating.**
     * Reverts a write off given a `write_off_id`.
     *
     */
    public async revert(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.revert.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/write-offs/v1/${await serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId)}/revert`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.revert.Error._unknown(_response.error),
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