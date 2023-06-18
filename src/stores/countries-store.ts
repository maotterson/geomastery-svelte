import { readable } from "svelte/store";

type Country = {
    id: string;
    name: string;
    capital: string;
}

const initialData: Country[] = [{id: '123', name: 'France', capital: 'Paris'}, {id: '124', name: 'United States', capital: 'Washington DC'}];

export const countries = readable(initialData, (set) => {
 // todo
});