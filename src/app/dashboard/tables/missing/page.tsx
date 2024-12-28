import Table from "@/components/Table";

const columns: string[] = ["Name", "Serial Number", "Model", "Accessorie", "Qt", "Date"];
const data: string[][] = [
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_1", "Cable holder", "1","12/28/2024"],
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_2", "Leg right", "1", "12/28/2024"],
    ["Oscar Beltran", "123NHJNJ1231HJHJH", "Samsung_2", "Leg left", "1", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_1", "Base", "1", "12/28/2024"],
    ["Silvestre", "123NHJNJ1231HJHJH", "Samsung_2", "Stand", "1", "12/28/2024"],
];

function MissingTable() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6 my-[50px]">Missing accesorie</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default MissingTable;