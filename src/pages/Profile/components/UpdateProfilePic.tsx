import { ChangeEvent, useState } from "react";
import { MdOutlineModeEdit } from "../../../assets/icon";
import { beforeUpload, getBase64 } from "../../../utils/helperr";
import { useUserStore } from "../../../context/userProvider";
import useRequestManager from "../../../manager/requestManger";
import Spinner from "../../../components/elements/Spiner";
const UpdateProfilePic = () => {
  const { updateUser, company } = useUserStore();
  const { updateCompanyIcon } = useRequestManager();

  const [Loading, setLoading] = useState<boolean>(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const { files } = e.target;
    const selectedFiles = files as FileList;
    // const FormData = require("form-data");
    const formData = new FormData();
    formData.append("icon", selectedFiles?.[0]);
    console.log(selectedFiles?.[0]);
    console.log(formData);
    if (beforeUpload(selectedFiles?.[0])) {
      await updateCompanyIcon(formData);
      getBase64(selectedFiles?.[0], (url) => {
        company.icon = url;
        updateUser({ company: company });
      });
      setLoading(false);
    }
  };
  return (
    <div className="mb-4x flex items-">
      {/* <h1 className="profile_subtitle text-[#1B4C84]">Profile Picture</h1> */}

      <div className=" justify-self-start ms-16x">
        <input
          type="file"
          name="profile_pic"
          id="profile_pic"
          className=" !hidden "
          onChange={handleChange}
        />
        <label htmlFor="profile_pic" className="text-[#1B4C84] inline-block">
          <div className="flex w-20 h-20 items-center flex-col rounded-full  border-2  text-2xl  justify-center cursor-pointer relative">
            {Loading ? (
              <Spinner />
            ) : (
              <>
                <span className=" text-lg absolute top-1 right-[-1rem] p-2 rounded-full bg-slate-200">
                  <MdOutlineModeEdit />
                </span>
                {company.icon ? (
                  <img
                    src={company.icon}
                    alt="profile"
                    className="w-full h-full rounded-full  "
                  />
                ) : (
                  <span className=" text-sm">Upload</span>
                )}
              </>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default UpdateProfilePic;
