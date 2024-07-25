import { getQueriedPokemon } from '@/app/actions/actions';
import PokeItem from './poke-item';

const PokeList = async ({ query, page }: { query?: string; page: number }) => {
  const search = query || '';
  const { results } = await getQueriedPokemon(search, page);
  const totalResults = results.length;
  console.log(totalResults);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-6">
      {results.map((pokemon: any) => (
        <div key={pokemon.url}>
          <PokeItem url={pokemon.url} />
        </div>
      ))}
    </div>
  );
};

export default PokeList;
