/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V3 } from "../resources/v3/client/Client";

export declare namespace Exports {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Exports {
    constructor(protected readonly options: Exports.Options) {}

    protected _v3: V3 | undefined;

    public get v3(): V3 {
        return (this._v3 ??= new V3(this.options));
    }
}
