import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Title from "./Title";
import { BsTrash } from "react-icons/bs";
import { useAppContext } from "@/context/AppContext";

interface Receiving_ClaimsProps {
  className?: string;
  value: string;
  onDetailsChange: (details: string[]) => void;
  onSoldItemChange: (model: string, serial: string) => void;
}

function Receiving_Claims({ className, value, onDetailsChange, onSoldItemChange }: Receiving_ClaimsProps) {
  const [detail, setDetails] = useState<string[]>([]);
  const [currentDetail, setCurrentDetail] = useState<string>("");
  const [soldModel, setSoldModel] = useState<string>("");
  const [soldSerialNumber, setSoldSerialNumber] = useState<string>("");
  const { removeAllDetails } = useAppContext();
  const { claimDetail, claimSoldModel, claimSoldSN } = useAppContext();

  function handleDetailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentDetail(e.target.value);
  }

  function handleDetailClick() {
    if (currentDetail.trim() !== "") {
      const newDetails = [...detail, currentDetail];
      setDetails(newDetails);
      setCurrentDetail("");
      onDetailsChange(newDetails); // Notificar a Reception
    }
  }

  function removeDetail(index: number) {
    const newDetails = detail.filter((_, i) => i !== index);
    setDetails(newDetails);
    onDetailsChange(newDetails); // Notificar a Reception
  }

  function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {
    const model = e.target.value;
    setSoldModel(model);
    onSoldItemChange(model, soldSerialNumber); // Notificar al padre
  }

  function handleSerialChange(e: React.ChangeEvent<HTMLInputElement>) {
    const serial = e.target.value;
    setSoldSerialNumber(serial);
    onSoldItemChange(soldModel, serial); // Notificar al padre
  }

  useEffect(() => {
    if (removeAllDetails) {
      setDetails([]);
      setCurrentDetail("");
      onDetailsChange([]);  // ✅ Llamar correctamente
    }
  }, [removeAllDetails]);

  useEffect(() => {
    if (removeAllDetails) {
      setDetails([]);
      setCurrentDetail("");
      onDetailsChange([]);  // ✅ Llamar correctamente
    }
  }, [removeAllDetails]);

  useEffect(() => {
    setSoldModel(claimSoldModel);
    setSoldSerialNumber(claimSoldSN);
    setDetails(claimDetail);
    
  }, [claimSoldModel, claimSoldSN, claimDetail]);

  
  return (
    <div className={`${className} flex flex-col gap-3 w-full h-full`}>
      { value === "Different item inside" && (
        <>
          <div>
            <Title> Sold item </Title>
          </div>
          <div className="flex flex-col">
            <Label>Model </Label>
            <Input
              type="text"
              name="soldModel"
              value={soldModel}
              onChange={handleModelChange}
            />
          </div>
          <div className="flex flex-col">
            <Label>Serial Number </Label>
            <Input
              type="text"
              name="soldSerialNumber"
              value={soldSerialNumber}
              onChange={handleSerialChange}
            />
          </div>
        </>
      )}
      <div className="flex flex-col h-full">
        <Label>Details </Label>
        <div className="flex gap-2">
          <Input type="text" value={currentDetail} onChange={handleDetailChange} />
          <Button type="button" onClick={handleDetailClick}>+</Button>
        </div>
        <div className="flex flex-col flex-1 outline outline-2 outline-gray-300 rounded-lg mb-2 mt-4 p-3 overflow-y-auto h-full">
          {detail.map((item, index) => (
            <div key={index} className="flex mt-1 items-center justify-between">
              <span>{item}</span>
              <BsTrash
                onClick={() => removeDetail(index)}
                className="cursor-pointer bg-red-500 text-white text-xl h-7 w-5 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receiving_Claims;
