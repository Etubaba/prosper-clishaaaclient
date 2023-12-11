import { Button, Dropdown } from "antd";
import usaa from "../../../assets/img/usaa.png";
import {
  ChinaFlag,
  DuetschFlag,
  EnglishFlag,
  EspanolFlag,
  FranciasFlag,
  ItalyFlag,
  IvoryCoastFlag,
  JapanFlag,
  PortuguesFlag,
  RussiaFlag,
  SaudiArabiaFlag,
  SouthKoreaFlag,
  TurkeyFlag,
  UnknownFlag,
} from "../../../assets/svg/svg";
import { TNavigationDropdownItem } from "../../../types/app.types";
import { useLang } from "../../../hook/useLang";

export const items: TNavigationDropdownItem[] = [
  {
    label: "English",
    key: "1",
    icon: <EnglishFlag />,
    lang: "en",
  },
  {
    label: "Deutsch",
    key: "2",
    icon: <DuetschFlag />,
    lang: "de",
  },
  {
    label: "Français",
    key: "3",
    icon: <FranciasFlag />,
    lang: "fr",
  },
  {
    label: "Español",
    key: "4",
    icon: <EspanolFlag />,
    lang: "es",
  },
  {
    label: "Português",
    key: "5",
    icon: <PortuguesFlag />,
    lang: "pt",
  },
  {
    label: "Türkçe",
    key: "6",
    icon: <TurkeyFlag />,
    lang: "tr",
  },
  {
    label: "Русский",
    key: "7",
    icon: <RussiaFlag />,
    lang: "py",
  },
  {
    label: "中文",
    key: "8",
    icon: <ChinaFlag />,
    lang: "zh",
  },
  {
    label: "日本語",
    key: "9",
    icon: <JapanFlag />,
    lang: "ja",
  },
  {
    label: "文言",
    key: "10",
    icon: <UnknownFlag />,
    lang: "fr",
  },
  {
    label: "한국어",
    key: "11",
    icon: <SouthKoreaFlag />,
    lang: "en",
  },
  {
    label: "العربية",
    key: "12",
    icon: <SaudiArabiaFlag />,
    lang: "su",
  },
  {
    label: "Ivory Coast",
    key: "13",
    icon: <IvoryCoastFlag />,
    lang: "iv",
  },
  {
    label: "Italiano",
    key: "14",
    icon: <ItalyFlag />,
    lang: "it",
  },
];

const LanguageBtn = () => {
  const { setLangToLocal } = useLang();
  const handleMenuClick = (e: any) => {
    setLangToLocal(e.item.props.lang);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown menu={menuProps}>
      <Button>
        <div className="min-h-[36px] min-w-[36px] rounded-full overflow-hidden">
          <img src={usaa} alt="flag" />
        </div>
      </Button>
    </Dropdown>
  );
};

export default LanguageBtn;
