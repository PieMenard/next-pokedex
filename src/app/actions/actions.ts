export async function getAllPokemons() {
    const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=99&offset=0'
    );

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return data.results;
}

export async function getQueriedPokemon({ search }: { search: string }) {
    const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=99&offset=0'
    );

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return data.results.filter((pokemon: any) => pokemon.name.includes(search));
}

export async function getPokemon(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return data;
}