import { useEffect, useState } from "react";
import { CustomerType } from "../utils/types";
import { endpoints } from "./endpoints";

export const useFetchCustomer = () => {
  const [customer, setCustomer] = useState<CustomerType>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(endpoints.fetchCustomer)
      .then((res) => res.json())
      .then((json) => setCustomer(json))
      .catch((err) => setError(err));
    setLoading(false);
  }, []);

  return {
    customer,
    loading,
    error,
  };
};
