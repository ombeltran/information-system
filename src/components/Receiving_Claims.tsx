import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Title from "./Title";
import { BsTrash } from "react-icons/bs";

interface Receiving_ClaimsProps {
  className?: string;
  value: string;
}

function Receiving_Claims({ className, value }: Receiving_ClaimsProps) {
  const [detail, setDetails] = useState<string[]>([]);
  const [currentDetail, setCurrentDetail] = useState<string>("");

  function handleDetailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentDetail(e.target.value);
  }

  function handleDetailClick() {
    if (currentDetail.trim() !== "") {
      setDetails([...detail, currentDetail]);
      setCurrentDetail(""); // Clear input after adding
    }
  }

  function removeDetail(index: number) {
    setDetails(detail.filter((_, i) => i !== index));
  }

  return (
    <div className={`${className} flex flex-col gap-3 w-full`}>
      {value === "1" && (
        <>
          <div>
            <Title> Sold item </Title>
          </div>
          <div className="flex flex-col">
            <Label>Model </Label>
            <Input type="text" />
          </div>
          <div className="flex flex-col">
            <Label>Serial Number </Label>
            <Input type="text" />
          </div>
        </>
      )}
      <div className="flex flex-col">
        <Label>Details </Label>
        <div className="flex gap-2">
          <Input type="text" value={currentDetail} onChange={handleDetailChange} />
          <Button type="button" onClick={handleDetailClick}>+</Button>
        </div>
        <div className={`outline outline-2 outline-gray-300 rounded-lg mb-2 mt-4 p-3 overflow-y-auto ${value !== "1" ? "h-[580px]" : "h-[383px]"}`}>
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
