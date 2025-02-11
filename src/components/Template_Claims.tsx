import Button from "./Button";
import { useAppContext } from "@/context/AppContext";

function Template_Claims() {
    const {templateClaim, setTemplateClaim, user} = useAppContext();

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
                <h1 className="font-bold">CLAIM XXX PRODUCT BX 0000AA000B</h1>
            </div>
            <div className="emailBody flex text-justify h-[700px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero et tempora asperiores, tenetur voluptatum vitae natus quae ipsa debitis ad beatae quaerat voluptates similique explicabo! Rerum doloremque consequuntur error molestias neque eveniet nemo non. Veniam illum esse non eaque sit porro dolor? Iste, fugit doloribus maiores corporis, facilis quo ad cum quia omnis et dolorem nobis. Reprehenderit repellat error natus soluta. Perferendis repellat necessitatibus iste corrupti distinctio reprehenderit a modi quasi neque, est accusamus adipisci quos expedita animi itaque minus fuga quod assumenda. Quas doloremque sapiente nesciunt perferendis ipsa placeat minus cumque, recusandae nostrum eum repudiandae voluptas facere. Accusantium.</p>
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
