import { useEffect, useState } from "react";
import { CustomerType } from "../utils/types";

export const useFetchCustomer = () => {
  const [customer, setCustomer] = useState<CustomerType>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/customer")
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
