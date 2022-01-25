import * as React from "react";
import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { process } from "@progress/kendo-data-query";
import products from "./product.json";
import { GridPDFExport } from "@progress/kendo-react-pdf";

const initialDataState = {
  sort: [
    {
      field: "code",
      dir: "asc",
    },
  ],
  take: 10,
  skip: 0,
};

const AllFeaturesGrid = () => {
  const _export = React.useRef(null);
  const [dataState, setDataState] = React.useState(initialDataState);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  let gridPDFExport;

  const exportPDF = () => {
    // Simulate a response from a web request.
    setTimeout(() => {
      if (gridPDFExport) {
        gridPDFExport.save(products);
      }
    }, 250);
  };

  return (
    <>
      <ExcelExport data={products} ref={_export}>
        <Grid
          data={process(products, dataState)}
          reorderable
          resizable
          {...dataState}
          pageable={true}
          sortable={true}
          filterable={true}
          style={{
            minHeight: "420px",
            width: "60%",
            margin: "auto",
          }}
          onDataStateChange={(e) => {
            setDataState(e.dataState);
          }}
        >
          <GridToolbar>
            <button
              title="Export Excel"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={excelExport}
            >
              Export to Excel
            </button>
            <button
              title="Export PDF"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={exportPDF}
            >
              Export PDF
            </button>
          </GridToolbar>
          <GridColumn field="ProductID" title="Product ID" width="100px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" width="150px" />
          <GridColumn field="UnitsInStock" title="In stock" width="200px" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </ExcelExport>
      <GridPDFExport
        ref={(pdfExport) => (gridPDFExport = pdfExport)}
        margin="1cm"
      >
        <Grid
          data={process(products, dataState)}
          reorderable
          resizable
          {...dataState}
          pageable={true}
          sortable={true}
          filterable={true}
          style={{
            minHeight: "420px",
            width: "60%",
            margin: "auto",
          }}
          onDataStateChange={(e) => {
            setDataState(e.dataState);
          }}
        >
          <GridColumn field="ProductID" title="Product ID" width="100px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" width="150px" />
          <GridColumn field="UnitsInStock" title="In stock" width="200px" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </GridPDFExport>
    </>
  );
};

export default AllFeaturesGrid;