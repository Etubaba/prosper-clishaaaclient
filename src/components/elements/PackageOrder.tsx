import notification from "../notification";

type TPackageOrder = {
  packageName: string;
  Interaction: number;
  startDate: string;
  price: number;
  vat: number;
  proceedBtn: boolean;
  isPaymentTabActive: boolean;
  setIsisPaymentTabActive: React.Dispatch<React.SetStateAction<any>>;
  name?: string
  method?: string
};

const PackageOrder = ({
  packageName,
  Interaction,
  startDate,
  price,
  vat,
  proceedBtn,
  isPaymentTabActive,
  name,
  method,
  setIsisPaymentTabActive,
}: TPackageOrder) => {
  return (
    <div className="w-full flex flex-col h-full min-h-[291px] max-w-[100%] sm:max-w-[300px]">
      <div className="bg-green h-[52px] w-full p-2 flex flex-row items-center justify-center">
        <p className=" text-white tracking-wider font-[500]">
          Package Order Details
        </p>
      </div>
      <div className="bg-white p-2 py-6 flex-auto flex flex-col gap-2 justify-between">
        { name && <div className="flex flex-row items-center justify-between">
          <p>Company Name:</p>
          <p>{name}</p>
        </div>
        }
        { method && <div className="flex flex-row items-center justify-between">
        <p>Payment Method:</p>
        <p>{method}</p>
      </div>}
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
        {proceedBtn && (
          <div className="flex flex-row items-center justify-between">
            <p>Total Price:</p>
            <p className="font-bold">{Number((price + vat).toFixed(1))} €</p>
          </div>
        )}
      </div>
      {proceedBtn ? (
        <div
          className="proceedBtn bg-blue relative w-full p-2 flex flex-row items-center justify-center cursor-pointer"
          onClick={() => {
            if (price < 1) {
              notification.displayInfo({
                message: "error",
                description: "please select a valid package",
              });
            } else {
              setIsisPaymentTabActive(true);
            }
          }}
        >
          <div className="gardientBack z-[1] absolute w-full h-full top-0 right-0 left-0 bottom-0"></div>
          <p className=" text-white tracking-wider font-[500] whitespace-nowrap">
            Continue to payment process
          </p>
        </div>
      ) : (
        <div className="bg-white w-full p-2 py-4 flex flex-row items-center justify-center border-t-2 border-grey border-dashed">
          <div className="flex flex-row items-center w-full justify-between">
            <p>Total Price:</p>
            <p className="font-bold">{Number((price + vat).toFixed(1))} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageOrder;
