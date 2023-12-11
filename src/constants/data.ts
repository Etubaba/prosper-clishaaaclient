import {
  IDashboardSubmenu,
  ISubmenuBox,
  IcampaignBoxData,
  TCountries,
} from "../types/app.types";

type cardType = "search" | "visit";
type logoPosition = "left" | "center" | "right" | "between";
type logoWidth = "long" | "normal";

export const countriesObject = {
  Asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "East Timor",
    "Georgia",
    "Hong Kong",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Macao",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Tajikistan",
    "Thailand",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ],
  Europe: [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "England",
    "Estonia",
    "Faroe Islands",
    "Finland",
    "France",
    "Germany",
    "Gibraltar",
    "Greece",
    "Holy See (Vatican City State)",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "North Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Northern Ireland",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russian Federation",
    "San Marino",
    "Scotland",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom",
    "Wales",
  ],
  Africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "British Indian Ocean Territory",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Reunion",
    "Rwanda",
    "Saint Helena",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Swaziland",
    "Tanzania",
    "The Democratic Republic of Congo",
    "Togo",
    "Tunisia",
    "Uganda",
    "Western Sahara",
    "Zambia",
    "Zimbabwe",
  ],
  Oceania: [
    "American Samoa",
    "Australia",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Cook Islands",
    "Fiji Islands",
    "French Polynesia",
    "Guam",
    "Kiribati",
    "Marshall Islands",
    "Micronesia, Federated States of",
    "Nauru",
    "New Caledonia",
    "New Zealand",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Palau",
    "Papua New Guinea",
    "Pitcairn",
    "Samoa",
    "Solomon Islands",
    "Tokelau",
    "Tonga",
    "Tuvalu",
    "United States Minor Outlying Islands",
    "Vanuatu",
    "Wallis and Futuna",
  ],
  "North America": [
    "Anguilla",
    "Antigua and Barbuda",
    "Aruba",
    "Bahamas",
    "Barbados",
    "Belize",
    "Bermuda",
    "Canada",
    "Cayman Islands",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Martinique",
    "Mexico",
    "Montserrat",
    "Netherlands Antilles",
    "Nicaragua",
    "Panama",
    "Puerto Rico",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "Turks and Caicos Islands",
    "United States",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
  ],
  Antarctica: [
    "Antarctica",
    "Bouvet Island",
    "French Southern territories",
    "Heard Island and McDonald Islands",
    "South Georgia and the South Sandwich Islands",
  ],
  "South America": [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Falkland Islands",
    "French Guiana",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
  ],
};

export const continents = [
  "Asia",
  "Africa",
  "Europe",
  "North America",
  "South America",
  "Australia/Oceania",
  "Antarctica",
];
export const ages = [
  "12-16",
  "17-22",
  "23-30",
  "31-45",
  "46-60",
  "61-70",
  "71-75",
  "76-80",
];
export const professions = [
  "Management",
  " Finance/Accounting",
  " IT/Software Development",
  " Distribution/Sales",
  " Marketing/Advertising",
  " Human Resources/Recruitment",
  " Consultation",
  " Engineering",
  " Healthcare/Medical",
  " Education/Teaching",
  " Artists/Creative Professions",
  " Legal/Legal Services",
  " Media Communications",
  " Design/Graphic Design",
  " Consulting Services",
  " Research/Science",
  " Logistics/Supply Chain Management",
  " Real estate",
  " Non-profit organizations",
  " Public Relations/PR",
];

export const hobbies = [
  "Reading",
  "Photography",
  "Painting/Drawing",
  "Cooking/Baking",
  "Gardening",
  "Hiking/Camping",
  "Listening to music/Playing music",
  "Playing sports (e.g., soccer, tennis, swimming)",
  "Yoga/Pilates",
  "Watching movies/TV shows",
  "Traveling",
  "Writing",
  "Dancing",
  "DIY Crafts",
  "  Collecting (e.g., stamps, coins, comics)",
];

export const interests = [
  "Technology/Innovation",
  "Sustainability/Environmentalism",
  "Art/Culture",
  "Music",
  "Fashion/Beauty",
  "Sports/Fitness",
  "Cooking/Nutrition",
  "Travel/Exploration",
  "Social activism",
  "Science/Research",
  "History/Archaeology",
  "Politics/Society",
  "Animals/Pets",
  "Spirituality/Wellness",
  "Finance/Investment",
];

