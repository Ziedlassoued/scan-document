import React, { useState } from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = { title: string; text: string };
const [isCollapsed, setIsCollapsed] = useState(true);

function DocPreview({ title, text }: DocPreviewProps): JSX.Element {
  return (
    <article>
      <h3 className={styles.container}>{title}</h3>
      <details
        className={styles.text}
        open={!isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      >
        <summary className={styles.disclosure}>
          {isCollapsed ? `${text.substring(0, 20)}...` : text}
        </summary>
      </details>
    </article>
  );
}
export default DocPreview;
