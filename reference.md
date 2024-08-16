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
    states: CandidApi.State.Aa,
    contractStatus: CandidApi.ContractStatus.Pending,
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
    contractStatus: CandidApi.ContractStatus.Pending,
    authorizedSignatory: {},
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
            states: [CandidApi.State.Aa],
        },
    },
    contractStatus: CandidApi.ContractStatus.Pending,
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
            type: CandidApi.Primitive.String,
        },
        {
            key: "is_urgent_care",
            type: CandidApi.Primitive.Boolean,
        },
        {
            key: "bmi",
            type: CandidApi.Primitive.Double,
        },
        {
            key: "age",
            type: CandidApi.Primitive.Integer,
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
            type: CandidApi.Primitive.String,
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

This API is a wrapper around Change Healthcare's eligibility API. Below are some helpful documentation links:

-   [Change Healthcare - Guides: Contents of the Eligibility Request Body](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-request-body)
-   [Change Healthcare - Guides: Use "Bare Minimum" Eligibility Requests](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-bare-minimum-eligibility-requests)
-   [Change Healthcare - Guides: Contents of the Eligibility Response](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-response)
-   [Change Healthcare - Guides: Eligibility JSON-to-EDI API Contents](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-json-to-edi-api-contents)
-   [Change Healthcare - Guides: Eligibility Error Messages](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-error-messages)
-   [Change Healthcare - Guides: FAQ](https://developers.changehealthcare.com/eligibilityandclaims/docs/frequently-asked-questions)
-   [Change Healthcare - Guides: Eligibility FAQs](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-api-requests)
-   [Change Healthcare - Guides: Sandbox API Values and Test Responses](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-sandbox-api-values-and-test-responses)
-   [Change Healthcare - Guides: Sandbox Predefined Fields and Values](https://developers.changehealthcare.com/eligibilityandclaims/docs/sandbox-predefined-fields-and-values)
-   [Change Healthcare - Guides: Using Test Payers in the Sandbox](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-the-test-payers-in-the-sandbox-api)

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

**Availity has transitioned their GET endpoint to a POST endpoint. Candid has updated their pass-through integration to enable backwards compatibility for the GET endpoint so that customers do not have to immediately update their integrations.**

**Candid recommends integrations with the [POST endpoint](https://docs.joincandidhealth.com/api-reference/eligibility/v-2/submit-eligibility-check-availity-post) to ensure the best possible integration experience. Given the transition, Availity’s documentation will be out of sync with this endpoint.**

If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint

This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:

-   [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
-   [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)

A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)

-   Note Availity requires a free developer account to access this documentation.

Check connection status of Availity API and partners here:

-   [Availity Trading Partner Connection Status](https://www.availity.com/status/)
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

If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint

This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:

-   [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
-   [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)

A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)

-   Note Availity requires a free developer account to access this documentation.

Check connection status of Availity API and partners here:

-   [Availity Trading Partner Connection Status](https://www.availity.com/status/)
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
    claimStatus: CandidApi.ClaimStatus.BillerReceived,
    sort: CandidApi.EncounterSortOptions.CreatedAtAsc,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    dateOfServiceMin: "2019-08-24",
    dateOfServiceMax: "2019-08-25",
    primaryPayerNames: "Medicare,Medicaid",
    searchTerm: "doe",
    externalId: CandidApi.EncounterExternalId("123456"),
    diagnosesUpdatedSince: new Date("2019-08-24T14:15:22.000Z"),
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
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
    patient: {
        phoneNumbers: [
            {
                number: "1234567890",
                type: CandidApi.PhoneNumberType.Home,
            },
        ],
        phoneConsent: true,
        email: CandidApi.Email("johndoe@joincandidhealth.com"),
        emailConsent: true,
        externalId: "string",
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: CandidApi.Gender.Male,
    },
    billingProvider: {
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        taxId: "string",
        npi: "string",
        taxonomyCode: "string",
        firstName: "string",
        lastName: "string",
        organizationName: "string",
    },
    renderingProvider: {
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        npi: "string",
        taxonomyCode: "string",
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
            state: CandidApi.State.Ny,
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
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        qualifier: CandidApi.QualifierCode.Dq,
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
            state: CandidApi.State.Ny,
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
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
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
            emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
            groupNumber: "string",
            planName: "string",
            planType: CandidApi.SourceOfPaymentCode.SelfPay,
            insuranceType: CandidApi.InsuranceTypeCode.C01,
        },
        patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: CandidApi.Gender.Male,
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
            emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
            groupNumber: "string",
            planName: "string",
            planType: CandidApi.SourceOfPaymentCode.SelfPay,
            insuranceType: CandidApi.InsuranceTypeCode.C01,
        },
        patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: CandidApi.Gender.Male,
    },
    diagnoses: [
        {
            name: "string",
            codeType: CandidApi.DiagnosisTypeCode.Abf,
            code: "string",
        },
    ],
    clinicalNotes: [
        {
            category: CandidApi.NoteCategory.Clinical,
            notes: [{}],
        },
    ],
    billingNotes: [
        {
            text: "string",
        },
    ],
    placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
    patientHistories: [
        {
            category: CandidApi.PatientHistoryCategoryEnum.PresentIllness,
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
            modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
            procedureCode: "string",
            quantity: CandidApi.Decimal("string"),
            units: CandidApi.ServiceLineUnits.Mj,
            chargeAmountCents: 1,
            diagnosisPointers: [1],
            drugIdentification: {},
            placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
            description: "string",
            dateOfService: "2023-01-15",
            endDateOfService: "2023-01-15",
            referringProvider: {
                npi: "string",
                taxonomyCode: "string",
                address: {
                    address1: "123 Main St",
                    address2: "Apt 1",
                    city: "New York",
                    state: CandidApi.State.Ny,
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
                    state: CandidApi.State.Ny,
                    zipCode: "10001",
                    zipPlusFourCode: "1234",
                },
                qualifier: CandidApi.QualifierCode.Dq,
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
                    state: CandidApi.State.Ny,
                    zipCode: "10001",
                    zipPlusFourCode: "1234",
                },
                firstName: "string",
                lastName: "string",
                organizationName: "string",
            },
            orderingProvider: {
                npi: "string",
                taxonomyCode: "string",
                address: {
                    address1: "123 Main St",
                    address2: "Apt 1",
                    city: "New York",
                    state: CandidApi.State.Ny,
                    zipCode: "10001",
                    zipPlusFourCode: "1234",
                },
                firstName: "string",
                lastName: "string",
                organizationName: "string",
            },
        },
    ],
    guarantor: {
        phoneNumbers: [
            {
                number: "1234567890",
                type: CandidApi.PhoneNumberType.Home,
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
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
    },
    externalClaimSubmission: {
        claimCreatedAt: new Date("2023-01-01T12:00:00.000Z"),
        patientControlNumber: "PATIENT_CONTROL_NUMBER",
        submissionRecords: [
            {
                submittedAt: new Date("2023-01-01T13:00:00.000Z"),
                claimFrequencyCode: CandidApi.ClaimFrequencyTypeCode.Original,
                payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
                intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Electronic,
            },
            {
                submittedAt: new Date("2023-01-04T12:00:00.000Z"),
                claimFrequencyCode: CandidApi.ClaimFrequencyTypeCode.Replacement,
                payerResponsibility: CandidApi.ClaimSubmissionPayerResponsibilityType.Primary,
                intendedSubmissionMedium: CandidApi.IntendedSubmissionMedium.Paper,
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
    priorAuthorizationNumber: CandidApi.PriorAuthorizationNumber("string"),
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
    },
    interventions: [
        {
            name: "Physical Therapy Session",
            category: CandidApi.InterventionCategory.Lifestyle,
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
                    codeType: CandidApi.LabCodeType.Quest,
                },
            ],
        },
    ],
    payToAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: CandidApi.State.Ny,
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    synchronicity: CandidApi.SynchronicityType.Synchronous,
    billableStatus: CandidApi.BillableStatusType.Billable,
    responsibleParty: CandidApi.ResponsiblePartyType.InsurancePay,
    additionalInformation: "string",
    serviceAuthorizationExceptionCode: CandidApi.ServiceAuthorizationExceptionCode.C1,
    admissionDate: "2023-01-15",
    dischargeDate: "2023-01-15",
    onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
    lastMenstrualPeriodDate: "2023-01-15",
    delayReasonCode: CandidApi.DelayReasonCode.C1,
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
    priorAuthorizationNumber: CandidApi.PriorAuthorizationNumber("string"),
    externalId: CandidApi.EncounterExternalId("string"),
    dateOfService: "2023-01-15",
    diagnosisIds: [CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
    tagIds: [CandidApi.TagId("string")],
    clinicalNotes: [
        {
            category: CandidApi.NoteCategory.Clinical,
            notes: [{}],
        },
    ],
    payToAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: CandidApi.State.Ny,
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    billableStatus: CandidApi.BillableStatusType.Billable,
    responsibleParty: CandidApi.ResponsiblePartyType.InsurancePay,
    providerAcceptsAssignment: true,
    benefitsAssignedToProvider: true,
    synchronicity: CandidApi.SynchronicityType.Synchronous,
    placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
    placeOfServiceCodeAsSubmitted: CandidApi.FacilityTypeCode.Pharmacy,
    appointmentType: "string",
    endDateOfService: "2023-01-15",
    subscriberPrimary: {
        insuranceCard: {
            memberId: "string",
            payerName: "string",
            payerId: "string",
            rxBin: "string",
            rxPcn: "string",
            imageUrlFront: "string",
            imageUrlBack: "string",
            emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
            groupNumber: "string",
            planName: "string",
            planType: CandidApi.SourceOfPaymentCode.SelfPay,
            insuranceType: CandidApi.InsuranceTypeCode.C01,
        },
        patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: CandidApi.Gender.Male,
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
            emrPayerCrosswalk: CandidApi.EmrPayerCrosswalk.Healthie,
            groupNumber: "string",
            planName: "string",
            planType: CandidApi.SourceOfPaymentCode.SelfPay,
            insuranceType: CandidApi.InsuranceTypeCode.C01,
        },
        patientRelationshipToSubscriberCode: CandidApi.PatientRelationshipToInsuredCodeAll.Spouse,
        dateOfBirth: "2023-01-15",
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        firstName: "string",
        lastName: "string",
        gender: CandidApi.Gender.Male,
    },
    additionalInformation: "string",
    serviceAuthorizationExceptionCode: CandidApi.ServiceAuthorizationExceptionCode.C1,
    admissionDate: "2023-01-15",
    dischargeDate: "2023-01-15",
    onsetOfCurrentIllnessOrSymptomDate: "2023-01-15",
    lastMenstrualPeriodDate: "2023-01-15",
    delayReasonCode: CandidApi.DelayReasonCode.C1,
    patientAuthorizedRelease: true,
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
    subscriberInsuranceType: CandidApi.InsuranceTypeCode.C01,
    subscriberPlanName: "string",
    billingProviderNpi: "string",
    billingProviderTin: "string",
    renderingProviderNpi: "string",
    contractedState: CandidApi.State.Aa,
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
        serviceType: CandidApi.ServiceType.NewPatientVideoAppt,
        placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
        subscriberInformation: {},
        patientAddress: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
        billingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        organizationServiceFacilityId: CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
        dateOfService: "2023-01-15",
    }
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
    serviceType: CandidApi.ServiceType.NewPatientVideoAppt,
    placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
    subscriberInformation: {},
    patientAddress: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: CandidApi.State.Ny,
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
caller will receive a 422 response. If the file has already been generated, it will be served. Please email
our [Support team](mailto:support@joincandidhealth.com) with any data requests outside of these stated guarantees.

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
    CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
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
    states: CandidApi.State.Aa,
    zipCodes: "string",
    licenseTypes: CandidApi.LicenseType.Md,
    facilityTypeCodes: CandidApi.FacilityTypeCode.Pharmacy,
    networkTypes: CandidApi.NetworkType.Ppo,
    cptCode: "string",
    modifiers: CandidApi.ProcedureModifier.TwentyTwo,
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
    pivotDimension: CandidApi.DimensionName.PayerUuid,
    payerUuid: CandidApi.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    organizationBillingProviderId: CandidApi.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    states: CandidApi.State.Aa,
    zipCodes: "string",
    licenseTypes: CandidApi.LicenseType.Md,
    facilityTypeCodes: CandidApi.FacilityTypeCode.Pharmacy,
    networkTypes: CandidApi.NetworkType.Ppo,
    cptCode: "string",
    modifiers: CandidApi.ProcedureModifier.TwentyTwo,
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
                states: new Set([CandidApi.State.Aa]),
                zipCodes: new Set(["string"]),
                licenseTypes: new Set([CandidApi.LicenseType.Md]),
                facilityTypeCodes: new Set([CandidApi.FacilityTypeCode.Pharmacy]),
                networkTypes: new Set([CandidApi.NetworkType.Ppo]),
                cptCode: "string",
                modifiers: new Set([CandidApi.ProcedureModifier.TwentyTwo]),
            },
            entries: [
                {
                    startDate: "2024-4-11",
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
            type: CandidApi.PhoneNumberType.Home,
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
        state: CandidApi.State.Ny,
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
        state: CandidApi.State.Ny,
        zipCode: "10001",
        zipPlusFourCode: "1234",
    },
    phoneNumbers: [
        {
            number: "1234567890",
            type: CandidApi.PhoneNumberType.Home,
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

**request:** `CandidApi.guarantor.v1.GuarantorUpdate`

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
    items: [{}],
    status: CandidApi.InvoiceStatus.Draft,
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
    status: CandidApi.InvoiceStatus.Draft,
    limit: 1,
    sort: CandidApi.InvoiceSortField.CreatedAt,
    sortDirection: CandidApi.SortDirection.Asc,
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
    status: CandidApi.InvoiceStatus.Draft,
    note: "string",
    dueDate: "2023-01-15",
    items: {
        updateType: CandidApi.InvoiceItemUpdateType.Append,
        items: [{}],
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
    payee: {},
    postDate: "2023-01-15",
    checkNumber: "string",
    checkDate: "2023-01-15",
    note: "string",
    claims: {
        "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32": [{}],
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
    CandidApi.InsuranceAdjudicationId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
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
    sort: CandidApi.InsurancePaymentSortField.AmountCents,
    sortDirection: CandidApi.SortDirection.Asc,
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

<details><summary><code>client.insurancePayments.v1.<a href="/src/api/resources/insurancePayments/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.InsurancePayment, CandidApi.insurancePayments.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new insurance payment record and returns the newly created `InsurancePayment` object. This endpoint
should only be used for insurance payments that do not have a corresponding ERA (for example: a settlement check
from a payer). If the payment is an ERA, then you should used the insurance-adjudications API.

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
await client.insurancePayments.v1.create({
    payerIdentifier: {
        type: "payer_info",
    },
    amountCents: 1,
    paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    paymentNote: "string",
    allocations: [{}],
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

**request:** `CandidApi.InsurancePaymentCreate`

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

<details><summary><code>client.insurancePayments.v1.<a href="/src/api/resources/insurancePayments/resources/v1/client/Client.ts">update</a>(insurancePaymentId, { ...params }) -> core.APIResponse<CandidApi.InsurancePayment, CandidApi.insurancePayments.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the patient payment record matching the provided insurance_payment_id. If updating the payment amount,
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
await client.insurancePayments.v1.update(CandidApi.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    paymentNote: {
        type: "set",
        value: "string",
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

**insurancePaymentId:** `CandidApi.InsurancePaymentId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.insurancePayments.v1.InsurancePaymentUpdate`

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

<details><summary><code>client.insurancePayments.v1.<a href="/src/api/resources/insurancePayments/resources/v1/client/Client.ts">delete</a>(insurancePaymentId) -> core.APIResponse<void, CandidApi.insurancePayments.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the insurance payment record matching the provided `insurance_payment_id`.
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
await client.insurancePayments.v1.delete(CandidApi.InsurancePaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
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
    sort: CandidApi.InsuranceRefundSortField.AmountCents,
    sortDirection: CandidApi.SortDirection.Asc,
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
    refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    refundNote: "string",
    allocations: [{}],
    refundReason: CandidApi.RefundReason.Overcharged,
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
    refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    refundNote: {
        type: "set",
        value: "string",
    },
    refundReason: {
        type: "set",
        value: CandidApi.RefundReason.Overcharged,
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
    CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569")
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
    status: CandidApi.ServiceFacilityStatus.Active,
    operationalStatus: CandidApi.ServiceFacilityOperationalStatus.Closed,
    mode: CandidApi.ServiceFacilityMode.Instance,
    type: CandidApi.ServiceFacilityType.DiagnosticsOrTherapeuticsUnit,
    physicalType: CandidApi.ServiceFacilityPhysicalType.Site,
    telecoms: ["555-555-5555"],
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: CandidApi.State.Ny,
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
        status: CandidApi.ServiceFacilityStatus.Active,
        operationalStatus: CandidApi.ServiceFacilityOperationalStatus.Closed,
        mode: CandidApi.ServiceFacilityMode.Instance,
        type: CandidApi.ServiceFacilityType.DiagnosticsOrTherapeuticsUnit,
        physicalType: CandidApi.ServiceFacilityPhysicalType.Site,
        telecoms: ["555-555-5555"],
        address: {
            address1: "123 Main St",
            address2: "Apt 1",
            city: "New York",
            state: CandidApi.State.Ny,
            zipCode: "10001",
            zipPlusFourCode: "1234",
        },
    }
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
    CandidApi.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569")
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
    sort: CandidApi.OrganizationProviderSortOptions.ProviderNameAsc,
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
    providerType: CandidApi.ProviderType.Individual,
    taxId: "string",
    taxonomyCode: "string",
    licenseType: CandidApi.LicenseType.Md,
    addresses: [
        {
            address: {
                address1: "123 Main St",
                address2: "Apt 1",
                city: "New York",
                state: CandidApi.State.Ny,
                zipCode: "10001",
                zipPlusFourCode: "1234",
            },
            addressType: CandidApi.AddressType.Default,
        },
    ],
    employmentStartDate: "2023-01-15",
    employmentTerminationDate: "2023-01-15",
    qualifications: [{}],
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
    providerType: CandidApi.ProviderType.Individual,
    taxId: "string",
    taxonomyCode: "string",
    licenseType: CandidApi.LicenseType.Md,
    addresses: [
        {
            address: {
                address1: "123 Main St",
                address2: "Apt 1",
                city: "New York",
                state: CandidApi.State.Ny,
                zipCode: "10001",
                zipPlusFourCode: "1234",
            },
            addressType: CandidApi.AddressType.Default,
        },
    ],
    employmentStartDate: CandidApi.Date_("string"),
    employmentTerminationDate: CandidApi.Date_("string"),
    qualifications: [
        {
            type: "add",
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
    sources: CandidApi.PatientTransactionSource.ManualEntry,
    sort: CandidApi.PatientPaymentSortField.PaymentSource,
    sortDirection: CandidApi.SortDirection.Asc,
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
    paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
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
    paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
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
    sources: CandidApi.PatientTransactionSource.ManualEntry,
    sort: CandidApi.PatientRefundSortField.RefundSource,
    sortDirection: CandidApi.SortDirection.Asc,
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
    refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
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
    refundReason: CandidApi.RefundReason.Overcharged,
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
    refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
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
        value: CandidApi.RefundReason.Overcharged,
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
    modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
    chargeAmountCents: 1,
    diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    denialReason: {},
    placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
    procedureCode: "string",
    quantity: CandidApi.Decimal("string"),
    units: CandidApi.ServiceLineUnits.Mj,
    claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    description: "string",
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
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
    modifiers: [CandidApi.ProcedureModifier.TwentyTwo],
    chargeAmountCents: 1,
    diagnosisIdZero: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdOne: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdTwo: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    diagnosisIdThree: CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    denialReason: {},
    placeOfServiceCode: CandidApi.FacilityTypeCode.Pharmacy,
    units: CandidApi.ServiceLineUnits.Mj,
    procedureCode: "string",
    quantity: CandidApi.Decimal("string"),
    description: "string",
    dateOfService: "2023-01-15",
    endDateOfService: "2023-01-15",
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
    status: CandidApi.TaskStatus.Finished,
    taskType: CandidApi.TaskType.CustomerDataRequest,
    categories: "string",
    updatedSince: new Date("2024-01-15T09:30:00.000Z"),
    encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    searchTerm: "string",
    assignedToId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    dateOfServiceMin: "2023-01-15",
    dateOfServiceMax: "2023-01-15",
    billingProviderNpi: "string",
    sort: CandidApi.TaskSortOptions.UpdatedAtAsc,
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
    taskType: CandidApi.TaskType.CustomerDataRequest,
    description: "string",
    blocksClaimSubmission: true,
    assigneeUserId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    category: CandidApi.TaskCategory.Other,
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
    status: CandidApi.TaskStatus.Finished,
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

## ThirdPartyPayerPayments V1

<details><summary><code>client.thirdPartyPayerPayments.v1.<a href="/src/api/resources/thirdPartyPayerPayments/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerPaymentsPage, CandidApi.thirdPartyPayerPayments.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all third party payer payments

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
await client.thirdPartyPayerPayments.v1.getMulti({
    limit: 1,
    thirdPartyPayerId: CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    checkNumber: "string",
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: CandidApi.ThirdPartyPayerPaymentSortField.AmountCents,
    sortDirection: CandidApi.SortDirection.Asc,
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

**request:** `CandidApi.thirdPartyPayerPayments.v1.GetMultiThirdPartyPayerPaymentRequest`

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

<details><summary><code>client.thirdPartyPayerPayments.v1.<a href="/src/api/resources/thirdPartyPayerPayments/resources/v1/client/Client.ts">get</a>(thirdPartyPayerPaymentId) -> core.APIResponse<CandidApi.ThirdPartyPayerPayment, CandidApi.thirdPartyPayerPayments.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created third party payer payment by its `third_party_payer_payment_id`.

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
await client.thirdPartyPayerPayments.v1.get(CandidApi.ThirdPartyPayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
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

**thirdPartyPayerPaymentId:** `CandidApi.ThirdPartyPayerPaymentId`

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

<details><summary><code>client.thirdPartyPayerPayments.v1.<a href="/src/api/resources/thirdPartyPayerPayments/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerPayment, CandidApi.thirdPartyPayerPayments.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayerPayments.v1.create({
    thirdPartyPayerId: CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    amountCents: 1,
    paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    paymentNote: "string",
    checkNumber: "string",
    allocations: [{}],
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

**request:** `CandidApi.ThirdPartyPayerPaymentCreate`

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

<details><summary><code>client.thirdPartyPayerPayments.v1.<a href="/src/api/resources/thirdPartyPayerPayments/resources/v1/client/Client.ts">update</a>(thirdPartyPayerPaymentId, { ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerPayment, CandidApi.thirdPartyPayerPayments.v1.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayerPayments.v1.update(
    CandidApi.ThirdPartyPayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        paymentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
        paymentNote: {
            type: "set",
            value: "string",
        },
        invoiceId: {
            type: "set",
            value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
    }
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

**thirdPartyPayerPaymentId:** `CandidApi.ThirdPartyPayerPaymentId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.thirdPartyPayerPayments.v1.UpdateThirdPartyPayerPaymentRequest`

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

<details><summary><code>client.thirdPartyPayerPayments.v1.<a href="/src/api/resources/thirdPartyPayerPayments/resources/v1/client/Client.ts">delete</a>(thirdPartyPayerPaymentId) -> core.APIResponse<void, CandidApi.thirdPartyPayerPayments.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the third party payer payment record matching the provided `third_party_payer_payment_id`.

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
await client.thirdPartyPayerPayments.v1.delete(
    CandidApi.ThirdPartyPayerPaymentId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
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

**thirdPartyPayerPaymentId:** `CandidApi.ThirdPartyPayerPaymentId`

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

## ThirdPartyPayerRefunds V1

<details><summary><code>client.thirdPartyPayerRefunds.v1.<a href="/src/api/resources/thirdPartyPayerRefunds/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerRefundsPage, CandidApi.thirdPartyPayerRefunds.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all third party payer refunds satisfying the search criteria

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
await client.thirdPartyPayerRefunds.v1.getMulti({
    limit: 1,
    thirdPartyPayerId: CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    checkNumber: "string",
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    sort: CandidApi.ThirdPartyPayerRefundSortField.AmountCents,
    sortDirection: CandidApi.SortDirection.Asc,
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

**request:** `CandidApi.thirdPartyPayerRefunds.v1.GetMultiThirdPartyPayerRefundsRequest`

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

<details><summary><code>client.thirdPartyPayerRefunds.v1.<a href="/src/api/resources/thirdPartyPayerRefunds/resources/v1/client/Client.ts">get</a>(thirdPartyPayerRefundId) -> core.APIResponse<CandidApi.ThirdPartyPayerRefund, CandidApi.thirdPartyPayerRefunds.v1.get.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a previously created third party payer refund by its `third_party_payer_refund_id`.

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
await client.thirdPartyPayerRefunds.v1.get(CandidApi.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
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

**thirdPartyPayerRefundId:** `CandidApi.ThirdPartyPayerRefundId`

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

<details><summary><code>client.thirdPartyPayerRefunds.v1.<a href="/src/api/resources/thirdPartyPayerRefunds/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerRefund, CandidApi.thirdPartyPayerRefunds.v1.create.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new third party payer refund record and returns the newly created `ThirdPartyPayerRefund` object.
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
await client.thirdPartyPayerRefunds.v1.create({
    thirdPartyPayerId: CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    invoiceId: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    amountCents: 1,
    refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    refundNote: "string",
    allocations: [{}],
    refundReason: CandidApi.RefundReason.Overcharged,
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

**request:** `CandidApi.ThirdPartyPayerRefundCreate`

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

<details><summary><code>client.thirdPartyPayerRefunds.v1.<a href="/src/api/resources/thirdPartyPayerRefunds/resources/v1/client/Client.ts">update</a>(thirdPartyPayerRefundId, { ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerRefund, CandidApi.thirdPartyPayerRefunds.v1.update.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the third party payer refund record matching the provided third_party_payer_refund_id. If updating the refund amount,
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
await client.thirdPartyPayerRefunds.v1.update(
    CandidApi.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
    {
        refundTimestamp: new Date("2024-01-15T09:30:00.000Z"),
        refundNote: {
            type: "set",
            value: "string",
        },
        refundReason: {
            type: "set",
            value: CandidApi.RefundReason.Overcharged,
        },
        invoiceId: {
            type: "set",
            value: CandidApi.InvoiceId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
        },
    }
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

**thirdPartyPayerRefundId:** `CandidApi.ThirdPartyPayerRefundId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.thirdPartyPayerRefunds.v1.ThirdPartyPayerRefundUpdate`

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

<details><summary><code>client.thirdPartyPayerRefunds.v1.<a href="/src/api/resources/thirdPartyPayerRefunds/resources/v1/client/Client.ts">delete</a>(thirdPartyPayerRefundId) -> core.APIResponse<void, CandidApi.thirdPartyPayerRefunds.v1.delete.Error></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the third party payer refund record matching the provided `third_party_payer_refund_id`.

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
await client.thirdPartyPayerRefunds.v1.delete(
    CandidApi.ThirdPartyPayerRefundId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
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

**thirdPartyPayerRefundId:** `CandidApi.ThirdPartyPayerRefundId`

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

## ThirdPartyPayers V1

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">create</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayer, CandidApi.thirdPartyPayers.v1.create.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.create({
    name: "string",
    description: "string",
    category: "string",
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

**request:** `CandidApi.CreateThirdPartyPayerRequest`

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

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">toggleEnablement</a>(thirdPartyPayerId, { ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayer, CandidApi.thirdPartyPayers.v1.toggleEnablement.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.toggleEnablement(CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    enabled: true,
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

**thirdPartyPayerId:** `CandidApi.ThirdPartyPayerId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ToggleThirdPartyPayerEnablementRequest`

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

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">getMulti</a>({ ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayerPage, CandidApi.thirdPartyPayers.v1.getMulti.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.getMulti({
    name: "string",
    category: "string",
    enabled: true,
    sort: CandidApi.ThirdPartyPayerSortField.Name,
    sortDirection: CandidApi.SortDirection.Asc,
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

**request:** `CandidApi.thirdPartyPayers.v1.GetMultiThirdPartyPayersRequest`

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

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">get</a>(thirdPartyPayerId) -> core.APIResponse<CandidApi.ThirdPartyPayer, CandidApi.thirdPartyPayers.v1.get.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.get(CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
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

**thirdPartyPayerId:** `CandidApi.ThirdPartyPayerId`

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

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">update</a>(thirdPartyPayerId, { ...params }) -> core.APIResponse<CandidApi.ThirdPartyPayer, CandidApi.thirdPartyPayers.v1.update.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.update(CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
    name: "string",
    description: {
        type: "remove",
    },
    category: {
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

**thirdPartyPayerId:** `CandidApi.ThirdPartyPayerId`

</dd>
</dl>

<dl>
<dd>

**request:** `CandidApi.ThirdPartyPayerUpdateRequest`

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

<details><summary><code>client.thirdPartyPayers.v1.<a href="/src/api/resources/thirdPartyPayers/resources/v1/client/Client.ts">delete</a>(thirdPartyPayerId) -> core.APIResponse<void, CandidApi.thirdPartyPayers.v1.delete.Error></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thirdPartyPayers.v1.delete(CandidApi.ThirdPartyPayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"));
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

**thirdPartyPayerId:** `CandidApi.ThirdPartyPayerId`

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
    sort: CandidApi.WriteOffSortField.AmountCents,
    sortDirection: CandidApi.SortDirection.Asc,
    pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
    accountTypes: CandidApi.AccountType.Patient,
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
            writeOffTimestamp: new Date("2024-01-15T09:30:00.000Z"),
            writeOffNote: "string",
            writeOffReason: CandidApi.PatientWriteOffReason.SmallBalance,
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
    status: CandidApi.CoverageStatus.Active,
    subscriber: {
        name: {},
        dateOfBirth: "2023-01-15",
        biologicalSex: CandidApi.Sex.Female,
    },
    relationship: CandidApi.Relationship.Self,
    patient: CandidApi.PatientId("string"),
    insurancePlan: {
        memberId: "string",
        payerId: CandidApi.PayerId("string"),
        payerName: "string",
        groupNumber: "string",
        name: "string",
        planType: CandidApi.NetworkType.SelfPay,
        type: CandidApi.InsuranceTypeCode.C01,
        period: {},
        insuranceCardImageLocator: "string",
    },
    verified: true,
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

Updates a Coverage. The path must contain the most recent version to prevent races. Updating historic versions is not supported.

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
    status: CandidApi.CoverageStatus.Active,
    subscriber: {
        name: {},
        dateOfBirth: "2023-01-15",
        biologicalSex: CandidApi.Sex.Female,
    },
    relationship: CandidApi.Relationship.Self,
    patient: CandidApi.PatientId("string"),
    insurancePlan: {
        memberId: "string",
        payerId: CandidApi.PayerId("string"),
        payerName: "string",
        groupNumber: "string",
        name: "string",
        planType: CandidApi.NetworkType.SelfPay,
        type: CandidApi.InsuranceTypeCode.C01,
        period: {},
        insuranceCardImageLocator: "string",
    },
    verified: true,
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

returns a list of Coverages based on the search criteria

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

**request:** `CandidApi.preEncounter.coverages.v1.GetAllCoveragesRequest`

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

Scans up to 100 coverage updates. The since query parameter is inclusive, and the result list is ordered by updatedAt descending.

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
    since: new Date("2024-01-15T09:30:00.000Z"),
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
    name: {},
    otherNames: [{}],
    gender: CandidApi.Gender.Man,
    birthDate: "2023-01-15",
    socialSecurityNumber: "string",
    biologicalSex: CandidApi.Sex.Female,
    sexualOrientation: CandidApi.SexualOrientation.Heterosexual,
    race: CandidApi.Race.AmericanIndianOrAlaskaNative,
    ethnicity: CandidApi.Ethnicity.HispanicOrLatino,
    disabilityStatus: CandidApi.DisabilityStatus.Disabled,
    maritalStatus: CandidApi.MaritalStatus.Annulled,
    deceased: new Date("2024-01-15T09:30:00.000Z"),
    multipleBirth: 1,
    primaryAddress: {},
    otherAddresses: [{}],
    primaryTelecom: {},
    otherTelecoms: [{}],
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
            relationship: [CandidApi.Relationship.Self],
            name: {},
            telecoms: [{}],
            addresses: [{}],
            period: {},
        },
    ],
    generalPractitioners: [{}],
    filingOrder: {
        coverages: [CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
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

Updates a patient. The path must contain the most recent version to prevent races. Updating historic versions is not supported.

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
    name: {},
    otherNames: [{}],
    gender: CandidApi.Gender.Man,
    birthDate: "2023-01-15",
    socialSecurityNumber: "string",
    biologicalSex: CandidApi.Sex.Female,
    sexualOrientation: CandidApi.SexualOrientation.Heterosexual,
    race: CandidApi.Race.AmericanIndianOrAlaskaNative,
    ethnicity: CandidApi.Ethnicity.HispanicOrLatino,
    disabilityStatus: CandidApi.DisabilityStatus.Disabled,
    maritalStatus: CandidApi.MaritalStatus.Annulled,
    deceased: new Date("2024-01-15T09:30:00.000Z"),
    multipleBirth: 1,
    primaryAddress: {},
    otherAddresses: [{}],
    primaryTelecom: {},
    otherTelecoms: [{}],
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
            relationship: [CandidApi.Relationship.Self],
            name: {},
            telecoms: [{}],
            addresses: [{}],
            period: {},
        },
    ],
    generalPractitioners: [{}],
    filingOrder: {
        coverages: [CandidApi.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
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

Sets a patient as deactivated. The path must contain the most recent version to prevent races. Dactivating historic versions is not supported. Subsequent updates via PUT to the patient will "reactivate" the patient and set the deactivated flag to false.

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

<details><summary><code>client.preEncounter.patients.v1.<a href="/src/api/resources/preEncounter/resources/patients/resources/v1/client/Client.ts">search</a>({ ...params }) -> core.APIResponse<CandidApi.Patient[], CandidApi.preEncounter.patients.v1.search.Error></code></summary>
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
await client.preEncounter.patients.v1.search({
    nameContains: "string",
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

**request:** `CandidApi.preEncounter.patients.v1.PatientsSearchRequest`

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

Scans up to 100 patient updates. The since query parameter is inclusive, and the result list is ordered by updatedAt descending.

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
    since: new Date("2024-01-15T09:30:00.000Z"),
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
    organizationName: "string",
    npi: "string",
    address: {
        address1: "123 Main St",
        address2: "Apt 1",
        city: "New York",
        state: CandidApi.State.Ny,
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
