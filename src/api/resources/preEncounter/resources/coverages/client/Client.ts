/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { V1 } from "../resources/v1/client/Client";

export declare namespace Coverages {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Coverages {
    constructor(protected readonly _options: Coverages.Options = {}) {}

    protected _v1: V1 | undefined;

    public get v1(): V1 {
        return (this._v1 ??= new V1(this._options));
    }
}
