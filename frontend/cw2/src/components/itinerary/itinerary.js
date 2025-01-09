import React from 'react';
import { useItinerary } from './itineraryContext';
import { FaRegRectangleList, FaRectangleList } from 'react-icons/fa6';

export default function Itinerary({ talk }) {
  const { itineraryTalk, toggleItineraryTalk } = useItinerary();

  const inItinerary = itineraryTalk.includes(talk);

  return (
    <div onClick={() => toggleItineraryTalk(talk)}>
      {inItinerary ? <FaRectangleList /> : <FaRegRectangleList />}
    </div>
  );
}