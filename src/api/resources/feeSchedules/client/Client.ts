/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V3 } from "../resources/v3/client/Client";

export declare namespace FeeSchedules {
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

export class FeeSchedules {
    constructor(protected readonly _options: FeeSchedules.Options = {}) {}

    protected _v3: V3 | undefined;

    public get v3(): V3 {
        return (this._v3 ??= new V3(this._options));
    }
}
