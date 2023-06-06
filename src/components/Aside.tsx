import { ClassTodayProps } from "../utils/types";

interface Props {
  data: ClassTodayProps;
}

const Aside = ({ data }: Props) => {
  const today = [data[0], data[1]];
  const tomorrow = [data[2], data[3]];

  return (
    <aside
      id="minha-agenda"
      className="rounded-2xl shadow-sm p-8 order-3 sm:col-start-2"
    >
      <h5 className="text-[16px] font-bold text-[#1A1E2C] mb-10">
        Suas próximas aulas virtuais
      </h5>
      <div className="flex flex-col mt-4 mb-4">
        <h6 className="text-[16px] font-bold text-[#1A1E2C] mb-4">Hoje</h6>
        {today?.map((todayClass, index) => (
          <div key={index} className="flex gap-2 items-center mb-8 leading-5">
            <span className="font-bold text-[#1A1E2C] mr-2 min-w-[35px]">
              {todayClass?.time}
            </span>
            <div className="flex border-l-2 pl-2 border-[#04C3FF] min-h-[36px] max-h-[36px] items-center">
              <span>{todayClass?.title}</span>
            </div>
          </div>
        ))}
        <h6 className="text-[16px] font-bold text-[#1A1E2C] mb-4">Amanhã</h6>
        {tomorrow?.map((todayClass, index) => (
          <div key={index} className="flex gap-2 items-center mb-8 leading-5">
            <span className="font-bold text-[#1A1E2C] mr-2 min-w-[35px]">
              {todayClass?.time}
            </span>
            <div className="flex border-l-2 pl-2 border-[#04C3FF] min-h-[36px] max-h-[36px] items-center">
              <span>{todayClass?.title}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full">Visualizar toda agenda</button>
    </aside>
  );
};

export default Aside;
