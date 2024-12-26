"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import Option from "@/components/Option";
import { useRouter } from 'next/navigation';
import { useState } from "react";

function Report() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selectedCategory === "5") {
      router.push('/dashboard/report/missing');
    } else {
      alert("Report saved successfully");
      window.location.reload();
    }
  }
  return (
    <div className="flex mt-[100px] justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-[450px] h-auto outline outline-2 -outline-offset-1 outline-gray-300 border-2 rounded-xl px-5 py-8"
      >
        <div className="mb-5">
          <Title> Production report </Title>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Serial Number </Label>
          <Input type="text" />
          <div className="flex justify-between items-center h-[50px]">
            <div></div> {/*Div elemet used to move the button to right side */}
            <Button type="button">Search</Button>
          </div>
        </div>
        <div>
          <Label>UPC </Label>
          <Input type="number" className="bg-gray-100 mb-2" />
          <Label>Model </Label>
          <Input type="text" className="bg-gray-100 mb-2" />
          <Label>Comments</Label>
          <TextArea className="bg-gray-100 mb-2" />
        </div>
        <div className="mb-5">
          <Title> Status assignment </Title>
        </div>
        <div>
          <Label>Category</Label>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="categorySelection w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-400 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg mb-2">
            <Option value="" hidden>
              Select an Option
            </Option>
            <Option value="1">Open box</Option>
            <Option value="2">Defective</Option>
            <Option value="3">Crack</Option>
            <Option value="4">Damage</Option>
            <Option value="5">Missing accessories</Option>
          </Select>
          <Label>Note</Label>
          <TextArea className="mb-2" />
        </div>
        <div className="flex justify-between items-center h-[50px]">
          <div></div> {/*Div elemet used to move the button to right side */}
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default Report