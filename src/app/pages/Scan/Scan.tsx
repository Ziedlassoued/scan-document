import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  return (
    <div className={styles.container}>
      <h1>Scan Document</h1>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      {recognizeProgress ? (
        <Progress
          progress={recognizeProgress.progress * 100}
          status={recognizeProgress.status}
        />
      ) : (
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
