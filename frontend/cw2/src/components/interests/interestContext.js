import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../useLocalStorage';

const InterestContext = createContext({
  interestedTalk: [],
  toggleInterestedTalk: () => {},
});

export function InterestTalkProvider({ children }) {
  const [interestedTalk, setInterestedTalk] = useLocalStorage('interestedTalk', []);

  const toggleInterestedTalk = (talkId) => {
    setInterestedTalk((prevSelectedItems) =>
      prevSelectedItems.includes(talkId)
        ? prevSelectedItems.filter((id) => id !== talkId)
        : [...prevSelectedItems, talkId]
    );
  };

  return (
    <InterestContext.Provider value={{ interestedTalk, toggleInterestedTalk }}>
      {children}
    </InterestContext.Provider>
  );
}

export const useInterests = () => {
  const context = useContext(InterestContext);
  return context;
};

