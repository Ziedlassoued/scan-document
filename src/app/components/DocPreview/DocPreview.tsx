import React from 'react';

type DocPreviewProps = { title: string };

function DocPreview({ title }: DocPreviewProps): JSX.Element {
  return (
    <article>
      <h2>{title}</h2>
    </article>
  );
}
export default DocPreview;
