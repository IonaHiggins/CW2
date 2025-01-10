import React from "react";

const AverageRating = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return <p></p>;
  }
  const calculateAverage = (ratings) => {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum / ratings.length).toFixed(2); // Keeps two decimal places
  };

  const average = calculateAverage(ratings);

  return (
    <div>
      <h6>Average Rating:</h6>
      <p>{average}</p>
    </div>
  );
};

export default AverageRating;