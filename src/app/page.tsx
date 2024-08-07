import { CardSkeletons } from '@/components/skeletons';
import PokeList from '@/components/poke-list';
import SearchBox from '@/components/search-box';
import { Suspense } from 'react';
import Pagination from '@/components/pagination';
import { getQueriedPokemon } from './actions/actions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SearchParams = {
  query?: string;
  page?: number;
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { totalPages } = await getQueriedPokemon(query);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold">Pokedex</h1>
      <div className="flex align-middle gap-3 mt-3">
        <SearchBox />
        <Link href={'/create'}>
          <Button variant={'outline'}>Add</Button>
        </Link>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      <Suspense key={searchParams?.query} fallback={<CardSkeletons />}>
        <PokeList query={searchParams?.query} page={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
