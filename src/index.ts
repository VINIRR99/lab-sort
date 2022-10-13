import "dotenv/config";

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = process.env.NUMBERS_COLLECTION;
if (numbers) {
    console.log('NumbersCollection before sorting => ', numbers);
    const numbersArray = numbers.trim().slice(1, -1).split(',').map(number => Number(number));
    const numbersCollection = new NumbersCollection(numbersArray);
    numbersCollection.sort();
    console.log('NumbersCollection after sorting => ', numbersCollection.data);
    console.log();
};

const characters = process.env.CHARACTERS_COLLECTION;
if (characters) {
    console.log('CharactersCollection before sorting => ', characters);
    const charactersCollection = new CharactersCollection(characters);
    charactersCollection.sort();
    console.log('CharactersCollection after sorting => ', charactersCollection.data);
    console.log();
};

const list = process.env.LINKED_LIST;
if (list) {
    const linkedList = new LinkedList();
    const listArray = list.trim().slice(1, -1).split(',').map(number => Number(number));
    listArray.forEach(number => linkedList.add(number));

    console.log('LinkedList before sorting:');
    linkedList.print();

    linkedList.sort();
    console.log('LinkedList after sorting:');
    linkedList.print();
};