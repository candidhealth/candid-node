/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type NoteCategory =
    | "clinical"
    | "care_plan"
    | "diagnoses"
    | "vitals"
    | "physical_exam"
    | "review_of_systems"
    | "medical_decisions"
    | "history_of_present_illness"
    | "patient_info"
    | "chief_complaint"
    | "health_record"
    | "consent"
    | "procedure"
    | "time_in_appointment";
export const NoteCategory = {
    Clinical: "clinical",
    CarePlan: "care_plan",
    Diagnoses: "diagnoses",
    Vitals: "vitals",
    PhysicalExam: "physical_exam",
    ReviewOfSystems: "review_of_systems",
    MedicalDecisions: "medical_decisions",
    HistoryOfPresentIllness: "history_of_present_illness",
    PatientInfo: "patient_info",
    ChiefComplaint: "chief_complaint",
    HealthRecord: "health_record",
    Consent: "consent",
    Procedure: "procedure",
    TimeInAppointment: "time_in_appointment",
} as const;
