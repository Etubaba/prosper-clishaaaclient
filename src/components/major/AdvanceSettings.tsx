import { Form, Select, Tooltip } from "antd";
import { GoldenArrowDownSvg, InfoSvg } from "../../assets/svg/svg";
import RadioBtn from "../elements/RadioBtn";
import SelectCountry from "../elements/SelectCounties";
import {
  countriesObj,
  dataForBaiduSearch,
  dataForBingSearch,
  dataForDuckDuckSearch,
  dataForGoogleSearch,
  dataForYandexSearch,
} from "../../constants/data";
import ConfirmBtn from "./ConfirmBtn";
import SocialIcons from "../../pages/Visit/components/SocialIcon";
import { useEffect, useState } from "react";

type TAdvanceSettings = {
  loading: boolean;
  showTitle?: boolean;
  type?: "visit" | "search";
  isForAdultActive: boolean;
  setIsForAdultActive: React.Dispatch<React.SetStateAction<any>>;
  isDailyRandomSettingsActive: boolean;
  setIsDailyRandomSettingsActive: React.Dispatch<React.SetStateAction<any>>;
  isInAdvanceSettingsMode: boolean;
  setIsInAdvanceSettingsMode: React.Dispatch<React.SetStateAction<any>>;
  totalInteractions: number;
  activeSearchType?: string;
  setIsSave: React.Dispatch<React.SetStateAction<any>>;
  social: string[];
  handledSocial: (value: string) => void;
  selectedCountries: string[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<any>>;
  setSelectedCountriesSpecific: React.Dispatch<React.SetStateAction<any>>;
  setSelectedGeoLocation: React.Dispatch<React.SetStateAction<any>>;
  isInEditMode?: boolean;
};

let dailyWebsiteTooltipText =
  "the system will automatically vary the clicks from their baseline daily - 30% or +30%";
let messengerTooltipText =
  "if you select several messenger systems, they will be delivered at random";
const AdvanceSettings = ({
  loading,
  showTitle,
  type,
  isForAdultActive,
  setIsForAdultActive,
  isDailyRandomSettingsActive,
  setIsDailyRandomSettingsActive,
  isInAdvanceSettingsMode,
  setIsInAdvanceSettingsMode,
  totalInteractions,
  activeSearchType,
  setIsSave,
  social,
  handledSocial,
  selectedCountries,
  setSelectedCountries,
  setSelectedCountriesSpecific,
  setSelectedGeoLocation,
  isInEditMode,
}: TAdvanceSettings) => {
  const [selectedCountriesOptions, setSelectedCountriesOptions] = useState<
    | {
        name: string;
        value: string;
      }[]
  >([]);

  useEffect(() => {
    if (activeSearchType === "bing_search") {
      if (selectedCountries?.length < 1) {
        setSelectedCountriesOptions(dataForBingSearch);
      } else {
        let dataForBingSearchArr = dataForBingSearch.filter((obj) => {
          return selectedCountries.includes(obj.country);
        });
        dataForBingSearchArr.unshift(dataForBingSearch[0]);
        setSelectedCountriesOptions(dataForBingSearchArr);
      }
    } else if (activeSearchType === "duckduck_search") {
      if (selectedCountries?.length < 1) {
        setSelectedCountriesOptions(dataForDuckDuckSearch);
      } else {
        let dataForDuckDuckSearchArr = dataForDuckDuckSearch.filter((obj) => {
          return selectedCountries.includes(obj.country);
        });
        dataForDuckDuckSearchArr.unshift(dataForDuckDuckSearch[0]);
        setSelectedCountriesOptions(dataForDuckDuckSearchArr);
      }
    } else if (activeSearchType === "yandex_search") {
      if (selectedCountriesOptions?.length < 1) {
        setSelectedCountriesOptions(dataForYandexSearch);
      } else {
        let dataForYandexSearchArr = dataForYandexSearch.filter((obj) => {
          return selectedCountries.includes(obj.country);
        });
        dataForYandexSearchArr.unshift(dataForYandexSearch[0]);
        setSelectedCountriesOptions(dataForYandexSearchArr);
      }
    } else if (activeSearchType === "baidu_search") {
      if (selectedCountries?.length < 1) {
        setSelectedCountriesOptions(dataForBaiduSearch);
      } else {
        let dataForBaiduSearchArr = dataForBaiduSearch.filter((obj) => {
          return selectedCountries.includes(obj.country);
        });
        dataForBaiduSearchArr.unshift(dataForBaiduSearch[0]);
        setSelectedCountriesOptions(dataForBaiduSearchArr);
      }
    } else {
      if (selectedCountries?.length < 1) {
        setSelectedCountriesOptions(dataForGoogleSearch);
      } else {
        let dataForGoogleSearchArr = dataForGoogleSearch.filter((obj) => {
          return selectedCountries.includes(obj.country);
        });
        dataForGoogleSearchArr.unshift(dataForGoogleSearch[0]);
        setSelectedCountriesOptions(dataForGoogleSearchArr);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearchType, selectedCountries]);

  return (
    <>
      <div className="flex flex-col xl:flex-row mt-4">
        {showTitle && (
          <div className="title min-w-[150px]">
            <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84]">
              {""}
            </h1>
          </div>
        )}
        <div className="others w-full flex flex-col gap-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => {
              setIsInAdvanceSettingsMode((prevState: boolean) => !prevState);
            }}
          >
            <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84]">
              Choose advanced orders settings
            </h1>
            <GoldenArrowDownSvg />
          </div>
          <div
            className={`advanceSettingsBox flex flex-col gap-4 mt-2 ${
              isInAdvanceSettingsMode && type === "visit"
                ? "h-[200px]"
                : isInAdvanceSettingsMode && type !== "visit"
                ? "h-[360px]"
                : "h-[0px]"
            } overflow-hidden`}
          >
            <SelectCountry
              setSelectedCountries={setSelectedCountries}
              countries={countriesObj}
              isInEditMode={isInEditMode}
            />
            <div className="w-full flex flex-col gap-4">
              <RadioBtn
                className="w-fit justify-end"
                state={isForAdultActive}
                setState={setIsForAdultActive}
                title={"This orders is for adults"}
                tooltip={true}
                tooltipTitle={
                  "Activate button to ensure the task is only accessible to individuals aged 18 and above with this setting."
                }
                isInEditMode={isInEditMode}
              />
              <RadioBtn
                className="w-fit justify-end"
                state={isDailyRandomSettingsActive}
                setState={setIsDailyRandomSettingsActive}
                title={"daily website visitors random setting"}
                tooltip={true}
                tooltipTitle={dailyWebsiteTooltipText}
                isInEditMode={isInEditMode}
              />
            </div>
            {type === "visit" ? (
              <>
                <div className="checkcircle flex flex-row items-center mb-[-10px]">
                  <p className="text-[#1B4C84] whitespace-wrap">
                    Website visitors via Messenger
                  </p>
                  <Tooltip className="ml-3" title={messengerTooltipText}>
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </div>
                <SocialIcons
                  social={social}
                  handledSocial={handledSocial}
                  isInEditMode={isInEditMode}
                />
              </>
            ) : (
              <>
                <div className="inputField drop flex-auto">
                  <div className="flex flex-row pb-[3px] items-center">
                    <p className="text-[#1B4C84] ">
                      Country-specific search engine
                    </p>
                    <Tooltip
                      className="ml-3 cursor-pointer"
                      title={
                        "Choose a search engine specific to your desired country, enhancing your website's visibility in that region."
                      }
                    >
                      <span>
                        <InfoSvg />
                      </span>
                    </Tooltip>
                  </div>

                  <Form.Item
                    name="country_specific"
                    className="country_specific"
                  >
                    <Select
                      className="w-full"
                      onChange={(value: string) =>
                        setSelectedCountriesSpecific(value)
                      }
                      disabled={isInEditMode}
                    >
                      {selectedCountriesOptions && (
                        <>
                          {selectedCountriesOptions.map((obj, index) => {
                            return (
                              <Select.Option key={index} value={obj.value}>
                                {obj.name} - {obj.value}
                              </Select.Option>
                            );
                          })}
                        </>
                      )}
                    </Select>
                  </Form.Item>
                </div>
                <div className="inputField drop flex-auto">
                  <p className="text-[#1B4C84] pb-[3px]">
                    Search engine geolocation parameters
                  </p>
                  <Form.Item name="country_engine" className="country_engine">
                    <Select
                      className="w-full"
                      onChange={(value: string) => {
                        setSelectedGeoLocation(value);
                      }}
                      disabled={isInEditMode}
                    >
                      {countriesObj.map((country, i) => (
                        <Select.Option key={i} value={country.country}>
                          {country.country}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="checkcircle flex flex-row items-center mb-[-10px]">
                  <p className="text-[#1B4C84] whitespace-wrap">
                    Website visitors via Messenger
                  </p>
                  <Tooltip className="ml-3" title={messengerTooltipText}>
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </div>
                <SocialIcons
                  social={social}
                  handledSocial={handledSocial}
                  isInEditMode={isInEditMode}
                />
              </>
            )}
            {/* <div className=" flex flex-row gap-2 items-center">
              <p className="comingsoon text-[1.2rem] font-[900]">Coming Soon</p>
              <p className="text-[1.2rem]">&#128640;</p>
            </div> */}
          </div>
        </div>
      </div>

      {isInAdvanceSettingsMode && (
        <ConfirmBtn
          showTitle={showTitle}
          interactions={totalInteractions}
          loader={false}
          setIsSave={setIsSave}
        />
      )}
    </>
  );
};

export default AdvanceSettings;
