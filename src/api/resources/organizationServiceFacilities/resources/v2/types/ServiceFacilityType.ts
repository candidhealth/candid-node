/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     CandidApi.organizationServiceFacilities.v2.ServiceFacilityType.DiagnosticsOrTherapeuticsUnit
 */
export type ServiceFacilityType =
    /**
     * A practice setting where diagnostic procedures or therapeutic interventions are performed. */
    | "DX"
    /**
     * A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed. */
    | "CVDX"
    /**
     * Cardiac catheterization lab. */
    | "CATH"
    /**
     * Echocardiography lab. */
    | "ECHO"
    /**
     * A practice setting where GI procedures (such as endoscopies) are performed. */
    | "GIDX"
    /**
     * (X12N 261QD0000N) */
    | "ENDOS"
    /**
     * A practice setting where radiology services (diagnostic or therapeutic) are provided (X12N 261QR0200N). */
    | "RADDX"
    /**
     * (X12N 261QX0203N) */
    | "RADO"
    /**
     * Neuroradiology unit. */
    | "RNEU"
    /**
     * An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured. */
    | "HOSP"
    /**
     * (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases  that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible  pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long  period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient  or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with  long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes. */
    | "CHR"
    /**
     * (X12N 282N00000N) */
    | "GACH"
    /**
     * A health care facility operated by the Department of Defense or other military operation. */
    | "MHSP"
    /**
     * Healthcare facility that cares for patients with psychiatric illness(s). */
    | "PSYCHF"
    /**
     * (X12N 283X00000N) */
    | "RH"
    /**
     * A location that plays the role of delivering services which may include life training and/or social support to people with addictions. */
    | "RHAT"
    /**
     * A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder. */
    | "RHII"
    /**
     * A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role. */
    | "RHMAD"
    /**
     * A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments. */
    | "RHPI"
    /**
     * A location that plays the role of delivering services for people with hearing impairments. */
    | "RHPIH"
    /**
     * A location that plays the role of delivering services for people with motor skill impairments. */
    | "RHPIMS"
    /**
     * A location that plays the role of delivering services for people with visual skill impairments. */
    | "RHPIVS"
    /**
     * A location that plays the role of delivering services which may include life training and/or social support services for the adaptation, rehabilitation and social integration of youths with adjustment difficulties. */
    | "RHYAD"
    /**
     * Hospital unit. */
    | "HU"
    /**
     * Bone marrow transplant unit. */
    | "BMTU"
    /**
     * Coronary care unit. */
    | "CCU"
    /**
     * A specialty unit in hospital that focuses on chronic respirator patients. and pulmonary failure */
    | "CHEST"
    /**
     * Epilepsy unit. */
    | "EPIL"
    /**
     * The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma. */
    | "ER"
    /**
     * Emergency trauma unit. */
    | "ETU"
    /**
     * Hemodialysis unit. */
    | "HD"
    /**
     * A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis" */
    | "HLAB"
    /**
     * A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis. */
    | "INLAB"
    /**
     * A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis */
    | "OUTLAB"
    /**
     * A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases. The radiology unit may be further dividedinto subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound. */
    | "HRAD"
    /**
     * A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes. */
    | "HUSCS"
    /**
     * Intensive care unit. */
    | "ICU"
    /**
     * Pediatric intensive care unit */
    | "PEDICU"
    /**
     * Pediatric neonatal intensive care unit. */
    | "PEDNICU"
    /**
     * A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital. */
    | "INPHARM"
    /**
     * A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology. */
    | "MBL"
    /**
     * Neurology critical care and stroke unit. */
    | "NCCS"
    /**
     * Neurosurgery unit. */
    | "NS"
    /**
     * A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions. */
    | "OUTPHARM"
    /**
     * Pediatric unit. */
    | "PEDU"
    /**
     * (X12N 273R00000N) */
    | "PHU"
    /**
     * Rehabilitation hospital unit. */
    | "RHU"
    /**
     * (X12N 261QA1200N) */
    | "SLEEP"
    /**
     * Nursing or custodial care facility. */
    | "NCCF"
    /**
     * (X12N 314000000N) */
    | "SNF"
    /**
     * Outpatient facility. */
    | "OF"
    /**
     * Allergy clinic. */
    | "ALL"
    /**
     * Amputee clinic. */
    | "AMPUT"
    /**
     * Bone marrow transplant clinic. */
    | "BMTC"
    /**
     * Breast clinic. */
    | "BREAST"
    /**
     * Child and adolescent neurology clinic. */
    | "CANC"
    /**
     * Child and adolescent psychiatry clinic. */
    | "CAPC"
    /**
     * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities. */
    | "CARD"
    /**
     * Pediatric cardiology clinic. */
    | "PEDCARD"
    /**
     * Coagulation clinic. */
    | "COAG"
    /**
     * Colon and rectal surgery clinic. */
    | "CRS"
    /**
     * Dermatology clinic. */
    | "DERM"
    /**
     * Endocrinology clinic. */
    | "ENDO"
    /**
     * Pediatric endocrinology clinic. */
    | "PEDE"
    /**
     * Otorhinolaryngology clinic. */
    | "ENT"
    /**
     * Family medicine clinic. */
    | "FMC"
    /**
     * Gastroenterology clinic. */
    | "GI"
    /**
     * Pediatric gastroenterology clinic. */
    | "PEDGI"
    /**
     * General internal medicine clinic. */
    | "GIM"
    /**
     * Gynecology clinic. */
    | "GYN"
    /**
     * Hematology clinic. */
    | "HEM"
    /**
     * Pediatric hematology clinic. */
    | "PEDHEM"
    /**
     * Hypertension clinic. */
    | "HTN"
    /**
     * Focuses on assessing disability. */
    | "IEC"
    /**
     * Infectious disease clinic. */
    | "INFD"
    /**
     * Pediatric infectious disease clinic. */
    | "PEDID"
    /**
     * Infertility clinic. */
    | "INV"
    /**
     * Lympedema clinic. */
    | "LYMPH"
    /**
     * Medical genetics clinic. */
    | "MGEN"
    /**
     * Nephrology clinic. */
    | "NEPH"
    /**
     * Pediatric nephrology clinic. */
    | "PEDNEPH"
    /**
     * Neurology clinic. */
    | "NEUR"
    /**
     * Obstetrics clinic. */
    | "OB"
    /**
     * Oral and maxillofacial surgery clinic. */
    | "OMS"
    /**
     * Medical oncology clinic. */
    | "ONCL"
    /**
     * Pediatric oncology clinic. */
    | "PEDHO"
    /**
     * Opthalmology clinic. */
    | "OPH"
    /**
     * A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed. Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required. */
    | "OPTC"
    /**
     * Orthopedics clinic. */
    | "ORTHO"
    /**
     * Hand clinic. */
    | "HAND"
    /**
     * (X12N 261QP3300N) */
    | "PAINCL"
    /**
     * (X12N 261QP2300N) */
    | "PC"
    /**
     * Pediatrics clinic. */
    | "PEDC"
    /**
     * Pediatric rheumatology clinic. */
    | "PEDRHEUM"
    /**
     * (X12N 261QP1100N) */
    | "POD"
    /**
     * Preventive medicine clinic. */
    | "PREV"
    /**
     * Proctology clinic. */
    | "PROCTO"
    /**
     * Location where healthcare service was delivered. */
    | "PROFF"
    /**
     * Prosthodontics clinic. */
    | "PROS"
    /**
     * Psychology clinic. */
    | "PSI"
    /**
     * Psychiatry clinic. */
    | "PSY"
    /**
     * Rheumatology clinic. */
    | "RHEUM"
    /**
     * Sports medicine clinic. */
    | "SPMED"
    /**
     * Surgery clinic. */
    | "SU"
    /**
     * Plastic surgery clinic. */
    | "PLS"
    /**
     * Urology clinic. */
    | "URO"
    /**
     * Transplant clinic. */
    | "TR"
    /**
     * Travel and geographic medicine clinic. */
    | "TRAVEL"
    /**
     * Wound clinic. */
    | "WND"
    /**
     * Residential treatment facility. */
    | "RTF"
    /**
     * Pain rehabilitation center. */
    | "PRC"
    /**
     * (X12N 324500000N) */
    | "SURF"
    /**
     * Location address where medical supplies were transported to for use. */
    | "DADDR"
    /**
     * Location (mobile) where healthcare service was delivered. */
    | "MOBL"
    /**
     * Location (mobile) where healthcare service was delivered, identified specifically as an ambulance. */
    | "AMB"
    /**
     * Location where healthcare service was delivered. */
    | "PHARM"
    /**
     * Location of an accident where healthcare service was delivered. */
    | "ACC"
    /**
     * Community location where healthcare is delivered. */
    | "COMM"
    /**
     * A location that plays the role of delivering services which may include providing front-line services to the population of a  defined geographic area such as: healthcare services and social services. */
    | "CSC"
    /**
     * location where healthcare was delivered which is the residence of the Patient. */
    | "PTRES"
    /**
     * Location where healthcare service was delivered. */
    | "SCHOOL"
    /**
     * A location that plays the role of delivering services which may include:  social emergency services required for a young person as required under any jurisdictional youth laws. */
    | "UPC"
    /**
     * Location where healthcare service was delivered. */
    | "WORK";
