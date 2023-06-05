import { useEffect, useState } from "react";
import { ClassTodayProps } from "../utils/types";

export const useFetchTodayClasses = () => {
  const [todayClasses, setTodayClasses] = useState<ClassTodayProps>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/schedules/today")
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
