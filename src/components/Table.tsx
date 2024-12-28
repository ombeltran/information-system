"use client";

import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

interface TableProps {
    columns: string[];
    data: string[][];
}

function Table({ columns, data }: TableProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const grid = new Grid({
            pagination: true,
            search: true,
            sort: true,
            columns: columns,
            data: data,
        });

        if (wrapperRef.current) {
            const gridInstance = grid.render(wrapperRef.current);

            // Cleanup to prevent memory leaks
            return () => {
                gridInstance.destroy();
            };
        }
    }, [columns, data]); // Ensure useEffect re-runs if columns or data change

    return <div ref={wrapperRef} style={{ width: "100%", height: "auto" }} />;
}

export default Table;
