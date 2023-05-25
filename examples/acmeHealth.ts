import { CandidApi } from "../src/index";
import { CandidApiClient } from "../src/CandidApiClient";
import { CandidApiEnvironment } from "../src/environments";

if (process.env.clientId == null || process.env.clientSecret == null) {
    throw Error("Need a client ID and secret to use Candid API!");
}

const client = new CandidApiClient({
    environment: CandidApiEnvironment.Staging,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
});

// Create a new encounter for patient Loki Laufeyson
const createEncounterResponse = await client.encounters.v3.create({
    externalId: CandidApi.EncounterExternalId("emr-claim-id-abc"),
    dateOfService: CandidApi.Date_("2023-05-23"),
    patient: {
        externalId: "emr-patient-id-123",
        firstName: "Loki",
        lastName: "Laufeyson",
        dateOfBirth: CandidApi.Date_("1983-12-17"),
        gender: "male",
        address: {
            address1: "1234 Main St",
            address2: "Apt 9876",
            city: "Asgard",
            state: "CA",
            zipCode: "94109",
            zipPlusFourCode: "1234",
        },
    },
    patientAuthorizedRelease: true,
    billingProvider: {
        npi: "1234567890",
        taxId: "123456789",
        address: {
            address1: "1234 Main St",
            address2: "Apt 9876",
            city: "Asgard",
            state: "CA",
            zipCode: "94109",
            zipPlusFourCode: "1234",
        },
    },
    renderingProvider: {
        firstName: "Doctor",
        lastName: "Strange",
        npi: "9876543210",
    },
    diagnoses: [
        { codeType: "ABF", code: "Z63.88" },
        { codeType: "ABF", code: "E66.66" },
    ],
    placeOfServiceCode: "02", // telemedicine
    serviceLines: [
        {
            procedureCode: "99212",
            modifiers: [],
            quantity: "1",
            units: "UN",
            chargeAmountCents: 1500,
            diagnosisPointers: [0, 1],
        }
    ],
    clinicalNotes: [],
    providerAcceptsAssignment: true,
    benefitsAssignedToProvider: true,
});

// visit the new encounter
if (createEncounterResponse.ok) {
    const { body: newEncounter } = createEncounterResponse;
    console.log(newEncounter.encounterId);
} else {
    // or handle errors
    console.error(createEncounterResponse.error);
}