export const formConfigInitailValue = {
  isRecurring: false,
  showMonth: false,
  monthlyRecurring: [],
};
export const CampignCardIntialValue = {
  answer: "",
  answer_options: [],
  daily_clicks: 0,
  duration_in_days: 0,
  interaction: "",
  jorney_type: "",
  language: "",
  question: "",
  url: "",
  web_site_url: "",
  which_type: "",
};
export const TDataAppProviderIntailValue = {
  vistcarddata: {
    interaction_amount: 0,
    url: "",
    duration: 0,
    logo: "searchLogo",
    boxColor: "",
    foreColor: "",
    text: "Visit the website “company Global” and click on a property of your choice and enter your code in the lower right corner.",
    cardType: "visit" as cardType,
    logoPosition: "left" as logoPosition,
    logoWidth: "long" as logoWidth,
    lineColor: "black",
    task_code: "",
    cardColors: "",
    time: 0,
  },
  setData: () => {},
  getUserBalance: () => {},

  singletaskData: {
    id: 0,
    order_id: "",
    created_at: "",
    done_at: "",
    type: "",
    interaction: 0,
    country: "",
    url: "",
    keyword: "",
    status: 0,
    status_percentage: "",
    auto_renew: "",
    success: "",
    ip_address: "",
    published: true,
  },
  edittaskData: {
    id: 0,
    order_id: "",
    created_at: "",
    done_at: "",
    type: "",
    interaction: 0,
    country: "",
    url: "",
    keyword: "",
    status: 0,
    status_percentage: "",
    auto_renew: "",
    success: "",
    ip_address: "",
    published: true,
  },
  modalState: {
    state: false,
  },
  userBalance: 0,
  campaignCards: [],
  userInvoices: {
    current_plan: {
      id: 0,
      companyId: 0,
      txn_id: 0,
      package_name: "",
      payment_method: "",
      currency: "",
      amount: 0,
      interactions: 0,
      vat: 0,
      status: 0,
      details: "",
      createdAt: "",
      updatedAt: "",
    },
    invoices: [],
  },
  userPayInfo: {
    id: 0,
    companyId: 0,
    txn_id: 0,
    package_name: "",
    payment_method: "",
    currency: "",
    amount: 0,
    interactions: 0,
    vat: 0,
    status: 0,
    details: "",
    createdAt: "",
    updatedAt: "",
  },
  getUserInvoice: () => {},
};

export const ordersColumns = [
  {
    title: "Ltd",
  },
  {
    title: "Order ID",
  },
  {
    title: "Created At",
  },
  {
    title: "Type",
  },
  {
    title: "Interaction",
  },
  {
    title: "Country",
  },
  {
    title: "URL",
  },
  {
    title: "Keyword",
  },
  {
    title: "Status IA",
  },
  {
    title: "Status %",
  },
  {
    title: "Auto Renew",
  },
  {
    title: "Success",
  },
  {
    title: "Actions",
  },
];

export const TUserProfileIntailValue = {
  accessToken: "",
  admin: {
    role: "",
    id: 0,
    name: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    updatedAt: "",
    createdAt: "",
    phone: null,
    email_verified_at: null,
  },
  company: {
    duration: 0,
    bonus: 0,
    value: 0,
    used: 0,
    status: 0,
    eligibility: 0,
    foreground: "",
    id: 0,
    name: "",
    companyId: 0,
    adminId: 0,
    updatedAt: "",
    createdAt: "",
    photo: null,
    description: null,
    category: null,
    icon: null,
    background: null,
    address_line: null,
    address_line_two: null,
    zip: null,
    city: null,
    country: null,
    vat_number: null,
    phone_number: null,
    card_colors: null,
  },
  updateUser: () => {},
  campaignCard: CampignCardIntialValue,
};

export const dashboardSubmenu: IDashboardSubmenu[] = [
  {
    title: "Active Task",
    amount: "00",
  },
  {
    title: "Interaction",
    amount: "00",
  },
  {
    title: "Active Campaign",
    amount: "00",
  },
  {
    title: "Campaigns",
    amount: "00",
  },
];

