import { Form, Input, Select } from "antd";
import { numberCode } from "../../../constants/numberCode";
import { countriesObj } from "../../../constants/data";
import PhoneInputCom from "./PhoneInputCom";
const { Option } = Select;
// const prefixSelector = (

// );

const BillingFormSection = ({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: any;
  setPhoneNumber: any;
}) => {
  return (
    <>
      <Form.Item
        name="name"
        label="Company Name"
        className="w-full"
        rules={[
          {
            required: true,
            // message: "Please input your E-mail!",
            message: "",
          },
        ]}
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      <Form.Item
        name="address_line"
        label="Address Line"
        className="w-full"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      <Form.Item
        name="address_line_two"
        label="Address line 2"
        className="w-full"
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      <Form.Item
        name="zip"
        className="w-full"
        label="Zip Code"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      <Form.Item
        name="country"
        className="w-full"
        label="Country"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Select>
          {countriesObj.map((country) => {
            return (
              <Select.Option value={country.country.toLowerCase()}>
                {country.country}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        name="city"
        className="w-full"
        label="City"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      <Form.Item
        name="vat_number"
        label="VAT number"
        className="w-full"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
      </Form.Item>

      {/* <Form.Item
        name="phone_number"
        className="w-full"
        label="Phone number"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Input
          addonBefore={
            <Form.Item name="prefix" noStyle>
              <Select
                style={{
                  width: 100,
                }}
              >
                {Object.entries(numberCode)
                  .sort()
                  .map(([key, subject], i) => (
                    <Option key={i} value={subject}>
                      {`${key} +${subject}`}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          }
          style={{
            width: "100%",
          }}
        />
      </Form.Item> */}

      <PhoneInputCom
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default BillingFormSection;
