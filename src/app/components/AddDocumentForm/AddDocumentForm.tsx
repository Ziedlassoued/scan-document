import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from '../../utils/usePostDocument';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.textbox}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <input
        className={styles.btn}
        type="submit"
        disabled={!title || isLoading}
      />
    </form>
  );
}

export default AddDocumentForm;
