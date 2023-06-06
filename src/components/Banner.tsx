import Customer from "./Customer";

import Time from "../assets/svg/Time.svg";

import { CustomerType } from "../utils/types";

interface Props {
  customer?: CustomerType;
}

const Banner = ({ customer }: Props) => {
  return (
    <div className="flex p-8 bg-[#EBD7D7] justify-between rounded-2xl sm:max-h-[112px] items-center gap-2 order-1 sm:col-start-1 sm:row-span-1 basis-1/2">
      <div className="ml-10 ">
        <p className="text-[16px] font-medium text-[#1A1E2C]">
          Sua aula começa em{" "}
          <span className="flex gap-2 text-sm">
            <img src={Time} alt="time-svg" />
            15 min.
          </span>
        </p>
      </div>
      <div className="hidden lg:flex">
        <Customer fullCustomer customer={customer} />
      </div>
      <div className="hidden lg:flex">
        <div className="font-semibold">
          <p className="text-[#1A1E2C]">R$ {customer?.currentAmount ?? 0}</p>
          <p className="text-[#313131]">Ganhos deste mês</p>
        </div>
      </div>
      <button className="bg-[#F2994A]  py-0 px-2 sm:px-6">Ir para aula</button>
    </div>
  );
};

export default Banner;
