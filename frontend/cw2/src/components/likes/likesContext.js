import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../useLocalStorage';

const LikeContext = createContext({
  likedTalk: [],
  toggleLikedTalk: () => {},
});

export function LikedTalkProvider({ children }) {
  const [likedTalk, setLikedTalk] = useLocalStorage('likedTalk', []);

  const toggleLikedTalk = (talkId) => {
    setLikedTalk((prevSelectedItems) =>
      prevSelectedItems.includes(talkId)
        ? prevSelectedItems.filter((id) => id !== talkId)
        : [...prevSelectedItems, talkId]
    );
  };

  return (
    <LikeContext.Provider value={{ likedTalk, toggleLikedTalk }}>
      {children}
    </LikeContext.Provider>
  );
}

export const useLikes = () => {
  const context = useContext(LikeContext);
  return context;
};