import React from "react";

type TableProps = {
  headers: string[];
  rows: (string | React.ReactNode)[][];
};

export default function ImpactTable({ headers, rows }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-fixed">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}