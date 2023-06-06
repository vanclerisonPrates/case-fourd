import moment from "moment";

import CheckIcon from "../assets/svg/done.svg";
import Eye from "../assets/svg/closed-eye.svg";

import { Classes } from "../utils/types";

const ClassRow = ({ date, views, title, category }: Omit<Classes, "id">) => {
  return (
    <td className="flex flex-col sm:flex-row sm:items-center sm:gap-28 gap-4">
      <div className="flex order-last sm:order-first sm:justify-between items-center w-full">
        <div className="hidden sm:block bg-[#0346F2] rounded-full px-4 py-2 text-white mr-2">
          {category}
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:justify-between  ">
          <div>
            <p className="font-bold sm:font-normal rounded-full text-[15px]">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Eye} alt="eye-svg" /> <span>{views}</span>
          </div>
          <div className="sm:hidden sm:block bg-[#0346F2] rounded-full p-2 text-white mt-2 text-center">
            {category}
          </div>
        </div>
      </div>
      <div className="flex order-first sm:order-last sm:justify-between sm:gap-2 gap-12 w-full items-center ">
        <div>{moment(date).format("DD MMMM yyyy")}</div>
        <button className="bg-transparent">
          <div className="flex gap-2 items-center">
            <img src={CheckIcon} alt="svg" />
            Editar
          </div>
        </button>
      </div>
    </td>
  );
};

export default ClassRow;
