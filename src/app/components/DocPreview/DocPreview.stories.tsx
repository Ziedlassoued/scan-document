import React from 'react';
import DocPreview from './DocPreview';

export default {
  component: DocPreview,
  title: 'Components/DocPreview',
};

export const Invoice = () => <DocPreview title="Document 1" />;

export const Voucher = () => <DocPreview title="Document 2" />;

export const Document = () => <DocPreview title="Document 3" />;
