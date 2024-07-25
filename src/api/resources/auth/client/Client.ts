/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V2 } from "../resources/v2/client/Client";

export declare namespace Auth {
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

export class Auth {
    constructor(protected readonly _options: Auth.Options = {}) {}

    protected _v2: V2 | undefined;

    public get v2(): V2 {
        return (this._v2 ??= new V2(this._options));
    }
}
