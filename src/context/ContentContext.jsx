'use client'

import { createContext, useEffect, useState } from "react";
import useGetCoursesHook from "../hooks/useGetCoursesHook";

export const ContentContext = createContext()

export const ContentProvider = ({
  children,
}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCourses = () => {
    useGetCoursesHook()
      .then((response) => {
        setCourses(response.data);
        if (response.hasError) setError(true);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <ContentContext.Provider value={{courses: {data: courses, loading, error, refreshData: fetchCourses}}}>
      {children}
    </ContentContext.Provider>
  )
}