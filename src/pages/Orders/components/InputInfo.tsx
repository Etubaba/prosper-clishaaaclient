import RadioBtn from "../../../components/elements/RadioBtn";
import { useDataStore } from "../../../context/dataProvider";
import DisplayBox from "./DisplayBox";
import refreshIcon from "../../../assets/icon/refresh_time_icon.png";
import { singletaskData } from "../../../types/app.types";
import { removeSpecialCharacters } from "../../../utils/helperr";
const InputInfo = () => {
  const { singletaskData }: { singletaskData: singletaskData } = useDataStore();

  return (
    <div>
      <div className="flex py-3 space-x-3">
        <DisplayBox
          label="Created"
          value={singletaskData.created_at.split(" ")[0]}
        />
        <DisplayBox label="Type" value={singletaskData.type} />
        <DisplayBox
          label="Interaction"
          value={
            singletaskData.interaction >= 0 ? singletaskData.interaction : 0
          }
        />
        <DisplayBox label="Status IA" value={singletaskData.status_a ?? "-"} />
        <DisplayBox
          label="Status %"
          value={
            singletaskData.status_percentage
              ? `${singletaskData.status_percentage}`
              : "0 %"
          }
        />
        <DisplayBox
          label="Auto Renew"
          value={singletaskData.auto_renew === "no" ? "not active" : "active"}
          isRed={singletaskData.auto_renew === "no"}
          isGreen={singletaskData.auto_renew === "yes"}
        />
        <DisplayBox
          label="Success"
          value={singletaskData.success ? `${singletaskData.success}` : "0 %"}
        />
      </div>
      <div className="flex py-3 space-x-3 items-center">
        <DisplayBox
          label="Country"
          value={singletaskData.country ? String(singletaskData.country) : "-"}
        />
        <DisplayBox label="Start Url" value={singletaskData.url} />
        <DisplayBox label="Keyword" value={String(singletaskData.keyword)} />

        <RadioBtn
          className={"flex-auto w-[50%] justify-start mt-4"}
          state={true}
          setState={() => {}}
          title={"Any URL from this domain "}
        />
      </div>
      <div className="flex py-3 space-x-3 items-center">
        <DisplayBox
          label="Daily Clicks"
          value={singletaskData.daily_clicks ?? 0}
        />
        <DisplayBox label="Country" value={String(singletaskData.country)} />
        <img src={refreshIcon} alt="" className="mt-4" />
      </div>
      <div className="flex py-3 space-x-3 items-center">
        <DisplayBox
          label="Search  engine"
          value={
            singletaskData?.google_search
              ? removeSpecialCharacters(singletaskData?.google_search["engine"])
              : "-"
          }
        />
      </div>
    </div>
  );
};

export default InputInfo;
