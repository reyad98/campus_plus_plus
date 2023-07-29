import html2pdf from "html2pdf.js";
import React from "react";
import DataTable from "react-data-table-component";

const ResultTable = ({ data }) => {
  // Assuming data is an array of objects containing the rows for the table
  const columns = [
    { name: "Subject", selector: "subject", sortable: true },
    { name: "Marks", selector: "marks", sortable: true },
    // Add more columns as needed
  ];

  const generatePDF = () => {
    const table = document.getElementById("result-table");
    const options = {
      margin: 10,
      filename: "result_table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(table).set(options).save();
  };

  return (
    <div>
      <DataTable
        id="result-table"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
      <button onClick={generatePDF}>Download as PDF</button>
    </div>
  );
};

export default ResultTable;
