import React, { useState } from 'react';
import DocPreview from '../../components/DocPreview/DocPreview';
import styles from './PreviewList.module.css';
import useGetDocuments from '../../utils/useGetDocuments';
import SearchBar from '../../components/SearchBar/SearchBar';

function PreviewList(): JSX.Element {
  const documents = useGetDocuments();
  const [search, setSearch] = useState('');

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>my document</h2>
      <div className={styles.container}>
        <SearchBar onSearch={setSearch} />
        <div className={styles.searchIcon}></div>
        <ul>
          <li>
            {!filteredDocuments && <span>Loading...</span>}
            {filteredDocuments?.length === 0 && <span>No documents</span>}
            {filteredDocuments?.map((document) => (
              <section>
                <DocPreview title={document.title} text={document.text} />
              </section>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default PreviewList;
