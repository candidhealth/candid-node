# candid-node: A [Candid Health](https://joincandidhealth.com) TypeScript client

[![npm](https://img.shields.io/npm/v/candidhealth)](https://www.npmjs.com/package/candidhealth)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/?utm_source=candidhealth/candid-node/readme)

## Installation

```bash
yarn add candidhealth   # or npm install, pnpm i, etc.
```

## Usage

Instantiate and use the client with the following:

```typescript
import { CandidApiClient } from "candidhealth";

const candidApi = new CandidApiClient({ clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" });
await candidApi.auth.v2.getToken({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { CandidApi } from "candidhealth";

const request: CandidApi.AuthGetTokenRequest = {
    ...
};
const response = await candidApi.getToken(request);
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { CandidApiError } from "candidhealth";

try {
    await candidApi.getToken(...);
} catch (err) {
    if (err instanceof CandidApiError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retriable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

-   [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
-   [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
-   [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await candidApi.getToken(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await candidApi.getToken(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

## Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await candidApi.getToken(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

## Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

-   Node.js 18+
-   Vercel
-   Cloudflare Workers
-   Deno v1.25+
-   Bun 1.0+
-   React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { CandidApiClient } from "candidhealth";

const candidApi = new CandidApiClient({
    ...
    fetcher: // provide your implementation here
});
```
