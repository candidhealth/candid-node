/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V2 } from "../resources/v2/client/Client";

export declare namespace Eligibility {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Eligibility {
    constructor(protected readonly options: Eligibility.Options) {}

    protected _v2: V2 | undefined;

    public get v2(): V2 {
        return (this._v2 ??= new V2(this.options));
    }
}
