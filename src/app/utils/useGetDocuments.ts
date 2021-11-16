import { useEffect, useState } from 'react';

type Document = {
  id: number;
  title: string;
  text: string;
};

function useGetDocuments(): Document[] | null {
  const [documents, setDocuments] = useState<Document[] | null>(null);

  useEffect(() => {
    fetch('https://json-server.machens.dev/docs')
      .then((response) => response.json())
      .then(setDocuments);
  }, []);

  return documents;
}
export default useGetDocuments;
