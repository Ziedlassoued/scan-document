import React from 'react';
import DocPreview from '../../components/DocPreview/DocPreview';
import styles from './Preview.module.css';

function Preview(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>my document</h2>
      <ul>
        <li>
          <p>
            <DocPreview title={'title'} />
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Preview;
