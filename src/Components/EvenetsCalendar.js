import React, { useState } from "react";
import { eventsArray } from "./eventsArray";
import { Event } from "./Event";

const EvenetsCalendar = () => {
  const eventComps = eventsArray.map(
    ({ date, title, location, summary, prereqs, photos, links }) => (
      <Event
        key={title}
        date={date}
        title={title}
        location={location}
        summary={summary}
        prereqs={prereqs}
        photos={photos}
        links={links}
      />
    )
  );

  return eventComps;
};

export default EvenetsCalendar;
