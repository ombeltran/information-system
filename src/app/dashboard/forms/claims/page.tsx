"use client"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import React, { useState } from "react";
import Receiving_Claims from "@/components/Receiving_Claims";
import { FaSearch } from "react-icons/fa";
import Template_Claims from "@/components/Template_Claims";
import { useAppContext } from "@/context/AppContext";
import { listOptions } from "@/data/listOptions";

function Claims() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { templateClaim, setTemplateClaim } = useAppContext();
  const { setClaimDetail,claimSoldModel ,setClaimSoldModel ,claimSoldSN , setClaimSoldSN } = useAppContext();
  const { receivedItem } = useAppContext() as {
    receivedItem: FormDataType[];
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

  // useEffect(() => {
  //   if (claimData.category !== "") {
  //     setSelectedCategory(claimData.category);
  //   }
  // }, [claimData.category]);

  // useEffect(() => {
  //   if (claimData.details.length > 0) {
  //     setClaimDetail(claimData.details)
  //   }
  // }, [claimData.details]);

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
        // setClaimData({ ...foundItem });
        setClaimData(JSON.parse(JSON.stringify(foundItem)));
        setSelectedCategory(foundItem.category);
        setClaimSoldModel(foundItem.soldModel || "");
        setClaimSoldSN(foundItem.soldSerialNumber || "");
        setClaimDetail(foundItem.details || []);
      } else {
        console.log("Item not found");
      }
    } else {
      console.error("receivedItem is not an array");
    }
  }

  function handleChangeInputs(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // setClaimData({ ...claimData, [name]: value });
    setClaimData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newCategory = e.target.value;

    listOptions.find((item, index) => {
      if (newCategory === String(index)) {
        console.log("Category found:", item);
      }
    });

    setSelectedCategory(newCategory);
    setClaimData({ ...claimData, category: newCategory }); 
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
                name="bxNumber"
                value={claimData.bxNumber}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Tracking Number</Label>
              <Input
                type="text"
                name="trackingNumber"
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
                name="model"
                value={claimData.model}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Serial Number</Label>
              <Input
                type="text"
                name="serialNumber"
                value={claimData.serialNumber}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>UPC</Label>
              <Input
                type="text"
                name="upc"
                value={claimData.upc}
                onChange={handleChangeInputs}
              />
            </div>
            <div className="flex flex-col">
              <Label>Comments</Label>
              <TextArea
                className="mb-2"
                name="comments"
                value={claimData.comments}
                onChange={handleChangeInputs}
              />
            </div>
            <div>
              <Label>Trouble Category</Label>
              <Input
                type="text"
                list="options"
                name="category"
                value={selectedCategory}
                // value={claimData.category}
                onChange={handleCategoryChange}
              />
              <datalist id="options">
                {
                  listOptions.map((item, index) => (
                    <option key={index} value={item} />
                  ))
                }
              </datalist>
            </div>
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
      {templateClaim && 
      <Template_Claims
        bxNumber={claimData.bxNumber}
        trackingNumber={claimData.trackingNumber}
        model={claimData.model}
        serialNumber={claimData.serialNumber}
        upc={claimData.upc}
        comments={claimData.comments}
        category={claimData.category}
        soldModel={claimSoldModel}
        soldSerialNumber={claimSoldSN}
        details={claimData.details}
      />}
    </div>
  );
}

export default Claims;
