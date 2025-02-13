"use client"
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Receiving_Claims from "@/components/Receiving_Claims";
import { useAppContext } from "@/context/AppContext";
import { listOptions } from "@/data/listOptions";

function Reception() {

    const [selectedCategory, setSelectedCategory] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [soldModel, setSoldModel] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [soldSerialNumber, setSoldSerialNumber] = useState("");
    const { receivedItem, setReceivedItem } = useAppContext() as {
        receivedItem: FormDataType[];
        setReceivedItem: React.Dispatch<React.SetStateAction<FormDataType[]>>;
    };
    const {removeAllDetails, setRemoveAllDetails} = useAppContext();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [details, setDetails] = useState<string[]>([]);

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

    const [formData, setFormData] = useState<FormDataType>({
        bxNumber: "",
        trackingNumber: "",
        model: "",
        serialNumber: "",
        upc: "",
        comments: "",
        details: [],
        category: "",
        soldModel: "",
        soldSerialNumber: ""
    });

    function handleSoldItemChange(model: string, serial: string) {
        setSoldModel(model);
        setSoldSerialNumber(serial);

        setFormData((prevData) => ({
            ...prevData,
            soldModel: model,
            soldSerialNumber: serial
        }));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleDetailsChange(newDetails: string[]) {
        setDetails(newDetails);
        setFormData((prevData) => ({
            ...prevData,
            details: newDetails,
        }))
    }

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const index = Number(e.target.value);
        const category = listOptions[index] || "";

        setSelectedCategory(e.target.value);

        setFormData((prevData) => ({
            ...prevData,
            category: category,
        }));
    }

    function removeDetails() {
        setDetails([]);
    }

    useEffect(() => {
        {removeAllDetails && removeDetails()}
    }, []);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setReceivedItem(prevItems => {
            const updatedItems = [...prevItems, formData];
            return updatedItems;
        });

        // Limpiar el formulario sin borrar receivedItem
        setFormData({
            bxNumber: "",
            trackingNumber: "",
            model: "",
            serialNumber: "",
            upc: "",
            comments: "",
            details: [],
            category: "",
            soldModel: "",
            soldSerialNumber: ""
        });

        setSelectedCategory("");
        setRemoveAllDetails(true);
        alert("Report saved successfully");
    }


    useEffect(() => {
        console.log("Received items updated:", receivedItem);
    }, [receivedItem]);

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
                            <Input
                                type="text"
                                name="bxNumber"
                                value={formData.bxNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Tracking Number </Label>
                            <Input
                                type="text"
                                name="trackingNumber"
                                value={formData.trackingNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-5">
                            <Title> Received item </Title>
                        </div>
                        <div className="flex flex-col">
                            <Label>Model </Label>
                            <Input
                                type="text"
                                className="mb-2"
                                name="model"
                                value={formData.model}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Serial Number </Label>
                            <Input
                                type="text"
                                name="serialNumber"
                                value={formData.serialNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>UPC </Label>
                            <Input
                                type="number"
                                className="mb-2"
                                name="upc"
                                value={formData.upc}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Comments</Label>
                            <TextArea
                                className="mb-2"
                                name="comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                            />
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

                    <Receiving_Claims
                        value={selectedCategory}
                        onDetailsChange={handleDetailsChange}
                        onSoldItemChange={handleSoldItemChange}
                    />
                </div>

                <div className="flex justify-between items-center h-[50px]">
                    <div></div>
                    <Button type="submit" className="scale-125">Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default Reception