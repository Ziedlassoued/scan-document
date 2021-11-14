import React, { useEffect, useState } from 'react';
import DocPreview from '../../components/DocPreview/DocPreview';
import styles from './Preview.module.css';
import useGetDocuments from '../../utils/useGetDocuments';
import SearchBar from '../../components/SearchBar/SearchBar';

function Preview(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    useGetDocuments().then(setDocuments);
  }, []);

  return (
    <div className={styles.container}>
      <h2>my document</h2>
      <SearchBar placeholder="Enter document name" />
      <ul>
        <li>
          {documents &&
            documents.map((document) => (
              <section>
                <DocPreview title={document.title} />
              </section>
            ))}
        </li>
      </ul>
    </div>
  );
}

export default Preview;
