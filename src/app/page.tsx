import { CardSkeletons } from '@/components/skeletons';
import PokeList from '@/components/poke-list';
import SearchBox from '@/components/search-box';
import { Suspense } from 'react';
import Pagination from '@/components/pagination';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold">Pokedex</h1>
      <SearchBox />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={10} />
      </div>
      <Suspense key={searchParams?.query} fallback={<CardSkeletons />}>
        <PokeList query={searchParams?.query} page={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={10} />
      </div>
    </main>
  );
}
