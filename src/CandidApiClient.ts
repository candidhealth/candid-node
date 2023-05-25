import * as environments from "./environments";
import { CandidApiClient as GeneratedCandidApiClient } from "./Client";

export declare namespace CandidApiClient {
    interface Options {
        environment?: environments.CandidApiEnvironment;
        clientId: string;
        clientSecret: string;
    }
}

export class CandidApiClient extends GeneratedCandidApiClient {
    constructor(options: CandidApiClient.Options) {
        super({
            environment: options.environment,
            token: CandidApiClient.createToken(options),
        });
    }

    private static createToken(options: CandidApiClient.Options): string {
        const noAuthRequiredClient = new GeneratedCandidApiClient({ environment: options.environment, token: undefined });
        const tokenResponse = noAuthRequiredClient.auth.v2.getToken({
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
        if (tokenResponse.ok) {
            return tokenResponse.accessToken;
        } else {
            throw Error("Could not get token");
        }
    }
}
