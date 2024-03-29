/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const CandidApiEnvironment = {
    Production: "https://api.joincandidhealth.com",
    Staging: "https://api-staging.joincandidhealth.com",
} as const;

export type CandidApiEnvironment = typeof CandidApiEnvironment.Production | typeof CandidApiEnvironment.Staging;
