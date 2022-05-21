import { Loader } from ".";
import { useContext, React } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const handleSubmit = (e) => {
  const { addressTo, amount, drugName, temperature, destAddress } = formData;

  // Usually when you submit a form, the page reloads.
  // preventDefault() prevents this.
  // e.preventDefault();

  if (!addressTo || !amount || !drugName || !temperature || !destAddress)
    return;

  // sendTransaction();
  orderForDispatch();
};

function DispatchForm() {
  const { handleChange, isLoading } = useContext(TransactionContext);
  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      {/* <Input placeholder="Address To"  name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH): 0.0005 ETH" name="amount" type="number" handleChange={handleChange} />
            <SimpleInput placeholder="Drug Name" name="dn" type="text"/>
            <SimpleInput placeholder="Temprature Limit (degree C)" name="tl" type="text"/>
            <SimpleInput placeholder="Quantity" name="Quantity" type="number"/>
            <SimpleInput placeholder="Delivery Address" name="da" type="text"/> */}
      {/* <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} /> */}

      <Input
        placeholder="Address To: 0xB59e.."
        name="addressTo"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={handleChange}
      />
      <Input
        placeholder="Name of the Drug"
        name="drugName"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Temperature in d. C"
        name="temperature"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Destination Address"
        name="destAddress"
        type="text"
        handleChange={handleChange}
      />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Proceed for Shipment
        </button>
      )}
    </div>
  );
}

export default DispatchForm;
