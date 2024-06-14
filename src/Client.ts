/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { V2 } from "./api/resources/auth/resources/v2/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { BillingNotes } from "./api/resources/billingNotes/client/Client";
import { Contracts } from "./api/resources/contracts/client/Client";
import { Eligibility } from "./api/resources/eligibility/client/Client";
import { Encounters } from "./api/resources/encounters/client/Client";
import { ExpectedNetworkStatus } from "./api/resources/expectedNetworkStatus/client/Client";
import { Exports } from "./api/resources/exports/client/Client";
import { FeeSchedules } from "./api/resources/feeSchedules/client/Client";
import { Guarantor } from "./api/resources/guarantor/client/Client";
import { ImportInvoice } from "./api/resources/importInvoice/client/Client";
import { InsuranceAdjudications } from "./api/resources/insuranceAdjudications/client/Client";
import { InsurancePayments } from "./api/resources/insurancePayments/client/Client";
import { InsuranceRefunds } from "./api/resources/insuranceRefunds/client/Client";
import { OrganizationServiceFacilities } from "./api/resources/organizationServiceFacilities/client/Client";
import { OrganizationProviders } from "./api/resources/organizationProviders/client/Client";
import { PatientPayments } from "./api/resources/patientPayments/client/Client";
import { PatientRefunds } from "./api/resources/patientRefunds/client/Client";
import { Payers } from "./api/resources/payers/client/Client";
import { Tasks } from "./api/resources/tasks/client/Client";
import { WriteOffs } from "./api/resources/writeOffs/client/Client";
import { ServiceFacility } from "./api/resources/serviceFacility/client/Client";

export declare namespace CandidApiClient {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | string>;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class CandidApiClient {
    private readonly _oauthTokenProvider: core.OAuthTokenProvider;

    constructor(protected readonly _options: CandidApiClient.Options) {
        this._oauthTokenProvider = new core.OAuthTokenProvider({
            clientId: this._options.clientId,
            clientSecret: this._options.clientSecret,
            authClient: new V2({
                environment: this._options.environment,
            }),
        });
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _billingNotes: BillingNotes | undefined;

    public get billingNotes(): BillingNotes {
        return (this._billingNotes ??= new BillingNotes({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _contracts: Contracts | undefined;

    public get contracts(): Contracts {
        return (this._contracts ??= new Contracts({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _eligibility: Eligibility | undefined;

    public get eligibility(): Eligibility {
        return (this._eligibility ??= new Eligibility({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _encounters: Encounters | undefined;

    public get encounters(): Encounters {
        return (this._encounters ??= new Encounters({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _expectedNetworkStatus: ExpectedNetworkStatus | undefined;

    public get expectedNetworkStatus(): ExpectedNetworkStatus {
        return (this._expectedNetworkStatus ??= new ExpectedNetworkStatus({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _exports: Exports | undefined;

    public get exports(): Exports {
        return (this._exports ??= new Exports({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _feeSchedules: FeeSchedules | undefined;

    public get feeSchedules(): FeeSchedules {
        return (this._feeSchedules ??= new FeeSchedules({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _guarantor: Guarantor | undefined;

    public get guarantor(): Guarantor {
        return (this._guarantor ??= new Guarantor({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _importInvoice: ImportInvoice | undefined;

    public get importInvoice(): ImportInvoice {
        return (this._importInvoice ??= new ImportInvoice({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _insuranceAdjudications: InsuranceAdjudications | undefined;

    public get insuranceAdjudications(): InsuranceAdjudications {
        return (this._insuranceAdjudications ??= new InsuranceAdjudications({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _insurancePayments: InsurancePayments | undefined;

    public get insurancePayments(): InsurancePayments {
        return (this._insurancePayments ??= new InsurancePayments({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _insuranceRefunds: InsuranceRefunds | undefined;

    public get insuranceRefunds(): InsuranceRefunds {
        return (this._insuranceRefunds ??= new InsuranceRefunds({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _organizationServiceFacilities: OrganizationServiceFacilities | undefined;

    public get organizationServiceFacilities(): OrganizationServiceFacilities {
        return (this._organizationServiceFacilities ??= new OrganizationServiceFacilities({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _organizationProviders: OrganizationProviders | undefined;

    public get organizationProviders(): OrganizationProviders {
        return (this._organizationProviders ??= new OrganizationProviders({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _patientPayments: PatientPayments | undefined;

    public get patientPayments(): PatientPayments {
        return (this._patientPayments ??= new PatientPayments({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _patientRefunds: PatientRefunds | undefined;

    public get patientRefunds(): PatientRefunds {
        return (this._patientRefunds ??= new PatientRefunds({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _payers: Payers | undefined;

    public get payers(): Payers {
        return (this._payers ??= new Payers({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _tasks: Tasks | undefined;

    public get tasks(): Tasks {
        return (this._tasks ??= new Tasks({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _writeOffs: WriteOffs | undefined;

    public get writeOffs(): WriteOffs {
        return (this._writeOffs ??= new WriteOffs({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }

    protected _serviceFacility: ServiceFacility | undefined;

    public get serviceFacility(): ServiceFacility {
        return (this._serviceFacility ??= new ServiceFacility({
            ...this._options,
            token: async () => await this._oauthTokenProvider.getToken(),
        }));
    }
}
