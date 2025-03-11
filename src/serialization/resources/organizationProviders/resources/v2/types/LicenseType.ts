/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const LicenseType: core.serialization.Schema<
    serializers.organizationProviders.v2.LicenseType.Raw,
    CandidApi.organizationProviders.v2.LicenseType
> = core.serialization.enum_([
    "MD",
    "NP",
    "PA",
    "LMFT",
    "LCPC",
    "LCSW",
    "PMHNP",
    "FNP",
    "LPCC",
    "DO",
    "RD",
    "SLP",
    "APRN",
    "LPC",
    "PHD",
    "PSYD",
    "LMSW",
    "LMHC",
    "OTHER_MASTERS",
    "BCBA",
    "UNKNOWN",
    "RPH",
    "PHT",
    "LAC",
    "LMT",
    "DC",
    "ND",
    "MA",
    "PT",
    "IBCLC",
    "RN",
    "DPT",
    "LCMHC",
    "CNM",
    "RNFA",
    "ACSW",
    "APC",
    "BCABA",
    "BHA",
    "OD",
    "DPM",
    "DA",
    "DDS",
    "DEH",
    "DMD",
    "PTA",
    "LCADC",
    "LCAT",
    "LCMHCS",
    "LCMHCA",
    "LCSWA",
    "LICSW",
    "LISW",
    "LMFTS",
    "LMFTA",
    "LPCI",
    "LSCSW",
    "MHCA",
    "MHT",
    "RBT",
    "RCSWI",
    "RHMCI",
    "LPN",
    "OTD",
    "OMS",
    "MFTA",
    "APCC",
    "DNP",
    "AGNPBC",
    "ANP",
    "FNPPP",
    "LCSWR",
    "ALC",
    "RMFTI",
    "LAMFT",
    "LPCA",
    "LSWI",
    "CSW",
    "CPC",
    "LGMFT",
    "LLPC",
    "PLPC",
    "PLMFT",
    "LMHCA",
    "CIT",
    "CT",
    "MFT",
    "LSW",
    "PLMHP",
    "PCMSW",
    "LMHP",
    "OTR/L",
    "RPA",
    "COTA",
    "CRNP",
    "SLP-CF",
    "NP-C",
    "PA-C",
]);

export declare namespace LicenseType {
    export type Raw =
        | "MD"
        | "NP"
        | "PA"
        | "LMFT"
        | "LCPC"
        | "LCSW"
        | "PMHNP"
        | "FNP"
        | "LPCC"
        | "DO"
        | "RD"
        | "SLP"
        | "APRN"
        | "LPC"
        | "PHD"
        | "PSYD"
        | "LMSW"
        | "LMHC"
        | "OTHER_MASTERS"
        | "BCBA"
        | "UNKNOWN"
        | "RPH"
        | "PHT"
        | "LAC"
        | "LMT"
        | "DC"
        | "ND"
        | "MA"
        | "PT"
        | "IBCLC"
        | "RN"
        | "DPT"
        | "LCMHC"
        | "CNM"
        | "RNFA"
        | "ACSW"
        | "APC"
        | "BCABA"
        | "BHA"
        | "OD"
        | "DPM"
        | "DA"
        | "DDS"
        | "DEH"
        | "DMD"
        | "PTA"
        | "LCADC"
        | "LCAT"
        | "LCMHCS"
        | "LCMHCA"
        | "LCSWA"
        | "LICSW"
        | "LISW"
        | "LMFTS"
        | "LMFTA"
        | "LPCI"
        | "LSCSW"
        | "MHCA"
        | "MHT"
        | "RBT"
        | "RCSWI"
        | "RHMCI"
        | "LPN"
        | "OTD"
        | "OMS"
        | "MFTA"
        | "APCC"
        | "DNP"
        | "AGNPBC"
        | "ANP"
        | "FNPPP"
        | "LCSWR"
        | "ALC"
        | "RMFTI"
        | "LAMFT"
        | "LPCA"
        | "LSWI"
        | "CSW"
        | "CPC"
        | "LGMFT"
        | "LLPC"
        | "PLPC"
        | "PLMFT"
        | "LMHCA"
        | "CIT"
        | "CT"
        | "MFT"
        | "LSW"
        | "PLMHP"
        | "PCMSW"
        | "LMHP"
        | "OTR/L"
        | "RPA"
        | "COTA"
        | "CRNP"
        | "SLP-CF"
        | "NP-C"
        | "PA-C";
}
