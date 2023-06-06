import { useEffect, useState } from "react";

import { ClassTodayProps } from "../utils/types";

import { endpoints } from "./endpoints";

export const useFetchTodayClasses = () => {
  const [todayClasses, setTodayClasses] = useState<ClassTodayProps>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(endpoints.fetchTodayClasses)
      .then((res) => res.json())
      .then((json) => setTodayClasses(json))
      .catch((err) => setError(err));
    setLoading(false);
  }, []);

  return {
    todayClasses,
    loading,
    error,
  };
};
