import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };

    await fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setIsLoading(true);
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
