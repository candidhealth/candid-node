/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TaskCategory =
    | "other"
    | "provider_credentialing"
    | "authorization_required"
    | "inactive_coverage"
    | "unknown_eligibility_or_patient_not_found"
    | "incorrect_member_id"
    | "documentation_addendum_request"
    | "coordination_of_benefits"
    | "missing_or_incorrect_gender"
    | "incorrect_date_of_birth"
    | "incorrect_payer"
    | "incorrect_name"
    | "invalid_diagnosis_code"
    | "non_covered_diagnosis_codes"
    | "information_requested_from_patient"
    | "incorrect_rendering_provider_info"
    | "missing_or_incorrect_modifier"
    | "coding_frequency_error"
    | "incorrect_patient_address"
    | "multiple_em_claims"
    | "missing_or_incorrect_charge_amount"
    | "medical_records_request"
    | "provider_enrollment_or_contracting"
    | "missing_or_incorrect_group_number"
    | "missing_diagnosis_codes"
    | "missing_patient_authorization"
    | "incorrect_billing_provider_info"
    | "incorrect_procedure_code"
    | "incorrect_quantity"
    | "incorrect_place_of_service_code"
    | "incorrect_service_facility_info"
    | "incorrect_date_of_service"
    | "missing_or_incorrect_ndc"
    | "patient_collections"
    | "submit_to_secondary"
    | "transient_server_error"
    | "missing_remittance_enrollment"
    | "missing_claims_enrollment"
    | "held_by_customer"
    | "pending_manual_remit_posting"
    | "incorrect_referring_provider_info"
    | "payer_configuration_error";
export const TaskCategory = {
    Other: "other",
    ProviderCredentialing: "provider_credentialing",
    AuthorizationRequired: "authorization_required",
    InactiveCoverage: "inactive_coverage",
    UnknownEligibilityOrPatientNotFound: "unknown_eligibility_or_patient_not_found",
    IncorrectMemberId: "incorrect_member_id",
    DocumentationAddendumRequest: "documentation_addendum_request",
    CoordinationOfBenefits: "coordination_of_benefits",
    MissingOrIncorrectGender: "missing_or_incorrect_gender",
    IncorrectDateOfBirth: "incorrect_date_of_birth",
    IncorrectPayer: "incorrect_payer",
    IncorrectName: "incorrect_name",
    InvalidDiagnosisCode: "invalid_diagnosis_code",
    NonCoveredDiagnosisCodes: "non_covered_diagnosis_codes",
    InformationRequestedFromPatient: "information_requested_from_patient",
    IncorrectRenderingProviderInfo: "incorrect_rendering_provider_info",
    MissingOrIncorrectModifier: "missing_or_incorrect_modifier",
    CodingFrequencyError: "coding_frequency_error",
    IncorrectPatientAddress: "incorrect_patient_address",
    MultipleEmClaims: "multiple_em_claims",
    MissingOrIncorrectChargeAmount: "missing_or_incorrect_charge_amount",
    MedicalRecordsRequest: "medical_records_request",
    ProviderEnrollmentOrContracting: "provider_enrollment_or_contracting",
    MissingOrIncorrectGroupNumber: "missing_or_incorrect_group_number",
    MissingDiagnosisCodes: "missing_diagnosis_codes",
    MissingPatientAuthorization: "missing_patient_authorization",
    IncorrectBillingProviderInfo: "incorrect_billing_provider_info",
    IncorrectProcedureCode: "incorrect_procedure_code",
    IncorrectQuantity: "incorrect_quantity",
    IncorrectPlaceOfServiceCode: "incorrect_place_of_service_code",
    IncorrectServiceFacilityInfo: "incorrect_service_facility_info",
    IncorrectDateOfService: "incorrect_date_of_service",
    MissingOrIncorrectNdc: "missing_or_incorrect_ndc",
    PatientCollections: "patient_collections",
    SubmitToSecondary: "submit_to_secondary",
    TransientServerError: "transient_server_error",
    MissingRemittanceEnrollment: "missing_remittance_enrollment",
    MissingClaimsEnrollment: "missing_claims_enrollment",
    HeldByCustomer: "held_by_customer",
    PendingManualRemitPosting: "pending_manual_remit_posting",
    IncorrectReferringProviderInfo: "incorrect_referring_provider_info",
    PayerConfigurationError: "payer_configuration_error",
} as const;
