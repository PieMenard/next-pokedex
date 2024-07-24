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
    <Card className="flex flex-col items-center ">
      <CardHeader className="items-center h-[108px] w-[150px]">
        <CardTitle>
          <div className="block bg-slate-200 h-5 w-5 " />
        </CardTitle>
        <CardDescription>
          <div className="block bg-slate-200 h-5 w-20 " />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[189px] w-[189px] rounded-md bg-gray-200" />
      </CardContent>
      <CardFooter className="text-center border-t-2 ">
        <div className="block bg-slate-200 h-5 w-20 mt-3" />
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
