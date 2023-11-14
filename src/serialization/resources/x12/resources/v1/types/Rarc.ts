/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Rarc: core.serialization.Schema<serializers.x12.v1.Rarc.Raw, CandidApi.x12.v1.Rarc> =
    core.serialization.enum_([
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8",
        "M9",
        "M10",
        "M11",
        "M12",
        "M13",
        "M14",
        "M15",
        "M16",
        "M17",
        "M18",
        "M19",
        "M20",
        "M21",
        "M22",
        "M23",
        "M24",
        "M25",
        "M26",
        "M27",
        "M28",
        "M29",
        "M30",
        "M31",
        "M32",
        "M36",
        "M37",
        "M38",
        "M39",
        "M40",
        "M41",
        "M42",
        "M44",
        "M45",
        "M46",
        "M47",
        "M49",
        "M50",
        "M51",
        "M52",
        "M53",
        "M54",
        "M55",
        "M56",
        "M59",
        "M60",
        "M61",
        "M62",
        "M64",
        "M65",
        "M66",
        "M67",
        "M69",
        "M70",
        "M71",
        "M73",
        "M74",
        "M75",
        "M76",
        "M77",
        "M79",
        "M80",
        "M81",
        "M82",
        "M83",
        "M84",
        "M85",
        "M86",
        "M87",
        "M89",
        "M90",
        "M91",
        "M93",
        "M94",
        "M95",
        "M96",
        "M97",
        "M99",
        "M100",
        "M102",
        "M103",
        "M104",
        "M105",
        "M107",
        "M109",
        "M111",
        "M112",
        "M113",
        "M114",
        "M115",
        "M116",
        "M117",
        "M121",
        "M122",
        "M123",
        "M124",
        "M125",
        "M126",
        "M127",
        "M129",
        "M130",
        "M131",
        "M132",
        "M133",
        "M134",
        "M135",
        "M136",
        "M137",
        "M138",
        "M139",
        "M141",
        "M142",
        "M143",
        "M144",
        "MA01",
        "MA02",
        "MA04",
        "MA07",
        "MA08",
        "MA09",
        "MA10",
        "MA12",
        "MA13",
        "MA14",
        "MA15",
        "MA16",
        "MA17",
        "MA18",
        "MA19",
        "MA20",
        "MA21",
        "MA22",
        "MA23",
        "MA24",
        "MA25",
        "MA26",
        "MA27",
        "MA28",
        "MA30",
        "MA31",
        "MA32",
        "MA33",
        "MA34",
        "MA35",
        "MA36",
        "MA37",
        "MA39",
        "MA40",
        "MA41",
        "MA42",
        "MA43",
        "MA44",
        "MA45",
        "MA46",
        "MA47",
        "MA48",
        "MA50",
        "MA53",
        "MA54",
        "MA55",
        "MA56",
        "MA57",
        "MA58",
        "MA59",
        "MA60",
        "MA61",
        "MA62",
        "MA63",
        "MA64",
        "MA65",
        "MA66",
        "MA67",
        "MA68",
        "MA69",
        "MA70",
        "MA71",
        "MA72",
        "MA73",
        "MA74",
        "MA75",
        "MA76",
        "MA77",
        "MA79",
        "MA80",
        "MA81",
        "MA83",
        "MA84",
        "MA88",
        "MA89",
        "MA90",
        "MA91",
        "MA92",
        "MA93",
        "MA94",
        "MA96",
        "MA97",
        "MA99",
        "MA100",
        "MA103",
        "MA106",
        "MA107",
        "MA108",
        "MA109",
        "MA110",
        "MA111",
        "MA112",
        "MA113",
        "MA114",
        "MA115",
        "MA116",
        "MA117",
        "MA118",
        "MA120",
        "MA121",
        "MA122",
        "MA123",
        "MA125",
        "MA126",
        "MA128",
        "MA130",
        "MA131",
        "MA132",
        "MA133",
        "MA134",
        "N1",
        "N2",
        "N3",
        "N4",
        "N5",
        "N6",
        "N7",
        "N8",
        "N9",
        "N10",
        "N11",
        "N12",
        "N13",
        "N15",
        "N16",
        "N19",
        "N20",
        "N21",
        "N22",
        "N23",
        "N24",
        "N25",
        "N26",
        "N27",
        "N28",
        "N30",
        "N31",
        "N32",
        "N33",
        "N34",
        "N35",
        "N36",
        "N37",
        "N39",
        "N40",
        "N42",
        "N43",
        "N45",
        "N46",
        "N47",
        "N48",
        "N49",
        "N50",
        "N51",
        "N52",
        "N53",
        "N54",
        "N55",
        "N56",
        "N57",
        "N58",
        "N59",
        "N61",
        "N62",
        "N63",
        "N64",
        "N65",
        "N67",
        "N68",
        "N69",
        "N70",
        "N71",
        "N72",
        "N74",
        "N75",
        "N76",
        "N77",
        "N78",
        "N79",
        "N80",
        "N81",
        "N82",
        "N83",
        "N84",
        "N85",
        "N86",
        "N87",
        "N88",
        "N89",
        "N90",
        "N91",
        "N92",
        "N93",
        "N94",
        "N95",
        "N96",
        "N97",
        "N98",
        "N99",
        "N103",
        "N104",
        "N105",
        "N106",
        "N107",
        "N108",
        "N109",
        "N110",
        "N111",
        "N112",
        "N113",
        "N114",
        "N115",
        "N116",
        "N117",
        "N118",
        "N119",
        "N120",
        "N121",
        "N122",
        "N123",
        "N124",
        "N125",
        "N126",
        "N127",
        "N128",
        "N129",
        "N130",
        "N131",
        "N132",
        "N133",
        "N134",
        "N135",
        "N136",
        "N137",
        "N138",
        "N139",
        "N140",
        "N141",
        "N142",
        "N143",
        "N144",
        "N146",
        "N147",
        "N148",
        "N149",
        "N150",
        "N151",
        "N152",
        "N153",
        "N154",
        "N155",
        "N156",
        "N157",
        "N158",
        "N159",
        "N160",
        "N161",
        "N162",
        "N163",
        "N167",
        "N170",
        "N171",
        "N172",
        "N173",
        "N174",
        "N175",
        "N176",
        "N177",
        "N178",
        "N179",
        "N180",
        "N181",
        "N182",
        "N183",
        "N184",
        "N185",
        "N186",
        "N187",
        "N188",
        "N189",
        "N190",
        "N191",
        "N192",
        "N193",
        "N194",
        "N195",
        "N196",
        "N197",
        "N198",
        "N199",
        "N200",
        "N202",
        "N203",
        "N204",
        "N205",
        "N206",
        "N207",
        "N208",
        "N209",
        "N210",
        "N211",
        "N212",
        "N213",
        "N214",
        "N215",
        "N216",
        "N217",
        "N218",
        "N219",
        "N220",
        "N221",
        "N222",
        "N223",
        "N224",
        "N226",
        "N227",
        "N228",
        "N229",
        "N230",
        "N231",
        "N232",
        "N233",
        "N234",
        "N235",
        "N236",
        "N237",
        "N238",
        "N239",
        "N240",
        "N241",
        "N242",
        "N243",
        "N244",
        "N245",
        "N246",
        "N247",
        "N248",
        "N249",
        "N250",
        "N251",
        "N252",
        "N253",
        "N254",
        "N255",
        "N256",
        "N257",
        "N258",
        "N259",
        "N260",
        "N261",
        "N262",
        "N263",
        "N264",
        "N265",
        "N266",
        "N267",
        "N268",
        "N269",
        "N270",
        "N271",
        "N272",
        "N273",
        "N274",
        "N275",
        "N276",
        "N277",
        "N278",
        "N279",
        "N280",
        "N281",
        "N282",
        "N283",
        "N284",
        "N285",
        "N286",
        "N287",
        "N288",
        "N289",
        "N290",
        "N291",
        "N292",
        "N293",
        "N294",
        "N295",
        "N296",
        "N297",
        "N298",
        "N299",
        "N300",
        "N301",
        "N302",
        "N303",
        "N304",
        "N305",
        "N306",
        "N307",
        "N308",
        "N309",
        "N310",
        "N311",
        "N312",
        "N313",
        "N314",
        "N315",
        "N316",
        "N317",
        "N318",
        "N319",
        "N320",
        "N321",
        "N322",
        "N323",
        "N324",
        "N325",
        "N326",
        "N327",
        "N328",
        "N329",
        "N330",
        "N331",
        "N332",
        "N333",
        "N334",
        "N335",
        "N336",
        "N337",
        "N338",
        "N339",
        "N340",
        "N341",
        "N342",
        "N343",
        "N344",
        "N345",
        "N346",
        "N347",
        "N348",
        "N349",
        "N350",
        "N351",
        "N352",
        "N353",
        "N354",
        "N355",
        "N356",
        "N357",
        "N358",
        "N359",
        "N360",
        "N362",
        "N363",
        "N364",
        "N366",
        "N367",
        "N368",
        "N369",
        "N370",
        "N371",
        "N372",
        "N373",
        "N374",
        "N375",
        "N376",
        "N377",
        "N378",
        "N379",
        "N380",
        "N381",
        "N382",
        "N383",
        "N384",
        "N385",
        "N386",
        "N387",
        "N388",
        "N389",
        "N390",
        "N391",
        "N392",
        "N393",
        "N394",
        "N395",
        "N396",
        "N397",
        "N398",
        "N399",
        "N400",
        "N401",
        "N402",
        "N403",
        "N404",
        "N405",
        "N406",
        "N407",
        "N408",
        "N409",
        "N410",
        "N411",
        "N412",
        "N413",
        "N414",
        "N415",
        "N416",
        "N417",
        "N418",
        "N419",
        "N420",
        "N421",
        "N422",
        "N423",
        "N424",
        "N425",
        "N426",
        "N427",
        "N428",
        "N429",
        "N430",
        "N431",
        "N432",
        "N433",
        "N434",
        "N435",
        "N436",
        "N437",
        "N438",
        "N439",
        "N440",
        "N441",
        "N442",
        "N443",
        "N444",
        "N445",
        "N446",
        "N447",
        "N448",
        "N449",
        "N450",
        "N451",
        "N452",
        "N453",
        "N454",
        "N455",
        "N456",
        "N457",
        "N458",
        "N459",
        "N460",
        "N461",
        "N462",
        "N463",
        "N464",
        "N465",
        "N466",
        "N467",
        "N468",
        "N469",
        "N470",
        "N471",
        "N472",
        "N473",
        "N474",
        "N475",
        "N476",
        "N477",
        "N478",
        "N479",
        "N480",
        "N481",
        "N482",
        "N485",
        "N486",
        "N487",
        "N488",
        "N489",
        "N490",
        "N491",
        "N492",
        "N493",
        "N494",
        "N495",
        "N496",
        "N497",
        "N498",
        "N499",
        "N500",
        "N501",
        "N502",
        "N503",
        "N504",
        "N505",
        "N506",
        "N507",
        "N508",
        "N509",
        "N510",
        "N511",
        "N512",
        "N513",
        "N516",
        "N517",
        "N518",
        "N519",
        "N520",
        "N521",
        "N522",
        "N523",
        "N524",
        "N525",
        "N526",
        "N527",
        "N528",
        "N529",
        "N530",
        "N531",
        "N532",
        "N533",
        "N534",
        "N535",
        "N536",
        "N537",
        "N538",
        "N539",
        "N540",
        "N541",
        "N542",
        "N543",
        "N544",
        "N545",
        "N546",
        "N547",
        "N548",
        "N549",
        "N550",
        "N551",
        "N552",
        "N554",
        "N555",
        "N556",
        "N557",
        "N558",
        "N559",
        "N560",
        "N561",
        "N562",
        "N563",
        "N564",
        "N565",
        "N566",
        "N567",
        "N568",
        "N569",
        "N570",
        "N571",
        "N572",
        "N573",
        "N574",
        "N575",
        "N576",
        "N577",
        "N578",
        "N579",
        "N580",
        "N581",
        "N582",
        "N583",
        "N584",
        "N585",
        "N586",
        "N587",
        "N588",
        "N589",
        "N590",
        "N591",
        "N592",
        "N593",
        "N594",
        "N595",
        "N596",
        "N597",
        "N598",
        "N599",
        "N600",
        "N601",
        "N602",
        "N603",
        "N604",
        "N605",
        "N606",
        "N607",
        "N608",
        "N609",
        "N610",
        "N611",
        "N612",
        "N613",
        "N614",
        "N615",
        "N616",
        "N617",
        "N618",
        "N619",
        "N620",
        "N621",
        "N622",
        "N623",
        "N624",
        "N625",
        "N626",
        "N628",
        "N629",
        "N630",
        "N631",
        "N632",
        "N633",
        "N634",
        "N635",
        "N636",
        "N637",
        "N638",
        "N639",
        "N640",
        "N641",
        "N642",
        "N643",
        "N644",
        "N645",
        "N646",
        "N647",
        "N648",
        "N649",
        "N650",
        "N651",
        "N652",
        "N653",
        "N654",
        "N655",
        "N656",
        "N657",
        "N658",
        "N659",
        "N660",
        "N661",
        "N662",
        "N663",
        "N664",
        "N665",
        "N666",
        "N667",
        "N668",
        "N669",
        "N670",
        "N671",
        "N672",
        "N673",
        "N674",
        "N675",
        "N676",
        "N677",
        "N678",
        "N679",
        "N680",
        "N681",
        "N682",
        "N683",
        "N684",
        "N685",
        "N686",
        "N687",
        "N688",
        "N689",
        "N690",
        "N691",
        "N692",
        "N693",
        "N694",
        "N695",
        "N696",
        "N697",
        "N698",
        "N699",
        "N700",
        "N701",
        "N702",
        "N703",
        "N704",
        "N705",
        "N706",
        "N707",
        "N708",
        "N709",
        "N710",
        "N711",
        "N712",
        "N713",
        "N714",
        "N715",
        "N716",
        "N717",
        "N718",
        "N719",
        "N720",
        "N721",
        "N722",
        "N723",
        "N724",
        "N725",
        "N726",
        "N727",
        "N728",
        "N729",
        "N730",
        "N731",
        "N732",
        "N733",
        "N734",
        "N735",
        "N736",
        "N737",
        "N738",
        "N739",
        "N740",
        "N741",
        "N742",
        "N743",
        "N744",
        "N745",
        "N746",
        "N747",
        "N748",
        "N749",
        "N750",
        "N751",
        "N752",
        "N753",
        "N754",
        "N755",
        "N756",
        "N757",
        "N758",
        "N759",
        "N760",
        "N761",
        "N762",
        "N763",
        "N764",
        "N765",
        "N766",
        "N767",
        "N768",
        "N769",
        "N770",
        "N771",
        "N772",
        "N773",
        "N774",
        "N775",
        "N776",
        "N777",
        "N778",
        "N779",
        "N780",
        "N781",
        "N782",
        "N783",
        "N784",
        "N785",
        "N786",
        "N787",
        "N788",
        "N789",
        "N790",
        "N791",
        "N792",
        "N793",
        "N794",
        "N795",
        "N796",
        "N797",
        "N798",
        "N799",
        "N800",
        "N801",
        "N802",
        "N803",
        "N804",
        "N805",
        "N806",
        "N807",
        "N808",
        "N809",
        "N810",
        "N811",
        "N812",
        "N815",
        "N816",
        "N817",
        "N818",
        "N819",
        "N820",
        "N821",
        "N822",
        "N823",
        "N824",
        "N825",
        "N826",
        "N827",
        "N828",
        "N829",
        "N830",
        "N831",
        "N832",
        "N833",
        "N834",
        "N835",
        "N836",
        "N837",
        "N838",
        "N839",
        "N840",
        "N841",
        "N842",
        "N843",
        "N844",
        "N845",
        "N846",
        "N847",
        "N848",
        "N849",
        "N850",
        "N851",
        "N852",
        "N853",
        "N854",
        "N855",
        "N856",
        "N857",
        "N858",
        "N859",
        "N860",
    ]);

