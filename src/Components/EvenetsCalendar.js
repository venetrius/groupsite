import React, { useState } from "react";
import { eventsArray } from "./eventsArray";
import { Event } from "./Event";
import styled from "styled-components";

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto;
`;

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

  return <Wrapper>{eventComps}</Wrapper>;
};

export default EvenetsCalendar;
