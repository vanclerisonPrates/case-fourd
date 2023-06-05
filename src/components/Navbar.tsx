import Customer from "./Customer";

import { default as Notification } from "../assets/svg/notification.png";
import { default as Logo } from "../assets/svg/logo.svg";

import { CustomerType } from "../utils/types";

interface NavProps {
  customer?: CustomerType;
}

const Navbar = ({ customer }: NavProps) => {
  return (
    <nav className="rounded-2xl bg-white flex justify-between shadow-sm p-8 items-center">
      <div className="flex items-center lg:border-r-2 lg:pr-8 mr-10 lg:spr-10 gap-4 lg:min-w-[120px]">
        <img src={Logo} alt="logo" />
        <span className="lg:text-[16px] font-semibold text-[#1A1E2C]">
          WebSite Name
        </span>
      </div>
      <ul className="hidden lg:flex sm:gap-12 group">
        <li>
          <a href="#dashboard">DashBoard</a>
        </li>
        <li>
          <a
            href="#minhas-aulas"
            className="active:color-[#0346F2] hover:active:color-[#0346F2]"
          >
            Minhas Aulas
          </a>
        </li>
        <li>
          <a href="#minha-agenda">Minha Agenda </a>
        </li>
        <li>
          <a href="#alunos">Aulnos </a>
        </li>
        <li>
          <a href="#suporte">Suporte</a>
        </li>
      </ul>
      <div className="flex items-center gap-4 relative">
        <button className="bg-transparent color-[#8E94A7]">
          <div className="">
            <div className="rounded-full border-[3px] w-2.5 h-2.5 absolute border-[#0346F2] top-5 left-5 right-[10px] z-1 min-h-2.5 min-w-2.5"></div>
            <img
              src={Notification}
              className="color-gray fill-[gray] "
              alt="notification icon"
            />
          </div>
        </button>
        <Customer customer={customer} />
      </div>
    </nav>
  );
};

export default Navbar;