export declare namespace Rarc {
    type Raw =
        | "M1"
        | "M2"
        | "M3"
        | "M4"
        | "M5"
        | "M6"
        | "M7"
        | "M8"
        | "M9"
        | "M10"
        | "M11"
        | "M12"
        | "M13"
        | "M14"
        | "M15"
        | "M16"
        | "M17"
        | "M18"
        | "M19"
        | "M20"
        | "M21"
        | "M22"
        | "M23"
        | "M24"
        | "M25"
        | "M26"
        | "M27"
        | "M28"
        | "M29"
        | "M30"
        | "M31"
        | "M32"
        | "M36"
        | "M37"
        | "M38"
        | "M39"
        | "M40"
        | "M41"
        | "M42"
        | "M44"
        | "M45"
        | "M46"
        | "M47"
        | "M49"
        | "M50"
        | "M51"
        | "M52"
        | "M53"
        | "M54"
        | "M55"
        | "M56"
        | "M59"
        | "M60"
        | "M61"
        | "M62"
        | "M64"
        | "M65"
        | "M66"
        | "M67"
        | "M69"
        | "M70"
        | "M71"
        | "M73"
        | "M74"
        | "M75"
        | "M76"
        | "M77"
        | "M79"
        | "M80"
        | "M81"
        | "M82"
        | "M83"
        | "M84"
        | "M85"
        | "M86"
        | "M87"
        | "M89"
        | "M90"
        | "M91"
        | "M93"
        | "M94"
        | "M95"
        | "M96"
        | "M97"
        | "M99"
        | "M100"
        | "M102"
        | "M103"
        | "M104"
        | "M105"
        | "M107"
        | "M109"
        | "M111"
        | "M112"
        | "M113"
        | "M114"
        | "M115"
        | "M116"
        | "M117"
        | "M121"
        | "M122"
        | "M123"
        | "M124"
        | "M125"
        | "M126"
        | "M127"
        | "M129"
        | "M130"
        | "M131"
        | "M132"
        | "M133"
        | "M134"
        | "M135"
        | "M136"
        | "M137"
        | "M138"
        | "M139"
        | "M141"
        | "M142"
        | "M143"
        | "M144"
        | "MA01"
        | "MA02"
        | "MA04"
        | "MA07"
        | "MA08"
        | "MA09"
        | "MA10"
        | "MA12"
        | "MA13"
        | "MA14"
        | "MA15"
        | "MA16"
        | "MA17"
        | "MA18"
        | "MA19"
        | "MA20"
        | "MA21"
        | "MA22"
        | "MA23"
        | "MA24"
        | "MA25"
        | "MA26"
        | "MA27"
        | "MA28"
        | "MA30"
        | "MA31"
        | "MA32"
        | "MA33"
        | "MA34"
        | "MA35"
        | "MA36"
        | "MA37"
        | "MA39"
        | "MA40"
        | "MA41"
        | "MA42"
        | "MA43"
        | "MA44"
        | "MA45"
        | "MA46"
        | "MA47"
        | "MA48"
        | "MA50"
        | "MA53"
        | "MA54"
        | "MA55"
        | "MA56"
        | "MA57"
        | "MA58"
        | "MA59"
        | "MA60"
        | "MA61"
        | "MA62"
        | "MA63"
        | "MA64"
        | "MA65"
        | "MA66"
        | "MA67"
        | "MA68"
        | "MA69"
        | "MA70"
        | "MA71"
        | "MA72"
        | "MA73"
        | "MA74"
        | "MA75"
        | "MA76"
        | "MA77"
        | "MA79"
        | "MA80"
        | "MA81"
        | "MA83"
        | "MA84"
        | "MA88"
        | "MA89"
        | "MA90"
        | "MA91"
        | "MA92"
        | "MA93"
        | "MA94"
        | "MA96"
        | "MA97"
        | "MA99"
        | "MA100"
        | "MA103"
        | "MA106"
        | "MA107"
        | "MA108"
        | "MA109"
        | "MA110"
        | "MA111"
        | "MA112"
        | "MA113"
        | "MA114"
        | "MA115"
        | "MA116"
        | "MA117"
        | "MA118"
        | "MA120"
        | "MA121"
        | "MA122"
        | "MA123"
        | "MA125"
        | "MA126"
        | "MA128"
        | "MA130"
        | "MA131"
        | "MA132"
        | "MA133"
        | "MA134"
        | "N1"
        | "N2"
        | "N3"
        | "N4"
        | "N5"
        | "N6"
        | "N7"
        | "N8"
        | "N9"
        | "N10"
        | "N11"
        | "N12"
        | "N13"
        | "N15"
        | "N16"
        | "N19"
        | "N20"
        | "N21"
        | "N22"
        | "N23"
        | "N24"
        | "N25"
        | "N26"
        | "N27"
        | "N28"
        | "N30"
        | "N31"
        | "N32"
        | "N33"
        | "N34"
        | "N35"
        | "N36"
        | "N37"
        | "N39"
        | "N40"
        | "N42"
        | "N43"
        | "N45"
        | "N46"
        | "N47"
        | "N48"
        | "N49"
        | "N50"
        | "N51"
        | "N52"
        | "N53"
        | "N54"
        | "N55"
        | "N56"
        | "N57"
        | "N58"
        | "N59"
        | "N61"
        | "N62"
        | "N63"
        | "N64"
        | "N65"
        | "N67"
        | "N68"
        | "N69"
        | "N70"
        | "N71"
        | "N72"
        | "N74"
        | "N75"
        | "N76"
        | "N77"
        | "N78"
        | "N79"
        | "N80"
        | "N81"
        | "N82"
        | "N83"
        | "N84"
        | "N85"
        | "N86"
        | "N87"
        | "N88"
        | "N89"
        | "N90"
        | "N91"
        | "N92"
        | "N93"
        | "N94"
        | "N95"
        | "N96"
        | "N97"
        | "N98"
        | "N99"
        | "N103"
        | "N104"
        | "N105"
        | "N106"
        | "N107"
        | "N108"
        | "N109"
        | "N110"
        | "N111"
        | "N112"
        | "N113"
        | "N114"
        | "N115"
        | "N116"
        | "N117"
        | "N118"
        | "N119"
        | "N120"
        | "N121"
        | "N122"
        | "N123"
        | "N124"
        | "N125"
        | "N126"
        | "N127"
        | "N128"
        | "N129"
        | "N130"
        | "N131"
        | "N132"
        | "N133"
        | "N134"
        | "N135"
        | "N136"
        | "N137"
        | "N138"
        | "N139"
        | "N140"
        | "N141"
        | "N142"
        | "N143"
        | "N144"
        | "N146"
        | "N147"
        | "N148"
        | "N149"
        | "N150"
        | "N151"
        | "N152"
        | "N153"
        | "N154"
        | "N155"
        | "N156"
        | "N157"
        | "N158"
        | "N159"
        | "N160"
        | "N161"
        | "N162"
        | "N163"
        | "N167"
        | "N170"
        | "N171"
        | "N172"
        | "N173"
        | "N174"
        | "N175"
        | "N176"
        | "N177"
        | "N178"
        | "N179"
        | "N180"
        | "N181"
        | "N182"
        | "N183"
        | "N184"
        | "N185"
        | "N186"
        | "N187"
        | "N188"
        | "N189"
        | "N190"
        | "N191"
        | "N192"
        | "N193"
        | "N194"
        | "N195"
        | "N196"
        | "N197"
        | "N198"
        | "N199"
        | "N200"
        | "N202"
        | "N203"
        | "N204"
        | "N205"
        | "N206"
        | "N207"
        | "N208"
        | "N209"
        | "N210"
        | "N211"
        | "N212"
        | "N213"
        | "N214"
        | "N215"
        | "N216"
        | "N217"
        | "N218"
        | "N219"
        | "N220"
        | "N221"
        | "N222"
        | "N223"
        | "N224"
        | "N226"
        | "N227"
        | "N228"
        | "N229"
        | "N230"
        | "N231"
        | "N232"
        | "N233"
        | "N234"
        | "N235"
        | "N236"
        | "N237"
        | "N238"
        | "N239"
        | "N240"
        | "N241"
        | "N242"
        | "N243"
        | "N244"
        | "N245"
        | "N246"
        | "N247"
        | "N248"
        | "N249"
        | "N250"
        | "N251"
        | "N252"
        | "N253"
        | "N254"
        | "N255"
        | "N256"
        | "N257"
        | "N258"
        | "N259"
        | "N260"
        | "N261"
        | "N262"
        | "N263"
        | "N264"
        | "N265"
        | "N266"
        | "N267"
        | "N268"
        | "N269"
        | "N270"
        | "N271"
        | "N272"
        | "N273"
        | "N274"
        | "N275"
        | "N276"
        | "N277"
        | "N278"
        | "N279"
        | "N280"
        | "N281"
        | "N282"
        | "N283"
        | "N284"
        | "N285"
        | "N286"
        | "N287"
        | "N288"
        | "N289"
        | "N290"
        | "N291"
        | "N292"
        | "N293"
        | "N294"
        | "N295"
        | "N296"
        | "N297"
        | "N298"
        | "N299"
        | "N300"
        | "N301"
        | "N302"
        | "N303"
        | "N304"
        | "N305"
        | "N306"
        | "N307"
        | "N308"
        | "N309"
        | "N310"
        | "N311"
        | "N312"
        | "N313"
        | "N314"
        | "N315"
        | "N316"
        | "N317"
        | "N318"
        | "N319"
        | "N320"
        | "N321"
        | "N322"
        | "N323"
        | "N324"
        | "N325"
        | "N326"
        | "N327"
        | "N328"
        | "N329"
        | "N330"
        | "N331"
        | "N332"
        | "N333"
        | "N334"
        | "N335"
        | "N336"
        | "N337"
        | "N338"
        | "N339"
        | "N340"
        | "N341"
        | "N342"
        | "N343"
        | "N344"
        | "N345"
        | "N346"
        | "N347"
        | "N348"
        | "N349"
        | "N350"
        | "N351"
        | "N352"
        | "N353"
        | "N354"
        | "N355"
        | "N356"
        | "N357"
        | "N358"
        | "N359"
        | "N360"
        | "N362"
        | "N363"
        | "N364"
        | "N366"
        | "N367"
        | "N368"
        | "N369"
        | "N370"
        | "N371"
        | "N372"
        | "N373"
        | "N374"
        | "N375"
        | "N376"
        | "N377"
        | "N378"
        | "N379"
        | "N380"
        | "N381"
        | "N382"
        | "N383"
        | "N384"
        | "N385"
        | "N386"
        | "N387"
        | "N388"
        | "N389"
        | "N390"
        | "N391"
        | "N392"
        | "N393"
        | "N394"
        | "N395"
        | "N396"
        | "N397"
        | "N398"
        | "N399"
        | "N400"
        | "N401"
        | "N402"
        | "N403"
        | "N404"
        | "N405"
        | "N406"
        | "N407"
        | "N408"
        | "N409"
        | "N410"
        | "N411"
        | "N412"
        | "N413"
        | "N414"
        | "N415"
        | "N416"
        | "N417"
        | "N418"
        | "N419"
        | "N420"
        | "N421"
        | "N422"
        | "N423"
        | "N424"
        | "N425"
        | "N426"
        | "N427"
        | "N428"
        | "N429"
        | "N430"
        | "N431"
        | "N432"
        | "N433"
        | "N434"
        | "N435"
        | "N436"
        | "N437"
        | "N438"
        | "N439"
        | "N440"
        | "N441"
        | "N442"
        | "N443"
        | "N444"
        | "N445"
        | "N446"
        | "N447"
        | "N448"
        | "N449"
        | "N450"
        | "N451"
        | "N452"
        | "N453"
        | "N454"
        | "N455"
        | "N456"
        | "N457"
        | "N458"
        | "N459"
        | "N460"
        | "N461"
        | "N462"
        | "N463"
        | "N464"
        | "N465"
        | "N466"
        | "N467"
        | "N468"
        | "N469"
        | "N470"
        | "N471"
        | "N472"
        | "N473"
        | "N474"
        | "N475"
        | "N476"
        | "N477"
        | "N478"
        | "N479"
        | "N480"
        | "N481"
        | "N482"
        | "N485"
        | "N486"
        | "N487"
        | "N488"
        | "N489"
        | "N490"
        | "N491"
        | "N492"
        | "N493"
        | "N494"
        | "N495"
        | "N496"
        | "N497"
        | "N498"
        | "N499"
        | "N500"
        | "N501"
        | "N502"
        | "N503"
        | "N504"
        | "N505"
        | "N506"
        | "N507"
        | "N508"
        | "N509"
        | "N510"
        | "N511"
        | "N512"
        | "N513"
        | "N516"
        | "N517"
        | "N518"
        | "N519"
        | "N520"
        | "N521"
        | "N522"
        | "N523"
        | "N524"
        | "N525"
        | "N526"
        | "N527"
        | "N528"
        | "N529"
        | "N530"
        | "N531"
        | "N532"
        | "N533"
        | "N534"
        | "N535"
        | "N536"
        | "N537"
        | "N538"
        | "N539"
        | "N540"
        | "N541"
        | "N542"
        | "N543"
        | "N544"
        | "N545"
        | "N546"
        | "N547"
        | "N548"
        | "N549"
        | "N550"
        | "N551"
        | "N552"
        | "N554"
        | "N555"
        | "N556"
        | "N557"
        | "N558"
        | "N559"
        | "N560"
        | "N561"
        | "N562"
        | "N563"
        | "N564"
        | "N565"
        | "N566"
        | "N567"
        | "N568"
        | "N569"
        | "N570"
        | "N571"
        | "N572"
        | "N573"
        | "N574"
        | "N575"
        | "N576"
        | "N577"
        | "N578"
        | "N579"
        | "N580"
        | "N581"
        | "N582"
        | "N583"
        | "N584"
        | "N585"
        | "N586"
        | "N587"
        | "N588"
        | "N589"
        | "N590"
        | "N591"
        | "N592"
        | "N593"
        | "N594"
        | "N595"
        | "N596"
        | "N597"
        | "N598"
        | "N599"
        | "N600"
        | "N601"
        | "N602"
        | "N603"
        | "N604"
        | "N605"
        | "N606"
        | "N607"
        | "N608"
        | "N609"
        | "N610"
        | "N611"
        | "N612"
        | "N613"
        | "N614"
        | "N615"
        | "N616"
        | "N617"
        | "N618"
        | "N619"
        | "N620"
        | "N621"
        | "N622"
        | "N623"
        | "N624"
        | "N625"
        | "N626"
        | "N628"
        | "N629"
        | "N630"
        | "N631"
        | "N632"
        | "N633"
        | "N634"
        | "N635"
        | "N636"
        | "N637"
        | "N638"
        | "N639"
        | "N640"
        | "N641"
        | "N642"
        | "N643"
        | "N644"
        | "N645"
        | "N646"
        | "N647"
        | "N648"
        | "N649"
        | "N650"
        | "N651"
        | "N652"
        | "N653"
        | "N654"
        | "N655"
        | "N656"
        | "N657"
        | "N658"
        | "N659"
        | "N660"
        | "N661"
        | "N662"
        | "N663"
        | "N664"
        | "N665"
        | "N666"
        | "N667"
        | "N668"
        | "N669"
        | "N670"
        | "N671"
        | "N672"
        | "N673"
        | "N674"
        | "N675"
        | "N676"
        | "N677"
        | "N678"
        | "N679"
        | "N680"
        | "N681"
        | "N682"
        | "N683"
        | "N684"
        | "N685"
        | "N686"
        | "N687"
        | "N688"
        | "N689"
        | "N690"
        | "N691"
        | "N692"
        | "N693"
        | "N694"
        | "N695"
        | "N696"
        | "N697"
        | "N698"
        | "N699"
        | "N700"
        | "N701"
        | "N702"
        | "N703"
        | "N704"
        | "N705"
        | "N706"
        | "N707"
        | "N708"
        | "N709"
        | "N710"
        | "N711"
        | "N712"
        | "N713"
        | "N714"
        | "N715"
        | "N716"
        | "N717"
        | "N718"
        | "N719"
        | "N720"
        | "N721"
        | "N722"
        | "N723"
        | "N724"
        | "N725"
        | "N726"
        | "N727"
        | "N728"
        | "N729"
        | "N730"
        | "N731"
        | "N732"
        | "N733"
        | "N734"
        | "N735"
        | "N736"
        | "N737"
        | "N738"
        | "N739"
        | "N740"
        | "N741"
        | "N742"
        | "N743"
        | "N744"
        | "N745"
        | "N746"
        | "N747"
        | "N748"
        | "N749"
        | "N750"
        | "N751"
        | "N752"
        | "N753"
        | "N754"
        | "N755"
        | "N756"
        | "N757"
        | "N758"
        | "N759"
        | "N760"
        | "N761"
        | "N762"
        | "N763"
        | "N764"
        | "N765"
        | "N766"
        | "N767"
        | "N768"
        | "N769"
        | "N770"
        | "N771"
        | "N772"
        | "N773"
        | "N774"
        | "N775"
        | "N776"
        | "N777"
        | "N778"
        | "N779"
        | "N780"
        | "N781"
        | "N782"
        | "N783"
        | "N784"
        | "N785"
        | "N786"
        | "N787"
        | "N788"
        | "N789"
        | "N790"
        | "N791"
        | "N792"
        | "N793"
        | "N794"
        | "N795"
        | "N796"
        | "N797"
        | "N798"
        | "N799"
        | "N800"
        | "N801"
        | "N802"
        | "N803"
        | "N804"
        | "N805"
        | "N806"
        | "N807"
        | "N808"
        | "N809"
        | "N810"
        | "N811"
        | "N812"
        | "N815"
        | "N816"
        | "N817"
        | "N818"
        | "N819"
        | "N820"
        | "N821"
        | "N822"
        | "N823"
        | "N824"
        | "N825"
        | "N826"
        | "N827"
        | "N828"
        | "N829"
        | "N830"
        | "N831"
        | "N832"
        | "N833"
        | "N834"
        | "N835"
        | "N836"
        | "N837"
        | "N838"
        | "N839"
        | "N840"
        | "N841"
        | "N842"
        | "N843"
        | "N844"
        | "N845"
        | "N846"
        | "N847"
        | "N848"
        | "N849"
        | "N850"
        | "N851"
        | "N852"
        | "N853"
        | "N854"
        | "N855"
        | "N856"
        | "N857"
        | "N858"
        | "N859"
        | "N860";
}