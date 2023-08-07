/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CandidApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";

export declare namespace BillingNotes {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class BillingNotes {
    constructor(protected readonly options: BillingNotes.Options) {}

    public async create(
        request: CandidApi.StandaloneBillingNoteCreate
    ): Promise<core.APIResponse<CandidApi.BillingNote, CandidApi.billingNotes.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/billing_notes/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.4.5",
            },
            contentType: "application/json",
            body: await serializers.StandaloneBillingNoteCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.BillingNote.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.billingNotes.create.Error._unknown(_response.error),
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
