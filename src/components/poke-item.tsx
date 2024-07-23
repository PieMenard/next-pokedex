import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

async function getPokemon(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }

  const data = await res.json();

  return data;
}

function formatId(id: number): string {
  let formattedId = id.toString();

  if (formattedId.length == 1) {
    formattedId = '00' + formattedId;
  }
  if (formattedId.length == 2) {
    formattedId = '0' + formattedId;
  }
  if (formattedId.length > 4) {
    formattedId = formattedId.slice(0, -1);
  }

  return formattedId;
}

const PokeItem = async ({ url }: { url: string }) => {
  const data = await getPokemon(url);
  const id = formatId(data.id);

  return (
    <div>
      <Card className="flex flex-col items-center">
        <CardHeader className="items-center">
          <p>{data.id}</p>
          <CardTitle>
            <div>{data.name}</div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
            alt="poke image"
            width={300}
            height={300}
          />
        </CardContent>
        <CardFooter className="text-center border-t-2">
          <ul>
            {data.types.map((item: any) => (
              <li key={item.type.name}>{item.type.name}</li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PokeItem;
