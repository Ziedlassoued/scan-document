async function useGetDocuments() {
  const response = await fetch('https://json-server.machens.dev/docs', {
    method: 'GET',
  });

  const body = response.json();
  return body;
}
export default useGetDocuments;
