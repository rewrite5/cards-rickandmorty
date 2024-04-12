async function fetchData() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const data = await response.json();
  return data;
}

export default fetchData;
