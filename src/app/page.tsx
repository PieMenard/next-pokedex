import PokeList from '@/components/poke-list';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold">Pokedex</h1>
      <PokeList />
    </main>
  );
}