export const dashboardSubmenuCard: ISubmenuBox[] = [
  {
    cardTitle: "Visit",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/visit",
    name: "visit",
  },
  {
    cardTitle: "Google Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "Google News Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "Google Video Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "Google Images Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "YouTube Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "TikTok Search",
    mainAmount: "00",
    subAmount: "00",
    percentage: "0.00",
    link: "/search",
    name: "search",
  },
  {
    cardTitle: "Bing Search",
    mainAmount: "00",
    subAmount: "00",
  },
  {
    cardTitle: "DuckDuck Search",
    mainAmount: "00",
    subAmount: "00",
  },
  {
    cardTitle: "Yandex Search",
    mainAmount: "00",
    subAmount: "00",
  },
  {
    cardTitle: "Baidu Search",
    mainAmount: "00",
    subAmount: "00",
  },
  {
    cardTitle: "Advanced Search",
    mainAmount: "00",
    subAmount: "00",
  },
];

export const campaignBoxData: IcampaignBoxData[] = [
  {
    id: 1,
    text: "Why is a website visit so important?",
  },
  {
    id: 2,
    text: "Why is it important to be found by keywords?",
  },
  {
    id: 3,
    text: "Why is user behavior on my website important?",
  },
  {
    id: 4,
    text: "Why is it important to receive traffic through backlinks?",
  },
  {
    id: 5,
    text: "Why is it important to drive traffic through social media channels?",
  },
  {
    id: 6,
    text: "Why is it important to drive traffic through messenger systems?",
  },
];

