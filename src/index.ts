//import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

//const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
//const sortNumbers = new Sorter(numbersCollection);
//sortNumbers.sort();
//console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ecbaD');
const sortCharacters = new Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);