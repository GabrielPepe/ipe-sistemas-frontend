import { CircleX, Settings2 } from "lucide-react";

const Filters = ({ availableFilters }: TableFilterProps) => {
  return (
    <div className="">
      <li className="flex flex-row justify-end gap-8">
        {availableFilters.map((item: string) => {
          return (
            <div className="flex items-center gap-8 px-7 py-2 bg-secondary rounded-3xl font-bold text-primary">
              {item}
              <button>
                <CircleX className="hover:scale-110 hover:text-tertiary transition-all" />
              </button>
            </div>
          );
        })}
        <button className="text-primary hover:text-tertiary size-10">
          <Settings2 className="hover:scale-110 transition-all" />
        </button>
      </li>
    </div>
  );
};

export default Filters;