export const ServiceFacilityType = {
    DiagnosticsOrTherapeuticsUnit: "DX",
    CardiovascularDiagnosticsOrTherapeuticsUnit: "CVDX",
    CardiacCatheterizationLab: "CATH",
    EchocardiographyLab: "ECHO",
    GastroenterologyDiagnosticsOrTherapeuticsLab: "GIDX",
    EndoscopyLab: "ENDOS",
    RadiologyDiagnosticsOrTherapeuticsUnit: "RADDX",
    RadiationOncologyUnit: "RADO",
    NeuroradiologyUnit: "RNEU",
    Hospital: "HOSP",
    ChronicCareFacility: "CHR",
    HospitalsGeneralAcuteCareHospital: "GACH",
    MilitaryHospital: "MHSP",
    PsychatricCareFacility: "PSYCHF",
    RehabilitationHospital: "RH",
    AddictionTreatmentCenter: "RHAT",
    IntellectualImpairmentCenter: "RHII",
    ParentsWithAdjustmentDifficultiesCenter: "RHMAD",
    PhysicalImpairmentCenter: "RHPI",
    PhysicalImpairmentHearingCenter: "RHPIH",
    PhysicalImpairmentMotorSkillsCenter: "RHPIMS",
    PhysicalImpairmentVisualSkillsCenter: "RHPIVS",
    YouthsWithAdjustmentDifficultiesCenter: "RHYAD",
    HospitalUnit: "HU",
    BoneMarrowTransplantUnit: "BMTU",
    CoronaryCareUnit: "CCU",
    ChestUnit: "CHEST",
    EpilepsyUnit: "EPIL",
    EmergencyRoom: "ER",
    EmergencyTraumaUnit: "ETU",
    HemodialysisUnit: "HD",
    HospitalLaboratory: "HLAB",
    InpatientLaboratory: "INLAB",
    OutpatientLaboratory: "OUTLAB",
    RadiologyUnit: "HRAD",
    SpecimenCollectionSite: "HUSCS",
    IntensiveCareUnit: "ICU",
    PediatricIntensiveCareUnit: "PEDICU",
    PediatricNeonatalIntensiveCareUnit: "PEDNICU",
    InpatientPharmacy: "INPHARM",
    MedicalLaboratory: "MBL",
    NeurologyCriticalCareAndStrokeUnit: "NCCS",
    NeurosurgeryUnit: "NS",
    OutpatientPharmacy: "OUTPHARM",
    PediatricUnit: "PEDU",
    PsychiatricHospitalUnit: "PHU",
    RehabilitationHospitalUnit: "RHU",
    SleepDisordersUnit: "SLEEP",
    NursingOrCustodialCareFacility: "NCCF",
    SkilledNursingFacility: "SNF",
    OutpatientFacility: "OF",
    AllergyClinic: "ALL",
    AmputeeClinic: "AMPUT",
    BoneMarrowTransplantClinic: "BMTC",
    BreastClinic: "BREAST",
    ChildAndAdolescentNeurologyClinic: "CANC",
    ChildAndAdolescentPsychiatryClinic: "CAPC",
    AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: "CARD",
    PediatricCardiologyClinic: "PEDCARD",
    CoagulationClinic: "COAG",
    ColonAndRectalSurgeryClinic: "CRS",
    DermatologyClinic: "DERM",
    EndocrinologyClinic: "ENDO",
    PediatricEndocrinologyClinic: "PEDE",
    OtorhinolaryngologyClinic: "ENT",
    FamilyMedicineClinic: "FMC",
    GastroenterologyClinic: "GI",
    PediatricGastroenterologyClinic: "PEDGI",
    GeneralInternalMedicineClinic: "GIM",
    GynecologyClinic: "GYN",
    HematologyClinic: "HEM",
    PediatricHematologyClinic: "PEDHEM",
    HypertensionClinic: "HTN",
    ImpairmentEvaluationCenter: "IEC",
    InfectiousDiseaseClinic: "INFD",
    PediatricInfectiousDiseaseClinic: "PEDID",
    InfertilityClinic: "INV",
    LympedemaClinic: "LYMPH",
    MedicalGeneticsClinic: "MGEN",
    NephrologyClinic: "NEPH",
    PediatricNephrologyClinic: "PEDNEPH",
    NeurologyClinic: "NEUR",
    ObstetricsClinic: "OB",
    OralAndMaxillofacialSurgeryClinic: "OMS",
    MedicalOncologyClinic: "ONCL",
    PediatricOncologyClinic: "PEDHO",
    OpthalmologyClinic: "OPH",
    OptometryClinic: "OPTC",
    OrthopedicsClinic: "ORTHO",
    HandClinic: "HAND",
    PainClinic: "PAINCL",
    PrimaryCareClinic: "PC",
    PediatricsClinic: "PEDC",
    PediatricRheumatologyClinic: "PEDRHEUM",
    PodiatryClinic: "POD",
    PreventiveMedicineClinic: "PREV",
    ProctologyClinic: "PROCTO",
    ProvidersOffice: "PROFF",
    ProsthodonticsClinic: "PROS",
    PsychologyClinic: "PSI",
    PsychiatryClinic: "PSY",
    RheumatologyClinic: "RHEUM",
    SportsMedicineClinic: "SPMED",
    SurgeryClinic: "SU",
    PlasticSurgeryClinic: "PLS",
    UrologyClinic: "URO",
    TransplantClinic: "TR",
    TravelAndGeographicMedicineClinic: "TRAVEL",
    WoundClinic: "WND",
    ResidentialTreatmentFacility: "RTF",
    PainRehabilitationCenter: "PRC",
    SubstanceUseRehabilitationFacility: "SURF",
    DeliveryAddress: "DADDR",
    MobileUnit: "MOBL",
    Ambulance: "AMB",
    Pharmacy: "PHARM",
    AccidentSite: "ACC",
    CommunityLocation: "COMM",
    CommunityServiceCenter: "CSC",
    PatientsResidence: "PTRES",
    School: "SCHOOL",
    UnderageProtectionCenter: "UPC",
    WorkSite: "WORK",
} as const;
