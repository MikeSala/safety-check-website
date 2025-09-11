import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ServiceItem,
  serviceItems,
} from "~/pages/inclusions-exclusions/content.pl";

const columnHelper = createColumnHelper<ServiceItem>();
const columns = [
  columnHelper.accessor("category", {
    id: "category",
    header: () => "Category",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("inclusions", {
    id: "inclusions",
    header: () => "Inclusions",
    cell: (info) => {
      return (
        <ul className="list-disc pl-4">
          {info.getValue().map((inclusion) => {
            return <li key={inclusion}>{inclusion}</li>;
          })}
        </ul>
      );
    },
  }),
  columnHelper.accessor("exclusions", {
    id: "exclusions",
    header: () => "Exclusions",
    cell: (info) => {
      return (
        <ul className="list-disc pl-4">
          {info.getValue().map((exclusion) => {
            return <li key={exclusion}>{exclusion}</li>;
          })}
        </ul>
      );
    },
  }),
];
// TODO - rip out specific data, make table data based on Props. Saving this component because it could be helpful
export const Table = () => {
  const table = useReactTable({
    data: serviceItems, // Używa teraz serviceItems zamiast TABLE_ITEMS
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full table-fixed border-separate" role="grid">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border-b bg-neutral-300 py-3 px-2 text-left text-sm"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border-b py-3 px-2 first-of-type:pl-4"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
