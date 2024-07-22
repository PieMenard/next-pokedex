import PokeItem from './poke-item';

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }

  const data = await res.json();

  return data.results;
}

const PokeList = async () => {
  const data = await getPokemons();
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 min">
      {data.map((pokemon: any) => (
        <div key={pokemon.url}>
          <PokeItem url={pokemon.url} />
        </div>
      ))}
    </div>
  );
};

export default PokeList;
