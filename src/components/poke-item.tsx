async function getPokemon(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }

  const data = await res.json();

  return data;
}

const PokeItem = async ({ url }: { url: string }) => {
  const data = await getPokemon(url);
  return (
    <div>
      {data.name} {data.id}
    </div>
  );
};

export default PokeItem;
