//import { NumbersCollection } from "./NumbersCollection";
//import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

//const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
//const sortNumbers = new Sorter(numbersCollection);
//sortNumbers.sort();
//console.log(numbersCollection.data);

//const charactersCollection = new CharactersCollection('ecbaD');
//const sortCharacters = new Sorter(charactersCollection);
//sortCharacters.sort();
//console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();
console.log();
const sortLinkedList = new Sorter(linkedList);
sortLinkedList.sort();
linkedList.print();