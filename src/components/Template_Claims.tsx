import Button from "./Button";
import { useAppContext } from "@/context/AppContext";

interface Template_ClaimsProps {
    bxNumber: string;
    trackingNumber: string;
    model: string;
    serialNumber: string;
    upc: string;
    comments: string;
    category: string;
    soldModel: string;
    soldSerialNumber: string;
    details: string[];
}

function Template_Claims(
    {
        bxNumber,
        trackingNumber,
        model,
        serialNumber,
        upc,
        comments,
        category,
        soldModel,
        soldSerialNumber,
        details
    }: Template_ClaimsProps) {
    const { templateClaim, setTemplateClaim, user } = useAppContext();


    function handleClickTemplate() {
        setTemplateClaim(!templateClaim);
    }

    function handleSend() {
        alert("Email sent successfully");
        handleClickTemplate();
    }

    return (
        <div className='fixed flex flex-col top-1/2 left-1/2 w-[500px] h-[800px] bg-white z-40 -translate-x-1/2 -translate-y-1/2 outline outline-2 outline-gray-300 rounded-lg shadow-2xl shadow-gray-400 p-16 gap-5'>

            <div className="subject flex gap-2 mb-8">
                <p className="font-semibold">Subject:</p>
                <h1 className="font-bold">{`CLAIM ${model} BX ${bxNumber}`}</h1>
            </div>
            <div className="emailBody flex text-justify h-[700px]">
                <div>
                    <p>Dear Customer Service,</p>
                    <br />
                    <p>We have received a product with the following information:</p>
                    <br />
                    <ul>
                        <li className="before:content-['✔'] before:mr-2 before:text-indigo-600">{`BX number ${bxNumber}`}</li>
                        <li className="before:content-['✔'] before:mr-2 before:text-indigo-600">{`Tracking number ${trackingNumber}`}</li>
                        <li className="before:content-['✔'] before:mr-2 before:text-indigo-600">{`Model ${model}`}</li>
                        <li className="before:content-['✔'] before:mr-2 before:text-indigo-600">{`Serial number ${serialNumber}`}</li>
                        <li className="before:content-['✔'] before:mr-2 before:text-indigo-600">{`UPC number ${upc}`}</li>
                    </ul>
                    <br />
                    {(category === "Different item inside") ? (
                        <p>{`Which arrives with ${category}, model ${soldModel} and serial number ${soldSerialNumber}. Items that has the following details:`}</p>) :
                        (
                            <p>{`Which arrives with ${category}, and also with the following details:`}</p>)
                    }
                    <br />
                    <ul>
                        {details.map((item, index) => (
                            <li
                                key={index}
                                className="before:content-['✔'] before:mr-2 before:text-indigo-600"
                            >{item}</li>
                        ))}
                    </ul>
                    <br />
                    {
                        (comments) && (
                            <p>{`Additionally, please keep in mind that ${comments}`}</p>
                        )
                    }
                </div>
            </div>

            <div className="signature flex flex-col justify-between h-24">
                <p>Best regards,</p>
                <p className="font-bold text-xl">{user}</p>
            </div>
            <div className="flex justify-between gap-5">
                <Button type="button" onClick={handleClickTemplate}>Close</Button>
                <Button type="button" onClick={handleSend}>Send</Button>
            </div>
        </div>
    )
}

export default Template_Claims
