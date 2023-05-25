/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { Encounters } from "./api/resources/encounters/client/Client";
import { BillingNotes } from "./api/resources/billingNotes/client/Client";
import { ExpectedNetworkStatus } from "./api/resources/expectedNetworkStatus/client/Client";
import { Payers } from "./api/resources/payers/client/Client";

export declare namespace CandidApiClient {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class CandidApiClient {
    constructor(protected readonly options: CandidApiClient.Options) {}

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this.options));
    }

    protected _encounters: Encounters | undefined;

    public get encounters(): Encounters {
        return (this._encounters ??= new Encounters(this.options));
    }

    protected _billingNotes: BillingNotes | undefined;

    public get billingNotes(): BillingNotes {
        return (this._billingNotes ??= new BillingNotes(this.options));
    }

    protected _expectedNetworkStatus: ExpectedNetworkStatus | undefined;

    public get expectedNetworkStatus(): ExpectedNetworkStatus {
        return (this._expectedNetworkStatus ??= new ExpectedNetworkStatus(this.options));
    }

    protected _payers: Payers | undefined;

    public get payers(): Payers {
        return (this._payers ??= new Payers(this.options));
    }
}
