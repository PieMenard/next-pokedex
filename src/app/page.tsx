import PokeList from '@/components/poke-list';
import SearchBox from '@/components/search-box';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold">Pokedex</h1>
      <SearchBox />
      <PokeList query={searchParams?.query} />
    </main>
  );
}
