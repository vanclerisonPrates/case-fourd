import { ClassRow } from "../components";

import { Classes } from "../utils/types";

interface Props {
  data: Classes[];
}

const Main = ({ data }: Props) => {
  return (
    <main
      id="minhas-aulas"
      className="rounded-2xl shadow-sm p-8 order-4 sm:col-start-1 sm:row-span-1"
    >
      <h6 className="font-bold text-[#1A1E2C] text-[16px]">
        Minhas aulas já preparadas
      </h6>
      <table className="w-full mb-10 mt-10">
        <tbody className="flex flex-col gap-9">
          {data?.map(({ id, ...classItem }) => (
            <tr key={id}>
              <ClassRow {...classItem} />
            </tr>
          ))}
        </tbody>
      </table>
      <button className="p-2 rounded-xl w-full h-12">
        Criar uma nova aula
      </button>
    </main>
  );
};

export default Main;
