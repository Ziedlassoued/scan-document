import React, { useEffect, useState } from 'react';
import DocPreview from '../../components/DocPreview/DocPreview';
import styles from './Preview.module.css';
import useGetDocuments from '../../utils/useGetDocuments';

function Preview(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);
  console.log(documents);

  useEffect(() => {
    useGetDocuments().then(setDocuments);
  }, []);

  return (
    <div className={styles.container}>
      <h2>my document</h2>
      <ul>
        <li>
          {documents &&
            documents.map((document) => (
              <p>
                <DocPreview title={document.title} />
              </p>
            ))}
        </li>
      </ul>
    </div>
  );
}

export default Preview;
