/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { Eligibility } from "./api/resources/eligibility/client/Client";
import { Encounters } from "./api/resources/encounters/client/Client";
import { ExpectedNetworkStatus } from "./api/resources/expectedNetworkStatus/client/Client";
import { Exports } from "./api/resources/exports/client/Client";
import { Guarantor } from "./api/resources/guarantor/client/Client";
import { OrganizationProviders } from "./api/resources/organizationProviders/client/Client";
import { Tasks } from "./api/resources/tasks/client/Client";
import { BillingNotes } from "./api/resources/billingNotes/client/Client";
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

    protected _eligibility: Eligibility | undefined;

    public get eligibility(): Eligibility {
        return (this._eligibility ??= new Eligibility(this.options));
    }

    protected _encounters: Encounters | undefined;

    public get encounters(): Encounters {
        return (this._encounters ??= new Encounters(this.options));
    }

    protected _expectedNetworkStatus: ExpectedNetworkStatus | undefined;

    public get expectedNetworkStatus(): ExpectedNetworkStatus {
        return (this._expectedNetworkStatus ??= new ExpectedNetworkStatus(this.options));
    }

    protected _exports: Exports | undefined;

    public get exports(): Exports {
        return (this._exports ??= new Exports(this.options));
    }

    protected _guarantor: Guarantor | undefined;

    public get guarantor(): Guarantor {
        return (this._guarantor ??= new Guarantor(this.options));
    }

    protected _organizationProviders: OrganizationProviders | undefined;

    public get organizationProviders(): OrganizationProviders {
        return (this._organizationProviders ??= new OrganizationProviders(this.options));
    }

    protected _tasks: Tasks | undefined;

    public get tasks(): Tasks {
        return (this._tasks ??= new Tasks(this.options));
    }

    protected _billingNotes: BillingNotes | undefined;

    public get billingNotes(): BillingNotes {
        return (this._billingNotes ??= new BillingNotes(this.options));
    }

    protected _payers: Payers | undefined;

    public get payers(): Payers {
        return (this._payers ??= new Payers(this.options));
    }
}
