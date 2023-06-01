import moment from "moment";

interface Props {
  title?: string;
  date?: number;
  view?: number;
  category?: string;
}

const ClassRow = ({ date, view, title, category }: Props) => {
  return (
    <tr className="flex flex-col sm:flex-row sm:items-center sm:gap-28 gap-4">
      <div className="flex order-last sm:order-first sm:justify-between items-center w-full">
        <div className="hidden sm:block bg-[#0346F2] rounded-full p-2 text-white mr-2">
          {category}
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:justify-between  ">
          <div>
            <p className="font-bold sm:font-normal rounded-full w-full">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            svg <span>{view}</span>
          </div>
          <div className="sm:hidden sm:block bg-[#0346F2] rounded-full p-2 text-white mt-2 text-center">
            {category}
          </div>
        </div>
      </div>
      <div className="flex order-first sm:order-last sm:justify-between sm:gap-2 gap-12 w-full">
        <div>{moment(date).format("DD MMMM yyyy")}</div>
        <div>Editar</div>
      </div>
    </tr>
  );
};

export default ClassRow;
