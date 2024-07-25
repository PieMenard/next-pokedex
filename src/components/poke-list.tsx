import { getQueriedPokemon } from '@/app/actions/actions';
import PokeItem from './poke-item';

const PokeList = async ({ query, page }: { query?: string; page: number }) => {
  const search = query || '';
  const { results } = await getQueriedPokemon(search, page);
  return (
    <div className="mt-6">
      {results.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No Pokémon found matching your search.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {results.map((pokemon: any) => (
            <div key={pokemon.url}>
              <PokeItem url={pokemon.url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokeList;
