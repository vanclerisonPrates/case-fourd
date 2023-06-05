import { useEffect, useState } from "react";
import { Classes } from "../utils/types";

export const useFetchClasses = () => {
  const [classes, setClasses] = useState<Classes[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/my-classes")
      .then((res) => res.json())
      .then((json) => setClasses(json))
      .catch((err) => setError(err));
    setLoading(false);
  }, []);

  return {
    classes,
    loading,
    error,
  };
};