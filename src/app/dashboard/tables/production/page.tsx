import Table from "@/components/Table";

const columns: string[] = ["Name", "Serial Number", "Model", "Category", "Date"];
const data: string[][] = [
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_1", "Open box","12/28/2024"],
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_2", "Open box", "12/28/2024"],
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_3", "Open box", "12/28/2024"],
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_4", "Open box", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_1", "Open box", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_2", "Open box", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_3", "Crack", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_4", "Defective", "12/28/2024"],
];

function ProductionTable() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6 my-[50px]">Report of productivity</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default ProductionTable