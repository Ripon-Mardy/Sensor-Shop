// components/HtmlContent.js
import React from 'react';
import { sanitize } from 'dompurify';

const HtmlContent = ({ html }) => {
  // Sanitize the HTML content
  const sanitizedHtml = sanitize(html);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default HtmlContent;
