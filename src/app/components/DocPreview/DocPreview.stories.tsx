import React from 'react';
import DocPreview from './DocPreview';

export default {
  component: DocPreview,
  title: 'Components/DocPreview',
};

export const Invoice = () => (
  <DocPreview title="Invoice 1" text={'das ist ein Text'} />
);

export const Voucher = () => (
  <DocPreview title="Voucher 2" text={'das ist ein Text'} />
);

export const Document = () => (
  <DocPreview title="Document 3" text={'das ist ein Text'} />
);
