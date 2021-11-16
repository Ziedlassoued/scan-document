import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';
import { Link } from 'react-router-dom';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.neonText}>
          <h1 className={styles.textColo}>Scan Document</h1>
        </div>
      </div>
      {text ? <p>{text}</p> : <ImageInput onUpload={setImageURL} />}

      {text && <AddDocumentForm text={text} />}

      {!text && progress && (
        <Progress progress={progress.progress * 100} status={progress.status} />
      )}
      {!progress && (
        <button
          className={styles.scan}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognize(imageURL);
            }
          }}
        >
          Scan
        </button>
      )}
      <a href="#">Back</a>
      <Link to="/Preview">Skip</Link>
    </div>
  );
}

export default Scan;
