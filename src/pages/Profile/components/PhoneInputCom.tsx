import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneInputCom = ({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: any;
  setPhoneNumber: any;
}) => {
  return (
    <div className="w-full">
      <p className="text-[#1B4C84] mb-1">Phone Number</p>
      <PhoneInput
        defaultCountry="ua"
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
      />
    </div>
  );
};

export default PhoneInputCom;
