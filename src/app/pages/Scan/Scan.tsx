import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.neonText}>
          <h1 className={styles.textColo}>Scan Document</h1>
        </div>
      </div>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      {recognizedText && <AddDocumentForm text={recognizedText} />}
      {!recognizedText && recognizeProgress && (
        <Progress
          progress={recognizeProgress.progress * 100}
          status={recognizeProgress.status}
        />
      )}
      {!recognizeProgress && (
        <button
          className={styles.scan}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognizeText(imageURL, setRecognizeProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Scan
        </button>
      )}
      <a href="#">Back</a>
    </div>
  );
}

export default Scan;
