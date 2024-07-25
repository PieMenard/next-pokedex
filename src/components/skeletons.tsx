import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';

export const CardSkeleton = () => {
  return (
    <Card className="flex flex-col items-center p-4 space-y-4 animate-pulse">
      <CardHeader className="flex flex-col items-center space-y-2">
        {/* ID placeholder */}
        <div className="h-6 w-10 bg-gray-300 rounded"></div>
        <CardTitle>
          {/* Name placeholder */}
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Image placeholder */}
        <div className="h-72 w-72 bg-gray-300 rounded-lg"></div>
      </CardContent>
      <CardFooter className="text-center border-t-2 w-full pt-2">
        <ul className="flex justify-center space-x-2">
          {/* Type placeholders */}
          <li className="h-4 w-16 bg-gray-300 rounded"></li>
          <li className="h-4 w-16 bg-gray-300 rounded"></li>
        </ul>
      </CardFooter>
    </Card>
  );
};

export const CardSkeletons = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
