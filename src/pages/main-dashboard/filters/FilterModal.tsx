import { Form } from "react-router-dom";

const FilterModal = ({ handleFilterModal, verifyModalFilters }: any) => {
  return (
    <div className="absolute top-0 w-1/2 h-full bg-white shadow-[5px_0_10px_rgba(0,0,0,0.3)] transform translate-x-full animate-slide-in">
      <button className="" onClick={handleFilterModal}>
        X
      </button>
      <Form
        onSubmit={verifyModalFilters}
        className="bg-secondary p-12 rounded-xl flex flex-col gap-2"
      >
        <input type="text" name="qtd" />
        <input type="text" name="nome" />
        <button type="submit">Filtrar</button>
      </Form>
    </div>
  );
};

export default FilterModal;
