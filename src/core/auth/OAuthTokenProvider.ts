/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import { V2 } from "../../api/resources/auth/resources/v2/client/Client";
import * as errors from "../../errors/index";

/**
 * The OAuthTokenProvider retrieves an OAuth access token, refreshing it as needed.
 * The access token is then used as the bearer token in every authenticated request.
 */
export class OAuthTokenProvider {
    private readonly BUFFER_IN_MINUTES = 2;
    private readonly _clientId: core.Supplier<string>;
    private readonly _clientSecret: core.Supplier<string>;
    private readonly _authClient: V2;
    private _accessToken: string | undefined;
    private _expiresAt: Date;

    constructor({
        clientId,
        clientSecret,
        authClient,
    }: {
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
        authClient: V2;
    }) {
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._authClient = authClient;
        this._expiresAt = new Date();
    }

    public async getToken(): Promise<string> {
        if (this._accessToken && this._expiresAt > new Date()) {
            return this._accessToken;
        }
        return this.refresh();
    }

    private async refresh(): Promise<string> {
        const tokenResponse = await this._authClient.getToken({
            clientId: await core.Supplier.get(this._clientId),
            clientSecret: await core.Supplier.get(this._clientSecret),
        });
        if (!tokenResponse.ok) {
            throw new errors.CandidApiError({ body: tokenResponse.error });
        }
        this._accessToken = tokenResponse.body.accessToken;
        this._expiresAt = this.getExpiresAt(tokenResponse.body.expiresIn, this.BUFFER_IN_MINUTES);
        return this._accessToken;
    }

    private getExpiresAt(expiresInSeconds: number, bufferInMinutes: number): Date {
        const now = new Date();
        return new Date(now.getTime() + expiresInSeconds * 1000 - bufferInMinutes * 60 * 1000);
    }
}
