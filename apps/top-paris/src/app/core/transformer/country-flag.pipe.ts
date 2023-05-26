import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform{
    transform(value: string) {
        return COUNTRY_ISO_CODE.find(country=> country.Pays.toLowerCase() === value.toLowerCase())?.ISO2.toLowerCase()
    }
}

const COUNTRY_ISO_CODE = [
    {
      "Pays": "Afghanistan",
      "ISO2": "AF",
      "ISO3": "AFG",
      "ISOON": "004"
    },
    {
      "Pays": "Îles Aland",
      "ISO2": "AX",
      "ISO3": "ALA",
      "ISOON": 248
    },
    {
      "Pays": "Albanie",
      "ISO2": "AL",
      "ISO3": "ALB",
      "ISOON": "008"
    },
    {
      "Pays": "Algérie",
      "ISO2": "DZ",
      "ISO3": "DZA",
      "ISOON": "012"
    },
    {
      "Pays": "Samoa américaines",
      "ISO2": "AS",
      "ISO3": "ASM",
      "ISOON": "016"
    },
    {
      "Pays": "Andorre",
      "ISO2": "AD",
      "ISO3": "ET",
      "ISOON": "020"
    },
    {
      "Pays": "Angola",
      "ISO2": "AO",
      "ISO3": "AGO",
      "ISOON": "024"
    },
    {
      "Pays": "Anguilla",
      "ISO2": "AI",
      "ISO3": "AIA",
      "ISOON": 660
    },
    {
      "Pays": "Antarctique",
      "ISO2": "AQ",
      "ISO3": "ATA",
      "ISOON": "010"
    },
    {
      "Pays": "Antigua-et-Barbuda",
      "ISO2": "AG",
      "ISO3": "ATG",
      "ISOON": "028"
    },
    {
      "Pays": "Argentine",
      "ISO2": "AR",
      "ISO3": "ARG",
      "ISOON": "032"
    },
    {
      "Pays": "Arménie",
      "ISO2": "AM",
      "ISO3": "ARM",
      "ISOON": "051"
    },
    {
      "Pays": "Aruba",
      "ISO2": "AW",
      "ISO3": "ABW",
      "ISOON": 533
    },
    {
      "Pays": "Australie",
      "ISO2": "AU",
      "ISO3": "AUS",
      "ISOON": "036"
    },
    {
      "Pays": "Autriche",
      "ISO2": "AT",
      "ISO3": "AUT",
      "ISOON": "040"
    },
    {
      "Pays": "Azerbaïdjan",
      "ISO2": "AZ",
      "ISO3": "AZE",
      "ISOON": "031"
    },
    {
      "Pays": "Bahamas",
      "ISO2": "BS",
      "ISO3": "BHS",
      "ISOON": "044"
    },
    {
      "Pays": "Bahreïn",
      "ISO2": "BH",
      "ISO3": "BHR",
      "ISOON": "048"
    },
    {
      "Pays": "Bangladesh",
      "ISO2": "BD",
      "ISO3": "BGD",
      "ISOON": "050"
    },
    {
      "Pays": "Barbade",
      "ISO2": "BB",
      "ISO3": "BRB",
      "ISOON": "052"
    },
    {
      "Pays": "Biélorussie",
      "ISO2": "BY",
      "ISO3": "BLR",
      "ISOON": 112
    },
    {
      "Pays": "Belgique",
      "ISO2": "BE",
      "ISO3": "BEL",
      "ISOON": "056"
    },
    {
      "Pays": "Belize",
      "ISO2": "BZ",
      "ISO3": "BLZ 084",
      "ISOON": ""
    },
    {
      "Pays": "Bénin",
      "ISO2": "BJ",
      "ISO3": "BEN",
      "ISOON": 204
    },
    {
      "Pays": "Bermudes",
      "ISO2": "BM",
      "ISO3": "BMU",
      "ISOON": "060"
    },
    {
      "Pays": "Bhoutan",
      "ISO2": "BT",
      "ISO3": "BTN",
      "ISOON": "064"
    },
    {
      "Pays": "Bolivie",
      "ISO2": "BO",
      "ISO3": "BOL",
      "ISOON": "068"
    },
    {
      "Pays": "Bosnie-Herzégovine",
      "ISO2": "BA",
      "ISO3": "BIH",
      "ISOON": "070"
    },
    {
      "Pays": "Botswana",
      "ISO2": "BW",
      "ISO3": "BWA 072",
      "ISOON": ""
    },
    {
      "Pays": "L'île Bouvet",
      "ISO2": "BV",
      "ISO3": "BVT",
      "ISOON": "074"
    },
    {
      "Pays": "Brésil",
      "ISO2": "BR",
      "ISO3": "BRA",
      "ISOON": "076"
    },
    {
      "Pays": "British Virgin Islands",
      "ISO2": "VG",
      "ISO3": "VGB",
      "ISOON": "092"
    },
    {
      "Pays": "Territoire britannique de l'océan Indien",
      "ISO2": "IO",
      "ISO3": "IOT",
      "ISOON": "086"
    },
    {
      "Pays": "Brunei Darussalam",
      "ISO2": "BN",
      "ISO3": "BRN",
      "ISOON": "096"
    },
    {
      "Pays": "Bulgarie",
      "ISO2": "BG",
      "ISO3": "BGR",
      "ISOON": 100
    },
    {
      "Pays": "Burkina Faso",
      "ISO2": "BF",
      "ISO3": "BFA",
      "ISOON": 854
    },
    {
      "Pays": "Burundi",
      "ISO2": "BI",
      "ISO3": "BDI",
      "ISOON": 108
    },
    {
      "Pays": "Cambodge",
      "ISO2": "KH",
      "ISO3": "KHM",
      "ISOON": 116
    },
    {
      "Pays": "Cameroun",
      "ISO2": "CM",
      "ISO3": "CMR",
      "ISOON": 120
    },
    {
      "Pays": "Canada",
      "ISO2": "CA",
      "ISO3": "CAN",
      "ISOON": 124
    },
    {
      "Pays": "Cap-Vert",
      "ISO2": "CV",
      "ISO3": "CPV",
      "ISOON": 132
    },
    {
      "Pays": "Iles Cayman",
      "ISO2": "KY",
      "ISO3": "CYM",
      "ISOON": 136
    },
    {
      "Pays": "République centrafricaine",
      "ISO2": "CF",
      "ISO3": "CAF",
      "ISOON": 140
    },
    {
      "Pays": "Tchad",
      "ISO2": "TD",
      "ISO3": "TCD",
      "ISOON": 148
    },
    {
      "Pays": "Chili",
      "ISO2": "CL",
      "ISO3": "CHL",
      "ISOON": 152
    },
    {
      "Pays": "Chine",
      "ISO2": "CN",
      "ISO3": "CHN",
      "ISOON": 156
    },
    {
      "Pays": "Hong Kong Région administrative spéciale de la Chine",
      "ISO2": "HK",
      "ISO3": "HKG",
      "ISOON": 344
    },
    {
      "Pays": "Macao région administrative spéciale de la Chine",
      "ISO2": "MO",
      "ISO3": "MAC",
      "ISOON": 446
    },
    {
      "Pays": "Christmas Island",
      "ISO2": "CX",
      "ISO3": "CXR",
      "ISOON": 162
    },
    {
      "Pays": "Îles Cocos (Keeling)",
      "ISO2": "CC",
      "ISO3": "CCK",
      "ISOON": 166
    },
    {
      "Pays": "Colombie",
      "ISO2": "CO",
      "ISO3": "COL",
      "ISOON": 170
    },
    {
      "Pays": "Comores",
      "ISO2": "KM",
      "ISO3": "COM",
      "ISOON": 174
    },
    {
      "Pays": "Congo (Brazzaville)",
      "ISO2": "CG",
      "ISO3": "COG",
      "ISOON": 178
    },
    {
      "Pays": "Congo République démocratique du",
      "ISO2": "CD",
      "ISO3": "COD",
      "ISOON": 180
    },
    {
      "Pays": "Îles Cook",
      "ISO2": "CK",
      "ISO3": "COK",
      "ISOON": 184
    },
    {
      "Pays": "Costa Rica",
      "ISO2": "CR",
      "ISO3": "CRI",
      "ISOON": 188
    },
    {
      "Pays": "Côte d'Ivoire",
      "ISO2": "CI",
      "ISO3": "CIV",
      "ISOON": 384
    },
    {
      "Pays": "Croatie",
      "ISO2": "RH",
      "ISO3": "VRC",
      "ISOON": 191
    },
    {
      "Pays": "Cuba",
      "ISO2": "CU",
      "ISO3": "CUB",
      "ISOON": 192
    },
    {
      "Pays": "Chypre",
      "ISO2": "CY",
      "ISO3": "CYP",
      "ISOON": 196
    },
    {
      "Pays": "République tchèque",
      "ISO2": "CZ",
      "ISO3": "CZE",
      "ISOON": 203
    },
    {
      "Pays": "Danemark",
      "ISO2": "DK",
      "ISO3": "DNK",
      "ISOON": 208
    },
    {
      "Pays": "Djibouti",
      "ISO2": "DJ",
      "ISO3": "DJI",
      "ISOON": 262
    },
    {
      "Pays": "Dominique",
      "ISO2": "DM",
      "ISO3": "DMA",
      "ISOON": 212
    },
    {
      "Pays": "République dominicaine",
      "ISO2": "DO",
      "ISO3": "DOM",
      "ISOON": 214
    },
    {
      "Pays": "Equateur",
      "ISO2": "CE",
      "ISO3": "ECU",
      "ISOON": 218
    },
    {
      "Pays": "Egypte",
      "ISO2": "EG",
      "ISO3": "EGY",
      "ISOON": 818
    },
    {
      "Pays": "El Salvador",
      "ISO2": "SV",
      "ISO3": "SLV",
      "ISOON": 222
    },
    {
      "Pays": "Guinée équatoriale",
      "ISO2": "GQ",
      "ISO3": "GNQ",
      "ISOON": 226
    },
    {
      "Pays": "Érythrée",
      "ISO2": "ER",
      "ISO3": "ERI",
      "ISOON": 232
    },
    {
      "Pays": "Estonie",
      "ISO2": "EE",
      "ISO3": "HNE",
      "ISOON": 233
    },
    {
      "Pays": "Éthiopie",
      "ISO2": "ET",
      "ISO3": "ETH",
      "ISOON": 231
    },
    {
      "Pays": "Îles Falkland (Malvinas)",
      "ISO2": "FK",
      "ISO3": "FLK",
      "ISOON": 238
    },
    {
      "Pays": "Îles Féroé",
      "ISO2": "FO",
      "ISO3": "BOF",
      "ISOON": 234
    },
    {
      "Pays": "Fidji",
      "ISO2": "FJ",
      "ISO3": "FJI",
      "ISOON": 242
    },
    {
      "Pays": "Finlande",
      "ISO2": "FI",
      "ISO3": "FIN",
      "ISOON": 246
    },
    {
      "Pays": "France",
      "ISO2": "FR",
      "ISO3": "FRA",
      "ISOON": 250
    },
    {
      "Pays": "Guyane française",
      "ISO2": "GF",
      "ISO3": "FSI",
      "ISOON": 254
    },
    {
      "Pays": "Polynésie française",
      "ISO2": "PF",
      "ISO3": "PYF",
      "ISOON": 258
    },
    {
      "Pays": "Terres australes françaises",
      "ISO2": "TF",
      "ISO3": "ATF",
      "ISOON": 260
    },
    {
      "Pays": "Gabon",
      "ISO2": "Géorgie",
      "ISO3": "GAB",
      "ISOON": 266
    },
    {
      "Pays": "Gambie",
      "ISO2": "GM",
      "ISO3": "GMB",
      "ISOON": 270
    },
    {
      "Pays": "Géorgie",
      "ISO2": "GE",
      "ISO3": "GEO",
      "ISOON": 268
    },
    {
      "Pays": "Allemagne",
      "ISO2": "DE",
      "ISO3": "DEU",
      "ISOON": 276
    },
    {
      "Pays": "Ghana",
      "ISO2": "GH",
      "ISO3": "GHA",
      "ISOON": 288
    },
    {
      "Pays": "Gibraltar",
      "ISO2": "GI",
      "ISO3": "GIB",
      "ISOON": 292
    },
    {
      "Pays": "Grèce",
      "ISO2": "GR",
      "ISO3": "GRC",
      "ISOON": 300
    },
    {
      "Pays": "Groenland",
      "ISO2": "GL",
      "ISO3": "GRL",
      "ISOON": 304
    },
    {
      "Pays": "Grenade",
      "ISO2": "GD",
      "ISO3": "GRD",
      "ISOON": 308
    },
    {
      "Pays": "Guadeloupe",
      "ISO2": "GP",
      "ISO3": "GLP",
      "ISOON": 312
    },
    {
      "Pays": "Guam",
      "ISO2": "GU",
      "ISO3": "GUM",
      "ISOON": 316
    },
    {
      "Pays": "Guatemala",
      "ISO2": "GT",
      "ISO3": "GTM",
      "ISOON": 320
    },
    {
      "Pays": "Guernesey",
      "ISO2": "GG",
      "ISO3": "GGY",
      "ISOON": 831
    },
    {
      "Pays": "Guinée",
      "ISO2": "GN",
      "ISO3": "GIN",
      "ISOON": 324
    },
    {
      "Pays": "Guinée-Bissau",
      "ISO2": "GW",
      "ISO3": "GNB",
      "ISOON": 624
    },
    {
      "Pays": "Guyane",
      "ISO2": "GY",
      "ISO3": "GUY",
      "ISOON": 328
    },
    {
      "Pays": "Haïti",
      "ISO2": "HT",
      "ISO3": "HTI",
      "ISOON": 332
    },
    {
      "Pays": "Entendu l'île et des îles McDonald",
      "ISO2": "HM",
      "ISO3": "HMD",
      "ISOON": 334
    },
    {
      "Pays": "Saint-Siège (Cité du Vatican)",
      "ISO2": "VA",
      "ISO3": "TVA",
      "ISOON": 336
    },
    {
      "Pays": "Honduras",
      "ISO2": "HN",
      "ISO3": "HND",
      "ISOON": 340
    },
    {
      "Pays": "Hongrie",
      "ISO2": "HU",
      "ISO3": "HUN",
      "ISOON": 348
    },
    {
      "Pays": "Islande",
      "ISO2": "IS",
      "ISO3": "ISL",
      "ISOON": 352
    },
    {
      "Pays": "Inde",
      "ISO2": "IN",
      "ISO3": "IND",
      "ISOON": 356
    },
    {
      "Pays": "Indonésie",
      "ISO2": "ID",
      "ISO3": "IDN",
      "ISOON": 360
    },
    {
      "Pays": "Iran République islamique d'",
      "ISO2": "IR",
      "ISO3": "IRN",
      "ISOON": 364
    },
    {
      "Pays": "Irak",
      "ISO2": "IQ",
      "ISO3": "IRQ",
      "ISOON": 368
    },
    {
      "Pays": "Irlande",
      "ISO2": "IE",
      "ISO3": "IRL",
      "ISOON": 372
    },
    {
      "Pays": "Ile de Man",
      "ISO2": "IM",
      "ISO3": "IMN",
      "ISOON": 833
    },
    {
      "Pays": "Israël",
      "ISO2": "IL",
      "ISO3": "ISR",
      "ISOON": 376
    },
    {
      "Pays": "Italie",
      "ISO2": "IT",
      "ISO3": "ITA",
      "ISOON": 380
    },
    {
      "Pays": "Jamaïque",
      "ISO2": "JM",
      "ISO3": "JAM",
      "ISOON": 388
    },
    {
      "Pays": "Japon",
      "ISO2": "JP",
      "ISO3": "JPN",
      "ISOON": 392
    },
    {
      "Pays": "Jersey",
      "ISO2": "JE",
      "ISO3": "JEY",
      "ISOON": 832
    },
    {
      "Pays": "Jordanie",
      "ISO2": "JO",
      "ISO3": "JOR",
      "ISOON": 400
    },
    {
      "Pays": "Kazakhstan",
      "ISO2": "KZ",
      "ISO3": "KAZ",
      "ISOON": 398
    },
    {
      "Pays": "Kenya",
      "ISO2": "KE",
      "ISO3": "KEN",
      "ISOON": 404
    },
    {
      "Pays": "Kiribati",
      "ISO2": "KI",
      "ISO3": "KIR",
      "ISOON": 296
    },
    {
      "Pays": "Corée République populaire démocratique de",
      "ISO2": "KP",
      "ISO3": "PRK",
      "ISOON": 408
    },
    {
      "Pays": "Corée République de",
      "ISO2": "KR",
      "ISO3": "KOR",
      "ISOON": 410
    },
    {
      "Pays": "Koweït",
      "ISO2": "KW",
      "ISO3": "KWT",
      "ISOON": 414
    },
    {
      "Pays": "Kirghizistan",
      "ISO2": "KG",
      "ISO3": "KGZ",
      "ISOON": 417
    },
    {
      "Pays": "République démocratique populaire lao",
      "ISO2": "LA",
      "ISO3": "AJO",
      "ISOON": 418
    },
    {
      "Pays": "Lettonie",
      "ISO2": "LV",
      "ISO3": "LVA",
      "ISOON": 428
    },
    {
      "Pays": "Liban",
      "ISO2": "LB",
      "ISO3": "LBN",
      "ISOON": 422
    },
    {
      "Pays": "Lesotho",
      "ISO2": "LS",
      "ISO3": "LSO",
      "ISOON": 426
    },
    {
      "Pays": "Libéria",
      "ISO2": "LR",
      "ISO3": "LBR",
      "ISOON": "??430"
    },
    {
      "Pays": "Libye",
      "ISO2": "LY",
      "ISO3": "LBY",
      "ISOON": 434
    },
    {
      "Pays": "Liechtenstein",
      "ISO2": "LI",
      "ISO3": "LIE",
      "ISOON": 438
    },
    {
      "Pays": "Lituanie",
      "ISO2": "LT",
      "ISO3": "LTU",
      "ISOON": 440
    },
    {
      "Pays": "Luxembourg",
      "ISO2": "LU",
      "ISO3": "LUX",
      "ISOON": 442
    },
    {
      "Pays": "Macédoine République de",
      "ISO2": "MK",
      "ISO3": "MKD",
      "ISOON": 807
    },
    {
      "Pays": "Madagascar",
      "ISO2": "MG",
      "ISO3": "MDG",
      "ISOON": 450
    },
    {
      "Pays": "Malawi",
      "ISO2": "MW",
      "ISO3": "MWI",
      "ISOON": 454
    },
    {
      "Pays": "Malaisie",
      "ISO2": "MY",
      "ISO3": "MYS",
      "ISOON": 458
    },
    {
      "Pays": "Maldives",
      "ISO2": "MV",
      "ISO3": "MDV",
      "ISOON": 462
    },
    {
      "Pays": "Mali",
      "ISO2": "ML",
      "ISO3": "MLI",
      "ISOON": 466
    },
    {
      "Pays": "Malte",
      "ISO2": "MT",
      "ISO3": "MLT",
      "ISOON": 470
    },
    {
      "Pays": "Iles Marshall",
      "ISO2": "MH",
      "ISO3": "MHL",
      "ISOON": 584
    },
    {
      "Pays": "Martinique",
      "ISO2": "MQ",
      "ISO3": "MTQ",
      "ISOON": 474
    },
    {
      "Pays": "Mauritanie",
      "ISO2": "MR",
      "ISO3": "MRT",
      "ISOON": 478
    },
    {
      "Pays": "Maurice",
      "ISO2": "MU",
      "ISO3": "MUS",
      "ISOON": 480
    },
    {
      "Pays": "Mayotte",
      "ISO2": "YT",
      "ISO3": "CEST",
      "ISOON": 175
    },
    {
      "Pays": "Mexique",
      "ISO2": "MX",
      "ISO3": "MEX",
      "ISOON": 484
    },
    {
      "Pays": "Moldavie",
      "ISO2": "MD",
      "ISO3": "MDA",
      "ISOON": 498
    },
    {
      "Pays": "Monaco",
      "ISO2": "MC",
      "ISO3": "AGC",
      "ISOON": 492
    },
    {
      "Pays": "Mongolie",
      "ISO2": "MN",
      "ISO3": "MNG",
      "ISOON": 496
    },
    {
      "Pays": "Monténégro",
      "ISO2": "ME",
      "ISO3": "MNE",
      "ISOON": 499
    },
    {
      "Pays": "Montserrat",
      "ISO2": "MS",
      "ISO3": "MSR",
      "ISOON": 500
    },
    {
      "Pays": "Maroc",
      "ISO2": "MA",
      "ISO3": "MAR",
      "ISOON": 504
    },
    {
      "Pays": "Mozambique",
      "ISO2": "MZ",
      "ISO3": "MOZ",
      "ISOON": 508
    },
    {
      "Pays": "Myanmar",
      "ISO2": "MM",
      "ISO3": "MMR",
      "ISOON": 104
    },
    {
      "Pays": "Namibie",
      "ISO2": "NA",
      "ISO3": "NAM",
      "ISOON": 516
    },
    {
      "Pays": "Nauru",
      "ISO2": "NR",
      "ISO3": "NRU",
      "ISOON": 520
    },
    {
      "Pays": "Népal",
      "ISO2": "NP",
      "ISO3": "NPL",
      "ISOON": 524
    },
    {
      "Pays": "Pays-Bas",
      "ISO2": "NL",
      "ISO3": "NLD",
      "ISOON": 528
    },
    {
      "Pays": "Antilles néerlandaises",
      "ISO2": "AN",
      "ISO3": "ANT",
      "ISOON": 530
    },
    {
      "Pays": "Nouvelle-Calédonie",
      "ISO2": "NC",
      "ISO3": "NCL",
      "ISOON": 540
    },
    {
      "Pays": "Nouvelle-Zélande",
      "ISO2": "NZ",
      "ISO3": "NZL",
      "ISOON": 554
    },
    {
      "Pays": "Nicaragua",
      "ISO2": "NI",
      "ISO3": "NIC",
      "ISOON": 558
    },
    {
      "Pays": "Niger",
      "ISO2": "NE",
      "ISO3": "TNS",
      "ISOON": 562
    },
    {
      "Pays": "Nigeria",
      "ISO2": "NG",
      "ISO3": "NGA",
      "ISOON": 566
    },
    {
      "Pays": "Niue",
      "ISO2": "NU",
      "ISO3": "NIU",
      "ISOON": 570
    },
    {
      "Pays": "L'île de Norfolk",
      "ISO2": "NF",
      "ISO3": "NFK",
      "ISOON": 574
    },
    {
      "Pays": "Îles Mariannes du Nord",
      "ISO2": "MP",
      "ISO3": "MNP",
      "ISOON": 580
    },
    {
      "Pays": "Norvège",
      "ISO2": "NO",
      "ISO3": "NOR",
      "ISOON": 578
    },
    {
      "Pays": "Oman",
      "ISO2": "l'OM",
      "ISO3": "OMN",
      "ISOON": 512
    },
    {
      "Pays": "Pakistan",
      "ISO2": "PK",
      "ISO3": "PAK",
      "ISOON": 586
    },
    {
      "Pays": "Palau",
      "ISO2": "PW",
      "ISO3": "PLW",
      "ISOON": 585
    },
    {
      "Pays": "Territoires palestiniens (occupés)",
      "ISO2": "PS",
      "ISO3": "PSE",
      "ISOON": 275
    },
    {
      "Pays": "Panama",
      "ISO2": "PA",
      "ISO3": "PAN",
      "ISOON": 591
    },
    {
      "Pays": "Papouasie-Nouvelle-Guinée",
      "ISO2": "PG",
      "ISO3": "PNG",
      "ISOON": 598
    },
    {
      "Pays": "Paraguay",
      "ISO2": "PY",
      "ISO3": "PRY",
      "ISOON": 600
    },
    {
      "Pays": "Pérou",
      "ISO2": "PE",
      "ISO3": "PER",
      "ISOON": 604
    },
    {
      "Pays": "Philippines",
      "ISO2": "PH",
      "ISO3": "PHL",
      "ISOON": 608
    },
    {
      "Pays": "Pitcairn",
      "ISO2": "PN",
      "ISO3": "PCN",
      "ISOON": 612
    },
    {
      "Pays": "Pologne",
      "ISO2": "PL",
      "ISO3": "POL",
      "ISOON": 616
    },
    {
      "Pays": "Portugal",
      "ISO2": "PT",
      "ISO3": "PRT",
      "ISOON": 620
    },
    {
      "Pays": "Puerto Rico",
      "ISO2": "PR",
      "ISO3": "PRI",
      "ISOON": 630
    },
    {
      "Pays": "Qatar",
      "ISO2": "QA",
      "ISO3": "QAT",
      "ISOON": 634
    },
    {
      "Pays": "Réunion",
      "ISO2": "RE",
      "ISO3": "REU",
      "ISOON": 638
    },
    {
      "Pays": "Roumanie",
      "ISO2": "RO",
      "ISO3": "ROU",
      "ISOON": 642
    },
    {
      "Pays": "Fédération de Russie",
      "ISO2": "RU",
      "ISO3": "RUS",
      "ISOON": 643
    },
    {
      "Pays": "Rwanda",
      "ISO2": "RW",
      "ISO3": "RWA",
      "ISOON": 646
    },
    {
      "Pays": "Saint-Barthélemy",
      "ISO2": "BL",
      "ISO3": "FR",
      "ISOON": 652
    },
    {
      "Pays": "Sainte-Hélène",
      "ISO2": "SH",
      "ISO3": "SHN",
      "ISOON": 654
    },
    {
      "Pays": "Saint-Kitts-et-Nevis",
      "ISO2": "KN",
      "ISO3": "KNA",
      "ISOON": 659
    },
    {
      "Pays": "Sainte-Lucie",
      "ISO2": "LC",
      "ISO3": "LCA",
      "ISOON": 662
    },
    {
      "Pays": "Saint-Martin (partie française)",
      "ISO2": "MF",
      "ISO3": "CRG",
      "ISOON": 663
    },
    {
      "Pays": "Saint-Pierre-et-Miquelon",
      "ISO2": "PM",
      "ISO3": "SPM",
      "ISOON": 666
    },
    {
      "Pays": "Saint-Vincent-et-les Grenadines",
      "ISO2": "VC",
      "ISO3": "CDV",
      "ISOON": 670
    },
    {
      "Pays": "Samoa",
      "ISO2": "WS",
      "ISO3": "WSM",
      "ISOON": 882
    },
    {
      "Pays": "Saint-Marin",
      "ISO2": "SM",
      "ISO3": "SMR",
      "ISOON": 674
    },
    {
      "Pays": "Sao Tomé-et-Principe",
      "ISO2": "ST",
      "ISO3": "STP",
      "ISOON": 678
    },
    {
      "Pays": "Arabie Saoudite",
      "ISO2": "SA",
      "ISO3": "SAU",
      "ISOON": 682
    },
    {
      "Pays": "Sénégal",
      "ISO2": "SN",
      "ISO3": "SEN",
      "ISOON": 686
    },
    {
      "Pays": "Serbie",
      "ISO2": "RS",
      "ISO3": "SRB",
      "ISOON": 688
    },
    {
      "Pays": "Seychelles",
      "ISO2": "SC",
      "ISO3": "la CJS",
      "ISOON": 690
    },
    {
      "Pays": "Sierra Leone",
      "ISO2": "SL",
      "ISO3": "SLE",
      "ISOON": 694
    },
    {
      "Pays": "Singapour",
      "ISO2": "SG",
      "ISO3": "SGP",
      "ISOON": 702
    },
    {
      "Pays": "Slovaquie",
      "ISO2": "SK",
      "ISO3": "SVK",
      "ISOON": 703
    },
    {
      "Pays": "Slovenie",
      "ISO2": "SI",
      "ISO3": "SVN",
      "ISOON": 705
    },
    {
      "Pays": "Îles Salomon",
      "ISO2": "SB",
      "ISO3": "SLB",
      "ISOON": "090"
    },
    {
      "Pays": "Somalie",
      "ISO2": "SO",
      "ISO3": "SOM",
      "ISOON": 706
    },
    {
      "Pays": "Afrique du Sud",
      "ISO2": "ZA",
      "ISO3": "ZAF",
      "ISOON": 710
    },
    {
      "Pays": "Géorgie du Sud et les îles Sandwich du Sud",
      "ISO2": "GS",
      "ISO3": "GV",
      "ISOON": 239
    },
    {
      "Pays": "Sud-Soudan",
      "ISO2": "SS",
      "ISO3": "SSD",
      "ISOON": 728
    },
    {
      "Pays": "Espagne",
      "ISO2": "ES",
      "ISO3": "ESP",
      "ISOON": 724
    },
    {
      "Pays": "Sri Lanka",
      "ISO2": "LK",
      "ISO3": "LKA",
      "ISOON": 144
    },
    {
      "Pays": "Soudan",
      "ISO2": "SD",
      "ISO3": "SDN",
      "ISOON": 736
    },
    {
      "Pays": "Suriname *",
      "ISO2": "SR",
      "ISO3": "SUR",
      "ISOON": 740
    },
    {
      "Pays": "Svalbard et Jan Mayen",
      "ISO2": "SJ",
      "ISO3": "SJM",
      "ISOON": 744
    },
    {
      "Pays": "Swaziland",
      "ISO2": "SZ",
      "ISO3": "SWZ",
      "ISOON": 748
    },
    {
      "Pays": "Suede",
      "ISO2": "SE",
      "ISO3": "SWE",
      "ISOON": 752
    },
    {
      "Pays": "Suisse",
      "ISO2": "CH",
      "ISO3": "CHE",
      "ISOON": 756
    },
    {
      "Pays": "République arabe syrienne (Syrie)",
      "ISO2": "SY",
      "ISO3": "SYR",
      "ISOON": 760
    },
    {
      "Pays": "Taiwan",
      "ISO2": "République de Chine",
      "ISO3": "TW",
      "ISOON": "TWN"
    },
    {
      "Pays": "Tadjikistan",
      "ISO2": "TJ",
      "ISO3": "TJK",
      "ISOON": 762
    },
    {
      "Pays": "Tanzanie *",
      "ISO2": "République-Unie de",
      "ISO3": "TZ",
      "ISOON": "TZA"
    },
    {
      "Pays": "Thaïlande",
      "ISO2": "TH",
      "ISO3": "THA",
      "ISOON": 764
    },
    {
      "Pays": "Timor-Leste",
      "ISO2": "TL",
      "ISO3": "TLS",
      "ISOON": 626
    },
    {
      "Pays": "Togo",
      "ISO2": "TG",
      "ISO3": "TGO",
      "ISOON": 768
    },
    {
      "Pays": "Tokelau",
      "ISO2": "les savoirs traditionnels",
      "ISO3": "TKL",
      "ISOON": 772
    },
    {
      "Pays": "Tonga",
      "ISO2": "TO",
      "ISO3": "TON",
      "ISOON": 776
    },
    {
      "Pays": "Trinité-et-Tobago",
      "ISO2": "TT",
      "ISO3": "TTO",
      "ISOON": 780
    },
    {
      "Pays": "Tunisie",
      "ISO2": "TN",
      "ISO3": "TUN",
      "ISOON": 788
    },
    {
      "Pays": "Turquie",
      "ISO2": "TR",
      "ISO3": "TUR",
      "ISOON": 792
    },
    {
      "Pays": "Turkménistan",
      "ISO2": "TM",
      "ISO3": "TKM",
      "ISOON": 795
    },
    {
      "Pays": "Îles Turques et Caïques",
      "ISO2": "TC",
      "ISO3": "TCA",
      "ISOON": 796
    },
    {
      "Pays": "Tuvalu",
      "ISO2": "TV",
      "ISO3": "TUV",
      "ISOON": 798
    },
    {
      "Pays": "Ouganda",
      "ISO2": "UG",
      "ISO3": "UGA",
      "ISOON": 800
    },
    {
      "Pays": "Ukraine",
      "ISO2": "UA",
      "ISO3": "UKR",
      "ISOON": 804
    },
    {
      "Pays": "Émirats arabes unis",
      "ISO2": "AE",
      "ISO3": "ARE",
      "ISOON": 784
    },
    {
      "Pays": "angleterre",
      "ISO2": "GB",
      "ISO3": "GBR",
      "ISOON": 826
    },
    {
      "Pays": "etats-unis",
      "ISO2": "US",
      "ISO3": "USA",
      "ISOON": 840
    },
    {
      "Pays": "Uruguay",
      "ISO2": "UY",
      "ISO3": "URY",
      "ISOON": 858
    },
    {
      "Pays": "Ouzbékistan",
      "ISO2": "UZ",
      "ISO3": "UZB",
      "ISOON": 860
    },
    {
      "Pays": "Vanuatu",
      "ISO2": "VU",
      "ISO3": "VUT",
      "ISOON": 548
    },
    {
      "Pays": "Venezuela (République bolivarienne du)",
      "ISO2": "VE",
      "ISO3": "VEN",
      "ISOON": 862
    },
    {
      "Pays": "Viet Nam",
      "ISO2": "VN",
      "ISO3": "VNM",
      "ISOON": 704
    },
    {
      "Pays": "Îles Vierges américaines",
      "ISO2": "VI",
      "ISO3": "VIR",
      "ISOON": 850
    },
    {
      "Pays": "Wallis-et-Futuna",
      "ISO2": "WF",
      "ISO3": "WLF",
      "ISOON": 876
    },
    {
      "Pays": "Sahara occidental",
      "ISO2": "EH",
      "ISO3": "ESH",
      "ISOON": 732
    },
    {
      "Pays": "Yémen",
      "ISO2": "YE",
      "ISO3": "YEM",
      "ISOON": 887
    },
    {
      "Pays": "Zambie",
      "ISO2": "ZM",
      "ISO3": "ZMB",
      "ISOON": 894
    },
    {
      "Pays": "Zimbabwe",
      "ISO2": "ZW",
      "ISO3": "ZWE",
      "ISOON": 716
    }
  ]