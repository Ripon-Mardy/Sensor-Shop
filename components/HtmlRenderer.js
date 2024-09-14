// components/HtmlRenderer.js
import React from 'react';

const HtmlRenderer = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HtmlRenderer;
