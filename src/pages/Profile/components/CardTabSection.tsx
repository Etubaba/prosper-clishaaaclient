import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import Card from "../../../components/elements/Card";
import ColorBtn from "../../../components/elements/ColorBtn";
import { useUserStore } from "../../../context/userProvider";

import useFetchMethods from "../../../hook/useFetchMethod";
import { TMainColors, TuserComapnyDetails } from "../../../types/app.types";
import useRequestManager from "../../../manager/requestManger";
import { beforeUpload, getBase64 } from "../../../utils/helperr";

import SetColors from "./SetColors";

const CardTabSection = () => {
  const { updateProfilePic } = useRequestManager();
  const { company, admin, updateUser } = useUserStore();
  const { updateUserCard, getUserProfile, loading } = useFetchMethods();
  const [imgLoading, setImgLoading] = useState<boolean>(false);

  const [cardMainColors, setCardMainColors] = useState<TMainColors>({
    foreground: company?.foreground,
    background: company?.background,
    card_colors: { accent_color: company.card_colors?.accent_color },
  });
  const [showSaveButton, setShowSaveButton] = useState<boolean>(false);

  const changeCardColor = (value: Partial<TMainColors>) => {
    setCardMainColors({
      ...cardMainColors,
      ...value,
    });
  };

  const updateCard = async () => {
    await updateUserCard(cardMainColors);
    const getResponse = await getUserProfile();
    if (getResponse?.data?.data) {
      const newData: TuserComapnyDetails = {
        company: {
          ...getResponse?.data?.data.company,
        },
      };
      updateUser(newData);
    }
    setShowSaveButton(false);
  };

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setImgLoading(true);
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const FormData = require("form-data");
    const formData = new FormData();
    const pop = formData.append("photo", selectedFiles?.[0]);
    console.log(pop);
    if (beforeUpload(selectedFiles?.[0])) {
      await updateProfilePic(formData);
      getBase64(selectedFiles?.[0], (url) => {
        company.photo = url;
        updateUser({ company: company });
      });
      setImgLoading(false);
    }
  };
  useLayoutEffect(() => {
    setCardMainColors({
      foreground: company?.foreground,
      background: company?.background,
      card_colors: {
        accent_color: company?.card_colors?.accent_color,
      },
    });
  }, [company]);

  useEffect(() => {
    if (
      company?.background !== cardMainColors.background ||
      company?.foreground !== cardMainColors.foreground ||
      company?.card_colors?.accent_color !==
        cardMainColors.card_colors.accent_color
    ) {
      setShowSaveButton(true);
    } else {
      setShowSaveButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardMainColors.background,
    cardMainColors.foreground,
    cardMainColors.card_colors.accent_color,
  ]);

  return (
    <div>
      <h1 className="profile_subtitle text-[#1B4C84] pt-4 sm:pt-0">
        Create your user card
      </h1>
      <SetColors
        cardForeColor={cardMainColors.foreground}
        changeCardColor={changeCardColor}
        imgLoading={imgLoading}
        handleChange={handlePhotoChange}
        showSaveButton={showSaveButton}
        loading={loading}
        accentColor={cardMainColors.card_colors.accent_color}
        updateCard={updateCard}
      />
      <div className="flex flex-row w-full gap-[1px] mt-2">
        <ColorBtn value={"#ffffff"} changeColorFn={changeCardColor} />
        <ColorBtn value={"#1B4C84"} changeColorFn={changeCardColor} />
        <ColorBtn value={"#000000"} changeColorFn={changeCardColor} />
        <ColorBtn value={"#FABE28"} changeColorFn={changeCardColor} />
      </div>
      <div className="card mt-3 flex flex-row justify-center items-center">
        <Card
          boxColor={cardMainColors.background}
          foreColor={cardMainColors.foreground}
          logo={company?.photo}
          text={`Complete the ${company?.name} task to claim your bonus.`}
          cardType="search"
          lineColor={cardMainColors.foreground}
          interaction_amount={0}
          url={""}
          duration={0}
          task_code={""}
          cardColors={cardMainColors.card_colors.accent_color ?? "#fa6e28"}
        />
      </div>
    </div>
  );
};

export default CardTabSection;
