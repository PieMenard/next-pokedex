import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export const CardSkeleton = () => {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader className="items-center">
        <div className="bg-slate-200">data</div>
        <CardTitle>
          <div className="bg-slate-200">name</div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-slate-500 block h-[150px] w-[150px]" />
      </CardContent>
      <CardFooter className="text-center border-t-2">
        <div className="bg-slate-200" />
      </CardFooter>
    </Card>
  );
};

export const CardSkeletons = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
