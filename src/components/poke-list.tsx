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
  console.log(data);
  return (
    <div>
      {data.map((pokemon: any) => (
        <div key={pokemon.url}>
          <PokeItem url={pokemon.url} />
        </div>
      ))}
    </div>
  );
};

export default PokeList;
