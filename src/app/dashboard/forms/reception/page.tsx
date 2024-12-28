"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import { MdFileUpload } from "react-icons/md";

function Reception() {

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

    return (
        <div className="flex mt-[100px] justify-center ">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col min-w-[450px] h-auto outline outline-2 -outline-offset-1 outline-gray-300 border-2 rounded-xl px-5 py-8 gap-7"
            >
                <div>
                    <Title> Product register </Title>
                </div>
                <div className="flex flex-col">
                    <Label>Serial Number </Label>
                    <Input type="text" />
                </div>
                <div className="flex flex-col">
                    <Label>BX Number </Label>
                    <Input type="text" />
                </div>
                <div className="flex flex-col">
                    <Label>Origin Company </Label>
                    <Input type="text" />
                </div>
                <div className="flex flex-col">
                    <Label>UPC </Label>
                    <Input type="number" className="mb-2" />
                </div>
                <div className="flex flex-col">
                    <Label>Model </Label>
                    <Input type="text" className="mb-2" />
                </div>
                <div className="flex flex-col">
                    <Label>Comments</Label>
                    <TextArea className="mb-2" />
                </div>
                <div className="flex justify-between items-center h-[50px]">
                    <MdFileUpload
                        className="bg-indigo-600 text-white p-2 w-[50px] h-[35px] rounded-md cursor-pointer"
                        onClick={handleClick}
                    />
                    {/* Input of type file hidden*/}
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        // Can add a onChange there if you want process the file choosen
                    />
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default Reception