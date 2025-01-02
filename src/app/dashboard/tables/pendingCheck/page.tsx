import Table from "@/components/Table";

const columns: string[] = ["Serial Number", "Model", "Comment","Pallet No.", "Date"];
const data: (string | number)[][] = [
    ["123XYZ12345ABC", "iPhone_14", "Battery drains quickly", 10, "12/28/2024"],
    ["123XYZ12345DEF", "Google_Pixel_7", "Camera lens cracked", 5, "12/28/2024"],
    ["123XYZ12345GHI", "Samsung_3", "No issues reported", 20, "12/28/2024"],
    ["123XYZ12345JKL", "OnePlus_11", "Volume button stuck", 8, "12/28/2024"],
    ["123XYZ12345MNO", "Nokia_XR20", "Screen is unresponsive", 6, "12/28/2024"],
    ["123XYZ12345PQR", "Xiaomi_12", "Back panel scratched", 8, "12/28/2024"],
    ["123XYZ12345STU", "Sony_Xperia_1", "Headphone jack not working", 9, "12/28/2024"],
    ["123XYZ12345VWX", "Motorola_Edge", "Wi-Fi connection issues", 8, "12/28/2024"],
    ["123XYZ12345YZA", "Huawei_P50", "Fingerprint sensor malfunction", 8, "12/28/2024"],
    ["123XYZ12345BCD", "Asus_ROG_6", "Random restarts", 4, "12/28/2024"],
    ["123XYZ12345EFG", "LG_Wing", "Screen rotation stuck", 3, "12/28/2024"],
    ["123XYZ12345HIJ", "BlackBerry_Key2", "Keyboard keys not working", 2, "12/28/2024"],
    ["123XYZ12345KLM", "Realme_GT", "Heating issue during charging", 3, "12/28/2024"],
    ["123XYZ12345NOP", "Vivo_X80", "Microphone not picking sound", 3, "12/28/2024"],
    ["123XYZ12345QRS", "ZTE_Axon_30", "No sound from speakers", 5, "12/28/2024"],
    ["123XYZ12345TUV", "Alcatel_5V", "Bluetooth not pairing", 5, "12/28/2024"],
    ["123XYZ12345WXY", "Oppo_FindX3", "Camera app crashes", 7, "12/28/2024"],
    ["123XYZ12345ZAB", "Honor_Magic4", "SIM card not detected", 8, "12/28/2024"],
    ["123XYZ12345CDE", "Microsoft_Duo", "Screen hinge loose", 9, "12/28/2024"],
    ["123XYZ12345FGH", "HTC_U12", "Battery swelling", 1, "12/28/2024"]
];


function PendingCheck() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6 my-[50px]">Items pending for check</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default PendingCheck;