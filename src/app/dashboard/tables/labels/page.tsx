"use client"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Label {
  id: number;
  serialNumber: string;
  model: string;
  description: string;
  user: string;
}

const initialLabelsList: Label[] = [
  {
    id: 1,
    serialNumber: "123XYZ12345ABC",
    model: "QN43LS03BAFXZA",
    description: "Please print UPC and SN",
    user: "Oscar Beltran",
  },
  {
    id: 2,
    serialNumber: "987XYZ12345JKL",
    model: "QN65LS03BAFXZA",
    description: "Please print UPC and SN",
    user: "Silvestre",
  },
  {
    id: 3,
    serialNumber: "367XYZ12345DFG",
    model: "32GN550",
    description: "Please print UPC and SN",
    user: "Oscar Beltran",
  },
];

function LabelsTable() {
  const [labelsList, setLabelsList] = useState<Label[]>(initialLabelsList);

  const handleRemove = (id: number) => {
    const updatedList = labelsList.filter((label) => label.id !== id);
    setLabelsList(updatedList);
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-center text-3xl font-bold mt-[30px]">Labels pending</h1>
      {labelsList.map((label) => (
        <div
          key={label.id}
          className="outline outline-2 outline-gray-300 rounded-lg mt-[50px] p-3"
        >
          <h3 className="flex gap-4">
            <p className="font-bold">Serial Number:</p> {label.serialNumber}
          </h3>
          <h3 className="flex gap-4">
            <p className="font-bold">Model:</p> {label.model}
          </h3>
          <h3 className="flex gap-4">
            <p className="font-bold">Description:</p> {label.description}
          </h3>
          <h3 className="flex gap-4">
            <p className="font-bold">User:</p> {label.user}
          </h3>
          <div className="flex justify-between items-center">
            <div></div>
            <FaCheck
              className="bg-green-600 p-1 w-[30px] h-[30px] rounded-2xl mr-[30px] cursor-pointer"
              onClick={() => handleRemove(label.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LabelsTable;
