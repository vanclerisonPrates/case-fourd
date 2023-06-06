import { useState } from "react";

import Arrow from "../assets/svg/arrow.svg";
import Location from "../assets/svg/location.svg";
import DefaultCustomer from "../assets/svg/user.png";

import { CustomerType } from "../utils/types";

interface CustomerProps {
  fullCustomer?: boolean;
  customer?: CustomerType;
}

const Customer = ({ fullCustomer, customer }: CustomerProps) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleFullCustomer = () => (
    <div className="flex gap-2 items-center relative">
      <div className="rounded-full border-2 border-white min-w-[4px] min-h-[4px] p-[4px] absolute bg-[#00D455] top-0 left-12 z-1" />
      <div className="rounded-full">
        <img
          src={customer?.photoUrl || DefaultCustomer}
          alt={customer?.name}
          width={48}
          height={48}
          className="rounded-full border-2 border-white"
        />
      </div>
      {customer && (
        <div className="hidden sm:flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="font-medium text-[#1A1E2C]">{customer?.name}</p>{" "}
          </div>
          <div className="flex gap-2">
            <img src={Location} alt="location" />
            <span className="text-[#313131]">
              {customer?.city}, {customer?.state}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  const handleCustomer = () => (
    <>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center relative">
          <div className="rounded-full">
            <img
              src={customer?.photoUrl || DefaultCustomer}
              alt={customer?.name}
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
          </div>
          {customer && (
            <div className="hidden sm:flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-medium text-[#1A1E2C]">{customer?.name}</p>{" "}
              </div>
              {showProfile && (
                <div className="flex gap-2">
                  <img src={Location} alt="location" />
                  <span>
                    {customer?.city}, {customer?.state}
                  </span>
                </div>
              )}
            </div>
          )}
          <button
            className="bg-transparent"
            onClick={() => setShowProfile(!showProfile)}
            style={showProfile ? { rotate: "-180deg" } : {}}
          >
            <img src={Arrow} alt="arrow" />
          </button>
        </div>

        {customer && showProfile && (
          <div className="sm:hidden gap-2 absolute flex top-14 right-2 w-[180px] bg-white rounded ">
            <div className="flex items-center gap-2">
              <p className="font-medium">{customer?.name}</p>
            </div>
            <div className="flex gap-2">
              <img src={Location} alt="location" />
              <span>
                {customer?.city}, {customer?.state}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return fullCustomer ? handleFullCustomer() : handleCustomer();
};

export default Customer;
