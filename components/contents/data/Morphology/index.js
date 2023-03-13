import { chasti_rechi } from "./chasti_rechi";
import { indexNoun } from './Noun/index'
import { indexAdjective } from './Adjective/index'
import { indexNumeral} from './Numeral/index'
import { indexPronoun} from './Pronoun/index'
import { indexVerb} from './Verb/index'
import { indexAdverb} from './Adverb/index'
import { indexParticiple} from './Participle/index'
import { indexTransgr } from './Transgr/index'

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
  {
    title: 'Прилагательное',
    sub: 'Adjective',
    Adjective: indexAdjective
  },
    {
    title: 'Числительное',
    sub: 'Numeral',
    Numeral: indexNumeral
  },
      {
    title: 'Наречие',
    sub: 'Adverb',
    Adverb: indexAdverb
  },
  {
    title: 'Местоимение',
    sub: 'Pronoun',
    Pronoun: indexPronoun
  },
    {
    title: 'Глагол',
    sub: 'Verb',
    Verb: indexVerb
  },
    {
    title: 'Причастие',
    sub: 'Participle',
    Participle: indexParticiple
  },
  {
    title: 'Деепричастие',
    sub: 'Transgr',
    Transgr: indexTransgr
  }
];
