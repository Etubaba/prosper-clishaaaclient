import { Form, Input } from "antd";
import { CardSvg } from "../../assets/svg/svg";

const BankPayment = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* <input
        // prefix={<CardSvg />}
        type={"text"}
        maxLength={19}
        value={cardNumber
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
          .trim()}
        onChange={(e) => setCardNumber(e.target.value)}
        className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[1.1rem]"
      /> */}
      {/* <Form.Item
        name='card_number'
        label='Card No'
        className='w-full'
        rules={[
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input
          prefix={<CardSvg />}
          type={'text'}
          maxLength={19}
          className=' w-full px-3 py-2 bg-white rounded-[5px] text-black text-[1.1rem]'
        />
      </Form.Item>
      <div className='flex flex-row gap-6'>
        <Form.Item
          name='expire'
          label='Expire'
          className='w-full'
          rules={[
            {
              required: false,
              // message: "Please input your E-mail!",
              message: '',
            },
          ]}
        >
          <Input className=' w-full px-3 py-2 bg-white rounded-[5px] text-black text-[1.1rem]' />
        </Form.Item>
        <Form.Item
          name='cvv'
          label='CVV'
          className='w-full'
          rules={[
            {
              required: false,
              // message: "Please input your E-mail!",
              message: '',
            },
          ]}
        >
          <Input className=' w-full px-3 py-2 bg-white rounded-[5px] text-black text-[1.1rem]' />
        </Form.Item>
      </div>
      <Form.Item
        name='discount_coupon'
        label='Discount Coupon'
        className='w-full'
        rules={[
          {
            required: false,
            // message: "Please input your E-mail!",
            message: '',
          },
        ]}
      >
        <Input className=' w-full px-3 py-2 bg-white rounded-[5px] text-black text-[1.1rem]' />
      </Form.Item> */}
      
    </div>
  );
};

export default BankPayment;
