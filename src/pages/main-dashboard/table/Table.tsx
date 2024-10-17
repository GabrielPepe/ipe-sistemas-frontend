import { ArrowDown } from "lucide-react";
import { mockItems } from "./mockData";

const mockColumns = [
  "Cod. Barras",
  "Nome",
  "V. Compra",
  "V. Venda",
  "Lucro",
  "Estoque",
];

const Table = () => {
  return (
    <table className="max-h-[40rem] w-full gap-6">
      <thead>
        <tr className="">
          {mockColumns.map((item) => {
            return (
              <th>
                <div className="flex justify-center gap-1">
                  {item} <ArrowDown className="text-primary" />
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="border-x-2 border-y-4 border-tertiary text-2xl">
        {mockItems.map((item) => {
          return (
            <tr className="">
              <th>
                <div className="py-3 ml-12">
                  <div className="flex font-medium border-r-2 border-primary">
                    {item.id}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex font-medium border-r-2 border-primary">
                    {item.nome}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.v_compra}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.v_venda}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-medium border-r-2 border-primary justify-end items-baseline gap-1 ">
                    <span className="text-sm font-light">R$</span>
                    {item.lucro}
                  </div>
                </div>
              </th>
              <th>
                <div className="ml-12">
                  <div className="flex pr-8 font-bold justify-end">
                    {item.estoque}
                  </div>
                </div>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
