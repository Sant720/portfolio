import React from "react";

type TableProps = {
  headers: string[];
  rows: (string | React.ReactNode)[][];
};

export default function ImpactTable({ headers, rows }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[500px] w-full table-fixed">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-3 py-2 border-b border-gray-500 dark:border-gray-500">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-3 py-2 border-b border-gray-200 dark:border-gray-800">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}