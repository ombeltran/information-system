"use client"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import React, { useState, useEffect } from "react";
import Receiving_Claims from "@/components/Receiving_Claims";
import { FaSearch } from "react-icons/fa";
import Template_Claims from "@/components/Template_Claims";
import { useAppContext } from "@/context/AppContext";
import { listOptions } from "@/data/listOptions";

function Claims() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { templateClaim, setTemplateClaim } = useAppContext();
  const { setClaimDetail, setClaimSoldModel, setClaimSoldSN } = useAppContext();
  const { receivedItem, setReceivedItem } = useAppContext() as {
    receivedItem: FormDataType[];
    setReceivedItem: React.Dispatch<React.SetStateAction<FormDataType[]>>;
  };

  type FormDataType = {
    bxNumber: string;
    trackingNumber: string;
    model: string;
    serialNumber: string;
    upc: string;
    comments: string;
    details: string[];
    category: string;
    soldModel?: string;
    soldSerialNumber?: string;
  };

  const [claimData, setClaimData] = useState<FormDataType>({
    bxNumber: "",
    category: "",
    comments: "",
    details: [],
    model: "",
    serialNumber: "",
    soldModel: "",
    soldSerialNumber: "",
    trackingNumber: "",
    upc: ""
  });


  function handleDetailsChange(details: string[]) {
    setClaimDetail(details);
  }

  function handleSoldItemChange(model: string, serial: string) {
    setClaimSoldModel(model);
    setClaimSoldSN(serial);
  }

  useEffect(() => {
    if (claimData.category !== "") {
      setSelectedCategory(claimData.category);
    }
  }, [claimData.category]);

  useEffect(() => {
    if(claimData.details.length > 0){
      setClaimDetail(claimData.details)
    }
  }, [claimData.details]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Report saved successfully");
    window.location.reload();
  }

  function handleClick() {
    document.getElementById("fileInput")?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      console.log("File selected:", e.target.files[0].name);
    }
    alert("File loaded and saved successfully");
  }

  function handleClickTemplate() {
    setTemplateClaim(!templateClaim);
  }

  function handleSearch() {
    if (Array.isArray(receivedItem)) {
      const foundItem = receivedItem.find((item) => item.bxNumber === searchValue);
      if (foundItem) {
        setClaimData(foundItem);
        setSelectedCategory(foundItem.category);
        setClaimSoldModel(foundItem.soldModel || "");
        setClaimSoldSN(foundItem.soldSerialNumber || "");
        console.log("Found Model:", foundItem.soldModel);
        console.log("Found Serial:", foundItem.soldSerialNumber);
      } else {
        console.log("Item not found");
      }
    } else {
      console.error("receivedItem is not an array");
    }
  }  

  function handleChangeInputs(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setClaimData({ ...claimData, [name]: value });
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newCategory = e.target.value;

    listOptions.find((item, index) => {
      if (newCategory === String(index)) {
        console.log("Category found:", item);
      }
    });

    setSelectedCategory(newCategory);
    setClaimData({ ...claimData, category: newCategory }); // Asegura que claimData también se actualice
  }

  return (
    <div className="flex mt-[100px] justify-center">
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-[1200px] h-auto rounded-xl px-5 py-4 gap-7 mb-5"
      >
        <div>
          <Title>Claim processing</Title>
        </div>
        <div className="flex gap-20 w-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col">
              <Label>Search</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <FaSearch
                  className="text-4xl text-indigo-600 cursor-pointer"
                  onClick={handleSearch}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Label>BX Number</Label>
              <Input
                type="text"
                value={claimData.bxNumber}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Tracking Number</Label>
              <Input
                type="text"
                value={claimData.trackingNumber}
                onChange={handleChangeInputs}
              />
            </div>

            <div className="mt-3">
              <Title>Received item</Title>
            </div>
            <div className="flex flex-col">
              <Label>Model</Label>
              <Input
                type="text"
                value={claimData.model}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Serial Number</Label>
              <Input
                type="text"
                value={claimData.serialNumber}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>UPC</Label>
              <Input
                type="text"
                value={claimData.upc}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Comments</Label>
              <TextArea
                className="mb-2"
                value={claimData.comments}
                onChange={handleChangeInputs}
              />
            </div>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="categorySelection w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-400 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg"
            >
              <Option value="" hidden>
                Trouble category
              </Option>
              {listOptions.map((item, index) => (
                <Option key={index} value={String(index)}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-4 w-full h-full">
            <Receiving_Claims
              value={selectedCategory}            
              onDetailsChange={handleDetailsChange}
              onSoldItemChange={handleSoldItemChange}
            />
            <div className="flex justify-between gap-5">
              <button
                type="button"
                onClick={handleClickTemplate}
                className="w-32 h-10 rounded-md text-white bg-indigo-600"
              >
                Create claim
              </button>

              <div className="flex gap-4 items-center">
                <Label>Attach photos</Label>
                <Button type="button" onClick={handleClick} className="scale-125 cursor-pointer">
                  +
                </Button>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center h-[50px]">
          <div></div>
          <Button type="submit" className="scale-125">
            Save
          </Button>
        </div>
      </Form>
      {templateClaim && <Template_Claims />}
    </div>
  );
}

export default Claims;
