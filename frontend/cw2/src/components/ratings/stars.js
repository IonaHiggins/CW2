import Star from "./star.js";
import { useLocalStorage } from "../useLocalStorage.js";

export default function StarRating({ position, totalStars = 5 }) {

  const createArray = length => [...Array(length)];
  let positionInMenu = JSON.stringify(position);
  const [selectedStars, setSelectedStars] =  useLocalStorage( positionInMenu, 3);

  

  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      

    
    </div>
  );
}