export const dataForGoogleSearch = [
  {
    country: "all",
    name: "Vereinigte Staaten",
    value: "google.com",
  },
  {
    country: "Canada",
    name: "Kanada",
    value: "google.ca",
  },
  {
    country: "United Kingdom",
    name: "Vereinigtes Königreich",
    value: "google.co.uk",
  },
  {
    country: "Australia",
    name: "Australien",
    value: "google.com.au",
  },
  {
    country: "Germany",
    name: "Deutschland",
    value: "google.de",
  },
  {
    country: "France",
    name: "Frankreich",
    value: "google.fr",
  },
  {
    country: "Spain",
    name: "Spanien",
    value: "google.es",
  },
  {
    country: "Italy",
    name: "Italien",
    value: "google.it",
  },
  {
    country: "India",
    name: "Indien",
    value: "google.co.in",
  },
  {
    country: "Brazil",
    name: "Brasilien",
    value: "google.com.br",
  },
  {
    country: "Japan",
    name: "Japan",
    value: "google.co.jp",
  },
  {
    country: "Russia",
    name: "Russland",
    value: "google.ru",
  },
  {
    country: "China",
    name: "China",
    value: "google.cn",
  },
  {
    country: "Korea (South)",
    name: "Südkorea",
    value: "google.co.kr",
  },
  {
    country: "Mexico",
    name: "Mexiko",
    value: "google.com.mx",
  },
];
export const dataForBingSearch = [
  {
    country: "all",
    name: "Vereinigte Staaten",
    value: "bing.com",
  },
  {
    country: "Canada",
    name: "Kanada",
    value: "bing.ca",
  },
  {
    country: "United Kingdom",
    name: "Vereinigtes Königreich",
    value: "bing.co.uk",
  },
  {
    country: "Australia",
    name: "Australien",
    value: "bing.com.au",
  },
  {
    country: "Germany",
    name: "Deutschland",
    value: "bing.de",
  },
  {
    country: "France",
    name: "Frankreich",
    value: "bing.fr",
  },
  {
    country: "Spain",
    name: "Spanien",
    value: "bing.es",
  },
  {
    country: "Italy",
    name: "Italien",
    value: "bing.it",
  },
  {
    country: "India",
    name: "Indien",
    value: "bing.co.in",
  },
  {
    country: "Brazil",
    name: "Brasilien",
    value: "bing.com.br",
  },
  {
    country: "Japan",
    name: "Japan",
    value: "bing.co.jp",
  },
  {
    country: "Russia",
    name: "Russland",
    value: "bing.ru",
  },
  {
    country: "China",
    name: "China",
    value: "bing.cn",
  },
  {
    country: "Korea (South)",
    name: "Südkorea",
    value: "bing.co.kr",
  },
  {
    country: "Mexico",
    name: "Mexiko",
    value: "bing.com.mx",
  },
];
export const dataForDuckDuckSearch = [
  {
    country: "all",
    name: "Vereinigte Staaten",
    value: "duckduck.com",
  },
  {
    country: "Canada",
    name: "Kanada",
    value: "duckduck.ca",
  },
  {
    country: "United Kingdom",
    name: "Vereinigtes Königreich",
    value: "duckduck.co.uk",
  },
  {
    country: "Australia",
    name: "Australien",
    value: "duckduck.com.au",
  },
  {
    country: "Germany",
    name: "Deutschland",
    value: "duckduck.de",
  },
  {
    country: "France",
    name: "Frankreich",
    value: "duckduck.fr",
  },
  {
    country: "Spain",
    name: "Spanien",
    value: "duckduck.es",
  },
  {
    country: "Italy",
    name: "Italien",
    value: "duckduck.it",
  },
  {
    country: "India",
    name: "Indien",
    value: "duckduck.co.in",
  },
  {
    country: "Brazil",
    name: "Brasilien",
    value: "duckduck.com.br",
  },
  {
    country: "Japan",
    name: "Japan",
    value: "duckduck.co.jp",
  },
  {
    country: "Russia",
    name: "Russland",
    value: "duckduck.ru",
  },
  {
    country: "China",
    name: "China",
    value: "duckduck.cn",
  },
  {
    country: "Korea (South)",
    name: "Südkorea",
    value: "duckduck.co.kr",
  },
  {
    country: "Mexico",
    name: "Mexiko",
    value: "duckduck.com.mx",
  },
];
export const dataForYandexSearch = [
  {
    country: "all",
    name: "Vereinigte Staaten",
    value: "yandex.com",
  },
  {
    country: "Canada",
    name: "Kanada",
    value: "yandex.ca",
  },
  {
    country: "United Kingdom",
    name: "Vereinigtes Königreich",
    value: "yandex.co.uk",
  },
  {
    country: "Australia",
    name: "Australien",
    value: "yandex.com.au",
  },
  {
    country: "Germany",
    name: "Deutschland",
    value: "yandex.de",
  },
  {
    country: "France",
    name: "Frankreich",
    value: "yandex.fr",
  },
  {
    country: "Spain",
    name: "Spanien",
    value: "yandex.es",
  },
  {
    country: "Italy",
    name: "Italien",
    value: "yandex.it",
  },
  {
    country: "India",
    name: "Indien",
    value: "yandex.co.in",
  },
  {
    country: "Brazil",
    name: "Brasilien",
    value: "yandex.com.br",
  },
  {
    country: "Japan",
    name: "Japan",
    value: "yandex.co.jp",
  },
  {
    country: "Russia",
    name: "Russland",
    value: "yandex.ru",
  },
  {
    country: "China",
    name: "China",
    value: "yandex.cn",
  },
  {
    country: "Korea (South)",
    name: "Südkorea",
    value: "yandex.co.kr",
  },
  {
    country: "Mexico",
    name: "Mexiko",
    value: "yandex.com.mx",
  },
];
export const dataForBaiduSearch = [
  {
    country: "all",
    name: "Vereinigte Staaten",
    value: "baidu.com",
  },
  {
    country: "Canada",
    name: "Kanada",
    value: "baidu.ca",
  },
  {
    country: "United Kingdom",
    name: "United Kingdom",
    value: "baidu.co.uk",
  },
  {
    country: "Australia",
    name: "Australia",
    value: "baidu.com.au",
  },
  {
    country: "Germany",
    name: "Germany",
    value: "baidu.de",
  },
  {
    country: "France",
    name: "France",
    value: "baidu.fr",
  },
  {
    country: "Spain",
    name: "Spain",
    value: "baidu.es",
  },
  {
    country: "Italy",
    name: "Italy",
    value: "baidu.it",
  },
  {
    country: "India",
    name: "India",
    value: "baidu.co.in",
  },
  {
    country: "Brazil",
    name: "Brazil",
    value: "baidu.com.br",
  },
  {
    country: "Japan",
    name: "Japan",
    value: "baidu.co.jp",
  },
  {
    country: "Russia",
    name: "Russia",
    value: "baidu.ru",
  },
  {
    country: "China",
    name: "China",
    value: "baidu.cn",
  },
  {
    country: "Korea (South)",
    name: "Korea (South)",
    value: "baidu.co.kr",
  },
  {
    country: "Mexico",
    name: "Mexico",
    value: "baidu.com.mx",
  },
];

