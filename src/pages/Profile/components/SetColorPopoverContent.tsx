import { ColorPicker } from "antd";

import { TMainColors } from "../../../types/app.types";

const SetColorPopoverContent = ({
  changeCardColor,
  cardForeColor,
  accentColor,
}: {
  changeCardColor: (valueType: Partial<TMainColors>) => void;
  cardForeColor: string;
  accentColor: string | undefined;
}) => {
  return (
    <div className="flex justify-between items-center space-x-5">
      <div className="flex flex-col justify-center items-center border p-2 rounded space-y-1">
        <span className=" text-blue_color text-sm">Text Color</span>
        <ColorPicker
          value={cardForeColor}
          onChange={(_, hex) => changeCardColor({ foreground: hex })}
        ></ColorPicker>
      </div>

      <div className="flex flex-col justify-center items-center border p-2 rounded space-y-1">
        <span className=" text-blue_color text-sm">Accent Color</span>
        <ColorPicker
          value={accentColor}
          onChange={(_, hex) =>
            changeCardColor({ card_colors: { accent_color: hex } })
          }
        ></ColorPicker>
      </div>
    </div>
  );
};

export default SetColorPopoverContent;
