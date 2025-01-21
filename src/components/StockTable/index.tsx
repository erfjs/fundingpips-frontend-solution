"use client";

import {
  AllCommunityModule,
  ColDef,
  ModuleRegistry,
  RowSelectionOptions,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef, useState } from "react";

import AddStocksForm from "@/components/AddStocksForm";
import { stockCols } from "@/components/AgGridCols";
import { stockData } from "@/data";
import { setStockType } from "@/store/features/settingSlice";
import { useAppDispatch, useAppSelector } from "@/store/useStore";
import { StockProps } from "@/types";

ModuleRegistry.registerModules([AllCommunityModule]);

const rowSelection: RowSelectionOptions = {
  mode: "singleRow",
  enableClickSelection: true,
};

const StockTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const dispatch = useAppDispatch();
  const [rowData, setRowData] = useState<StockProps | null>(null);
  const { stockType } = useAppSelector((state) => state.setting);

  const [formData, setFormData] = useState({
    companyName: "",
    stockSymbol: "",
    price: "",
    change: "",
    percentageChange: "",
  });

  const [columnDefs] = useState<ColDef[]>(stockCols);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      flex: 0,
    };
  }, []);

  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Add input data to a new row
    const newRow = {
      companyName: formData.companyName,
      stockSymbol: formData.stockSymbol,
      price: Number(formData.price),
      change: Number(formData.change),
      percentageChange: Number(formData.percentageChange),
    };

    if (gridRef.current) {
      gridRef.current!.api.applyTransaction({ add: [newRow] });
      const allData: StockProps[] = [];
      gridRef.current!.api.forEachNode((node) => {
        allData.push(node.data);
      });
      localStorage.setItem("StocksData", JSON.stringify(allData));
    }

    // Clear fields after submitting a form
    setFormData({
      companyName: "",
      stockSymbol: "",
      price: "",
      change: "",
      percentageChange: "",
    });
  };

  // Remove a Row
  const handleRemoveStock = () => {
    gridRef.current!.api.applyTransaction({ remove: [rowData] });
    const allData: StockProps[] = [];
    gridRef.current!.api.forEachNode((node) => {
      allData.push(node.data);
    });

    localStorage.setItem("StocksData", JSON.stringify(allData));
  };

  // Change Stocks List
  const handleChangeList = (type: "favorite" | "all") => {
    dispatch(setStockType(type));

    // Set Filter
    gridRef.current!.api.setFilterModel({
      favorite: {
        filterType: "text",
        type: type === "favorite" ? "true" : null,
      },
    });
    gridRef.current!.api.onFilterChanged();
  };

  const storedData =
    typeof window !== "undefined" && localStorage.getItem("StocksData") !== null
      ? JSON.parse(localStorage.getItem("StocksData") as string)
      : stockData;

  return (
    <div className=' bg-blue-900 p-6'>
      <AddStocksForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />

      <div className='h-screen flex justify-center'>
        <div style={{ width: "1224px", height: "700px" }}>
          <div className='flex justify-between'>
            <div>
              <button
                onClick={() => handleChangeList("all")}
                className={`${
                  stockType !== "favorite" ? "bg-yellow-800" : "bg-yellow-500"
                }  hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-l-md mt-4 mb-3 cursor-pointer`}
              >
                All Stock
              </button>
              <button
                onClick={() => handleChangeList("favorite")}
                className={`${
                  stockType === "favorite" ? "bg-yellow-800" : "bg-yellow-500"
                }  hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-r-md mt-4 mb-3 cursor-pointer`}
              >
                Favorite
              </button>
            </div>
            <button
              disabled={!rowData}
              onClick={handleRemoveStock}
              className={`${
                rowData ? " bg-red-500 hover:bg-red-700" : "bg-slate-500"
              } text-white font-bold py-2 px-4 rounded-md mt-4 mb-3`}
            >
              Remove Stock
            </button>
          </div>

          <AgGridReact
            ref={gridRef}
            rowData={storedData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection={rowSelection}
            getRowId={(params) => params.data.stockSymbol}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
            onSelectionChanged={(e) =>
              e.api.getSelectedRows().length > 0
                ? setRowData(e.api.getSelectedRows()[0])
                : setRowData(null)
            }
          />
        </div>
      </div>
    </div>
  );
};
export default StockTable;
