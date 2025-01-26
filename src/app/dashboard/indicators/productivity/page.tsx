"use client";

import React, { useState } from "react";
import Chart from "react-apexcharts";
import { data } from "@/data/productivityData";
import Table from "@/components/Table";
import { ApexOptions } from "apexcharts";

const columns: string[] = ["Name", "Serial Number", "Model", "Category", "Date"];

const processChartData = (data: string[][]) => {
    const groupedData: { [name: string]: { [date: string]: number } } = {};

    data.forEach(([name, , , , date]) => {
        if (!groupedData[name]) groupedData[name] = {};
        if (!groupedData[name][date]) groupedData[name][date] = 0;
        groupedData[name][date]++;
    });

    const categories = Object.keys(groupedData);
    const series = Object.keys(groupedData[categories[0]] || {}).map((date) => ({
        name: date,
        data: categories.map((name) => groupedData[name][date] || 0),
    }));

    return { categories, series };
};

const chartData = processChartData(data);

function ProductionTable() {
    const [chartConfig] = useState<{
        options: ApexOptions;
        series: { name: string; data: number[] }[];
    }>({
        options: {
            chart: {
                id: "productivity-bar",
            },
            xaxis: {
                categories: chartData.categories,
                title: {
                    text: "Names",
                },
            },
            yaxis: {
                title: {
                    text: "Number of Items",
                },
            },
            colors: ["#1E90FF", "#FF6347", "#32CD32", "#FFD700", "#6A5ACD"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%",
                },
            },
            dataLabels: {
                enabled: true,
            },
            legend: {
                position: "bottom",
            },
        },
        series: chartData.series,
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6">Report of Productivity</h1>
            <div className="flex justify-center">
                <Chart
                    options={chartConfig.options}
                    series={chartConfig.series}
                    type="bar"
                    width="800"
                />
            </div>
            <div className="mb-8">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}

export default ProductionTable;
