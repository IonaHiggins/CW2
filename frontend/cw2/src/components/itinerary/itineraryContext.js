import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../useLocalStorage';

const ItineraryContext = createContext({
  itineraryTalk: [],
  toggleItineraryTalk: () => {},
});

export function ItineraryTalkProvider({ children }) {
  const [itineraryTalk, setItineraryTalk] = useLocalStorage('itineraryTalk', []);

  const toggleItineraryTalk = (talkId) => {
    setItineraryTalk((prevSelectedItems) =>
      prevSelectedItems.includes(talkId)
        ? prevSelectedItems.filter((id) => id !== talkId)
        : [...prevSelectedItems, talkId]
    );
  };

  return (
    <ItineraryContext.Provider value={{ itineraryTalk, toggleItineraryTalk }}>
      {children}
    </ItineraryContext.Provider>
  );
}

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  return context;
};