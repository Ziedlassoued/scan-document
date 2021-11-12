import React from 'react';
import DocPreview from '../../components/DocPreview/DocPreview';

function Preview(): JSX.Element {
  return (
    <>
      <h2>my document</h2>
      <DocPreview title={'title'} />
    </>
  );
}

export default Preview;
