"use client"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
// import { MdFileUpload } from "react-icons/md";
import { useState } from "react";
import Receiving_Claims from "@/components/Receiving_Claims";

function Reception() {

    const [selectedCategory, setSelectedCategory] = useState("");

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert("Report saved successfully");
        window.location.reload();
    }

    const listOptions = [
        "Different item inside",
        "Extra item inside",
        "Physical problems",
        "Defective functions",
        "Damaged",
        "Bound"
    ]

    // function handleClick() {
    //     document.getElementById("fileInput")?.click();
    // }

    // function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (e.target.files && e.target.files.length > 0) {
    //         console.log("File selected:", e.target.files[0].name);
    //     }

    //     alert("File loaded and saved sucessfully");
    // }

    return (
        <div className="flex mt-[100px] justify-center ">
            <Form
                onSubmit={handleSubmit}
                className="flex flex-col min-w-[1200px] h-auto rounded-xl px-5 py-4 gap-7 mb-5"
            >
                <div>
                    <Title> Product receiving </Title>
                </div>
                <div className="flex gap-20 w-full">
                    <div className="flex flex-col gap-5 w-full">

                        <div className="flex flex-col">
                            <Label>BX Number </Label>
                            <Input type="text" />
                        </div>
                        <div className="flex flex-col">
                            <Label>Tracking Number </Label>
                            <Input type="text" />
                        </div>

                        <div className="mt-5">
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

                    <Receiving_Claims value={selectedCategory} />
                </div>

                <div className="flex justify-between items-center h-[50px]">
                    {/* <MdFileUpload
                        className="bg-indigo-600 text-white p-2 w-[50px] h-[35px] rounded-md cursor-pointer"
                        onClick={handleClick}
                    />
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    /> */}
                    <div></div>
                    <Button type="submit" className="scale-125">Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default Reception