"use client"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import { useState } from "react";
import Receiving_Claims from "@/components/Receiving_Claims";
import { FaSearch } from "react-icons/fa";
import Template_Claims from "@/components/Template_Claims";
import { useAppContext } from "@/context/AppContext";

function Claims() {

  const [selectedCategory, setSelectedCategory] = useState("");
  const {templateClaim, setTemplateClaim} = useAppContext();

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(e.target.value);
  }

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

    alert("File loaded and saved sucessfully");
  }

  function handleClickTemplate() {
    setTemplateClaim(!templateClaim);
  }

  const listOptions = [
    "Different item inside",
    "Extra item inside",
    "Physical problems",
    "Defective functions",
    "Damaged",
    "Bound"
  ]

  return (
    <div className="flex mt-[100px] justify-center ">
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-[1200px] h-auto rounded-xl px-5 py-4 gap-7 mb-5"
      >
        <div>
          <Title> Claim processing </Title>
        </div>
        <div className="flex gap-20 w-full">
          <div className="flex flex-col gap-5 w-full">

            <div className="flex flex-col">
              <Label>Search</Label>
              <div className="flex items-center gap-2">
                <Input type="text" />
                <FaSearch className="text-4xl text-indigo-600" />
              </div>
            </div>
            <div className="flex flex-col">
              <Label>BX Number </Label>
              <Input type="text" />
            </div>
            <div className="flex flex-col">
              <Label>Tracking Number </Label>
              <Input type="text" />
            </div>

            <div className="mt-3">
              <Title> Received item </Title>
            </div>
            <div className="flex flex-col">
              <Label>Model </Label>
              <Input type="text" className="mb-2" />
            </div>
            <div className="flex flex-col">
              <Label>Serial Number </Label>
              <Input type="text" />
            </div>
            <div className="flex flex-col">
              <Label>UPC </Label>
              <Input type="number" className="mb-2" />
            </div>
            <div className="flex flex-col">
              <Label>Comments</Label>
              <TextArea className="mb-2" />
            </div>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="categorySelection w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-400 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg"
            >
              <Option value="" hidden>Trouble category</Option>
              {
                listOptions.map((item, index) => (
                  <Option key={index} value={String(index)}>{item}</Option>
                ))
              }
            </Select>
          </div>

          <div className="flex flex-col gap-4 w-full h-full">
            <Receiving_Claims value={selectedCategory} />

            <div className="flex justify-between gap-5">
              <button type="button" onClick={handleClickTemplate} className="w-32 h-10 rounded-md text-white bg-indigo-600">Create claim</button>

              <div className="flex gap-4 items-center">
                <Label>Attach photos</Label>
                <Button type="button" onClick={handleClick} className="scale-125 cursor-pointer">+</Button>
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
          <Button type="submit" className="scale-125">Save</Button>
        </div>
      </Form>
      {
        templateClaim && <Template_Claims />
      }
    </div>
  )
}

export default Claims