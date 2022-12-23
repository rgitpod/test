import { zvuki_rechi } from "./zvuki_rechi";
import { foneticheskaya_transkripciya } from "./foneticheskaya_transkripciya";
import { glasnye_i_soglasnye_zvuki } from "./glasnye_i_soglasnye_zvuki";
import { grafika_bukvy_alfavit } from "./grafika_bukvy_alfavit";
import { zvuki_rechi_i_bukvy } from "./zvuki_rechi_i_bukvy";
import { slog_pravila_perenosa_slov } from './slog_pravila_perenosa_slov'
import { udarenie } from './udarenie'
import { glasnye_zvuki } from './glasnye_zvuki'
import { pravopisanie_glasnyh } from './pravopisanie_glasnyh'
import { soglasnye_zvuki } from './soglasnye_zvuki'
import { upotreblenie_bukv } from './upotreblenie_bukv'
import {pravopisanie_glasnyh_posle} from './pravopisanie_glasnyh_posle'
import {pravopisanie_glasnyh_posle_c} from './pravopisanie_glasnyh_posle_c'
import {izmeneniya_soglasnyh_v_rechi} from './izmeneniya_soglasnyh_v_rechi'
import {pravopisanie_zvonkih_gluhih} from './pravopisanie_zvonkih_gluhih'
import {polnyi_foneticheskii_razbor} from './polnyi_foneticheskii_razbor'

export const Phonetics = [
  {
    title: "Звуки речи",
    text: zvuki_rechi,
  },
  {
    title: "Фонетическая транскрипция",
    text: foneticheskaya_transkripciya,
  },
  {
    title: "Гласные и согласные звуки",
    text: glasnye_i_soglasnye_zvuki,
  },
  {
    title: "Графика. Буквы. Алфавит",
    text: grafika_bukvy_alfavit,
  },
  {
    title: "Звуки речи и буквы",
    text: zvuki_rechi_i_bukvy,
  },
  {
    title: "Слог. Правила переноса слов",
    text: slog_pravila_perenosa_slov,
  },
  {
    title: 'Ударение',
    text: udarenie
  },
  {
    title: 'Гласные звуки в ударном и безударном положении',
    text: glasnye_zvuki
  },
  {
    title: 'Правописание гласных, обусловленное их произношением',
    text: pravopisanie_glasnyh
  },
  {
    title: 'Согласные звуки',
    text: soglasnye_zvuki
  },
  {
    title: 'Употребление букв Ь и Ъ',
    text: upotreblenie_bukv
  },
  {
 title: 'Правописание гласных после шипящих',
 text: pravopisanie_glasnyh_posle
},
{
 title: 'Правописание гласных после Ц',
 text: pravopisanie_glasnyh_posle_c
},
{
 title: 'Изменения согласных в речи',
 text: izmeneniya_soglasnyh_v_rechi
},
{
 title: 'Правописание звонких/глухих и непроизносимых согласных',
 text: pravopisanie_zvonkih_gluhih
},
{
 title: 'Полный фонетический разбор слова',
 text: polnyi_foneticheskii_razbor
},
];
