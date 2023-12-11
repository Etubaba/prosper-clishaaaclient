import { Form } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import FirstForm from "./FirstForm";
import { Reducer, useReducer } from "react";
import { TformConfig, formConfigReducer } from "../../manager/reducerManger";
import { formConfigInitailValue } from "../../constants/data";
import { TDataAction } from "../../types/app.types";
import RecurringForm from "./RecurringForm";

const EditPage = () => {
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const [formSetting, setFormSetting] = useReducer<
    Reducer<TformConfig, TDataAction>
  >(formConfigReducer, formConfigInitailValue);

  const is_config_task = useWatch("is_config_task", form);
  const is_week = useWatch("is_week", form);

  return (
    <div>
      <Form
        form={form}
        name="complex-form"
        layout="vertical"
        className="md:ms-9 ms-0 lg:w-[450px] w-full"
        requiredMark={false}
        onFinish={onFinish}
      >
        <FirstForm
          isRecurring={formSetting.isRecurring}
          showMonth={formSetting.showMonth}
          setFormSetting={setFormSetting}
        />
        <RecurringForm
          is_config_task={is_config_task}
          is_week={is_week}
          setFormSetting={setFormSetting}
        />
      </Form>
    </div>
  );
};

export default EditPage;
