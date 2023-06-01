import { ClassRow } from "../components";

interface Props {
  data?: {
    view: number;
    type: string;
    date: number;
    id: string | number;
  }[];
}

const Main = ({ data }: Props) => {
  // const [myClasses, setMyClasses] = useState();
  // const submitClass = async (event: any) => {
  //   event.preventDefault();

  //   try {
  //     const res = await fetch("api/my-classes", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         type,
  //         date,
  //       }),
  //     });
  //     const json = await res.json();
  //     setMyClasses([...data, json]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  console.log("data", data);

  return (
    <main className="rounded-2xl shadow-sm p-8 order-1">
      <h6 className="font-bold">Minhas aulas já preparadas</h6>
      <table className="w-full mb-10">
        <tbody className="flex flex-col gap-9">
          {data?.map(({ id, ...classItem }) => (
            <ClassRow key={id} {...classItem} />
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
