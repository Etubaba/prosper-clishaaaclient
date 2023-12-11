import clishaLogo from "../../../assets/img/clishalogo.png";

type TReceipt = {
  packageName: string;
  Interaction: number;
  startDate: string;
  price: number;
  vat: number;
  name?: string | undefined;
  method?: string | undefined;
};

const Receipt = ({
  packageName,
  Interaction,
  startDate,
  price,
  vat,
  name,
  method,
}: TReceipt) => {
  return (
    <div className="receipt w-full">
      <div
        style={{
          background: "linear-gradient(180deg, #FFE090 0%, #FABF28 100%)",
        }}
        className="header flex flex-row justify-between items-center p-10"
      >
        <div className="flex flex-col justify-between h-full items-start gap-20">
          <img src={clishaLogo} alt="clisha logo" className="w-[150px]" />
          <h1 className="text-white font-bold text-[2.5rem] leading-none">
            Thank you<br></br>For Purchasing
          </h1>
        </div>
        <div>
          <svg
            width="111"
            height="105"
            viewBox="0 0 111 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5172 63.9724L19.6517 56.7863M2.49204 84.3639L10.6266 77.1778M5.20175 101.372L13.3363 94.1862M21.0367 102.864L29.1713 95.6779M41.3626 94.9532L49.4971 87.7671M34.3568 60.893C29.8681 63.769 21.327 72.9196 23.0717 86.5147C28.0023 86.826 39.9454 84.8597 48.2725 74.5037M60.5548 70.4547C56.9061 71.8815 52.9983 73.0744 48.8158 73.9894L33.828 60.8786C34.8208 57.1693 36.4502 52.7353 38.7764 47.9953M60.5548 70.4547C61.3479 73.7021 61.9534 81.2284 58.0303 85.3546C68.7978 85.0892 88.0333 79.6362 78.8349 59.9472M60.5548 70.4547C67.5684 67.7122 73.6246 64.1056 78.8349 59.9472M60.5548 70.4547L38.7764 47.9953M78.8349 59.9472C99.8958 43.1384 107.135 17.3146 107.908 3.10696C84.6125 3.52783 62.6847 13.8673 50.6181 27.4696M50.6181 27.4696C42.9533 22.1444 27.6506 19.7499 23.0561 48.4123C26.5605 46.3915 35.9498 41.3565 38.7764 47.9953M50.6181 27.4696C45.6524 33.0673 41.7403 42.3859 38.7764 47.9953M85.3885 33.1839C85.2526 38.1487 81.1177 42.0633 76.1529 41.9275C71.1881 41.7916 67.2735 37.6567 67.4093 32.6919C67.5452 27.7271 71.6801 23.8125 76.6449 23.9484C81.6097 24.0842 85.5243 28.2191 85.3885 33.1839Z"
              stroke="white"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      <div className="body flex flex-col h-full bg-white min-h-[800px] p-10">
        <div className="bg-white p-2 py-6 flex-auto flex flex-col gap-4">
          {name && (
            <div className="flex flex-row items-center justify-between">
              <p>Company Name:</p>
              <p>{name}</p>
            </div>
          )}
          {method && (
            <div className="flex flex-row items-center justify-between">
              <p>Payment Method:</p>
              <p>{method}</p>
            </div>
          )}
          <div className="flex flex-row items-center justify-between">
            <p>Package Name:</p>
            <p>{packageName}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>Interaction:</p>
            <p>{Interaction}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>Start Date:</p>
            <p>{startDate}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>Price:</p>
            <p className="font-bold">{price} €</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>VAT (20%):</p>
            <p className="font-bold">{vat} €</p>
          </div>
          <div className="w-full h-[1px] bg-[#FABF28] my-4"></div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-bold">Total:</p>
            <p className="font-bold">{price + vat} €</p>
          </div>
        </div>
      </div>
      <div className="footer h-[30px] w-full bg-[#FABF28]"></div>
    </div>
  );
};

export default Receipt;
