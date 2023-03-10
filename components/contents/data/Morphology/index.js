import { chasti_rechi } from "./chasti_rechi";
import { indexNoun } from './Noun/index'

export const Morphology = [
  {
    title: "Части речи. Слово и его формы",
    text: chasti_rechi,
  },
  {
    title: "Существительное",
    sub: "Noun",
    Noun: indexNoun,
  },
];
