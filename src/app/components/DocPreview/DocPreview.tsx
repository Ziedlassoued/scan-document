import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = { title: string };

function DocPreview({ title }: DocPreviewProps): JSX.Element {
  return <h3 className={styles.container}>{title}</h3>;
}
export default DocPreview;
