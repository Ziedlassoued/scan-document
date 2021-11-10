import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { recognizeText } from '../../utils/ocr';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      <button
        className={styles.scan}
        disabled={imageURL === null}
        onClick={() => {
          if (imageURL) {
            recognizeText(imageURL, ({ progress, status }) => {
              console.log(progress, status);
            }).then(setRecognizedText);
          }
        }}
      >
        Scan your image
      </button>
      <a href="#">Back</a>
    </div>
  );
}

export default Scan;
