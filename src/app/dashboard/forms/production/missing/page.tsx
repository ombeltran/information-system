"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import Select from "@/components/Select";
import Title from "@/components/Title";
import { useState } from 'react';

function MissingAccessories() {
    const [selectedAccessory, setSelectedAccessory] = useState<string>('');
    const [missingAccessoriesList, setMissingAccessoriesList] = useState<string[]>([]);

    function handleAccessoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAccessory(e.target.value);
        console.log(missingAccessoriesList);

    }

    function handleAddAccessory() {
        if (selectedAccessory && !missingAccessoriesList.includes(selectedAccessory)) {
            setMissingAccessoriesList([...missingAccessoriesList, selectedAccessory]);
            setSelectedAccessory('');
        }
    }

    return (
        <div className="flex mt-[100px] justify-center ">
            <form
                className="flex flex-col min-w-[450px] h-auto outline outline-2 -outline-offset-1 outline-gray-300 border-2 rounded-xl px-5 py-8"
            >
                <div className="mb-5">
                    <Title>Missing Accessories</Title>
                </div>
                <Label>Serial Number</Label>
                <Input type="text" className="bg-gray-200 mb-2" />
                <Label>Model</Label>
                <Input type="text" className="bg-gray-200 mb-2" />

                <div className="mt-4">
                    <Title>Selection Accessories</Title>
                    <div className="mt-3">
                        <Select
                            value={selectedAccessory}
                            onChange={handleAccessoryChange}
                            className="w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-400 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg mb-2"
                        >
                            <Option value="" hidden>Select a missing accessory</Option>
                            <Option value="HDMI cable">HDMI cable</Option>
                            <Option value="Power supply cable">Power supply cable</Option>
                            <Option value="Right leg">Right leg</Option>
                        </Select>
                    </div>
                    <div className="flex justify-between items-center h-[50px] mb-3">
                        <div></div> {/*Div elemet used to move the button to right side*/}
                        <Button
                            type="button"
                            className="py-1"
                            onClick={handleAddAccessory}
                        >
                            Add <strong className="text-xl">+</strong>
                        </Button>
                    </div>
                    <div>
                        <ul className={missingAccessoriesList.length > 0
                            ? "list-disc list-inside border-t-2 border-b-2 border-gray-300 py-2"
                            : ""}>
                            {missingAccessoriesList.map((accessory, index) => (
                                <li
                                    key={index}
                                    className="mb-2 text-base text-gray-400 font-bold"
                                >
                                    {accessory}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MissingAccessories;
