/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ServiceType =
    | "new_patient_video_appt"
    | "new_patient_prev_video_appt"
    | "new_patient_office_appt"
    | "established_patient_video_appt"
    | "established_patient_prev_video_appt"
    | "established_patient_office_appt"
    | "patient_portal_with_qualified_physician"
    | "patient_portal_with_non_qualified_physician"
    | "group_therapy"
    | "phone_appt"
    | "annual_wellness_visit"
    | "remote_patient_monitoring"
    | "diagnostic"
    | "cardiac_monitoring"
    | "cardiac_codes"
    | "psychotherapy"
    | "phone_therapy"
    | "alcohol_abuse"
    | "smoking_cessation"
    | "speech_therapy"
    | "home_visit"
    | "medical_nutrition_therapy"
    | "nutritional_counseling"
    | "dietitian_visit"
    | "preventative_medicine_counseling"
    | "chronic_care"
    | "advance_care"
    | "collaborative_care_management"
    | "abortion_care"
    | "abortion_drugs"
    | "remote_therapeutic_monitoring"
    | "principal_care_mgmt"
    | "other_em"
    | "telehealth_oud"
    | "substance_abuse_treatment"
    | "acupuncture"
    | "physical_therapy"
    | "lactation_consulting"
    | "sleep_study"
    | "cms_telehealth_codes"
    | "cms_telehealth_audio_codes";
export const ServiceType = {
    NewPatientVideoAppt: "new_patient_video_appt",
    NewPatientPrevVideoAppt: "new_patient_prev_video_appt",
    NewPatientOfficeAppt: "new_patient_office_appt",
    EstablishedPatientVideoAppt: "established_patient_video_appt",
    EstablishedPatientPrevVideoAppt: "established_patient_prev_video_appt",
    EstablishedPatientOfficeAppt: "established_patient_office_appt",
    PatientPortalWithQualifiedPhysician: "patient_portal_with_qualified_physician",
    PatientPortalWithNonQualifiedPhysician: "patient_portal_with_non_qualified_physician",
    GroupTherapy: "group_therapy",
    PhoneAppt: "phone_appt",
    AnnualWellnessVisit: "annual_wellness_visit",
    RemotePatientMonitoring: "remote_patient_monitoring",
    Diagnostic: "diagnostic",
    CardiacMonitoring: "cardiac_monitoring",
    CardiacCodes: "cardiac_codes",
    Psychotherapy: "psychotherapy",
    PhoneTherapy: "phone_therapy",
    AlcoholAbuse: "alcohol_abuse",
    SmokingCessation: "smoking_cessation",
    SpeechTherapy: "speech_therapy",
    HomeVisit: "home_visit",
    MedicalNutritionTherapy: "medical_nutrition_therapy",
    NutritionalCounseling: "nutritional_counseling",
    DietitianVisit: "dietitian_visit",
    PreventativeMedicineCounseling: "preventative_medicine_counseling",
    ChronicCare: "chronic_care",
    AdvanceCare: "advance_care",
    CollaborativeCareManagement: "collaborative_care_management",
    AbortionCare: "abortion_care",
    AbortionDrugs: "abortion_drugs",
    RemoteTherapeuticMonitoring: "remote_therapeutic_monitoring",
    PrincipalCareMgmt: "principal_care_mgmt",
    OtherEm: "other_em",
    TelehealthOud: "telehealth_oud",
    SubstanceAbuseTreatment: "substance_abuse_treatment",
    Acupuncture: "acupuncture",
    PhysicalTherapy: "physical_therapy",
    LactationConsulting: "lactation_consulting",
    SleepStudy: "sleep_study",
    CmsTelehealthCodes: "cms_telehealth_codes",
    CmsTelehealthAudioCodes: "cms_telehealth_audio_codes",
} as const;