export const countriesObj: TCountries[] = [
  {
    country: "Afghanistan",
    iso: "AF",
  },
  {
    country: "Albania",
    iso: "AL",
  },
  {
    country: "Algeria",
    iso: "DZ",
  },
  {
    country: "Andorra",
    iso: "AD",
  },
  {
    country: "Angola",
    iso: "AO",
  },
  {
    country: "Antigua and Barbuda",
    iso: "AG",
  },
  {
    country: "Argentina",
    iso: "AR",
  },
  {
    country: "Armenia",
    iso: "AM",
  },
  {
    country: "Australia",
    iso: "AU",
  },
  {
    country: "Austria",
    iso: "AT",
  },
  {
    country: "Azerbaijan",
    iso: "AZ",
  },
  {
    country: "Bahamas",
    iso: "BS",
  },
  {
    country: "Bahrain",
    iso: "BH",
  },
  {
    country: "Bangladesh",
    iso: "BD",
  },
  {
    country: "Barbados",
    iso: "BB",
  },
  {
    country: "Belarus",
    iso: "BY",
  },
  {
    country: "Belgium",
    iso: "BE",
  },
  {
    country: "Belize",
    iso: "BZ",
  },
  {
    country: "Benin",
    iso: "BJ",
  },
  {
    country: "Bhutan",
    iso: "BT",
  },
  {
    country: "Bolivia",
    iso: "BO",
  },
  {
    country: "Bosnia and Herzegovina",
    iso: "BA",
  },
  {
    country: "Botswana",
    iso: "BW",
  },
  {
    country: "Brazil",
    iso: "BR",
  },
  {
    country: "Brunei",
    iso: "BN",
  },
  {
    country: "Bulgaria",
    iso: "BG",
  },
  {
    country: "Burkina Faso",
    iso: "BF",
  },
  {
    country: "Burma",
    iso: "MM",
  },
  {
    country: "Burundi",
    iso: "BI",
  },
  {
    country: "Cambodia",
    iso: "KH",
  },
  {
    country: "Cameroon",
    iso: "CM",
  },
  {
    country: "Canada",
    iso: "CA",
  },
  {
    country: "Cape Verde",
    iso: "CV",
  },
  {
    country: "Central African Republic",
    iso: "CF",
  },
  {
    country: "Chad",
    iso: "TD",
  },
  {
    country: "Chile",
    iso: "CL",
  },
  {
    country: "China",
    iso: "CN",
  },
  {
    country: "Colombia",
    iso: "CO",
  },
  {
    country: "Comoros",
    iso: "KM",
  },
  {
    country: "Congo (Brazzaville)",
    iso: "CG",
  },
  {
    country: "Congo (Kinshasa)",
    iso: "CD",
  },
  {
    country: "Costa Rica",
    iso: "CR",
  },
  {
    country: "Côte d`Ivoire",
    iso: "CI",
  },
  {
    country: "Croatia",
    iso: "HR",
  },
  {
    country: "Cuba",
    iso: "CU",
  },
  {
    country: "Cyprus",
    iso: "CY",
  },
  {
    country: "Czech Republic",
    iso: "CZ",
  },
  {
    country: "Denmark",
    iso: "DK",
  },
  {
    country: "Djibouti",
    iso: "DJ",
  },
  {
    country: "Dominica",
    iso: "DM",
  },
  {
    country: "Dominican Republic",
    iso: "DO",
  },
  {
    country: "Ecuador",
    iso: "EC",
  },
  {
    country: "Egypt",
    iso: "EG",
  },
  {
    country: "El Salvador",
    iso: "SV",
  },
  {
    country: "Equatorial Guinea",
    iso: "GQ",
  },
  {
    country: "Eritrea",
    iso: "ER",
  },
  {
    country: "Estonia",
    iso: "EE",
  },
  {
    country: "Ethiopia",
    iso: "ET",
  },
  {
    country: "Fiji",
    iso: "FJ",
  },
  {
    country: "Finland",
    iso: "FI",
  },
  {
    country: "France",
    iso: "FR",
  },
  {
    country: "French Polynesia",
    iso: "PF",
  },
  {
    country: "Gabon",
    iso: "GA",
  },
  {
    country: "Gambia",
    iso: "GM",
  },
  {
    country: "Georgia",
    iso: "GE",
  },
  {
    country: "Germany",
    iso: "DE",
  },
  {
    country: "Ghana",
    iso: "GH",
  },
  {
    country: "Gibraltar",
    iso: "GI",
  },
  {
    country: "Greenland",
    iso: "GL",
  },
  {
    country: "Greece",
    iso: "GR",
  },
  {
    country: "Grenada",
    iso: "GD",
  },
  {
    country: "Guatemala",
    iso: "GT",
  },
  {
    country: "Guinea",
    iso: "GN",
  },
  {
    country: "Guinea-Bissau",
    iso: "GW",
  },
  {
    country: "Guyana",
    iso: "GY",
  },
  {
    country: "Haiti",
    iso: "HT",
  },
  {
    country: "Hong Kong SAR China",
    iso: "HK",
  },
  {
    country: "Vatican City",
    iso: "VA",
  },
  {
    country: "Honduras",
    iso: "HN",
  },
  {
    country: "Hungary",
    iso: "HU",
  },
  {
    country: "Iceland",
    iso: "IS",
  },
  {
    country: "India",
    iso: "IN",
  },
  {
    country: "Indonesia",
    iso: "ID",
  },
  {
    country: "Iran",
    iso: "IR",
  },
  {
    country: "Iraq",
    iso: "IQ",
  },
  {
    country: "Ireland",
    iso: "IE",
  },
  {
    country: "Israel",
    iso: "IL",
  },
  {
    country: "Italy",
    iso: "IT",
  },
  {
    country: "Jamaica",
    iso: "JM",
  },
  {
    country: "Japan",
    iso: "JP",
  },
  {
    country: "Jordan",
    iso: "JO",
  },
  {
    country: "Kazakhstan",
    iso: "KZ",
  },
  {
    country: "Kenya",
    iso: "KE",
  },
  {
    country: "Kiribati",
    iso: "KI",
  },
  {
    country: "Korea (North)",
    iso: "KP",
  },
  {
    country: "Korea (South)",
    iso: "KR",
  },
  {
    country: "Kuwait",
    iso: "KW",
  },
  {
    country: "Kyrgyzstan",
    iso: "KG",
  },
  {
    country: "Laos",
    iso: "LA",
  },
  {
    country: "Latvia",
    iso: "LV",
  },
  {
    country: "Lebanon",
    iso: "LB",
  },
  {
    country: "Lesotho",
    iso: "LS",
  },
  {
    country: "Liberia",
    iso: "LR",
  },
  {
    country: "Libya",
    iso: "LY",
  },
  {
    country: "Liechtenstein",
    iso: "LI",
  },
  {
    country: "Lithuania",
    iso: "LT",
  },
  {
    country: "Luxembourg",
    iso: "LU",
  },
  {
    country: "North Macedonia",
    iso: "MK",
  },
  {
    country: "Madagascar",
    iso: "MG",
  },
  {
    country: "Malawi",
    iso: "MW",
  },
  {
    country: "Malaysia",
    iso: "MY",
  },
  {
    country: "Maldives",
    iso: "MV",
  },
  {
    country: "Mali",
    iso: "ML",
  },
  {
    country: "Malta",
    iso: "MT",
  },
  {
    country: "Marshall Islands",
    iso: "MH",
  },
  {
    country: "Martinique",
    iso: "MQ",
  },
  {
    country: "Mauritania",
    iso: "MR",
  },
  {
    country: "Mauritius",
    iso: "MU",
  },
  {
    country: "Mexico",
    iso: "MX",
  },
  {
    country: "Micronesia",
    iso: "FM",
  },
  {
    country: "Moldova",
    iso: "MD",
  },
  {
    country: "Monaco",
    iso: "MC",
  },
  {
    country: "Mongolia",
    iso: "MN",
  },
  {
    country: "Montenegro",
    iso: "ME",
  },
  {
    country: "Morocco",
    iso: "MA",
  },
  {
    country: "Mozambique",
    iso: "MZ",
  },
  {
    country: "Namibia",
    iso: "NA",
  },
  {
    country: "Nauru",
    iso: "NR",
  },
  {
    country: "Nepal",
    iso: "NP",
  },
  {
    country: "Netherlands",
    iso: "NL",
  },
  {
    country: "New Zealand",
    iso: "NZ",
  },
  {
    country: "Nicaragua",
    iso: "NI",
  },
  {
    country: "Niger",
    iso: "NE",
  },
  {
    country: "Nigeria",
    iso: "NG",
  },
  {
    country: "Norway",
    iso: "NO",
  },
  {
    country: "Oman",
    iso: "OM",
  },
  {
    country: "Pakistan",
    iso: "PK",
  },
  {
    country: "Palau",
    iso: "PW",
  },
  {
    country: "Panama",
    iso: "PA",
  },
  {
    country: "Papua New Guinea",
    iso: "PG",
  },
  {
    country: "Paraguay",
    iso: "PY",
  },
  {
    country: "Peru",
    iso: "PE",
  },
  {
    country: "Philippines",
    iso: "PH",
  },
  {
    country: "Poland",
    iso: "PL",
  },
  {
    country: "Portugal",
    iso: "PT",
  },
  {
    country: "Puerto Rico",
    iso: "PR",
  },
  {
    country: "Qatar",
    iso: "QA",
  },
  {
    country: "Romania",
    iso: "RO",
  },
  {
    country: "Russia",
    iso: "RU",
  },
  {
    country: "Rwanda",
    iso: "RW",
  },
  {
    country: "Saint Kitts and Nevis",
    iso: "KN",
  },
  {
    country: "Sahrawi Arab Democratic Republic",
    iso: "EH",
  },
  {
    country: "Saint Lucia",
    iso: "LC",
  },
  {
    country: "Saint Vincent",
    iso: "VC",
  },
  {
    country: "Samoa",
    iso: "WS",
  },
  {
    country: "San Marino",
    iso: "SM",
  },
  {
    country: "Sao Tome and Principe",
    iso: "ST",
  },
  {
    country: "Saudi Arabia",
    iso: "SA",
  },
  {
    country: "Senegal",
    iso: "SN",
  },
  {
    country: "Serbia",
    iso: "RS",
  },
  {
    country: "Seychelles",
    iso: "SC",
  },
  {
    country: "Sierra Leone",
    iso: "SL",
  },
  {
    country: "Singapore",
    iso: "SG",
  },
  {
    country: "Slovakia",
    iso: "SK",
  },
  {
    country: "Slovenia",
    iso: "SI",
  },
  {
    country: "Solomon Islands",
    iso: "SB",
  },
  {
    country: "Somalia",
    iso: "SO",
  },
  {
    country: "South Africa",
    iso: "ZA",
  },
  {
    country: "Spain",
    iso: "ES",
  },
  {
    country: "Sri Lanka",
    iso: "LK",
  },
  {
    country: "Sudan",
    iso: "SD",
  },
  {
    country: "Suriname",
    iso: "SR",
  },
  {
    country: "Swaziland",
    iso: "SZ",
  },
  {
    country: "Sweden",
    iso: "SE",
  },
  {
    country: "Switzerland",
    iso: "CH",
  },
  {
    country: "Syria",
    iso: "SY",
  },
  {
    country: "Tajikistan",
    iso: "TJ",
  },
  {
    country: "Tanzania",
    iso: "TZ",
  },
  {
    country: "Thailand",
    iso: "TH",
  },
  {
    country: "Togo",
    iso: "TG",
  },
  {
    country: "Tonga",
    iso: "TO",
  },
  {
    country: "Trinidad and Tobago",
    iso: "TT",
  },
  {
    country: "Tunisia",
    iso: "TN",
  },
  {
    country: "Turkey",
    iso: "TR",
  },
  {
    country: "Turkmenistan",
    iso: "TM",
  },
  {
    country: "Tuvalu",
    iso: "TV",
  },
  {
    country: "Uganda",
    iso: "UG",
  },
  {
    country: "Ukraine",
    iso: "UA",
  },
  {
    country: "United Arab Emirates",
    iso: "AE",
  },
  {
    country: "United Kingdom",
    iso: "GB",
  },
  {
    country: "United States",
    iso: "US",
  },
  {
    country: "Uruguay",
    iso: "UY",
  },
  {
    country: "Uzbekistan",
    iso: "UZ",
  },
  {
    country: "Vanuatu",
    iso: "VU",
  },
  {
    country: "Venezuela",
    iso: "VE",
  },
  {
    country: "Vietnam",
    iso: "VN",
  },
  {
    country: "Yemen",
    iso: "YE",
  },
  {
    country: "Zambia",
    iso: "ZM",
  },
  {
    country: "Zimbabwe",
    iso: "ZW",
  },
  {
    country: "Kosovo",
    iso: "XK",
  },
  {
    country: "Taiwan",
    iso: "TW",
  },
  {
    country: "New Caledonia",
    iso: "NC",
  },
  {
    country: "Palestine",
    iso: "PS",
  },
  {
    country: "European Union",
    iso: "EU",
  },
  {
    country: "United Nations",
    iso: "UN",
  },
];

export const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
