import Filters from "./filters/Filters";
import Pagination from "./table/Pagination";
import Table from "./table/Table";

const availableFilters = ["teste1", "teste2", "teste3"];

const InfoTable = () => {
  return (
    <div className="flex flex-col py-8 gap-8">
      <Filters availableFilters={availableFilters} />
      <Table />
      <Pagination />
    </div>
  );
};
export default InfoTable;
