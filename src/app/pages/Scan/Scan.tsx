import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <ImageInput onUpload={setImageURL} />
      <button className={styles.scan} disabled={imageURL === null}>
        Upload your image
      </button>
      <a className={styles.skip} href="#">
        X
      </a>
    </div>
  );
}

export default Scan;
