"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import Title from "@/components/Title";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { TfiPencil } from "react-icons/tfi";

interface Document {
  SerialNumber: string;
  Model: string;
  Description: string;
}

//RequiringLabels
function RequiringDocuments() {
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [myDocumentsList, setMyDocumentsList] = useState<Document[]>([]);

  function handleAddDocument() {
    // Add a document if only field is not empty
    if (serialNumber && model && description) {
      const newDocument: Document = {
        SerialNumber: serialNumber,
        Model: model,
        Description: description,
      };
      setMyDocumentsList([...myDocumentsList, newDocument]);
      // Clean fields after assing a new document
      setSerialNumber("");
      setModel("");
      setDescription("");
    }
  }

  return (
    <div className="flex mt-[100px] justify-center ">
      <Form
        className="flex flex-col min-w-[800px] h-auto rounded-xl px-5 py-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <Title>Requiring Documents</Title>
        <div className="flex justify-between mt-6">
          <div>
            <Label>Serial Number</Label>
            <Input
              type="text"
              className="w-[375px] mb-2"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <Label>Model</Label>
            <Input
              type="text"
              className="bg-gray-200 w-[375px] mb-2"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <Label>Comments</Label>
            <TextArea
              className="w-[375px] mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-between items-center h-[50px] w-[375px] mb-3">
              <div></div> {/* Div usado para mover el botón a la derecha */}
              <Button type="button" className="py-1 w-[100px]" onClick={handleAddDocument}>
                Add
              </Button>
            </div>
          </div>

          <div className="rounded-xl border-2 outline outline-2 outline-gray-300 ml-4 w-[425px] h-96 overflow-auto">
            {myDocumentsList.length > 0 ? (
              myDocumentsList.map((document, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-start border-b p-3"
                >
                  <p>
                    <strong>Serial Number:</strong> {document.SerialNumber}
                  </p>
                  <p>
                    <strong>Model:</strong> {document.Model}
                  </p>
                  <p>
                    <strong>Description:</strong> {document.Description}
                  </p>
                  <p>
                    <strong>User:</strong> {"Anonymous"}
                  </p>
                  <div className="flex justify-between w-full">
                    <div></div>
                    <div className="flex gap-3 mt-2">
                      <BsTrash className="text-red-800 text-xl hover:scale-110" />
                      <TfiPencil className="text-xl hover:scale-110" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-5">No documents added</p>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default RequiringDocuments;
