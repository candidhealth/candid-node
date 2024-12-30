/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../../index";

/**
 * @example
 *     {
 *         skipDuplicateCheck: true,
 *         body: {
 *             mrn: "string",
 *             name: {
 *                 family: "string",
 *                 given: ["string"],
 *                 use: CandidApi.preEncounter.NameUse.Usual,
 *                 period: {}
 *             },
 *             otherNames: [{
 *                     family: "string",
 *                     given: ["string"],
 *                     use: CandidApi.preEncounter.NameUse.Usual,
 *                     period: {}
 *                 }],
 *             gender: CandidApi.preEncounter.Gender.Man,
 *             birthDate: "2023-01-15",
 *             socialSecurityNumber: "string",
 *             biologicalSex: CandidApi.preEncounter.Sex.Female,
 *             sexualOrientation: CandidApi.preEncounter.SexualOrientation.Heterosexual,
 *             race: CandidApi.preEncounter.Race.AmericanIndianOrAlaskaNative,
 *             ethnicity: CandidApi.preEncounter.Ethnicity.HispanicOrLatino,
 *             disabilityStatus: CandidApi.preEncounter.DisabilityStatus.Disabled,
 *             maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
 *             deceased: new Date("2024-01-15T09:30:00.000Z"),
 *             multipleBirth: 1,
 *             primaryAddress: {
 *                 use: CandidApi.preEncounter.AddressUse.Home,
 *                 line: ["string"],
 *                 city: "string",
 *                 state: "string",
 *                 postalCode: "string",
 *                 country: "string",
 *                 period: {}
 *             },
 *             otherAddresses: [{
 *                     use: CandidApi.preEncounter.AddressUse.Home,
 *                     line: ["string"],
 *                     city: "string",
 *                     state: "string",
 *                     postalCode: "string",
 *                     country: "string",
 *                     period: {}
 *                 }],
 *             primaryTelecom: {
 *                 value: "string",
 *                 use: CandidApi.preEncounter.ContactPointUse.Home
 *             },
 *             otherTelecoms: [{
 *                     value: "string",
 *                     use: CandidApi.preEncounter.ContactPointUse.Home
 *                 }],
 *             email: "string",
 *             electronicCommunicationOptIn: true,
 *             photo: "string",
 *             language: "string",
 *             externalProvenance: {
 *                 externalId: "string",
 *                 systemName: "string"
 *             },
 *             contacts: [{
 *                     relationship: [CandidApi.preEncounter.Relationship.Self],
 *                     name: {
 *                         family: "string",
 *                         given: ["string"],
 *                         use: CandidApi.preEncounter.NameUse.Usual,
 *                         period: {}
 *                     },
 *                     telecoms: [{
 *                             value: "string",
 *                             use: CandidApi.preEncounter.ContactPointUse.Home
 *                         }],
 *                     addresses: [{
 *                             use: CandidApi.preEncounter.AddressUse.Home,
 *                             line: ["string"],
 *                             city: "string",
 *                             state: "string",
 *                             postalCode: "string",
 *                             country: "string",
 *                             period: {}
 *                         }],
 *                     period: {},
 *                     hipaaAuthorization: true
 *                 }],
 *             generalPractitioners: [{
 *                     name: {
 *                         family: "string",
 *                         given: ["string"],
 *                         use: CandidApi.preEncounter.NameUse.Usual,
 *                         period: {}
 *                     },
 *                     type: CandidApi.preEncounter.ExternalProviderType.Primary,
 *                     npi: "string",
 *                     telecoms: [{
 *                             value: "string",
 *                             use: CandidApi.preEncounter.ContactPointUse.Home
 *                         }],
 *                     addresses: [],
 *                     period: {},
 *                     canonicalId: CandidApi.preEncounter.CanonicalProviderId("string")
 *                 }],
 *             filingOrder: {
 *                 coverages: [CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]
 *             },
 *             nonInsurancePayers: [CandidApi.preEncounter.CanonicalNonInsurancePayerId("string")],
 *             nonInsurancePayerAssociations: [{
 *                     id: CandidApi.preEncounter.CanonicalNonInsurancePayerId("string")
 *                 }],
 *             guarantor: {
 *                 name: {
 *                     family: "string",
 *                     given: ["string"],
 *                     use: CandidApi.preEncounter.NameUse.Usual,
 *                     period: {}
 *                 },
 *                 telecom: {
 *                     value: "string",
 *                     use: CandidApi.preEncounter.ContactPointUse.Home
 *                 },
 *                 email: "string",
 *                 birthDate: "2023-01-15",
 *                 address: {
 *                     use: CandidApi.preEncounter.AddressUse.Home,
 *                     line: ["string"],
 *                     city: "string",
 *                     state: "string",
 *                     postalCode: "string",
 *                     country: "string",
 *                     period: {}
 *                 }
 *             },
 *             selfPay: true,
 *             authorizations: [{
 *                     payerId: CandidApi.preEncounter.PayerId("string"),
 *                     payerName: "string",
 *                     authorizationNumber: "string",
 *                     cptCode: "string",
 *                     units: CandidApi.preEncounter.patients.v1.AuthorizationUnit.Visit
 *                 }],
 *             referrals: [{
 *                     provider: {
 *                         name: {
 *                             family: "string",
 *                             given: ["string"],
 *                             use: CandidApi.preEncounter.NameUse.Usual,
 *                             period: {}
 *                         },
 *                         type: CandidApi.preEncounter.ExternalProviderType.Primary,
 *                         npi: "string",
 *                         telecoms: [{
 *                                 value: "string",
 *                                 use: CandidApi.preEncounter.ContactPointUse.Home
 *                             }],
 *                         addresses: [],
 *                         period: {},
 *                         canonicalId: CandidApi.preEncounter.CanonicalProviderId("string")
 *                     },
 *                     referralNumber: "string"
 *                 }],
 *             primaryServiceFacilityId: "string",
 *             doNotInvoiceReason: CandidApi.preEncounter.patients.v1.DoNotInvoiceReason.Bankruptcy,
 *             noteIds: [CandidApi.preEncounter.NoteId("string")],
 *             tagIds: [CandidApi.preEncounter.TagId("string")]
 *         }
 *     }
 */
export interface CreatePatientWithMrnRequest {
    skipDuplicateCheck?: boolean;
    body: CandidApi.preEncounter.patients.v1.MutablePatientWithMrn;
}