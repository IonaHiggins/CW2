import React from 'react';
import { useItinerary } from './itineraryContext';
import { FaRegRectangleList, FaRectangleList } from 'react-icons/fa6';

export default function Itinerary({talkId}) {
  const { itineraryTalk, toggleItineraryTalk } = useItinerary();

  const inItinerary = itineraryTalk.includes(talkId);

  return (
    <div onClick={() => toggleItineraryTalk(talkId)}>
      {inItinerary ? <FaRectangleList size= {25} /> : <FaRegRectangleList size = {20} color = "grey"/>}
    </div>
  );
}