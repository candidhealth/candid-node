import * as environments from "./environments";
import { CandidApiClient as GeneratedCandidApiClient } from "./Client";
import { FailedResponse } from "core/fetcher/APIResponse";

export declare namespace CandidApiClient {
    interface Options {
        environment?: environments.CandidApiEnvironment;
        token?: string;
        clientId?: string;
        clientSecret?: string;
    }
}

export class CandidApiClient extends GeneratedCandidApiClient {
    constructor(options: CandidApiClient.Options) {
        super({
            environment: options.environment,
            token: CandidApiClient.createToken(options),
        });
    }

    static async factory(options: CandidApiClient.Options): Promise<CandidApiClient> {
        if (options.token != null) return Promise.resolve(new CandidApiClient(options));
        if (options.clientId == null || options.clientSecret == null) throw Error("Must provide a token or client id and client secret to authenticate to the Candid API");
        const noAuthRequiredClient = new GeneratedCandidApiClient({ environment: options.environment, token: undefined });
        return noAuthRequiredClient.auth.v2.getToken({
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        }).then(tokenResponse => {
            if (tokenResponse.ok) {
                return new this({environment: options.environment, token:tokenResponse.body.accessToken});
            } else {
                throw tokenResponse.error;
            }
        })
    }

    private static async createToken(options: CandidApiClient.Options): Promise<string> {
        if (options.token != null) return options.token;
        if (options.clientId == null || options.clientSecret == null) throw Error("Must provide a token or client id and client secret to authenticate to the Candid API");

        const noAuthRequiredClient = new GeneratedCandidApiClient({ environment: options.environment, token: undefined });
        const tokenResponse = await noAuthRequiredClient.auth.v2.getToken({
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
        if (tokenResponse.ok) {
            return tokenResponse.body.accessToken;
        } else {
            throw tokenResponse.error.content;
        }
    }
}
