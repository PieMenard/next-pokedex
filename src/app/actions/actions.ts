export async function getAllPokemon() {
    const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
    );

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return data.results;
}

// export async function getQueriedPokemon(search: string) {

//     const res = await fetch(
//         'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
//     );

//     if (!res.ok) {
//         throw new Error('Could not fetch data');
//     }

//     const data = await res.json();

//     return data.results.filter((pokemon: any) => pokemon.name.includes(search));
// }

export async function getQueriedPokemon(search: string, page: number = 1, pageSize: number = 20) {
    // Fetch all Pokémon data
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    // Parse the JSON response
    const data = await res.json();

    // Filter Pokémon by the search term
    const filteredPokemons = data.results.filter((pokemon: any) => pokemon.name.includes(search));

    // Pagination logic
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedPokemons = filteredPokemons.slice(start, end);

    return paginatedPokemons;
}

export async function getPokemon(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return data;
}