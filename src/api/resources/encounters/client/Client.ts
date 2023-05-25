/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { V4 } from "../resources/v4/client/Client";

export declare namespace Encounters {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Encounters {
    constructor(protected readonly options: Encounters.Options) {}

    protected _v4: V4 | undefined;

    public get v4(): V4 {
        return (this._v4 ??= new V4(this.options));
    }
}
