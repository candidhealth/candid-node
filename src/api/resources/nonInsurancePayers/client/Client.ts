/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V1 } from "../resources/v1/client/Client";

export declare namespace NonInsurancePayers {
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

export class NonInsurancePayers {
    constructor(protected readonly _options: NonInsurancePayers.Options = {}) {}

    protected _v1: V1 | undefined;

    public get v1(): V1 {
        return (this._v1 ??= new V1(this._options));
    }
}
