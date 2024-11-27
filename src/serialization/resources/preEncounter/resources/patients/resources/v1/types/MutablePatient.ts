/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { HumanName } from "../../../../common/types/HumanName";
import { Gender } from "../../../../common/types/Gender";
import { Sex } from "../../../../common/types/Sex";
import { SexualOrientation } from "../../../../common/types/SexualOrientation";
import { Race } from "../../../../common/types/Race";
import { Ethnicity } from "../../../../common/types/Ethnicity";
import { DisabilityStatus } from "../../../../common/types/DisabilityStatus";
import { MaritalStatus } from "./MaritalStatus";
import { Address } from "../../../../common/types/Address";
import { ContactPoint } from "../../../../common/types/ContactPoint";
import { ExternalProvenance } from "./ExternalProvenance";
import { Contact } from "./Contact";
import { ExternalProvider } from "../../../../common/types/ExternalProvider";
import { FilingOrder } from "./FilingOrder";
import { CanonicalNonInsurancePayerId } from "../../../../common/types/CanonicalNonInsurancePayerId";
import { CanonicalNonInsurancePayerAssociation } from "../../../../common/types/CanonicalNonInsurancePayerAssociation";
import { Guarantor } from "./Guarantor";
import { Authorization } from "./Authorization";
import { Referral } from "./Referral";
import { DoNotInvoiceReason } from "./DoNotInvoiceReason";
import { NoteId } from "../../../../common/types/NoteId";
import { TagId } from "../../../../common/types/TagId";

export const MutablePatient: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.MutablePatient.Raw,
    CandidApi.preEncounter.patients.v1.MutablePatient
> = core.serialization.object({
    name: HumanName,
    otherNames: core.serialization.property("other_names", core.serialization.list(HumanName)),
    gender: Gender.optional(),
    birthDate: core.serialization.property("birth_date", core.serialization.string()),
    socialSecurityNumber: core.serialization.property("social_security_number", core.serialization.string().optional()),
    biologicalSex: core.serialization.property("biological_sex", Sex),
    sexualOrientation: core.serialization.property("sexual_orientation", SexualOrientation.optional()),
    race: Race.optional(),
    ethnicity: Ethnicity.optional(),
    disabilityStatus: core.serialization.property("disability_status", DisabilityStatus.optional()),
    maritalStatus: core.serialization.property("marital_status", MaritalStatus.optional()),
    deceased: core.serialization.date().optional(),
    multipleBirth: core.serialization.property("multiple_birth", core.serialization.number().optional()),
    primaryAddress: core.serialization.property("primary_address", Address),
    otherAddresses: core.serialization.property("other_addresses", core.serialization.list(Address)),
    primaryTelecom: core.serialization.property("primary_telecom", ContactPoint),
    otherTelecoms: core.serialization.property("other_telecoms", core.serialization.list(ContactPoint)),
    email: core.serialization.string().optional(),
    electronicCommunicationOptIn: core.serialization.property(
        "electronic_communication_opt_in",
        core.serialization.boolean().optional()
    ),
    photo: core.serialization.string().optional(),
    language: core.serialization.string().optional(),
    externalProvenance: core.serialization.property("external_provenance", ExternalProvenance.optional()),
    contacts: core.serialization.list(Contact),
    generalPractitioners: core.serialization.property(
        "general_practitioners",
        core.serialization.list(ExternalProvider)
    ),
    filingOrder: core.serialization.property("filing_order", FilingOrder),
    nonInsurancePayers: core.serialization.property(
        "non_insurance_payers",
        core.serialization.list(CanonicalNonInsurancePayerId).optional()
    ),
    nonInsurancePayerAssociations: core.serialization.property(
        "non_insurance_payer_associations",
        core.serialization.list(CanonicalNonInsurancePayerAssociation).optional()
    ),
    guarantor: Guarantor.optional(),
    selfPay: core.serialization.property("self_pay", core.serialization.boolean().optional()),
    authorizations: core.serialization.list(Authorization).optional(),
    referrals: core.serialization.list(Referral).optional(),
    primaryServiceFacilityId: core.serialization.property(
        "primary_service_facility_id",
        core.serialization.string().optional()
    ),
    doNotInvoiceReason: core.serialization.property("do_not_invoice_reason", DoNotInvoiceReason.optional()),
    noteIds: core.serialization.property("note_ids", core.serialization.list(NoteId).optional()),
    tagIds: core.serialization.property("tag_ids", core.serialization.list(TagId).optional()),
});

export declare namespace MutablePatient {
    interface Raw {
        name: HumanName.Raw;
        other_names: HumanName.Raw[];
        gender?: Gender.Raw | null;
        birth_date: string;
        social_security_number?: string | null;
        biological_sex: Sex.Raw;
        sexual_orientation?: SexualOrientation.Raw | null;
        race?: Race.Raw | null;
        ethnicity?: Ethnicity.Raw | null;
        disability_status?: DisabilityStatus.Raw | null;
        marital_status?: MaritalStatus.Raw | null;
        deceased?: string | null;
        multiple_birth?: number | null;
        primary_address: Address.Raw;
        other_addresses: Address.Raw[];
        primary_telecom: ContactPoint.Raw;
        other_telecoms: ContactPoint.Raw[];
        email?: string | null;
        electronic_communication_opt_in?: boolean | null;
        photo?: string | null;
        language?: string | null;
        external_provenance?: ExternalProvenance.Raw | null;
        contacts: Contact.Raw[];
        general_practitioners: ExternalProvider.Raw[];
        filing_order: FilingOrder.Raw;
        non_insurance_payers?: CanonicalNonInsurancePayerId.Raw[] | null;
        non_insurance_payer_associations?: CanonicalNonInsurancePayerAssociation.Raw[] | null;
        guarantor?: Guarantor.Raw | null;
        self_pay?: boolean | null;
        authorizations?: Authorization.Raw[] | null;
        referrals?: Referral.Raw[] | null;
        primary_service_facility_id?: string | null;
        do_not_invoice_reason?: DoNotInvoiceReason.Raw | null;
        note_ids?: NoteId.Raw[] | null;
        tag_ids?: TagId.Raw[] | null;
    }
}
