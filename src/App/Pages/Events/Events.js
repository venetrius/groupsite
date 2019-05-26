import React from 'react';
import { Event } from './Event';
import { eventsArray } from './eventsArray';

export default function Events() {
  const events = eventsArray.map(
    (
      { title, date, time, location, summary, prereqs, photos, links },
      index
    ) => {
      return (
        <Event
          key={`${summary}${index}`}
          title={title}
          date={date}
          time={time}
          location={location}
          summary={summary}
          prereqs={prereqs}
          photos={photos}
          links={links}
        />
      );
    }
  );

  return events;
}
