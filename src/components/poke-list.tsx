import { getAllPokemon, getQueriedPokemon } from '@/app/actions/actions';
import PokeItem from './poke-item';

const PokeList = async ({ query }: { query?: string }) => {
  const search = query || '';
  console.log(search);
  const data = await getQueriedPokemon(search);
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
