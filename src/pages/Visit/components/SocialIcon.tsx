import { Checkbox } from "antd";
import {
  Whatsapp,
  Messenger,
  Telegram,
  Skype,
  Weechat,
  Snapchat,
  Line,
  Gmail,
} from "../../../assets/svg/svg";
import { useEffect } from "react";

const socialArray = [
  { name: "Whatsapp", icon: <Whatsapp /> },
  { name: "Messenger", icon: <Messenger /> },
  { name: "Telegram", icon: <Telegram /> },
  { name: "Skype", icon: <Skype /> },
  { name: "Snapchat", icon: <Snapchat /> },
  { name: "Weechat", icon: <Weechat /> },
  { name: "Line", icon: <Line /> },
  { name: "Gmail", icon: <Gmail /> },
];

const SocialIcons = ({
  social,
  handledSocial,
  isInEditMode,
}: {
  social: string[];
  handledSocial: (value: string) => void;
  isInEditMode?: boolean;
}) => {
  useEffect(() => {}, []);
  return (
    <div className="flex items-center w-full justify-between">
      {socialArray.map(({ icon, name }) => (
        <span key={name} className="flex items-center">
          <Checkbox
            disabled={isInEditMode}
            onChange={() => handledSocial(name)}
            checked={social.includes(name)}
            className="rounded-full  text-xs"
          ></Checkbox>
          {icon}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
