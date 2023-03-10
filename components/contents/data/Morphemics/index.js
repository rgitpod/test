import {sostav_slova} from './sostav_slova'
import { koren_slova} from './koren_slova'
import {pravopisanie_glasnyh_v_korne} from './pravopisanie_glasnyh_v_korne'
import {pravopisanie_soglasnyh_v_korne} from './pravopisanie_soglasnyh_v_korne'
import {pristavki} from './pristavki'
import {pravopisanie_pristavok} from './pravopisanie_pristavok'
import {suffiksy_postfiksy} from './suffiksy_postfiksy'
import {slozhnye_slova} from './slozhnye_slova'
import {osnova_i_okonchanie} from './osnova_i_okonchanie'
import {slovoobrazovanie} from './slovoobrazovanie'
import {osnovnye_sposoby} from './osnovnye_sposoby'
import {obrazovanie_novyh_slov} from './obrazovanie_novyh_slov'
import {obrazovanie_novyh_slov_putem} from './obrazovanie_novyh_slov_putem'
import {slitnoe_i_defisnoe} from './slitnoe_i_defisnoe'
import {morfemnyi_i_slovoobrazovatelnyi} from './morfemnyi_i_slovoobrazovatelnyi'

export const Morphemics = [{
  title: 'Состав слова',
  text: sostav_slova,
},
{
  title: 'Корень слова',
  text: koren_slova,
},
{
  title: 'Правописание гласных в корне',
  text: pravopisanie_glasnyh_v_korne,
},
{
  title: 'Правописание согласных в корне',
  text: pravopisanie_soglasnyh_v_korne,
},
{
  title: 'Приставки',
  text: pristavki,
},
{
  title: 'Правописание приставок',
  text: pravopisanie_pristavok,
},
{
  title: 'Суффиксы. Постфиксы',
  text: suffiksy_postfiksy,
},
{
  title: 'Сложные слова. Соединительные гласные и суффиксы в сложных словах. Правописание гласных в сложных словах',
  text: slozhnye_slova,
},
{
  title: 'Основа и окончание',
  text: osnova_i_okonchanie,
},
{
  title: ' Словообразование. Основные понятия',
  text: slovoobrazovanie,
},
{
  title: 'Основные способы словообразования',
  text: osnovnye_sposoby,
},
{
  title: 'Образование новых слов с помощью приставок, суффиксов, постфиксов',
  text: obrazovanie_novyh_slov,
},
{
  title: 'Образование новых слов путём сложения, сращения и перехода из одной части речи в другую',
  text: obrazovanie_novyh_slov_putem,
},
{
  title: 'Слитное и дефисное написание сложных слов',
  text: slitnoe_i_defisnoe,
},
{
  title: 'Морфемный и словообразовательный разбор слова',
  text: morfemnyi_i_slovoobrazovatelnyi,
},
]
