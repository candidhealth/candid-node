# Reference

## Auth V2

<details><summary><code>client.auth.v2.<a href="/src/api/resources/auth/resources/v2/client/Client.ts">getToken</a>({ ...params }) -> core.APIResponse<CandidApi.AuthGetTokenResponse, CandidApi.auth.v2.getToken.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Callout intent="info">
Candid Health SDKs automatically handle authentication workflows after configuring them with the `client_id` and
`client_secret`.
</Callout>

Candid Health utilizes the [OAuth 2.0 bearer token authentication scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) in our auth flow. You obtain the bearer token for all
subsequent API requests via the `/auth/token` endpoint defined below, which requires you to provide your `client_id` and `client_secret`. Your `client_id` and `client_secret` can be [generated](https://support.joincandidhealth.com/hc/en-us/articles/23065219476244--Generating-Candid-API-Keys) from the "Users & Credentials" tab by your org admin.

The bearer token is a signed [JWT](https://jwt.io/). The public key for the JWT can be found [here](https://candidhealth.auth0.com/pem) for any verification workflows.

The bearer token should be provided in the `Authorization` header for all subsequent API calls.

<Callout intent="warning">
The bearer token expires 5 hours after it has been created. After it has expired, the client will receive an "HTTP 401
Unauthorized" error, at which point the client should generate a new token. It is important that tokens be reused between
requests; if the client attempts to generate a token too often, it will be rate-limited and will receive an `HTTP 429 Too Many Requests` error.
</Callout>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.v2.getToken({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.auth.v2.AuthGetTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BillingNotes V2

<details><summary><code>client.billingNotes.v2.<a href="/src/api/resources/billingNotes/resources/v2/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.BillingNote, CandidApi.billingNotes.v2.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingNotes.v2.create({
    encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    text: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.billingNotes.v2.StandaloneBillingNoteCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billingNotes.v2.<a href="/src/api/resources/billingNotes/resources/v2/client/Client.ts">delete</a>(billingNoteId) -> core.APIResponse<void, CandidApi.billingNotes.v2.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingNotes.v2.delete(CandidApi.BillingNoteId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**billingNoteId:** `CandidApi.BillingNoteId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billingNotes.v2.<a href="/src/api/resources/billingNotes/resources/v2/client/Client.ts">update</a>(billingNoteId, { ...params }) -> core.APIResponse<CandidApi.BillingNote, CandidApi.billingNotes.v2.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billingNotes.v2.update(CandidApi.BillingNoteId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    text: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**billingNoteId:** `CandidApi.BillingNoteId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.billingNotes.v2.BillingNoteUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ChargeCaptureBundles V1

<details><summary><code>client.chargeCaptureBundles.v1.<a href="/src/api/resources/chargeCaptureBundles/resources/v1/client/Client.ts">get</a>(chargeCaptureBundleId) -> core.APIResponse<CandidApi.ChargeCaptureBundle, CandidApi.chargeCaptureBundles.v1.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCaptureBundles.v1.get(CandidApi.ChargeCaptureBundleId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureBundleId:** `CandidApi.ChargeCaptureBundleId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCaptureBundles.v1.<a href="/src/api/resources/chargeCaptureBundles/resources/v1/client/Client.ts">getSummary</a>() -> core.APIResponse<CandidApi.ChargeCaptureBundleSummary, CandidApi.chargeCaptureBundles.v1.getSummary.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCaptureBundles.v1.getSummary();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCaptureBundles.v1.<a href="/src/api/resources/chargeCaptureBundles/resources/v1/client/Client.ts">resubmit</a>(chargeCaptureBundleId) -> core.APIResponse<CandidApi.ChargeCaptureBundle, CandidApi.chargeCaptureBundles.v1.resubmit.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCaptureBundles.v1.resubmit(CandidApi.ChargeCaptureBundleId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureBundleId:** `CandidApi.ChargeCaptureBundleId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCaptureBundles.v1.<a href="/src/api/resources/chargeCaptureBundles/resources/v1/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.ChargeCaptureBundlePage, CandidApi.chargeCaptureBundles.v1.getAll.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCaptureBundles.v1.getAll({
    limit: 1,
    sort: "created_at",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    patientExternalId: "string",
    bundleStatus: "not-started",
    chargeStatus: "planned",
    chargeExternalId: "string",
    dateOfService: "2023-01-15",
    hasChargeCaptureUpdates: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.chargeCaptureBundles.v1.GetAllChargeCaptureBundlesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ChargeCapture V1

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ChargeCapture, CandidApi.chargeCapture.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.create({
    data: {},
    chargeExternalId: "string",
    ehrSourceUrl: "string",
    dateOfService: "2023-01-15",
    patientExternalId: "string",
    status: "planned",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.chargeCapture.v1.CreateChargeCaptureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">delete</a>(chargeCaptureId) -> core.APIResponse<void, CandidApi.chargeCapture.v1.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.delete(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureId:** `CandidApi.ChargeCaptureId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">update</a>(chargeCaptureId, { ...params }) -> core.APIResponse<CandidApi.ChargeCapture, CandidApi.chargeCapture.v1.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.update(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    data: {},
    chargeExternalId: "string",
    ehrSourceUrl: "string",
    patientExternalId: "string",
    status: "planned",
    dateOfService: "2023-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureId:** `CandidApi.ChargeCaptureId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.chargeCapture.v1.ChargeCaptureUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">get</a>(chargeCaptureId) -> core.APIResponse<CandidApi.ChargeCapture, CandidApi.chargeCapture.v1.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.get(CandidApi.ChargeCaptureId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureId:** `CandidApi.ChargeCaptureId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.ChargeCapturePage, CandidApi.chargeCapture.v1.getAll.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.getAll({
    limit: 1,
    sort: "created_at",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    patientExternalId: "string",
    status: "planned",
    chargeExternalId: "string",
    dateOfService: "2023-01-15",
    bundleId: CandidApi.ChargeCaptureBundleId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    excludeBundled: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.chargeCapture.v1.GetAllChargeCapturesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chargeCapture.v1.<a href="/src/api/resources/chargeCapture/resources/v1/client/Client.ts">updatePostBilledChange</a>(chargeCaptureChangeId, { ...params }) -> core.APIResponse<CandidApi.ChargeCapturePostBilledChange, CandidApi.chargeCapture.v1.updatePostBilledChange.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeCapture.v1.updatePostBilledChange(
    CandidApi.ChargeCapturePostBilledChangeId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        resolved: true,
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chargeCaptureChangeId:** `CandidApi.ChargeCapturePostBilledChangeId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.chargeCapture.v1.ChargeCapturePostBilledChangeUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contracts V2

<details><summary><code>client.contracts.v2.<a href="/src/api/resources/contracts/resources/v2/client/Client.ts">get</a>(contractId) -> core.APIResponse<CandidApi.ContractWithProviders, CandidApi.contracts.v2.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contracts.v2.get(CandidApi.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contractId:** `CandidApi.ContractId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contracts.v2.<a href="/src/api/resources/contracts/resources/v2/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ContractsPage, CandidApi.contracts.v2.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contracts.v2.getMulti({
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    limit: 1,
    contractingProviderId: CandidApi.ContractingProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    renderingProviderIds: CandidApi.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    payerNames: "string",
    states: "AA",
    contractStatus: "pending",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.contracts.v2.GetMultiContractsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contracts.v2.<a href="/src/api/resources/contracts/resources/v2/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ContractWithProviders, CandidApi.contracts.v2.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new contract within the user's current organization

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contracts.v2.create({
    contractingProviderId: CandidApi.ContractingProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    renderingProviderIds: new Set([CandidApi.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]),
    payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    effectiveDate: CandidApi.Date_("string"),
    expirationDate: CandidApi.Date_("string"),
    regions: {
        type: "states",
    },
    contractStatus: "pending",
    authorizedSignatory: {
        firstName: "string",
        lastName: "string",
        title: "string",
        email: "string",
        phone: "string",
        fax: "string",
    },
    commercialInsuranceTypes: {
        type: "allApply",
    },
    medicareInsuranceTypes: {
        type: "allApply",
    },
    medicaidInsuranceTypes: {
        type: "allApply",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.contracts.v2.ContractCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contracts.v2.<a href="/src/api/resources/contracts/resources/v2/client/Client.ts">delete</a>(contractId) -> core.APIResponse<void, CandidApi.contracts.v2.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contracts.v2.delete(CandidApi.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contractId:** `CandidApi.ContractId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contracts.v2.<a href="/src/api/resources/contracts/resources/v2/client/Client.ts">update</a>(contractId, { ...params }) -> core.APIResponse<CandidApi.ContractWithProviders, CandidApi.contracts.v2.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contracts.v2.update(CandidApi.ContractId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    renderingProviderIds: new Set([CandidApi.RenderingProviderid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]),
    effectiveDate: CandidApi.Date_("string"),
    expirationDate: {
        type: "set",
        value: CandidApi.Date_("string"),
    },
    regions: {
        type: "set",
        value: {
            type: "states",
            states: ["AA"],
        },
    },
    contractStatus: "pending",
    authorizedSignatory: {
        type: "set",
        firstName: "string",
        lastName: "string",
        title: "string",
        email: "string",
        phone: "string",
        fax: "string",
    },
    commercialInsuranceTypes: {
        type: "allApply",
    },
    medicareInsuranceTypes: {
        type: "allApply",
    },
    medicaidInsuranceTypes: {
        type: "allApply",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contractId:** `CandidApi.ContractId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.contracts.v2.ContractUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Credentialing V2

<details><summary><code>client.credentialing.v2.<a href="/src/api/resources/credentialing/resources/v2/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ProviderCredentialingSpan, CandidApi.credentialing.v2.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credentialing.v2.create({
    renderingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    contractingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    startDate: "2023-01-15",
    endDate: "2023-01-15",
    regions: {
        type: "states",
        states: ["AA"],
    },
    submittedDate: "2023-01-15",
    payerLoadedDate: "2023-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.credentialing.v2.ProviderCredentialingSpanCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentialing.v2.<a href="/src/api/resources/credentialing/resources/v2/client/Client.ts">get</a>(providerCredentialingId) -> core.APIResponse<CandidApi.ProviderCredentialingSpan, CandidApi.credentialing.v2.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credentialing.v2.get(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**providerCredentialingId:** `CandidApi.ProviderCredentialingSpanId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentialing.v2.<a href="/src/api/resources/credentialing/resources/v2/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.ProviderCredentialingSpanPage, CandidApi.credentialing.v2.getAll.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credentialing.v2.getAll({
    limit: 1,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    providerId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    asRenderingProvider: true,
    asContractingProvider: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.credentialing.v2.GetAllProviderCredentialingSpansRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentialing.v2.<a href="/src/api/resources/credentialing/resources/v2/client/Client.ts">delete</a>(providerCredentialingId) -> core.APIResponse<void, CandidApi.credentialing.v2.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft deletes a credentialing span rate from the system.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credentialing.v2.delete(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**providerCredentialingId:** `CandidApi.ProviderCredentialingSpanId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.credentialing.v2.<a href="/src/api/resources/credentialing/resources/v2/client/Client.ts">update</a>(providerCredentialingId, { ...params }) -> core.APIResponse<CandidApi.ProviderCredentialingSpan, CandidApi.credentialing.v2.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.credentialing.v2.update(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    contractingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    startDate: "2023-01-15",
    endDate: "2023-01-15",
    regions: {
        type: "states",
        states: ["AA"],
    },
    submittedDate: "2023-01-15",
    payerLoadedDate: "2023-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**providerCredentialingId:** `CandidApi.ProviderCredentialingSpanId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.credentialing.v2.ProviderCredentialingSpanUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CustomSchemas V1

<details><summary><code>client.customSchemas.v1.<a href="/src/api/resources/customSchemas/resources/v1/client/Client.ts">getMulti</a>() -> core.APIResponse<CandidApi.SchemaGetMultiResponse, CandidApi.customSchemas.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all custom schemas.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customSchemas.v1.getMulti();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customSchemas.v1.<a href="/src/api/resources/customSchemas/resources/v1/client/Client.ts">get</a>(schemaId) -> core.APIResponse<CandidApi.Schema, CandidApi.customSchemas.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a custom schema with a given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customSchemas.v1.get(CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schemaId:** `CandidApi.SchemaId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customSchemas.v1.<a href="/src/api/resources/customSchemas/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Schema, CandidApi.customSchemas.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create custom schema with a set of typed keys. Schema keys can be referenced as inputs in user-configurable rules in the Rules
Engine, and key-value pairs can be attached to claims via the Encounters API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customSchemas.v1.create({
    name: "General Medicine",
    description: "Values associated with a generic visit",
    fields: [
        {
            key: "provider_category",
            type: "STRING",
        },
        {
            key: "is_urgent_care",
            type: "BOOLEAN",
        },
        {
            key: "bmi",
            type: "DOUBLE",
        },
        {
            key: "age",
            type: "INTEGER",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.customSchemas.v1.SchemaCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customSchemas.v1.<a href="/src/api/resources/customSchemas/resources/v1/client/Client.ts">update</a>(schemaId, { ...params }) -> core.APIResponse<CandidApi.Schema, CandidApi.customSchemas.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the name, description, or keys on a preexisting schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customSchemas.v1.update(CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"), {
    name: "General Medicine and Health",
    description: "Values collected during all visits",
    fieldsToAdd: [
        {
            key: "visit_type",
            type: "STRING",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schemaId:** `CandidApi.SchemaId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.customSchemas.v1.SchemaUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Eligibility V2

<details><summary><code>client.eligibility.v2.<a href="/src/api/resources/eligibility/resources/v2/client/Client.ts">submitEligibilityCheck</a>({ ...params }) -> core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheck.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip>Candid is deprecating support for this endpoint. It is instead recommended to use [Candid's Stedi passthrough endpoint](https://docs.joincandidhealth.com/api-reference/pre-encounter/eligibility-checks/v-1/post).
For assistance with the transition, please reference the [Transitioning to Candid's New Eligibility Endpoint](https://support.joincandidhealth.com/hc/en-us/articles/34918552872980) document in the Candid Support Center.</Tip>

This API is a wrapper around Change Healthcare's eligibility API. Below are some helpful documentation links:

- [Change Healthcare - Guides: Contents of the Eligibility Request Body](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-request-body)
- [Change Healthcare - Guides: Use "Bare Minimum" Eligibility Requests](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-bare-minimum-eligibility-requests)
- [Change Healthcare - Guides: Contents of the Eligibility Response](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-response)
- [Change Healthcare - Guides: Eligibility JSON-to-EDI API Contents](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-json-to-edi-api-contents)
- [Change Healthcare - Guides: Eligibility Error Messages](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-error-messages)
- [Change Healthcare - Guides: FAQ](https://developers.changehealthcare.com/eligibilityandclaims/docs/frequently-asked-questions)
- [Change Healthcare - Guides: Eligibility FAQs](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-api-requests)
- [Change Healthcare - Guides: Sandbox API Values and Test Responses](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-sandbox-api-values-and-test-responses)
- [Change Healthcare - Guides: Sandbox Predefined Fields and Values](https://developers.changehealthcare.com/eligibilityandclaims/docs/sandbox-predefined-fields-and-values)
- [Change Healthcare - Guides: Using Test Payers in the Sandbox](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-the-test-payers-in-the-sandbox-api)

A schema of the response object can be found here: [Change Healthcare Docs](https://developers.changehealthcare.com/eligibilityandclaims/reference/medicaleligibility)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eligibility.v2.submitEligibilityCheck({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eligibility.v2.<a href="/src/api/resources/eligibility/resources/v2/client/Client.ts">submitEligibilityCheckAvaility</a>() -> core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheckAvaility.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip>Candid is deprecating support for this endpoint. It is instead recommended to use [Candid's Stedi passthrough endpoint](https://docs.joincandidhealth.com/api-reference/pre-encounter/eligibility-checks/v-1/post).
For assistance with the transition, please reference the [Transitioning to Candid's New Eligibility Endpoint](https://support.joincandidhealth.com/hc/en-us/articles/34918552872980) document in the Candid Support Center.</Tip>

**Availity has transitioned their GET endpoint to a POST endpoint. Candid has updated their pass-through integration to enable backwards compatibility for the GET endpoint so that customers do not have to immediately update their integrations.**

**Candid recommends integrations with the [POST endpoint](https://docs.joincandidhealth.com/api-reference/eligibility/v-2/submit-eligibility-check-availity-post) to ensure the best possible integration experience. Given the transition, Availity’s documentation will be out of sync with this endpoint.**

If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint

This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:

- [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
- [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)

A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)

- Note Availity requires a free developer account to access this documentation.

Check connection status of Availity API and partners here:

- [Availity Trading Partner Connection Status](https://www.availity.com/status/)
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eligibility.v2.submitEligibilityCheckAvaility();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eligibility.v2.<a href="/src/api/resources/eligibility/resources/v2/client/Client.ts">submitEligibilityCheckAvailityPost</a>({ ...params }) -> core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Tip>Candid is deprecating support for this endpoint. It is instead recommended to use [Candid's Stedi passthrough endpoint](https://docs.joincandidhealth.com/api-reference/pre-encounter/eligibility-checks/v-1/post).
For assistance with the transition, please reference the [Transitioning to Candid's New Eligibility Endpoint](https://support.joincandidhealth.com/hc/en-us/articles/34918552872980) document in the Candid Support Center.</Tip>

If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint

This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:

- [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
- [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)

A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)

- Note Availity requires a free developer account to access this documentation.

Check connection status of Availity API and partners here:

- [Availity Trading Partner Connection Status](https://www.availity.com/status/)
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eligibility.v2.submitEligibilityCheckAvailityPost({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EncounterProviders V2

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">updateReferringProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.updateReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.updateReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ReferringProviderUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">updateInitialReferringProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.updateInitialReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.updateInitialReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        qualifier: "DQ",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.InitialReferringProviderUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">updateSupervisingProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.updateSupervisingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.updateSupervisingProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.SupervisingProviderUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">updateOrderingProvider</a>(serviceLineId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.updateOrderingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.updateOrderingProvider(
    CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.OrderingProviderUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">createReferringProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.createReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.createReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ReferringProvider`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">createInitialReferringProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.createInitialReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.createInitialReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        qualifier: "DQ",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.InitialReferringProvider`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">createSupervisingProvider</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.createSupervisingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.createSupervisingProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.SupervisingProvider`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">createOrderingProvider</a>(serviceLineId, { ...params }) -> core.APIResponse<CandidApi.EncounterProvider, CandidApi.encounterProviders.v2.createOrderingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.createOrderingProvider(
    CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.OrderingProvider`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">deleteReferringProvider</a>(encounterId) -> core.APIResponse<void, CandidApi.encounterProviders.v2.deleteReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.deleteReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">deleteInitialReferringProvider</a>(encounterId) -> core.APIResponse<void, CandidApi.encounterProviders.v2.deleteInitialReferringProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.deleteInitialReferringProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">deleteSupervisingProvider</a>(encounterId) -> core.APIResponse<void, CandidApi.encounterProviders.v2.deleteSupervisingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.deleteSupervisingProvider(
    CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounterProviders.v2.<a href="/src/api/resources/encounterProviders/resources/v2/client/Client.ts">deleteOrderingProvider</a>(serviceLineId) -> core.APIResponse<void, CandidApi.encounterProviders.v2.deleteOrderingProvider.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounterProviders.v2.deleteOrderingProvider(
    CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Encounters V4

<details><summary><code>client.encounters.v4.<a href="/src/api/resources/encounters/resources/v4/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.EncounterPage, CandidApi.encounters.v4.getAll.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounters.v4.getAll({
    limit: 100,
    claimStatus: "biller_received",
    sort: "created_at:asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    dateOfServiceMin: "2019-08-24",
    dateOfServiceMax: "2019-08-25",
    primaryPayerNames: "Medicare,Medicaid",
    searchTerm: "doe",
    externalId: CandidApi.EncounterExternalId("123456"),
    diagnosesUpdatedSince: "2019-08-24T14:15:22Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.encounters.v4.GetAllEncountersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounters.v4.<a href="/src/api/resources/encounters/resources/v4/client/Client.ts">get</a>(encounterId) -> core.APIResponse<CandidApi.Encounter, CandidApi.encounters.v4.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounters.v4.get(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounters.v4.<a href="/src/api/resources/encounters/resources/v4/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Encounter, CandidApi.encounters.v4.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounters.v4.create({
    patient: {
        phoneNumbers: [
            {
                number: "1234567890",
                type: "Home",
            },
        ],
        phoneConsent: true,
        email: CandidApi.Email("johndoe@joincandidhealth.com"),
        nonInsurancePayers: [CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
        nonInsurancePayersInfo: [
            {
                nonInsurancePayerId: CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                memberId: "string",
                clinicalTrialInfo: [
                    {
                        clinicalTrialId: CandidApi.ClinicalTrialId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                    },
                ],
            },
        ],
        emailConsent: true,
        externalId: "string",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: "male",
    },
    billingProvider: {
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        taxId: "string",
        npi: "string",
        taxonomyCode: "string",
        providerCommercialLicenseType: "0",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    renderingProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    referringProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    initialReferringProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        qualifier: "DQ",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    supervisingProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    serviceFacility: {
        organizationName: "string",
        npi: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        secondaryIdentification: "string",
    },
    subscriberPrimary: {
        insuranceCard: {
            memberId: "string",
            payerName: "string",
            payerId: "string",
            rxBin: "string",
            rxPcn: "string",
            imageUrlFront: "string",
            imageUrlBack: "string",
            emrPayerCrosswalk: "HEALTHIE",
            groupNumber: "string",
            planName: "string",
            planType: "09",
            insuranceType: "01",
            payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
        patientRelationshipToSubscriberCode: "01",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: "male",
    },
    subscriberSecondary: {
        insuranceCard: {
            memberId: "string",
            payerName: "string",
            payerId: "string",
            rxBin: "string",
            rxPcn: "string",
            imageUrlFront: "string",
            imageUrlBack: "string",
            emrPayerCrosswalk: "HEALTHIE",
            groupNumber: "string",
            planName: "string",
            planType: "09",
            insuranceType: "01",
            payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
        patientRelationshipToSubscriberCode: "01",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: "male",
    },
    subscriberTertiary: {
        insuranceCard: {
            memberId: "string",
            payerName: "string",
            payerId: "string",
            rxBin: "string",
            rxPcn: "string",
            imageUrlFront: "string",
            imageUrlBack: "string",
            emrPayerCrosswalk: "HEALTHIE",
            groupNumber: "string",
            planName: "string",
            planType: "09",
            insuranceType: "01",
            payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
        patientRelationshipToSubscriberCode: "01",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: "male",
    },
    priorAuthorizationNumber: CandidApi.PriorAuthorizationNumber("string"),
    responsibleParty: "INSURANCE_PAY",
    diagnoses: [
        {
            name: "string",
            codeType: "ABF",
            code: "string",
        },
    ],
    clinicalNotes: [
        {
            category: "clinical",
            notes: [],
        },
    ],
    billingNotes: [
        {
            text: "string",
        },
    ],
    placeOfServiceCode: "01",
    patientHistories: [
        {
            category: "present_illness",
            questions: [
                {
                    id: CandidApi.IntakeQuestionId("6E7FBCE4-A8EA-46D0-A8D8-FF83CA3BB176"),
                    text: "Do you have any allergies?",
                    responses: [
                        {
                            response: "No allergies",
                            followUps: [
                                {
                                    id: CandidApi.IntakeFollowUpId("4F3D57F9-AC94-49D6-87E4-E804B709917A"),
                                    text: "Do you have any allergies?",
                                    response: "No allergies",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    serviceLines: [
        {
            procedureCode: "string",
            quantity: CandidApi.Decimal("string"),
            units: "MJ",
            diagnosisPointers: [],
        },
    ],
    guarantor: {
        phoneNumbers: [
            {
                number: "1234567890",
                type: "Home",
            },
        ],
        phoneConsent: true,
        email: CandidApi.Email("johndoe@joincandidhealth.com"),
        emailConsent: true,
        firstName: "string",
        lastName: "string",
        externalId: "string",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
    },
    externalClaimSubmission: {
        claimCreatedAt: "2023-01-01T12:00:00.000000Z",
        patientControlNumber: "PATIENT_CONTROL_NUMBER",
        submissionRecords: [
            {
                submittedAt: "2023-01-01T13:00:00.000000Z",
                claimFrequencyCode: "1",
                payerResponsibility: "primary",
                intendedSubmissionMedium: "electronic",
            },
            {
                submittedAt: "2023-01-04T12:00:00.000000Z",
                claimFrequencyCode: "7",
                payerResponsibility: "primary",
                intendedSubmissionMedium: "paper",
            },
        ],
    },
    tagIds: [CandidApi.TagId("string")],
    schemaInstances: [
        {
            schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
            content: {
                provider_category: "internist",
                is_urgent_care: true,
                bmi: 24.2,
                age: 38,
            },
        },
    ],
    referralNumber: "string",
    epsdtReferral: {
        conditionIndicator1: "AV",
        conditionIndicator2: "AV",
        conditionIndicator3: "AV",
    },
    claimSupplementalInformation: [
        {
            attachmentReportTypeCode: "03",
            attachmentTransmissionCode: "BM",
        },
    ],
    externalId: CandidApi.EncounterExternalId("string"),
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
    patientAuthorizedRelease: true,
    benefitsAssignedToProvider: true,
    providerAcceptsAssignment: true,
    appointmentType: "string",
    existingMedications: [
        {
            name: "Lisinopril",
            rxCui: CandidApi.RxCui("860975"),
            dosage: "10mg",
            dosageForm: "Tablet",
            frequency: "Once Daily",
            asNeeded: true,
        },
    ],
    vitals: {
        heightIn: 70,
        weightLbs: 165,
        bloodPressureSystolicMmhg: 115,
        bloodPressureDiastolicMmhg: 85,
        bodyTemperatureF: 98,
        hemoglobinGdl: 15.1,
        hematocritPct: 51.2,
    },
    interventions: [
        {
            name: "Physical Therapy Session",
            category: "lifestyle",
            description:
                "A session focused on improving muscular strength, flexibility, and range of motion post-injury.",
            medication: {
                name: "Lisinopril",
                rxCui: CandidApi.RxCui("860975"),
                dosage: "10mg",
                dosageForm: "Tablet",
                frequency: "Once Daily",
                asNeeded: true,
            },
            labs: [
                {
                    name: "Genetic Health Labs",
                    code: "GH12345",
                    codeType: "quest",
                },
            ],
        },
    ],
    payToAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    synchronicity: "Synchronous",
    billableStatus: "BILLABLE",
    additionalInformation: "string",
    serviceAuthorizationExceptionCode: "1",
    admissionDate: "2023-01-15",
    dischargeDate: "2023-01-15",
    onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
    lastMenstrualPeriodDate: "2023-01-15",
    delayReasonCode: "1",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.encounters.v4.EncounterCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounters.v4.<a href="/src/api/resources/encounters/resources/v4/client/Client.ts">createFromPreEncounterPatient</a>({ ...params }) -> core.APIResponse<CandidApi.Encounter, CandidApi.encounters.v4.createFromPreEncounterPatient.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an encounter from a pre-encounter patient and appointment. This endpoint is intended to be used by consumers who are managing
patients and appointments in the pre-encounter service and is currently under development. Consumers who are not taking advantage
of the pre-encounter service should use the standard create endpoint.

The endpoint will create an encounter from the provided fields, pulling information from the provided patient and appointment objects
where applicable. In particular, the following fields are populated from the patient and appointment objects:

- Patient
- Referring Provider
- Subscriber Primary
- Subscriber Secondary
- Referral Number
- Responsible Party
- Guarantor

Utilizing this endpoint opts you into automatic updating of the encounter when the patient or appointment is updated, assuming the
encounter has not already been submitted or adjudicated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounters.v4.createFromPreEncounterPatient({
    preEncounterPatientId: CandidApi.PreEncounterPatientId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    preEncounterAppointmentIds: [CandidApi.PreEncounterAppointmentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
    billingProvider: {
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        taxId: "string",
        npi: "string",
        taxonomyCode: "string",
        providerCommercialLicenseType: "0",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    renderingProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    initialReferringProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        qualifier: "DQ",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    supervisingProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    serviceFacility: {
        organizationName: "string",
        npi: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        secondaryIdentification: "string",
    },
    diagnoses: [
        {
            name: "string",
            codeType: "ABF",
            code: "string",
        },
    ],
    clinicalNotes: [
        {
            category: "clinical",
            notes: [],
        },
    ],
    billingNotes: [
        {
            text: "string",
        },
    ],
    placeOfServiceCode: "01",
    patientHistories: [
        {
            category: "present_illness",
            questions: [
                {
                    id: CandidApi.IntakeQuestionId("6E7FBCE4-A8EA-46D0-A8D8-FF83CA3BB176"),
                    text: "Do you have any allergies?",
                    responses: [
                        {
                            response: "No allergies",
                            followUps: [
                                {
                                    id: CandidApi.IntakeFollowUpId("4F3D57F9-AC94-49D6-87E4-E804B709917A"),
                                    text: "Do you have any allergies?",
                                    response: "No allergies",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    serviceLines: [
        {
            procedureCode: "string",
            quantity: CandidApi.Decimal("string"),
            units: "MJ",
            diagnosisPointers: [],
        },
    ],
    externalClaimSubmission: {
        claimCreatedAt: "2023-01-01T12:00:00.000000Z",
        patientControlNumber: "PATIENT_CONTROL_NUMBER",
        submissionRecords: [
            {
                submittedAt: "2023-01-01T13:00:00.000000Z",
                claimFrequencyCode: "1",
                payerResponsibility: "primary",
                intendedSubmissionMedium: "electronic",
            },
            {
                submittedAt: "2023-01-04T12:00:00.000000Z",
                claimFrequencyCode: "7",
                payerResponsibility: "primary",
                intendedSubmissionMedium: "paper",
            },
        ],
    },
    tagIds: [CandidApi.TagId("string")],
    schemaInstances: [
        {
            schemaId: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
            content: {
                provider_category: "internist",
                is_urgent_care: true,
                bmi: 24.2,
                age: 38,
            },
        },
    ],
    externalId: CandidApi.EncounterExternalId("string"),
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
    patientAuthorizedRelease: true,
    benefitsAssignedToProvider: true,
    providerAcceptsAssignment: true,
    appointmentType: "string",
    existingMedications: [
        {
            name: "Lisinopril",
            rxCui: CandidApi.RxCui("860975"),
            dosage: "10mg",
            dosageForm: "Tablet",
            frequency: "Once Daily",
            asNeeded: true,
        },
    ],
    vitals: {
        heightIn: 70,
        weightLbs: 165,
        bloodPressureSystolicMmhg: 115,
        bloodPressureDiastolicMmhg: 85,
        bodyTemperatureF: 98,
        hemoglobinGdl: 15.1,
        hematocritPct: 51.2,
    },
    interventions: [
        {
            name: "Physical Therapy Session",
            category: "lifestyle",
            description:
                "A session focused on improving muscular strength, flexibility, and range of motion post-injury.",
            medication: {
                name: "Lisinopril",
                rxCui: CandidApi.RxCui("860975"),
                dosage: "10mg",
                dosageForm: "Tablet",
                frequency: "Once Daily",
                asNeeded: true,
            },
            labs: [
                {
                    name: "Genetic Health Labs",
                    code: "GH12345",
                    codeType: "quest",
                },
            ],
        },
    ],
    payToAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    synchronicity: "Synchronous",
    billableStatus: "BILLABLE",
    additionalInformation: "string",
    serviceAuthorizationExceptionCode: "1",
    admissionDate: "2023-01-15",
    dischargeDate: "2023-01-15",
    onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
    lastMenstrualPeriodDate: "2023-01-15",
    delayReasonCode: "1",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.EncounterCreateFromPreEncounter`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.encounters.v4.<a href="/src/api/resources/encounters/resources/v4/client/Client.ts">update</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.Encounter, CandidApi.encounters.v4.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.encounters.v4.update(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    diagnosisIds: [CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
    placeOfServiceCodeAsSubmitted: "01",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.encounters.v4.EncounterUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ExpectedNetworkStatus V1

<details><summary><code>client.expectedNetworkStatus.v1.<a href="/src/api/resources/expectedNetworkStatus/resources/v1/client/Client.ts">compute</a>({ ...params }) -> core.APIResponse<CandidApi.ExpectedNetworkStatusResponse, CandidApi.expectedNetworkStatus.v1.compute.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Computes the expected network status given the provided information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expectedNetworkStatus.v1.compute({
    externalPatientId: "string",
    subscriberPayerId: "string",
    subscriberPayerName: "string",
    subscriberInsuranceType: "01",
    subscriberPlanName: "string",
    billingProviderNpi: "string",
    billingProviderTin: "string",
    renderingProviderNpi: "string",
    contractedState: "AA",
    dateOfService: CandidApi.Date_("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.expectedNetworkStatus.v1.ExpectedNetworkStatusRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ExpectedNetworkStatus V2

<details><summary><code>client.expectedNetworkStatus.v2.<a href="/src/api/resources/expectedNetworkStatus/resources/v2/client/Client.ts">computeForRenderingProvider</a>(renderingProviderId, { ...params }) -> core.APIResponse<CandidApi.ExpectedNetworkStatusResponseV2, CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Computes the expected network status for a given rendering provider.
This endpoint is not available to all customers. Reach out to the Candid sales team
to discuss enabling this endpoint if it is not available for your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expectedNetworkStatus.v2.computeForRenderingProvider(
    CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        serviceType: "new_patient_video_appt",
        placeOfServiceCode: "01",
        subscriberInformation: {
            payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            memberId: "string",
            insuranceType: {
                lineOfBusiness: "medicare",
                insuranceTypeCodes: {
                    type: "insurance_type_code",
                    value: "01",
                },
            },
        },
        patientAddress: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        billingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        organizationServiceFacilityId: CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
        dateOfService: "2023-01-15",
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**renderingProviderId:** `CandidApi.OrganizationProviderId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ExpectedNetworkStatusRequestV2`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expectedNetworkStatus.v2.<a href="/src/api/resources/expectedNetworkStatus/resources/v2/client/Client.ts">computeAllInNetworkProviders</a>({ ...params }) -> core.APIResponse<CandidApi.ComputeAllInNetworkProvidersResponse, CandidApi.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Computes all the in network providers for a given set of inputs.
This endpoint is not available to all customers. Reach out to the Candid sales team
to discuss enabling this endpoint if it is not available for your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expectedNetworkStatus.v2.computeAllInNetworkProviders({
    serviceType: "new_patient_video_appt",
    placeOfServiceCode: "01",
    subscriberInformation: {
        payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        memberId: "string",
        insuranceType: {
            lineOfBusiness: "medicare",
            insuranceTypeCodes: {
                type: "insurance_type_code",
                value: "01",
            },
        },
    },
    patientAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    billingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    organizationServiceFacilityId: CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
    dateOfService: "2023-01-15",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.ComputeAllInNetworkProvidersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Exports V3

<details><summary><code>client.exports.v3.<a href="/src/api/resources/exports/resources/v3/client/Client.ts">getExports</a>({ ...params }) -> core.APIResponse<CandidApi.GetExportsResponse, CandidApi.exports.v3.getExports.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve CSV-formatted reports on claim submissions and outcomes. This endpoint returns Export objects that contain an
authenticated URL to a customer's reports with a 2min TTL. The schema for the CSV export can be found [here](https://app.joincandidhealth.com/files/exports_schema.csv).

**Schema changes:** Changing column order, removing columns, or changing the name of a column is considered a
[Breaking Change](../../../api-principles/breaking-changes). Adding new columns to the end of the Exports file is not considered a
Breaking Change and happens periodically. For this reason, it is important that any downstream automation or processes built on top
of Candid Health's export files be resilient to the addition of new columns at the end of the file.

**SLA guarantees:** Files for a given date are guaranteed to be available after 3 business days. For example, Friday's file will be
available by Wednesday at the latest. If file generation is still in progress upon request before 3 business days have passed, the
caller will receive a 422 response. If the file has already been generated, it will be served. Historic files should be available
up to 90 days in the past by default. Please email our [Support team](mailto:support@joincandidhealth.com) with any data requests
outside of these stated guarantees.

**New Customers:** This endpoint is not enabled by default for new Candid customers. To have this endpoint enabled for your organization,
please email our [Support team](mailto:support@joincandidhealth.com) with the request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exports.v3.getExports({
    startDate: "2023-10-01",
    endDate: "2023-10-02",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.exports.v3.GetExportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ExternalPaymentAccountConfig V1

<details><summary><code>client.externalPaymentAccountConfig.v1.<a href="/src/api/resources/externalPaymentAccountConfig/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ExternalPaymentAccountConfigPage, CandidApi.externalPaymentAccountConfig.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalPaymentAccountConfig.v1.getMulti({
    limit: 1,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.externalPaymentAccountConfig.v1.GetExternalPaymentAccountConfigsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FeeSchedules V3

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getMatch</a>(serviceLineId) -> core.APIResponse<CandidApi.MatchResult | undefined, CandidApi.feeSchedules.v3.getMatch.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the rate that matches a service line. No result means no rate exists matching the service line's dimensions.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getMatch(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">testMatch</a>(serviceLineId, rateId) -> core.APIResponse<CandidApi.MatchTestResult, CandidApi.feeSchedules.v3.testMatch.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Tests a service line against a rate to see if it matches.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.testMatch(
    CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**rateId:** `CandidApi.RateId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.RatesPage, CandidApi.feeSchedules.v3.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of dimensions with their rates. The rates returned will always be the most recent versions of those rates.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getMulti({
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    limit: 1,
    activeDate: "2023-01-15",
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    organizationBillingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    states: "AA",
    zipCodes: "string",
    licenseTypes: "MD",
    facilityTypeCodes: "01",
    networkTypes: "12",
    payerPlanGroupIds: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    cptCode: "string",
    modifiers: "AV",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.feeSchedules.v3.GetMultiRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getUniqueValuesForDimension</a>({ ...params }) -> core.APIResponse<CandidApi.DimensionsPage, CandidApi.feeSchedules.v3.getUniqueValuesForDimension.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets unique values for a dimension based on other selection criteria. The response is a list of dimensions with your criteria and the unique values populated. This API is useful for driving pivots on dimension values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getUniqueValuesForDimension({
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    limit: 1,
    pivotDimension: "payer_uuid",
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    organizationBillingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    states: "AA",
    zipCodes: "string",
    licenseTypes: "MD",
    facilityTypeCodes: "01",
    networkTypes: "12",
    payerPlanGroupIds: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    cptCode: "string",
    modifiers: "AV",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.feeSchedules.v3.GetUniqueDimensionValuesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getRateHistory</a>(rateId) -> core.APIResponse<CandidApi.Rate[], CandidApi.feeSchedules.v3.getRateHistory.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets every version of a rate.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getRateHistory(CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**rateId:** `CandidApi.RateId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">uploadFeeSchedule</a>({ ...params }) -> core.APIResponse<CandidApi.Rate[], CandidApi.feeSchedules.v3.uploadFeeSchedule.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a new fee schedule.\n Each rate may either be totally new as qualified by it's dimensions or a new version for an existing rate.\n If adding a new version to an existing rate, the rate must be posted with the next version number (previous version + 1) or a EntityConflictError will be returned.\n Use the dry run flag to discover already existing rates and to run validations. If validations for any rate fail, no rates will be saved to the system.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.uploadFeeSchedule({
    dryRun: true,
    rates: [
        {
            type: "new_rate",
            dimensions: {
                payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                organizationBillingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                states: new Set(["AA"]),
                zipCodes: new Set(["string"]),
                licenseTypes: new Set(["MD"]),
                facilityTypeCodes: new Set(["01"]),
                networkTypes: new Set(["12"]),
                payerPlanGroupIds: new Set([CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]),
                cptCode: "string",
                modifiers: new Set(["AV"]),
            },
            entries: [
                {
                    startDate: "2024-04-11",
                    rateCents: 33000,
                    isDeactivated: false,
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.feeSchedules.v3.FeeScheduleUploadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">deleteRate</a>(rateId, version) -> core.APIResponse<void, CandidApi.feeSchedules.v3.deleteRate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft deletes a rate from the system. Only the most recent version of a rate can be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.deleteRate(CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), 1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**rateId:** `CandidApi.RateId`

</dd>
</dl>

<dl>
<dd>

**version:** `number`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getPayerThresholdsDefault</a>() -> core.APIResponse<CandidApi.PayerThreshold, CandidApi.feeSchedules.v3.getPayerThresholdsDefault.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the default payer threshold

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getPayerThresholdsDefault();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">getPayerThresholds</a>({ ...params }) -> core.APIResponse<CandidApi.PayerThresholdsPage, CandidApi.feeSchedules.v3.getPayerThresholds.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of payers and thresholds by their uuids

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.getPayerThresholds({
    payerUuids: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.feeSchedules.v3.PayerThresholdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.feeSchedules.v3.<a href="/src/api/resources/feeSchedules/resources/v3/client/Client.ts">setPayerThreshold</a>(payerUuid, { ...params }) -> core.APIResponse<CandidApi.PayerThreshold, CandidApi.feeSchedules.v3.setPayerThreshold.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets the threshold information for a payer

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeSchedules.v3.setPayerThreshold(CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    upperThresholdCents: 1,
    lowerThresholdCents: 1,
    disablePaidIncorrectly: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payerUuid:** `CandidApi.PayerUuid`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.PayerThreshold`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Guarantor V1

<details><summary><code>client.guarantor.v1.<a href="/src/api/resources/guarantor/resources/v1/client/Client.ts">create</a>(encounterId, { ...params }) -> core.APIResponse<CandidApi.Guarantor, CandidApi.guarantor.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new guarantor and returns the newly created Guarantor object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guarantor.v1.create(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    phoneNumbers: [
        {
            number: "1234567890",
            type: "Home",
        },
    ],
    phoneConsent: true,
    email: CandidApi.Email("johndoe@joincandidhealth.com"),
    emailConsent: true,
    firstName: "string",
    lastName: "string",
    externalId: "string",
    dateOfBirth: "2023-01-15",
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**encounterId:** `CandidApi.EncounterId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.GuarantorCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guarantor.v1.<a href="/src/api/resources/guarantor/resources/v1/client/Client.ts">get</a>(guarantorId) -> core.APIResponse<CandidApi.Guarantor, CandidApi.guarantor.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a guarantor by its `guarantor_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guarantor.v1.get(CandidApi.GuarantorId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guarantorId:** `CandidApi.GuarantorId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guarantor.v1.<a href="/src/api/resources/guarantor/resources/v1/client/Client.ts">update</a>(guarantorId, { ...params }) -> core.APIResponse<CandidApi.Guarantor, CandidApi.guarantor.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a guarantor by its `guarantor_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guarantor.v1.update(CandidApi.GuarantorId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    firstName: "string",
    lastName: "string",
    externalId: "string",
    dateOfBirth: "2023-01-15",
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    phoneNumbers: [
        {
            number: "1234567890",
            type: "Home",
        },
    ],
    phoneConsent: true,
    email: CandidApi.Email("johndoe@joincandidhealth.com"),
    emailConsent: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guarantorId:** `CandidApi.GuarantorId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.GuarantorUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ImportInvoice V1

<details><summary><code>client.importInvoice.v1.<a href="/src/api/resources/importInvoice/resources/v1/client/Client.ts">importInvoice</a>({ ...params }) -> core.APIResponse<CandidApi.ImportInvoice, CandidApi.importInvoice.v1.importInvoice.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import an existing invoice from a third party service to reflect state in Candid.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.importInvoice.v1.importInvoice({
    externalPaymentAccountConfigId: CandidApi.PaymentAccountConfigId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    patientExternalId: CandidApi.PatientExternalId("string"),
    externalCustomerIdentifier: "string",
    note: "string",
    dueDate: "2023-01-15",
    items: [
        {
            attribution: {
                type: "service_line_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
            amountCents: 1,
        },
    ],
    status: "DRAFT",
    externalIdentifier: "string",
    customerInvoiceUrl: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.CreateImportInvoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.importInvoice.v1.<a href="/src/api/resources/importInvoice/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ImportInvoicesPage, CandidApi.importInvoice.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all Invoices for the authenticated user's organziation with all filters applied.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.importInvoice.v1.getMulti({
    patientExternalId: CandidApi.PatientExternalId("string"),
    encounterExternalId: CandidApi.EncounterExternalId("string"),
    note: "string",
    dueDateBefore: "2023-01-15",
    dueDateAfter: "2023-01-15",
    status: "DRAFT",
    limit: 1,
    sort: "CREATED_AT",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.importInvoice.v1.SearchImportedInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.importInvoice.v1.<a href="/src/api/resources/importInvoice/resources/v1/client/Client.ts">get</a>(invoiceId) -> core.APIResponse<CandidApi.ImportInvoice, CandidApi.importInvoice.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve and view an import invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.importInvoice.v1.get(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `CandidApi.InvoiceId` — InvoiceId to be returned

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.importInvoice.v1.<a href="/src/api/resources/importInvoice/resources/v1/client/Client.ts">update</a>(invoiceId, { ...params }) -> core.APIResponse<CandidApi.ImportInvoice, CandidApi.importInvoice.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the information on the imported invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.importInvoice.v1.update(CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    customerInvoiceUrl: "string",
    status: "DRAFT",
    note: "string",
    dueDate: "2023-01-15",
    items: {
        updateType: "APPEND",
        items: [
            {
                attribution: {
                    type: "service_line_id",
                    value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                },
                amountCents: 1,
            },
        ],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `CandidApi.InvoiceId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ImportInvoiceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InsuranceAdjudications V1

<details><summary><code>client.insuranceAdjudications.v1.<a href="/src/api/resources/insuranceAdjudications/resources/v1/client/Client.ts">get</a>(insuranceAdjudicationId) -> core.APIResponse<CandidApi.InsuranceAdjudication, CandidApi.insuranceAdjudications.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created insurance adjudication by its `insurance_adjudication_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceAdjudications.v1.get(CandidApi.InsuranceAdjudicationId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insuranceAdjudicationId:** `CandidApi.InsuranceAdjudicationId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceAdjudications.v1.<a href="/src/api/resources/insuranceAdjudications/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.InsuranceAdjudication, CandidApi.insuranceAdjudications.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new insurance adjudication record and returns the newly created InsuranceAdjudication object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceAdjudications.v1.create({
    payerIdentifier: {
        type: "payer_info",
    },
    payee: {
        payeeName: "string",
        payeeIdentifier: {
            type: "npi",
            value: CandidApi.Npi("string"),
        },
    },
    postDate: "2023-01-15",
    checkNumber: "string",
    checkDate: "2023-01-15",
    note: "string",
    claims: {
        "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32": [
            {
                claimStatusCode: "1",
                serviceLines: {},
                carcs: [],
            },
        ],
    },
    remitDraftId: CandidApi.RemitDraftId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.InsuranceAdjudicationCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceAdjudications.v1.<a href="/src/api/resources/insuranceAdjudications/resources/v1/client/Client.ts">delete</a>(insuranceAdjudicationId) -> core.APIResponse<void, CandidApi.insuranceAdjudications.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the insurance adjudication record matching the provided insurance_adjudication_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceAdjudications.v1.delete(
    CandidApi.InsuranceAdjudicationId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insuranceAdjudicationId:** `CandidApi.InsuranceAdjudicationId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InsurancePayments V1

<details><summary><code>client.insurancePayments.v1.<a href="/src/api/resources/insurancePayments/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.InsurancePaymentsPage, CandidApi.insurancePayments.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all non-ERA originated insurance payments satisfying the search criteria

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insurancePayments.v1.getMulti({
    limit: 1,
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: "amount_cents",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.insurancePayments.v1.GetMultiInsurancePaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insurancePayments.v1.<a href="/src/api/resources/insurancePayments/resources/v1/client/Client.ts">get</a>(insurancePaymentId) -> core.APIResponse<CandidApi.InsurancePayment, CandidApi.insurancePayments.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created insurance payment by its `insurance_payment_id`.
If the payment does not exist, a `403` will be thrown.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insurancePayments.v1.get(CandidApi.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insurancePaymentId:** `CandidApi.InsurancePaymentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InsuranceRefunds V1

<details><summary><code>client.insuranceRefunds.v1.<a href="/src/api/resources/insuranceRefunds/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.InsuranceRefundsPage, CandidApi.insuranceRefunds.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all insurance refunds satisfying the search criteria AND whose organization_id matches
the current organization_id of the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceRefunds.v1.getMulti({
    limit: 1,
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: "amount_cents",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.insuranceRefunds.v1.GetMultiInsuranceRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceRefunds.v1.<a href="/src/api/resources/insuranceRefunds/resources/v1/client/Client.ts">get</a>(insuranceRefundId) -> core.APIResponse<CandidApi.InsuranceRefund, CandidApi.insuranceRefunds.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created insurance refund by its `insurance_refund_id`.
If the refund does not exist, a `403` will be thrown.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceRefunds.v1.get(CandidApi.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insuranceRefundId:** `CandidApi.InsuranceRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceRefunds.v1.<a href="/src/api/resources/insuranceRefunds/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.InsuranceRefund, CandidApi.insuranceRefunds.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new insurance refund record and returns the newly created `InsuranceRefund` object.
The allocations can describe whether the refund is being applied toward a specific service line,
claim, or billing provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceRefunds.v1.create({
    payerIdentifier: {
        type: "payer_info",
    },
    amountCents: 1,
    refundTimestamp: "2024-01-15T09:30:00Z",
    refundNote: "string",
    allocations: [
        {
            amountCents: 1,
            target: {
                type: "service_line_by_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
        },
    ],
    refundReason: "OVERCHARGED",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.InsuranceRefundCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceRefunds.v1.<a href="/src/api/resources/insuranceRefunds/resources/v1/client/Client.ts">update</a>(insuranceRefundId, { ...params }) -> core.APIResponse<CandidApi.InsuranceRefund, CandidApi.insuranceRefunds.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the patient refund record matching the provided insurance_refund_id. If updating the refund amount,
then the allocations must be appropriately updated as well.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceRefunds.v1.update(CandidApi.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    refundTimestamp: "2024-01-15T09:30:00Z",
    refundNote: {
        type: "set",
        value: "string",
    },
    refundReason: {
        type: "set",
        value: "OVERCHARGED",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insuranceRefundId:** `CandidApi.InsuranceRefundId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.insuranceRefunds.v1.InsuranceRefundUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.insuranceRefunds.v1.<a href="/src/api/resources/insuranceRefunds/resources/v1/client/Client.ts">delete</a>(insuranceRefundId) -> core.APIResponse<void, CandidApi.insuranceRefunds.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the insurance refund record matching the provided `insurance_refund_id`.
If the matching record's organization_id does not match the authenticated user's
current organization_id, then a response code of `403` will be returned.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insuranceRefunds.v1.delete(CandidApi.InsuranceRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**insuranceRefundId:** `CandidApi.InsuranceRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MedicationDispense V1

<details><summary><code>client.medicationDispense.v1.<a href="/src/api/resources/medicationDispense/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Encounter, CandidApi.medicationDispense.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.medicationDispense.v1.create({
    medicationDispenseExternalId: "string",
    patientExternalId: "string",
    procedureCode: "string",
    quantity: CandidApi.Decimal("string"),
    units: "MJ",
    dateOfService: "2023-01-15",
    drugIdentification: {
        serviceIdQualifier: "EN",
        nationalDrugCode: "string",
        nationalDrugUnitCount: "string",
        measurementUnitCode: "ML",
        linkSequenceNumber: "string",
        pharmacyPrescriptionNumber: "string",
        conversionFormula: "string",
        drugDescription: "string",
    },
    description: "string",
    modifiers: ["AV"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MedicationDispenseCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NonInsurancePayerPayments V1

<details><summary><code>client.nonInsurancePayerPayments.v1.<a href="/src/api/resources/nonInsurancePayerPayments/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerPaymentsPage, CandidApi.nonInsurancePayerPayments.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all non-insurance payer payments

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerPayments.v1.getMulti({
    limit: 1,
    nonInsurancePayerId: CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    checkNumber: "string",
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: "amount_cents",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.nonInsurancePayerPayments.v1.GetMultiNonInsurancePayerPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerPayments.v1.<a href="/src/api/resources/nonInsurancePayerPayments/resources/v1/client/Client.ts">get</a>(nonInsurancePayerPaymentId) -> core.APIResponse<CandidApi.NonInsurancePayerPayment, CandidApi.nonInsurancePayerPayments.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created non-insurance payer payment by its `non_insurance_payer_payment_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerPayments.v1.get(
    CandidApi.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerPaymentId:** `CandidApi.NonInsurancePayerPaymentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerPayments.v1.<a href="/src/api/resources/nonInsurancePayerPayments/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerPayment, CandidApi.nonInsurancePayerPayments.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerPayments.v1.create({
    nonInsurancePayerId: CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    amountCents: 1,
    paymentTimestamp: "2024-01-15T09:30:00Z",
    paymentNote: "string",
    checkNumber: "string",
    allocations: [
        {
            amountCents: 1,
            target: {
                type: "service_line_by_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
        },
    ],
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.NonInsurancePayerPaymentCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerPayments.v1.<a href="/src/api/resources/nonInsurancePayerPayments/resources/v1/client/Client.ts">update</a>(nonInsurancePayerPaymentId, { ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerPayment, CandidApi.nonInsurancePayerPayments.v1.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerPayments.v1.update(
    CandidApi.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        paymentTimestamp: "2024-01-15T09:30:00Z",
        paymentNote: {
            type: "set",
            value: "string",
        },
        invoiceId: {
            type: "set",
            value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerPaymentId:** `CandidApi.NonInsurancePayerPaymentId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.nonInsurancePayerPayments.v1.UpdateNonInsurancePayerPaymentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerPayments.v1.<a href="/src/api/resources/nonInsurancePayerPayments/resources/v1/client/Client.ts">delete</a>(nonInsurancePayerPaymentId) -> core.APIResponse<void, CandidApi.nonInsurancePayerPayments.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the non-insurance payer payment record matching the provided `non_insurance_payer_payment_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerPayments.v1.delete(
    CandidApi.NonInsurancePayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerPaymentId:** `CandidApi.NonInsurancePayerPaymentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NonInsurancePayerRefunds V1

<details><summary><code>client.nonInsurancePayerRefunds.v1.<a href="/src/api/resources/nonInsurancePayerRefunds/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerRefundsPage, CandidApi.nonInsurancePayerRefunds.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all non-insurance payer refunds satisfying the search criteria

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerRefunds.v1.getMulti({
    limit: 1,
    nonInsurancePayerId: CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    checkNumber: "string",
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: "amount_cents",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.nonInsurancePayerRefunds.v1.GetMultiNonInsurancePayerRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerRefunds.v1.<a href="/src/api/resources/nonInsurancePayerRefunds/resources/v1/client/Client.ts">get</a>(nonInsurancePayerRefundId) -> core.APIResponse<CandidApi.NonInsurancePayerRefund, CandidApi.nonInsurancePayerRefunds.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created non-insurance payer refund by its `non_insurance_payer_refund_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerRefunds.v1.get(
    CandidApi.NonInsurancePayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerRefundId:** `CandidApi.NonInsurancePayerRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerRefunds.v1.<a href="/src/api/resources/nonInsurancePayerRefunds/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerRefund, CandidApi.nonInsurancePayerRefunds.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new non-insurance payer refund record and returns the newly created `NonInsurancePayerRefund` object.
The allocations can describe whether the refund is being applied toward a specific service line,
claim, or billing provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerRefunds.v1.create({
    nonInsurancePayerId: CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    amountCents: 1,
    refundTimestamp: "2024-01-15T09:30:00Z",
    refundNote: "string",
    checkNumber: "string",
    allocations: [
        {
            amountCents: 1,
            target: {
                type: "service_line_by_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
        },
    ],
    refundReason: "OVERCHARGED",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.NonInsurancePayerRefundCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerRefunds.v1.<a href="/src/api/resources/nonInsurancePayerRefunds/resources/v1/client/Client.ts">update</a>(nonInsurancePayerRefundId, { ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerRefund, CandidApi.nonInsurancePayerRefunds.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the non-insurance payer refund record matching the provided non_insurance_payer_refund_id. If updating the refund amount,
then the allocations must be appropriately updated as well.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerRefunds.v1.update(
    CandidApi.NonInsurancePayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        refundTimestamp: "2024-01-15T09:30:00Z",
        refundNote: {
            type: "set",
            value: "string",
        },
        refundReason: {
            type: "set",
            value: "OVERCHARGED",
        },
        invoiceId: {
            type: "set",
            value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerRefundId:** `CandidApi.NonInsurancePayerRefundId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayerRefunds.v1.<a href="/src/api/resources/nonInsurancePayerRefunds/resources/v1/client/Client.ts">delete</a>(nonInsurancePayerRefundId) -> core.APIResponse<void, CandidApi.nonInsurancePayerRefunds.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the non-insurance payer refund record matching the provided `non_insurance_payer_refund_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayerRefunds.v1.delete(
    CandidApi.NonInsurancePayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerRefundId:** `CandidApi.NonInsurancePayerRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NonInsurancePayers V1

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayer, CandidApi.nonInsurancePayers.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.create({
    name: "string",
    description: "string",
    category: "string",
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    clinicalTrials: [
        {
            name: "string",
            clinicalTrialNumber: "string",
            clinicalTrialPhase: "Phase 1",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.CreateNonInsurancePayerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">toggleEnablement</a>(nonInsurancePayerId, { ...params }) -> core.APIResponse<CandidApi.NonInsurancePayer, CandidApi.nonInsurancePayers.v1.toggleEnablement.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.toggleEnablement(
    CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        enabled: true,
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerId:** `CandidApi.NonInsurancePayerId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ToggleNonInsurancePayerEnablementRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.NonInsurancePayerPage, CandidApi.nonInsurancePayers.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.getMulti({
    name: "string",
    category: "string",
    enabled: true,
    sort: "NAME",
    sortDirection: "asc",
    limit: 1,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.nonInsurancePayers.v1.GetMultiNonInsurancePayersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">get</a>(nonInsurancePayerId) -> core.APIResponse<CandidApi.NonInsurancePayer, CandidApi.nonInsurancePayers.v1.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.get(CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerId:** `CandidApi.NonInsurancePayerId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">update</a>(nonInsurancePayerId, { ...params }) -> core.APIResponse<CandidApi.NonInsurancePayer, CandidApi.nonInsurancePayers.v1.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.update(CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    name: "string",
    description: {
        type: "remove",
    },
    category: {
        type: "remove",
    },
    address: {
        type: "remove",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerId:** `CandidApi.NonInsurancePayerId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.NonInsurancePayerUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nonInsurancePayers.v1.<a href="/src/api/resources/nonInsurancePayers/resources/v1/client/Client.ts">delete</a>(nonInsurancePayerId) -> core.APIResponse<void, CandidApi.nonInsurancePayers.v1.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nonInsurancePayers.v1.delete(CandidApi.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nonInsurancePayerId:** `CandidApi.NonInsurancePayerId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## OrganizationServiceFacilities V2

<details><summary><code>client.organizationServiceFacilities.v2.<a href="/src/api/resources/organizationServiceFacilities/resources/v2/client/Client.ts">get</a>(organizationServiceFacilityId) -> core.APIResponse<CandidApi.OrganizationServiceFacility, CandidApi.organizationServiceFacilities.v2.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationServiceFacilities.v2.get(
    CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationServiceFacilityId:** `CandidApi.OrganizationServiceFacilityId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationServiceFacilities.v2.<a href="/src/api/resources/organizationServiceFacilities/resources/v2/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.OrganizationServiceFacilityPage, CandidApi.organizationServiceFacilities.v2.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationServiceFacilities.v2.getMulti({
    limit: 100,
    name: "Test Service Facility",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.organizationServiceFacilities.v2.GetAllOrganizationServiceFacilitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationServiceFacilities.v2.<a href="/src/api/resources/organizationServiceFacilities/resources/v2/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.OrganizationServiceFacility, CandidApi.organizationServiceFacilities.v2.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationServiceFacilities.v2.create({
    name: "Test Service Facility",
    aliases: ["Test Service Facility Alias"],
    description: "Test Service Facility Description",
    status: "active",
    operationalStatus: "C",
    mode: "instance",
    type: "DX",
    physicalType: "si",
    telecoms: ["555-555-5555"],
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.OrganizationServiceFacilityCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationServiceFacilities.v2.<a href="/src/api/resources/organizationServiceFacilities/resources/v2/client/Client.ts">update</a>(organizationServiceFacilityId, { ...params }) -> core.APIResponse<CandidApi.OrganizationServiceFacility, CandidApi.organizationServiceFacilities.v2.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationServiceFacilities.v2.update(
    CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
    {
        name: "Test Service Facility",
        aliases: ["Test Service Facility Alias"],
        description: "Test Service Facility Description",
        status: "active",
        operationalStatus: "C",
        mode: "instance",
        type: "DX",
        physicalType: "si",
        telecoms: ["555-555-5555"],
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
    },
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationServiceFacilityId:** `CandidApi.OrganizationServiceFacilityId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.OrganizationServiceFacilityUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationServiceFacilities.v2.<a href="/src/api/resources/organizationServiceFacilities/resources/v2/client/Client.ts">delete</a>(organizationServiceFacilityId) -> core.APIResponse<void, CandidApi.organizationServiceFacilities.v2.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationServiceFacilities.v2.delete(
    CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationServiceFacilityId:** `CandidApi.OrganizationServiceFacilityId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## OrganizationProviders V3

<details><summary><code>client.organizationProviders.v3.<a href="/src/api/resources/organizationProviders/resources/v3/client/Client.ts">get</a>(organizationProviderId) -> core.APIResponse<CandidApi.OrganizationProviderV2, CandidApi.organizationProviders.v3.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationProviders.v3.get(CandidApi.OrganizationProviderId("965A563A-0285-4910-9569-E3739C0F6EAB"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationProviderId:** `CandidApi.OrganizationProviderId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationProviders.v3.<a href="/src/api/resources/organizationProviders/resources/v3/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.OrganizationProviderPageV2, CandidApi.organizationProviders.v3.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationProviders.v3.getMulti({
    limit: 100,
    searchTerm: "john",
    npi: "1234567890",
    isRendering: true,
    isBilling: true,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    sort: "provider_name:asc",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.organizationProviders.v3.GetAllOrganizationProvidersRequestV2`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationProviders.v3.<a href="/src/api/resources/organizationProviders/resources/v3/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.OrganizationProviderV2, CandidApi.organizationProviders.v3.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationProviders.v3.create({
    npi: "string",
    isRendering: true,
    isBilling: true,
    firstName: "string",
    lastName: "string",
    organizationName: "string",
    providerType: "INDIVIDUAL",
    taxId: "string",
    taxonomyCode: "string",
    licenseType: "MD",
    addresses: [
        {
            address: {
                address1: "123 Main St",
                address2: "Apt 1",
                city: "New York",
                state: "NY",
                zipCode: "10001",
                zipPlusFourCode: "1234",
            },
            addressType: "DEFAULT",
        },
    ],
    employmentStartDate: "2023-01-15",
    employmentTerminationDate: "2023-01-15",
    qualifications: [
        {
            period: {
                startDate: CandidApi.Date_("string"),
            },
            identifierCode: "MCR",
            identifierValue: {
                type: "medicare_provider_identifier",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.OrganizationProviderCreateV2`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizationProviders.v3.<a href="/src/api/resources/organizationProviders/resources/v3/client/Client.ts">update</a>(organizationProviderId, { ...params }) -> core.APIResponse<CandidApi.OrganizationProviderV2, CandidApi.organizationProviders.v3.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizationProviders.v3.update(CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    npi: "string",
    isRendering: true,
    isBilling: true,
    firstName: "string",
    lastName: "string",
    organizationName: "string",
    providerType: "INDIVIDUAL",
    taxId: "string",
    taxonomyCode: "string",
    licenseType: "MD",
    addresses: [
        {
            address: {
                address1: "123 Main St",
                address2: "Apt 1",
                city: "New York",
                state: "NY",
                zipCode: "10001",
                zipPlusFourCode: "1234",
            },
            addressType: "DEFAULT",
        },
    ],
    employmentStartDate: CandidApi.Date_("string"),
    employmentTerminationDate: CandidApi.Date_("string"),
    qualifications: [
        {
            type: "add",
            period: {
                startDate: CandidApi.Date_("string"),
            },
            identifierCode: "MCR",
            identifierValue: {
                type: "medicare_provider_identifier",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**organizationProviderId:** `CandidApi.OrganizationProviderId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.OrganizationProviderUpdateV2`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PatientPayments V4

<details><summary><code>client.patientPayments.v4.<a href="/src/api/resources/patientPayments/resources/v4/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.PatientPaymentsPage, CandidApi.patientPayments.v4.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all patient payments satisfying the search criteria AND whose organization_id matches
the current organization_id of the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientPayments.v4.getMulti({
    limit: 1,
    patientExternalId: CandidApi.PatientExternalId("string"),
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    unattributed: true,
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sources: "MANUAL_ENTRY",
    sort: "payment_source",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.patientPayments.v4.GetMultiPatientPaymentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientPayments.v4.<a href="/src/api/resources/patientPayments/resources/v4/client/Client.ts">get</a>(patientPaymentId) -> core.APIResponse<CandidApi.PatientPayment, CandidApi.patientPayments.v4.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created patient payment by its `patient_payment_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientPayments.v4.get(CandidApi.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientPaymentId:** `CandidApi.PatientPaymentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientPayments.v4.<a href="/src/api/resources/patientPayments/resources/v4/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.PatientPayment, CandidApi.patientPayments.v4.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new patient payment record and returns the newly created PatientPayment object.
The allocations can describe whether the payment is being applied toward a specific service line,
claim, or billing provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientPayments.v4.create({
    amountCents: 1,
    paymentTimestamp: "2024-01-15T09:30:00Z",
    paymentNote: "string",
    patientExternalId: CandidApi.PatientExternalId("string"),
    allocations: [
        {
            amountCents: 1,
            target: {
                type: "service_line_by_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
        },
    ],
    invoice: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.patientPayments.v4.PatientPaymentCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientPayments.v4.<a href="/src/api/resources/patientPayments/resources/v4/client/Client.ts">update</a>(patientPaymentId, { ...params }) -> core.APIResponse<CandidApi.PatientPayment, CandidApi.patientPayments.v4.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the patient payment record matching the provided patient_payment_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientPayments.v4.update(CandidApi.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    paymentTimestamp: "2024-01-15T09:30:00Z",
    paymentNote: {
        type: "set",
        value: "string",
    },
    invoice: {
        type: "set",
        value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientPaymentId:** `CandidApi.PatientPaymentId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.patientPayments.v4.PatientPaymentUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientPayments.v4.<a href="/src/api/resources/patientPayments/resources/v4/client/Client.ts">delete</a>(patientPaymentId) -> core.APIResponse<void, CandidApi.patientPayments.v4.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the patient payment record matching the provided patient_payment_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientPayments.v4.delete(CandidApi.PatientPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientPaymentId:** `CandidApi.PatientPaymentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V4.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PatientRefunds V1

<details><summary><code>client.patientRefunds.v1.<a href="/src/api/resources/patientRefunds/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.PatientRefundsPage, CandidApi.patientRefunds.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all patient refunds satisfying the search criteria AND whose organization_id matches
the current organization_id of the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientRefunds.v1.getMulti({
    limit: 1,
    patientExternalId: CandidApi.PatientExternalId("string"),
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    unattributed: true,
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sources: "MANUAL_ENTRY",
    sort: "refund_source",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.patientRefunds.v1.GetMultiPatientRefundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientRefunds.v1.<a href="/src/api/resources/patientRefunds/resources/v1/client/Client.ts">get</a>(patientRefundId) -> core.APIResponse<CandidApi.PatientRefund, CandidApi.patientRefunds.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created patient refund by its `patient_refund_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientRefunds.v1.get(CandidApi.PatientRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientRefundId:** `CandidApi.PatientRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientRefunds.v1.<a href="/src/api/resources/patientRefunds/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.PatientRefund, CandidApi.patientRefunds.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new patient refund record and returns the newly created PatientRefund object.
The allocations can describe whether the refund is being applied toward a specific service line,
claim, or billing provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientRefunds.v1.create({
    amountCents: 1,
    refundTimestamp: "2024-01-15T09:30:00Z",
    refundNote: "string",
    patientExternalId: CandidApi.PatientExternalId("string"),
    allocations: [
        {
            amountCents: 1,
            target: {
                type: "service_line_by_id",
                value: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            },
        },
    ],
    invoice: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    refundReason: "OVERCHARGED",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.patientRefunds.v1.PatientRefundCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientRefunds.v1.<a href="/src/api/resources/patientRefunds/resources/v1/client/Client.ts">update</a>(patientRefundId, { ...params }) -> core.APIResponse<CandidApi.PatientRefund, CandidApi.patientRefunds.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the patient refund record matching the provided patient_refund_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientRefunds.v1.update(CandidApi.PatientRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    refundTimestamp: "2024-01-15T09:30:00Z",
    refundNote: {
        type: "set",
        value: "string",
    },
    invoice: {
        type: "set",
        value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    },
    refundReason: {
        type: "set",
        value: "OVERCHARGED",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientRefundId:** `CandidApi.PatientRefundId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.patientRefunds.v1.PatientRefundUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patientRefunds.v1.<a href="/src/api/resources/patientRefunds/resources/v1/client/Client.ts">delete</a>(patientRefundId) -> core.APIResponse<void, CandidApi.patientRefunds.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the patient refund record matching the provided patient_refund_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientRefunds.v1.delete(CandidApi.PatientRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**patientRefundId:** `CandidApi.PatientRefundId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PayerPlanGroups V1

<details><summary><code>client.payerPlanGroups.v1.<a href="/src/api/resources/payerPlanGroups/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.PayerPlanGroupPage, CandidApi.payerPlanGroups.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all payer plan groups matching filter criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerPlanGroups.v1.getMulti({
    planGroupName: "string",
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    payerId: CandidApi.PayerId("string"),
    planType: "09",
    isActive: true,
    payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    limit: 1,
    sortBySimilarity: "string",
    sort: "plan_group_name",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.payerPlanGroups.v1.PayerPlanGroupGetMultiRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payerPlanGroups.v1.<a href="/src/api/resources/payerPlanGroups/resources/v1/client/Client.ts">get</a>(payerPlanGroupId) -> core.APIResponse<CandidApi.PayerPlanGroup, CandidApi.payerPlanGroups.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a plan group with a given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerPlanGroups.v1.get(CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payerPlanGroupId:** `CandidApi.PayerPlanGroupId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payerPlanGroups.v1.<a href="/src/api/resources/payerPlanGroups/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.PayerPlanGroup, CandidApi.payerPlanGroups.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a payer plan group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerPlanGroups.v1.create({
    planGroupName: "string",
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    planType: "09",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutablePayerPlanGroup`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payerPlanGroups.v1.<a href="/src/api/resources/payerPlanGroups/resources/v1/client/Client.ts">update</a>(payerPlanGroupId, { ...params }) -> core.APIResponse<CandidApi.PayerPlanGroup, CandidApi.payerPlanGroups.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update any of the fields on a payer plan group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerPlanGroups.v1.update(CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    planGroupName: "string",
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    planType: "09",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payerPlanGroupId:** `CandidApi.PayerPlanGroupId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutablePayerPlanGroup`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payerPlanGroups.v1.<a href="/src/api/resources/payerPlanGroups/resources/v1/client/Client.ts">deactivate</a>(payerPlanGroupId) -> core.APIResponse<CandidApi.PayerPlanGroup, CandidApi.payerPlanGroups.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks the payer plan group as deactivated

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerPlanGroups.v1.deactivate(CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payerPlanGroupId:** `CandidApi.PayerPlanGroupId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payers V3

<details><summary><code>client.payers.v3.<a href="/src/api/resources/payers/resources/v3/client/Client.ts">get</a>(payerUuid) -> core.APIResponse<CandidApi.Payer, CandidApi.payers.v3.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payers.v3.get(CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payerUuid:** `CandidApi.PayerUuid`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payers.v3.<a href="/src/api/resources/payers/resources/v3/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.PayerPage, CandidApi.payers.v3.getAll.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payers.v3.getAll({
    limit: 100,
    searchTerm: "john",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.payers.v3.GetAllPayersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceLines V2

<details><summary><code>client.serviceLines.v2.<a href="/src/api/resources/serviceLines/resources/v2/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ServiceLine, CandidApi.serviceLines.v2.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceLines.v2.create({
    modifiers: ["AV"],
    chargeAmountCents: 1,
    diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    denialReason: {
        reason: "Authorization Required",
    },
    placeOfServiceCode: "01",
    procedureCode: "string",
    quantity: CandidApi.Decimal("string"),
    units: "MJ",
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    description: "string",
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
    drugIdentification: {
        serviceIdQualifier: "EN",
        nationalDrugCode: "string",
        nationalDrugUnitCount: "string",
        measurementUnitCode: "ML",
        linkSequenceNumber: "string",
        pharmacyPrescriptionNumber: "string",
        conversionFormula: "string",
        drugDescription: "string",
    },
    orderingProvider: {
        npi: "string",
        taxonomyCode: "string",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    testResults: [
        {
            value: 1.1,
            resultType: "HEMATOCRIT",
        },
    ],
    hasEpsdtIndicator: true,
    hasFamilyPlanningIndicator: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.ServiceLineCreateStandalone`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceLines.v2.<a href="/src/api/resources/serviceLines/resources/v2/client/Client.ts">update</a>(serviceLineId, { ...params }) -> core.APIResponse<CandidApi.ServiceLine, CandidApi.serviceLines.v2.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceLines.v2.update(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    editReason: "string",
    modifiers: ["AV"],
    chargeAmountCents: 1,
    diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    drugIdentification: {
        serviceIdQualifier: "EN",
        nationalDrugCode: "string",
        nationalDrugUnitCount: "string",
        measurementUnitCode: "ML",
        linkSequenceNumber: "string",
        pharmacyPrescriptionNumber: "string",
        conversionFormula: "string",
        drugDescription: "string",
    },
    denialReason: {
        reason: "Authorization Required",
    },
    placeOfServiceCode: "01",
    units: "MJ",
    procedureCode: "string",
    quantity: CandidApi.Decimal("string"),
    description: "string",
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
    testResults: [
        {
            value: 1.1,
            resultType: "HEMATOCRIT",
        },
    ],
    hasEpsdtIndicator: true,
    hasFamilyPlanningIndicator: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ServiceLineUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceLines.v2.<a href="/src/api/resources/serviceLines/resources/v2/client/Client.ts">delete</a>(serviceLineId) -> core.APIResponse<void, CandidApi.serviceLines.v2.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceLines.v2.delete(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceLineId:** `CandidApi.ServiceLineId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tasks V3

<details><summary><code>client.tasks.v3.<a href="/src/api/resources/tasks/resources/v3/client/Client.ts">getActions</a>(taskId) -> core.APIResponse<CandidApi.TaskActions, CandidApi.tasks.v3.getActions.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.v3.getActions(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taskId:** `CandidApi.TaskId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.v3.<a href="/src/api/resources/tasks/resources/v3/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.TaskPage, CandidApi.tasks.v3.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.v3.getMulti({
    limit: 1,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    status: "finished",
    taskType: "CUSTOMER_DATA_REQUEST",
    categories: "string",
    updatedSince: "2024-01-15T09:30:00Z",
    encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    searchTerm: "string",
    assignedToId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    dateOfServiceMin: "2023-01-15",
    dateOfServiceMax: "2023-01-15",
    billingProviderNpi: "string",
    sort: "updated_at:asc",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.tasks.v3.GetAllTasksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.v3.<a href="/src/api/resources/tasks/resources/v3/client/Client.ts">get</a>(taskId) -> core.APIResponse<CandidApi.Task, CandidApi.tasks.v3.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.v3.get(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taskId:** `CandidApi.TaskId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.v3.<a href="/src/api/resources/tasks/resources/v3/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Task, CandidApi.tasks.v3.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.v3.create({
    encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    taskType: "CUSTOMER_DATA_REQUEST",
    description: "string",
    blocksClaimSubmission: true,
    assigneeUserId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    category: "other",
    workQueueId: CandidApi.WorkQueueId("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.TaskCreateV3`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.v3.<a href="/src/api/resources/tasks/resources/v3/client/Client.ts">update</a>(taskId, { ...params }) -> core.APIResponse<CandidApi.Task, CandidApi.tasks.v3.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.v3.update(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    status: "finished",
    assigneeUserId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    blocksClaimSubmission: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**taskId:** `CandidApi.TaskId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.TaskUpdateV3`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WriteOffs V1

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.WriteOffsPage, CandidApi.writeOffs.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all write-offs satisfying the search criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.getMulti({
    limit: 1,
    patientExternalId: CandidApi.PatientExternalId("string"),
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: "amount_cents",
    sortDirection: "asc",
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    accountTypes: "PATIENT",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.writeOffs.v1.GetMultiWriteOffsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">get</a>(writeOffId) -> core.APIResponse<CandidApi.WriteOff, CandidApi.writeOffs.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created write off by its `write_off_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.get(CandidApi.WriteOffId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**writeOffId:** `CandidApi.WriteOffId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.CreateWriteOffsResponse, CandidApi.writeOffs.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates one or many write-offs applied toward a specific service line,
claim, or billing provider.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.create({
    writeOffs: [
        {
            type: "patient",
            writeOffTimestamp: "2024-01-15T09:30:00Z",
            writeOffNote: "string",
            writeOffReason: "SMALL_BALANCE",
            serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            amountCents: 1,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.writeOffs.v1.CreateWriteOffsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">revert</a>(writeOffId) -> core.APIResponse<CandidApi.WriteOff, CandidApi.writeOffs.v1.revert.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverts a write off given a `write_off_id`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.revert(CandidApi.WriteOffId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**writeOffId:** `CandidApi.WriteOffId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">revertInsuranceBalanceAdjustment</a>(adjustmentId) -> core.APIResponse<CandidApi.WriteOff, CandidApi.writeOffs.v1.revertInsuranceBalanceAdjustment.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverts an Insurance Balance Adjustment given an `adjustment_id`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.revertInsuranceBalanceAdjustment(
    CandidApi.AdjustmentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**adjustmentId:** `CandidApi.AdjustmentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.writeOffs.v1.<a href="/src/api/resources/writeOffs/resources/v1/client/Client.ts">revertEraOriginatedInsuranceBalanceAdjustment</a>(adjustmentId) -> core.APIResponse<CandidApi.AdjustmentId, CandidApi.writeOffs.v1.revertEraOriginatedInsuranceBalanceAdjustment.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverts an ERA-originated Insurance Balance Adjustment given an `adjustment_id`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.writeOffs.v1.revertEraOriginatedInsuranceBalanceAdjustment(
    CandidApi.AdjustmentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**adjustmentId:** `CandidApi.AdjustmentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Appointments V1

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Appointment, CandidApi.preEncounter.appointments.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an appointment. VersionConflictError is returned when the placer_appointment_id is already in use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.create({
    patientId: CandidApi.PatientId("string"),
    startTimestamp: "2024-01-15T09:30:00Z",
    status: "PENDING",
    serviceDuration: 1,
    services: [
        {
            universalServiceIdentifier: "MD_Visit",
            startTimestamp: "2024-01-15T09:30:00Z",
        },
    ],
    placerAppointmentId: "string",
    attendingDoctor: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        type: "PRIMARY",
        npi: "string",
        telecoms: [
            {
                value: "string",
                use: "HOME",
            },
        ],
        addresses: [],
        period: {},
        canonicalId: CandidApi.CanonicalProviderId("string"),
        fax: "string",
    },
    estimatedCopayCents: 1,
    estimatedPatientResponsibilityCents: 1,
    patientDepositCents: 1,
    checkedInTimestamp: "2024-01-15T09:30:00Z",
    notes: "string",
    locationResourceId: "string",
    automatedEligibilityCheckComplete: true,
    workQueue: "EMERGENT_ISSUE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutableAppointment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">getVisits</a>({ ...params }) -> core.APIResponse<CandidApi.VisitsPage, CandidApi.preEncounter.appointments.v1.getVisits.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all Visits within a given time range. The return list is ordered by start_time ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.getVisits({
    pageToken: CandidApi.PageToken("string"),
    limit: 1,
    sortField: CandidApi.SortFieldString("string"),
    sortDirection: "asc",
    filters: CandidApi.FilterQueryString("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.appointments.v1.VisitsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Appointment, CandidApi.preEncounter.appointments.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an appointment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.get(CandidApi.AppointmentId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.AppointmentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">getHistory</a>(id) -> core.APIResponse<CandidApi.Appointment[], CandidApi.preEncounter.appointments.v1.getHistory.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an appointment along with it's full history. The return list is ordered by version ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.getHistory(CandidApi.AppointmentId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.AppointmentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Appointment, CandidApi.preEncounter.appointments.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an appointment. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.update(CandidApi.AppointmentId("string"), "string", {
    patientId: CandidApi.PatientId("string"),
    startTimestamp: "2024-01-15T09:30:00Z",
    status: "PENDING",
    serviceDuration: 1,
    services: [
        {
            universalServiceIdentifier: "MD_Visit",
            startTimestamp: "2024-01-15T09:30:00Z",
        },
    ],
    placerAppointmentId: "string",
    attendingDoctor: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        type: "PRIMARY",
        npi: "string",
        telecoms: [
            {
                value: "string",
                use: "HOME",
            },
        ],
        addresses: [],
        period: {},
        canonicalId: CandidApi.CanonicalProviderId("string"),
        fax: "string",
    },
    estimatedCopayCents: 1,
    estimatedPatientResponsibilityCents: 1,
    patientDepositCents: 1,
    checkedInTimestamp: "2024-01-15T09:30:00Z",
    notes: "string",
    locationResourceId: "string",
    automatedEligibilityCheckComplete: true,
    workQueue: "EMERGENT_ISSUE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.AppointmentId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutableAppointment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">scan</a>({ ...params }) -> core.APIResponse<CandidApi.Appointment[], CandidApi.preEncounter.appointments.v1.scan.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Scans up to 100 appointment updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.scan({
    since: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.appointments.v1.AppointmentScanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.appointments.v1.<a href="/src/api/resources/preEncounter/resources/appointments/resources/v1/client/Client.ts">deactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.appointments.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets an appointment as deactivated. The path must contain the most recent version to prevent race conditions. Deactivating historic versions is not supported. Subsequent updates via PUT to the appointment will "reactivate" the appointment and set the deactivated flag to false.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.appointments.v1.deactivate(CandidApi.AppointmentId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.AppointmentId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Coverages V1

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Coverage, CandidApi.preEncounter.coverages.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new Coverage. A Coverage provides the high-level identifiers and descriptors of a specific insurance plan for a specific individual - typically the information you can find on an insurance card. Additionally a coverage will include detailed benefits information covered by the specific plan for the individual.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.create({
    status: "ACTIVE",
    subscriber: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        dateOfBirth: "2023-01-15",
        biologicalSex: "FEMALE",
        address: {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
    },
    relationship: "SELF",
    patient: CandidApi.PatientId("string"),
    insurancePlan: {
        memberId: "string",
        payerId: CandidApi.PayerId("string"),
        payerName: "string",
        additionalPayerInformation: {},
        groupNumber: "string",
        name: "string",
        planType: "09",
        type: "01",
        period: {},
        insuranceCardImageLocator: "string",
        payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    },
    verified: true,
    eligibilityChecks: [],
    latestEligibilityCheck: {
        checkId: "string",
        status: "ACTIVE",
        initiatedAt: "2024-01-15T09:30:00Z",
    },
    benefits: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutableCoverage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Coverage, CandidApi.preEncounter.coverages.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Coverage. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.update(CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), "string", {
    status: "ACTIVE",
    subscriber: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        dateOfBirth: "2023-01-15",
        biologicalSex: "FEMALE",
        address: {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
    },
    relationship: "SELF",
    patient: CandidApi.PatientId("string"),
    insurancePlan: {
        memberId: "string",
        payerId: CandidApi.PayerId("string"),
        payerName: "string",
        additionalPayerInformation: {},
        groupNumber: "string",
        name: "string",
        planType: "09",
        type: "01",
        period: {},
        insuranceCardImageLocator: "string",
        payerPlanGroupId: CandidApi.PayerPlanGroupId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    },
    verified: true,
    eligibilityChecks: [],
    latestEligibilityCheck: {
        checkId: "string",
        status: "ACTIVE",
        initiatedAt: "2024-01-15T09:30:00Z",
    },
    benefits: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.CoverageId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutableCoverage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">getMultiPaginated</a>({ ...params }) -> core.APIResponse<CandidApi.CoveragesPage, CandidApi.preEncounter.coverages.v1.getMultiPaginated.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a page of Coverages based on the search criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.getMultiPaginated({
    patientId: "string",
    payerPlanGroupId: "string",
    pageToken: CandidApi.PageToken("string"),
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.coverages.v1.CoverageGetMultiPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Coverage, CandidApi.preEncounter.coverages.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

gets a specific Coverage

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.get(CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.CoverageId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">getHistory</a>(id) -> core.APIResponse<CandidApi.Coverage[], CandidApi.preEncounter.coverages.v1.getHistory.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a coverage along with it's full history. The return list is ordered by version ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.getHistory(CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.CoverageId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.Coverage[], CandidApi.preEncounter.coverages.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of Coverages based on the search criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.getMulti({
    patientId: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.coverages.v1.CoverageGetMultiRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">scan</a>({ ...params }) -> core.APIResponse<CandidApi.Coverage[], CandidApi.preEncounter.coverages.v1.scan.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Scans up to 100 coverage updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.scan({
    since: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.coverages.v1.CoverageScanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">checkEligibility</a>(id, { ...params }) -> core.APIResponse<CandidApi.EligibilityCheckMetadata, CandidApi.preEncounter.coverages.v1.checkEligibility.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initiates an eligibility check. Returns the metadata of the check if successfully initiated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.checkEligibility(CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    serviceCode: "1",
    dateOfService: "2023-01-15",
    npi: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.CoverageId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.preEncounter.coverages.v1.CheckEligibilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.coverages.v1.<a href="/src/api/resources/preEncounter/resources/coverages/resources/v1/client/Client.ts">getEligibility</a>(id, checkId) -> core.APIResponse<CandidApi.CoverageEligibilityCheckResponse, CandidApi.preEncounter.coverages.v1.getEligibility.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the eligibility of a patient for a specific coverage if successful.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.coverages.v1.getEligibility(
    CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    "string",
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.CoverageId`

</dd>
</dl>

<dl>
<dd>

**checkId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter EligibilityChecks V1

<details><summary><code>client.preEncounter.eligibilityChecks.v1.<a href="/src/api/resources/preEncounter/resources/eligibilityChecks/resources/v1/client/Client.ts">post</a>({ ...params }) -> core.APIResponse<CandidApi.EligibilityResponse, CandidApi.preEncounter.eligibilityChecks.v1.post.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends real-time eligibility checks to payers through Stedi.
<Warning>Please only send one concurrent request to this endpoint. Batch requests must be made in succession, otherwise, it will cause this service to fail. A batch endpoint is in development - please reach out to the Candid team for more information.</Warning>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.eligibilityChecks.v1.post({
    payerId: "string",
    provider: {
        firstName: "string",
        lastName: "string",
        npi: "string",
    },
    subscriber: {
        memberId: "string",
        firstName: "string",
        lastName: "string",
        dateOfBirth: "2023-01-15",
    },
    dependent: {
        memberId: "string",
        firstName: "string",
        lastName: "string",
        dateOfBirth: "2023-01-15",
    },
    encounter: {
        dateOfService: "2023-01-15",
        serviceTypeCodes: ["string"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.EligibilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Images V1

<details><summary><code>client.preEncounter.images.v1.<a href="/src/api/resources/preEncounter/resources/images/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Image, CandidApi.preEncounter.images.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an image. VersionConflictError is returned if a front or back of this coverage already exists.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.images.v1.create({
    fileName: "string",
    displayName: "string",
    fileType: "string",
    status: "PENDING",
    coverage: {
        id: CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        side: "FRONT",
    },
    patient: {
        id: CandidApi.PatientId("string"),
        notes: "string",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutableImage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.images.v1.<a href="/src/api/resources/preEncounter/resources/images/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Image, CandidApi.preEncounter.images.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an image by imageId.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.images.v1.get(CandidApi.ImageId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.ImageId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.images.v1.<a href="/src/api/resources/preEncounter/resources/images/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Image, CandidApi.preEncounter.images.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an Image. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.images.v1.update(CandidApi.ImageId("string"), "string", {
    fileName: "string",
    displayName: "string",
    fileType: "string",
    status: "PENDING",
    coverage: {
        id: CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        side: "FRONT",
    },
    patient: {
        id: CandidApi.PatientId("string"),
        notes: "string",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.ImageId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutableImage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.images.v1.<a href="/src/api/resources/preEncounter/resources/images/resources/v1/client/Client.ts">deactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.images.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets an Image as deactivated. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.images.v1.deactivate(CandidApi.ImageId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.ImageId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.images.v1.<a href="/src/api/resources/preEncounter/resources/images/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.Image[], CandidApi.preEncounter.images.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for images that match the query parameters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.images.v1.getMulti({
    patientId: "string",
    coverageId: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.images.v1.ImageGetMultiRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Lists V1

<details><summary><code>client.preEncounter.lists.v1.<a href="/src/api/resources/preEncounter/resources/lists/resources/v1/client/Client.ts">getPatientList</a>({ ...params }) -> core.APIResponse<CandidApi.PatientListPage, CandidApi.preEncounter.lists.v1.getPatientList.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets patients with dependent objects for patients that match the query parameters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.lists.v1.getPatientList({
    pageToken: CandidApi.PageToken("string"),
    limit: 1,
    sortField: CandidApi.SortFieldString("string"),
    sortDirection: "asc",
    filters: CandidApi.FilterQueryString("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.lists.v1.PatientListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.lists.v1.<a href="/src/api/resources/preEncounter/resources/lists/resources/v1/client/Client.ts">getAppointmentList</a>({ ...params }) -> core.APIResponse<CandidApi.AppointmentListPage, CandidApi.preEncounter.lists.v1.getAppointmentList.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for appointments that match the query parameters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.lists.v1.getAppointmentList({
    sortField: CandidApi.SortFieldString("string"),
    sortDirection: "asc",
    limit: 1,
    pageToken: CandidApi.PageToken("string"),
    filters: CandidApi.FilterQueryString("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.lists.v1.AppointmentsGetListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Notes V1

<details><summary><code>client.preEncounter.notes.v1.<a href="/src/api/resources/preEncounter/resources/notes/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Note, CandidApi.preEncounter.notes.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a note by NoteId.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.notes.v1.get(CandidApi.NoteId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.NoteId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.notes.v1.<a href="/src/api/resources/preEncounter/resources/notes/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Note, CandidApi.preEncounter.notes.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a new note.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.notes.v1.create({
    value: "string",
    authorEmail: "string",
    authorName: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutableNote`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.notes.v1.<a href="/src/api/resources/preEncounter/resources/notes/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Note, CandidApi.preEncounter.notes.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a note. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.notes.v1.update(CandidApi.NoteId("string"), "string", {
    value: "string",
    authorEmail: "string",
    authorName: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.NoteId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutableNote`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.notes.v1.<a href="/src/api/resources/preEncounter/resources/notes/resources/v1/client/Client.ts">deactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.notes.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets a note as deactivated. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.notes.v1.deactivate(CandidApi.NoteId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.NoteId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Patients V1

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Patient, CandidApi.preEncounter.patients.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a patient. VersionConflictError is returned when the patient's external ID is already in use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.create({
    skipDuplicateCheck: true,
    body: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        otherNames: [
            {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
        ],
        otherIdentifiers: [
            {
                value: "string",
                system: "string",
            },
        ],
        gender: "MAN",
        birthDate: "2023-01-15",
        socialSecurityNumber: "string",
        biologicalSex: "FEMALE",
        sexualOrientation: "HETEROSEXUAL",
        race: "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
        ethnicity: "HISPANIC_OR_LATINO",
        disabilityStatus: "DISABLED",
        maritalStatus: "ANNULLED",
        deceased: "2024-01-15T09:30:00Z",
        multipleBirth: 1,
        primaryAddress: {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
        otherAddresses: [
            {
                use: "HOME",
                line: ["string"],
                city: "string",
                state: "string",
                postalCode: "string",
                country: "string",
                period: {},
            },
        ],
        primaryTelecom: {
            value: "string",
            use: "HOME",
        },
        otherTelecoms: [
            {
                value: "string",
                use: "HOME",
            },
        ],
        email: "string",
        electronicCommunicationOptIn: true,
        photo: "string",
        language: "string",
        externalProvenance: {
            externalId: "string",
            systemName: "string",
        },
        contacts: [
            {
                relationship: ["SELF"],
                name: {
                    family: "string",
                    given: ["string"],
                    use: "USUAL",
                    period: {},
                    suffix: "string",
                },
                telecoms: [
                    {
                        value: "string",
                        use: "HOME",
                    },
                ],
                addresses: [
                    {
                        use: "HOME",
                        line: ["string"],
                        city: "string",
                        state: "string",
                        postalCode: "string",
                        country: "string",
                        period: {},
                    },
                ],
                period: {},
                hipaaAuthorization: true,
            },
        ],
        generalPractitioners: [
            {
                name: {
                    family: "string",
                    given: ["string"],
                    use: "USUAL",
                    period: {},
                    suffix: "string",
                },
                type: "PRIMARY",
                npi: "string",
                telecoms: [
                    {
                        value: "string",
                        use: "HOME",
                    },
                ],
                addresses: [],
                period: {},
                canonicalId: CandidApi.CanonicalProviderId("string"),
                fax: "string",
            },
        ],
        filingOrder: {
            coverages: [CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
        },
        nonInsurancePayers: [CandidApi.CanonicalNonInsurancePayerId("string")],
        nonInsurancePayerAssociations: [
            {
                id: CandidApi.CanonicalNonInsurancePayerId("string"),
            },
        ],
        guarantor: {
            name: {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
            telecom: {
                value: "string",
                use: "HOME",
            },
            email: "string",
            birthDate: "2023-01-15",
            address: {
                use: "HOME",
                line: ["string"],
                city: "string",
                state: "string",
                postalCode: "string",
                country: "string",
                period: {},
            },
        },
        selfPay: true,
        authorizations: [
            {
                payerId: CandidApi.PayerId("string"),
                payerName: "string",
                additionalPayerInformation: {},
                authorizationNumber: "string",
                cptCode: "string",
                applyForAllCptCodes: true,
                units: "VISIT",
                quantity: 1,
                period: {},
                notes: "string",
            },
        ],
        referrals: [
            {
                provider: {
                    name: {
                        family: "string",
                        given: ["string"],
                        use: "USUAL",
                        period: {},
                        suffix: "string",
                    },
                    type: "PRIMARY",
                    npi: "string",
                    telecoms: [
                        {
                            value: "string",
                            use: "HOME",
                        },
                    ],
                    addresses: [],
                    period: {},
                    canonicalId: CandidApi.CanonicalProviderId("string"),
                    fax: "string",
                },
                referralNumber: "string",
            },
        ],
        primaryServiceFacilityId: "string",
        doNotInvoiceReason: "BANKRUPTCY",
        noteIds: [CandidApi.NoteId("string")],
        tagIds: [CandidApi.TagId("string")],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.CreatePatientRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">createWithMrn</a>({ ...params }) -> core.APIResponse<CandidApi.Patient, CandidApi.preEncounter.patients.v1.createWithMrn.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a patient and hydrates their MRN with a pre-existing MRN. Once this patient is created their MRN will not be editable. BadRequestError is returned when the MRN is greater than 20 characters. VersionConflictError is returned when the patient's external ID is already in use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.createWithMrn({
    skipDuplicateCheck: true,
    body: {
        mrn: "string",
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        otherNames: [
            {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
        ],
        otherIdentifiers: [
            {
                value: "string",
                system: "string",
            },
        ],
        gender: "MAN",
        birthDate: "2023-01-15",
        socialSecurityNumber: "string",
        biologicalSex: "FEMALE",
        sexualOrientation: "HETEROSEXUAL",
        race: "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
        ethnicity: "HISPANIC_OR_LATINO",
        disabilityStatus: "DISABLED",
        maritalStatus: "ANNULLED",
        deceased: "2024-01-15T09:30:00Z",
        multipleBirth: 1,
        primaryAddress: {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
        otherAddresses: [
            {
                use: "HOME",
                line: ["string"],
                city: "string",
                state: "string",
                postalCode: "string",
                country: "string",
                period: {},
            },
        ],
        primaryTelecom: {
            value: "string",
            use: "HOME",
        },
        otherTelecoms: [
            {
                value: "string",
                use: "HOME",
            },
        ],
        email: "string",
        electronicCommunicationOptIn: true,
        photo: "string",
        language: "string",
        externalProvenance: {
            externalId: "string",
            systemName: "string",
        },
        contacts: [
            {
                relationship: ["SELF"],
                name: {
                    family: "string",
                    given: ["string"],
                    use: "USUAL",
                    period: {},
                    suffix: "string",
                },
                telecoms: [
                    {
                        value: "string",
                        use: "HOME",
                    },
                ],
                addresses: [
                    {
                        use: "HOME",
                        line: ["string"],
                        city: "string",
                        state: "string",
                        postalCode: "string",
                        country: "string",
                        period: {},
                    },
                ],
                period: {},
                hipaaAuthorization: true,
            },
        ],
        generalPractitioners: [
            {
                name: {
                    family: "string",
                    given: ["string"],
                    use: "USUAL",
                    period: {},
                    suffix: "string",
                },
                type: "PRIMARY",
                npi: "string",
                telecoms: [
                    {
                        value: "string",
                        use: "HOME",
                    },
                ],
                addresses: [],
                period: {},
                canonicalId: CandidApi.CanonicalProviderId("string"),
                fax: "string",
            },
        ],
        filingOrder: {
            coverages: [CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
        },
        nonInsurancePayers: [CandidApi.CanonicalNonInsurancePayerId("string")],
        nonInsurancePayerAssociations: [
            {
                id: CandidApi.CanonicalNonInsurancePayerId("string"),
            },
        ],
        guarantor: {
            name: {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
            telecom: {
                value: "string",
                use: "HOME",
            },
            email: "string",
            birthDate: "2023-01-15",
            address: {
                use: "HOME",
                line: ["string"],
                city: "string",
                state: "string",
                postalCode: "string",
                country: "string",
                period: {},
            },
        },
        selfPay: true,
        authorizations: [
            {
                payerId: CandidApi.PayerId("string"),
                payerName: "string",
                additionalPayerInformation: {},
                authorizationNumber: "string",
                cptCode: "string",
                applyForAllCptCodes: true,
                units: "VISIT",
                quantity: 1,
                period: {},
                notes: "string",
            },
        ],
        referrals: [
            {
                provider: {
                    name: {
                        family: "string",
                        given: ["string"],
                        use: "USUAL",
                        period: {},
                        suffix: "string",
                    },
                    type: "PRIMARY",
                    npi: "string",
                    telecoms: [
                        {
                            value: "string",
                            use: "HOME",
                        },
                    ],
                    addresses: [],
                    period: {},
                    canonicalId: CandidApi.CanonicalProviderId("string"),
                    fax: "string",
                },
                referralNumber: "string",
            },
        ],
        primaryServiceFacilityId: "string",
        doNotInvoiceReason: "BANKRUPTCY",
        noteIds: [CandidApi.NoteId("string")],
        tagIds: [CandidApi.TagId("string")],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.CreatePatientWithMrnRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.PatientPage, CandidApi.preEncounter.patients.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for patients that match the query parameters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.getMulti({
    limit: 1,
    mrn: "string",
    pageToken: CandidApi.PageToken("string"),
    sortField: CandidApi.PatientSortField("string"),
    sortDirection: "asc",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.PatientsSearchRequestPaginated`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">searchProviders</a>({ ...params }) -> core.APIResponse<CandidApi.ExternalProvider[], CandidApi.preEncounter.patients.v1.searchProviders.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for referring providers that match the query parameters. The search is case-insensitive, supports fuzzy matching, and matches against provider name and NPI. The search criteria must be an alphanumeric string, and the search is limited to the first 20 results.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.searchProviders({
    searchCriteria: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.SearchProvidersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Patient, CandidApi.preEncounter.patients.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a patient.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.get(CandidApi.PatientId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.PatientId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">getHistory</a>(id) -> core.APIResponse<CandidApi.Patient[], CandidApi.preEncounter.patients.v1.getHistory.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a patient along with it's full history. The return list is ordered by version ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.getHistory(CandidApi.PatientId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.PatientId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Patient, CandidApi.preEncounter.patients.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a patient. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.update(CandidApi.PatientId("string"), "string", {
    name: {
        family: "string",
        given: ["string"],
        use: "USUAL",
        period: {},
        suffix: "string",
    },
    otherNames: [
        {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
    ],
    otherIdentifiers: [
        {
            value: "string",
            system: "string",
        },
    ],
    gender: "MAN",
    birthDate: "2023-01-15",
    socialSecurityNumber: "string",
    biologicalSex: "FEMALE",
    sexualOrientation: "HETEROSEXUAL",
    race: "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    ethnicity: "HISPANIC_OR_LATINO",
    disabilityStatus: "DISABLED",
    maritalStatus: "ANNULLED",
    deceased: "2024-01-15T09:30:00Z",
    multipleBirth: 1,
    primaryAddress: {
        use: "HOME",
        line: ["string"],
        city: "string",
        state: "string",
        postalCode: "string",
        country: "string",
        period: {},
    },
    otherAddresses: [
        {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
    ],
    primaryTelecom: {
        value: "string",
        use: "HOME",
    },
    otherTelecoms: [
        {
            value: "string",
            use: "HOME",
        },
    ],
    email: "string",
    electronicCommunicationOptIn: true,
    photo: "string",
    language: "string",
    externalProvenance: {
        externalId: "string",
        systemName: "string",
    },
    contacts: [
        {
            relationship: ["SELF"],
            name: {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
            telecoms: [
                {
                    value: "string",
                    use: "HOME",
                },
            ],
            addresses: [
                {
                    use: "HOME",
                    line: ["string"],
                    city: "string",
                    state: "string",
                    postalCode: "string",
                    country: "string",
                    period: {},
                },
            ],
            period: {},
            hipaaAuthorization: true,
        },
    ],
    generalPractitioners: [
        {
            name: {
                family: "string",
                given: ["string"],
                use: "USUAL",
                period: {},
                suffix: "string",
            },
            type: "PRIMARY",
            npi: "string",
            telecoms: [
                {
                    value: "string",
                    use: "HOME",
                },
            ],
            addresses: [],
            period: {},
            canonicalId: CandidApi.CanonicalProviderId("string"),
            fax: "string",
        },
    ],
    filingOrder: {
        coverages: [CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
    },
    nonInsurancePayers: [CandidApi.CanonicalNonInsurancePayerId("string")],
    nonInsurancePayerAssociations: [
        {
            id: CandidApi.CanonicalNonInsurancePayerId("string"),
        },
    ],
    guarantor: {
        name: {
            family: "string",
            given: ["string"],
            use: "USUAL",
            period: {},
            suffix: "string",
        },
        telecom: {
            value: "string",
            use: "HOME",
        },
        email: "string",
        birthDate: "2023-01-15",
        address: {
            use: "HOME",
            line: ["string"],
            city: "string",
            state: "string",
            postalCode: "string",
            country: "string",
            period: {},
        },
    },
    selfPay: true,
    authorizations: [
        {
            payerId: CandidApi.PayerId("string"),
            payerName: "string",
            additionalPayerInformation: {},
            authorizationNumber: "string",
            cptCode: "string",
            applyForAllCptCodes: true,
            units: "VISIT",
            quantity: 1,
            period: {},
            notes: "string",
        },
    ],
    referrals: [
        {
            provider: {
                name: {
                    family: "string",
                    given: ["string"],
                    use: "USUAL",
                    period: {},
                    suffix: "string",
                },
                type: "PRIMARY",
                npi: "string",
                telecoms: [
                    {
                        value: "string",
                        use: "HOME",
                    },
                ],
                addresses: [],
                period: {},
                canonicalId: CandidApi.CanonicalProviderId("string"),
                fax: "string",
            },
            referralNumber: "string",
        },
    ],
    primaryServiceFacilityId: "string",
    doNotInvoiceReason: "BANKRUPTCY",
    noteIds: [CandidApi.NoteId("string")],
    tagIds: [CandidApi.TagId("string")],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.PatientId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutablePatient`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">deactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.patients.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets a patient as deactivated. The path must contain the most recent version plus 1 to prevent race conditions. Deactivating historic versions is not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.deactivate(CandidApi.PatientId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.PatientId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">reactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.patients.v1.reactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the deactivated flag for a patient. The path must contain the most recent version plus 1 to prevent race conditions. Reactivating historic versions is not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.reactivate(CandidApi.PatientId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.PatientId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">search</a>({ ...params }) -> core.APIResponse<CandidApi.Patient[], CandidApi.preEncounter.patients.v1.search.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of Patients based on the search criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.search({
    mrn: "string",
    similarNameOrdering: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.PatientGetMultiRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">scan</a>({ ...params }) -> core.APIResponse<CandidApi.Patient[], CandidApi.preEncounter.patients.v1.scan.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Scans up to 100 patient updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.patients.v1.scan({
    since: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.patients.v1.PatientScanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PreEncounter Tags V1

<details><summary><code>client.preEncounter.tags.v1.<a href="/src/api/resources/preEncounter/resources/tags/resources/v1/client/Client.ts">get</a>(id) -> core.APIResponse<CandidApi.Tag, CandidApi.preEncounter.tags.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a tag by TagId.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.tags.v1.get(CandidApi.TagId("string"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.TagId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.tags.v1.<a href="/src/api/resources/preEncounter/resources/tags/resources/v1/client/Client.ts">getAll</a>({ ...params }) -> core.APIResponse<CandidApi.TagPage, CandidApi.preEncounter.tags.v1.getAll.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all tags. Defaults to page size of 1000.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.tags.v1.getAll({
    limit: 1,
    pageToken: CandidApi.PageToken("string"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.preEncounter.tags.v1.GetAllTagsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.tags.v1.<a href="/src/api/resources/preEncounter/resources/tags/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Tag, CandidApi.preEncounter.tags.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a new tag if it does not already exist, otherwise, returns the existing tag.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.tags.v1.create({
    value: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.MutableTag`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.tags.v1.<a href="/src/api/resources/preEncounter/resources/tags/resources/v1/client/Client.ts">update</a>(id, version, { ...params }) -> core.APIResponse<CandidApi.Tag, CandidApi.preEncounter.tags.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a tag. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.tags.v1.update(CandidApi.TagId("string"), "string", {
    value: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.TagId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.MutableTag`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.preEncounter.tags.v1.<a href="/src/api/resources/preEncounter/resources/tags/resources/v1/client/Client.ts">deactivate</a>(id, version) -> core.APIResponse<void, CandidApi.preEncounter.tags.v1.deactivate.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets a tag as deactivated. The path must contain the most recent version to prevent races.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preEncounter.tags.v1.deactivate(CandidApi.TagId("string"), "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `CandidApi.TagId`

</dd>
</dl>

<dl>
<dd>

**version:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V1.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Diagnoses

<details><summary><code>client.diagnoses.<a href="/src/api/resources/diagnoses/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.Diagnosis, CandidApi.diagnoses.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new diagnosis for an encounter

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagnoses.create({
    encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    name: "string",
    codeType: "ABF",
    code: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CandidApi.StandaloneDiagnosisCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Diagnoses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.diagnoses.<a href="/src/api/resources/diagnoses/client/Client.ts">update</a>(diagnosisId, { ...params }) -> core.APIResponse<CandidApi.Diagnosis, CandidApi.diagnoses.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the diagnosis record matching the provided `diagnosis_id`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagnoses.update(CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    name: "string",
    codeType: "ABF",
    code: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**diagnosisId:** `CandidApi.DiagnosisId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.DiagnosisUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Diagnoses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.diagnoses.<a href="/src/api/resources/diagnoses/client/Client.ts">delete</a>(diagnosisId) -> core.APIResponse<void, CandidApi.diagnoses.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the diagnosis record associated with the provided `diagnosis_id`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagnoses.delete(CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**diagnosisId:** `CandidApi.DiagnosisId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Diagnoses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceFacility

<details><summary><code>client.serviceFacility.<a href="/src/api/resources/serviceFacility/client/Client.ts">update</a>(serviceFacilityId, { ...params }) -> core.APIResponse<CandidApi.EncounterServiceFacility, CandidApi.serviceFacility.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceFacility.update(CandidApi.ServiceFacilityId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    organizationName: "Test Organization",
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**serviceFacilityId:** `CandidApi.ServiceFacilityId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.EncounterServiceFacilityUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceFacility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
