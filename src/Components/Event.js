import React, { useState } from "react";

export const Event = ({
  title,
  date,
  location,
  summary,
  prereqs,
  photos,
  links
}) => {
  const { isPreview, changeIsPreview } = useState(false);

  const linkComps = links.map(({ href, linkText }) => (
    <a key={linkText} href={href}>
      {linkText}
    </a>
  ));

  const imageComps = photos.map(({ alt, src }) => (
    <img width={50} key={alt} src={src} alt={alt} />
  ));

  return (
    <details>
      <summary>
        {title} {date}
      </summary>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{location}</p>
      <p>{summary}</p>
      <p>{prereqs}</p>
      {linkComps}
      {imageComps}
    </details>
  );
};
