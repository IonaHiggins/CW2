import React, { createContext, useState, useContext } from "react";

// Create a Context for managing review data
const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [review, setReview] = useState({
    name: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  return (
    <ReviewContext.Provider value={{ review, handleInputChange }}>
      {children}
    </ReviewContext.Provider>
  );
}

export const useReview = () => {
  return useContext(ReviewContext);
};