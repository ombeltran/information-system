import Table from "@/components/Table";
import { data } from "@/data/productivityData";

const columns: string[] = ["Name", "Serial Number", "Model", "Category", "Date"];


function ProductionTable() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6 my-[50px]">Report of productivity</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default ProductionTable