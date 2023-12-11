import { Form, Select, Space, Tooltip } from "antd";
import { TCountries } from "../../types/app.types";
import { InfoSvg } from "../../assets/svg/svg";

const { Option } = Select;

type TSelectCountry = {
  countries: TCountries[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<any>>;
  isInEditMode?: boolean;
};
const SelectCountry = ({
  countries,
  setSelectedCountries,
  isInEditMode,
}: TSelectCountry) => {
  const handleChange = (value: string[]) => {
    setSelectedCountries(value);
  };
  return (
    <div className="selectdays">
      <div className="flex flex-row pb-[3px] items-center">
        <p className="text-[#1B4C84] ">
          Restrict visitors to the website by country
        </p>
        <Tooltip
          className="ml-3 cursor-pointer"
          title={
            "Define the countries you want to limit website access to, tailoring your audience reach"
          }
        >
          <span>
            <InfoSvg />
          </span>
        </Tooltip>
      </div>
      <Form.Item name="countries" className="select_country_form">
        <Select
          mode="multiple"
          // placeholder="select one country"
          onChange={handleChange}
          className="flex-1 w-full"
          optionLabelProp="label"
          size="large"
          autoClearSearchValue
          disabled={isInEditMode}
        >
          {countries.map((country, i) => (
            <Option key={i} value={country.country} label={country.country}>
              <Space>
                <span role="img" aria-label={country.country}>
                  {/* {country.flag} */}
                </span>
                {country.country}
              </Space>
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectCountry;
