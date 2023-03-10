import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const morfemnyi_i_slovoobrazovatelnyi = <View><P><Strong>Морфемный и словообразовательный разбор слова</Strong> (то, что условно обозначается цифрой <sup>2</sup>)
    &ndash; это два взаимосвязанных этапа анализа структуры слова.</P>
<P className="caption">А) План морфемного разбора</P>
    <Li><P>Выписать слово в той форме, в какой оно представлено в предложении. Определить слово как часть речи (изменяемая
        или неизменяемая часть речи).</P></Li>
    <Li><P>У изменяемого слова выделить окончание и указать его значение. Чтобы определить окончание, необходимо слово
        просклонять или проспрягать.</P></Li>
    <Li><P>Указать основу слова.</P></Li>
    <Li><P>Выделить корень слова; подобрать однокоренные слова.</P></Li>
    <Li><P>Выделить приставки, суффиксы, постфиксы, соединительные гласные (если они есть); подобрать другие слова с такими
        же приставками, суффиксами и т.д., но с другим корнем.</P></Li>
<P className="caption">Б) План словообразовательного разбора</P>
    <Li><P>Поставить слово в начальную форму.</P></Li>
    <Li><P>Указать основу слова и определить, является ли оно производным.</P></Li>
    <Li><P>Для производного слова подобрать словообразовательную пару (слово, от которого непосредственно образовано
        разбираемое слово).</P></Li>
    <Li><P>Указать основу в производящем слове.</P></Li>
    <Li><P>Указать словообразовательные приставки, суффиксы, постфиксы (если они есть).</P></Li>
    <Li><P>Указать способ образования слова.</P></Li>
<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> При морфемном разборе анализируется та форма слова, которая представлена в
    конкретном тексте; при словообразовательном разборе &ndash; слово в начальной форме.
    <P><Strong>2)</Strong> Основу разбираемой формы слова можно выделить всегда, окончание (включая нулевое окончание)
        выделяется только в изменяемых частях речи (нет окончаний у деепричастий, наречий, служебных частей речи и
        некоторых существительных и прилагательных).</P>
    <P><Strong>3)</Strong> Чтобы определить, является ли слово производным, надо обратить внимание на состав его основы
        (в начальной форме!).</P>
    <P><Strong>4)</Strong> Если основа начальной формы слова состоит из одного корня, то оно обычно является
        непроизводным. Исключения могут составить слова, которые образованы путём: (а) нулевой суффиксации; (б) перехода
        из одной части речи в другую.</P>
    <P><Strong>5)</Strong> Если основа начальной формы слова состоит из корня и приставки, суффикса и т.д., такое слово
        обычно является производным. Исключения составляют некоторые бесприставочные глаголы.</P>
    <Strong>6)</Strong> Сложное слово всегда является производным.</P>
</Div>
<P>&nbsp;</P>
<P className="caption" style="text-align: center;">Образец морфемного и словообразовательного разбора</P>
<P className="abzac">В уездном городе N было так много парикмахерских<sup>2</sup> и бюро похоронных процессий, что казалось,
    жители<sup>2</sup> города рождаются<sup>2</sup> лишь затем, чтобы побриться<sup>2</sup>, остричься,
    освежить<sup>2</sup> голову<sup>2</sup> вежеталем и сразу же умереть. А на самом деле в уездном<sup>2</sup> городе N
    люди рождались, брились и умирали довольно редко. Жизнь города N была тишайшей<sup>2</sup>. Весенние вечера были
    упоительны, грязь под луной сверкала, как антрацит, и вся молодёжь города до такой степени была влюблена<sup>2</sup>
    в секретаршу месткома<sup>2</sup> коммунальников, что это мешало<sup>2</sup> ей работать (Ильф и Петров).</P>
<P>&nbsp;</P>
<P><Em>(Много) <Span className="litera">парикмахерских</Span></Em></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">парикмахер-ск</Span>-<Em>их</Em> (имя существительное).{'\n'} 2. Окончание &ndash;
    -<Em>их</Em>. Оно выражает значения мн.ч., Р.п., ср.: <Span className="litera">парикмахерск</Span>-<Em>ая</Em>, <Span
        className="litera">парикмахерск</Span>-<Em>ой</Em>.{'\n'} 3. Основа формы &ndash; <Span
        className="litera">парикмахер-ск-</Span>.{'\n'} 4. Корень &ndash; <Em>парикмахер</Em>-. Однокоренные слова: <Span
        className="litera"><Span>парикмахер</Span></Span><Span
        className="kwadrat">&#9633;</Span>, <Span className="litera"><Span
           >парикмахер</Span>-ш</Span>-<Em>а</Em>.{'\n'} 5. -<Em>ск</Em>- &ndash;
    суффикс. Это суффикс прилагательного, ср.: <Span className="litera">матрос-<Span
           >ск</Span></Span>-<Em>ий</Em>, <Span className="litera">жен-<Span
           >ск</Span></Span>-<Em>ий</Em>.</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>парикмахерская</Em>.{'\n'} 2. Основа слова &ndash; <Span
        className="litera">парикмахерск-</Span>. Основа производная.{'\n'} 3&ndash;5. <Span
        className="litera">парикмахерск</Span>-<Em>ая</Em> (сущ.) &larr; <Span
        className="litera">парикмахерск</Span>-<Em>ий</Em> (прил.).{'\n'} 6. Слово образовано путём перехода из одной части
    речи в другую (из прилагательного &ndash; в существительное &ndash; субстантивация).</P>
<P>&nbsp;</P>
<P><Span className="litera">Жители</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">жи-тел</Span>-<Em>и</Em> (имя существительное).{'\n'} 2. Окончание &ndash; -<Em>и</Em>. Оно
    выражает значения мн.ч., И.п., ср.: <Span className="litera">житель</Span><Span className="kwadrat">&#9633;</Span>, <Span
        className="litera">жител</Span>-<Em>я</Em>.{'\n'} 3. Основа формы &ndash; <Span className="litera">жи-тел-</Span>.{'\n'}
    4. Корень -<Em>жи</Em>-. Однокоренные слова: <Span className="litera"><Span
           >жи</Span></Span>-<Em>ть</Em>, <Span className="litera"><Span
           >жи</Span>-л</Span>-<Em>ой</Em>.{'\n'} 5. -<Em>тель</Em> &ndash; суффикс.
    Это суффикс существительного, ср.: <Span className="litera">пис-а-<Span
           >тель</Span></Span><Span className="kwadrat">&#9633;</Span>, <Span
        className="litera">вод-и-<Span>тель</Span></Span><Span
        className="kwadrat">&#9633;</Span>.</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>житель</Em>.{'\n'} 2. Основа слова &ndash; <Span className="litera">жи-тель</Span>. Основа
    производная.{'\n'} 3&ndash;4. <Span className="litera">жи-<Span
           >тель</Span></Span><Span className="kwadrat">&#9633;</Span> &rarr; <Span
        className="litera">жи</Span>-<Em>ть</Em>.{'\n'} 5. <Span className="litera">-тель</Span> &ndash; словообразовательный
    суффикс.{'\n'} 6. Суффиксальный способ.</P>
<P>&nbsp;</P>
<P><Span className="litera">Рождаются</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">рожд-а</Span>-<Em>ют-ся</Em> (глагол).{'\n'} 2. Окончание &ndash; -<Em>ют</Em>. Оно выражает
    значения 3-го л. мн.ч., ср.: <Em><Span className="litera">рожд-а</Span>-ет-<Span className="litera">ся</Span>, <Span
            className="litera">рожд-а</Span>-ем-<Span className="litera">ся</Span>.</Em>{'\n'} 3. Основа формы &ndash; <Span
        className="litera">рожд-а-&hellip;-ся</Span>.{'\n'} 4. Корень &ndash; <Em>рожд</Em>-. Однокоренные слова: <Em><Span
            className="litera"><Span>рожд</Span>-а</Span>-ть, <Span
            className="litera">рожд-ённ</Span>-ый.</Em>{'\n'} 5. -<Em>а</Em>- &ndash; суффикс. Это суффикс глагола, ср.:
    <Em><Span className="litera">пис-<Span>а</Span></Span>-ть, <Span
            className="litera">реш-<Span>а</Span></Span>-ть.</Em>{'\n'}
    &nbsp;&nbsp;&nbsp;&nbsp;-<Em>ся</Em> &ndash; постфикс возвратного глагола, ср.: <Em><Span
            className="litera">мы</Span>-ть-<Span className="litera">ся</Span>, <Span className="litera">куп-а</Span>-ть-<Span
            className="litera">ся</Span>.</Em></P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>рождаться</Em>.{'\n'} 2. Основа слова &ndash; <Span
        className="litera">рожд-а-&hellip;-ся</Span>. Основа производная.{'\n'} 3&ndash;4. <Span
        className="litera">рожда</Span>-<Em>ть</Em>-<Span className="litera"><Span
           >ся</Span></Span> &larr; <Span
        className="litera">рожда</Span>-<Em>ть</Em>.{'\n'} 5. -<Span className="litera">ся</Span> &ndash; словообразовательный
    постфикс.{'\n'} 6. Постфиксальный способ.</P>
<P>&nbsp;</P>
<P><Span className="litera">Побриться</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">по-бри</Span>-<Em>ть</Em>-<Span className="litera">ся</Span> (глагол в неопределённой
    форме).{'\n'} 2. Окончание &ndash; -<Em>ть</Em>. Оно выражает значение неопределённой формы, ср.: <Em><Span
            className="litera">по-бре</Span>-ет-<Span className="litera">ся</Span>, <Span className="litera">по-бре</Span>-ем-<Span
            className="litera">ся</Span>.</Em>{'\n'} 3. Основа формы &ndash; <Span
        className="litera">по-бри-&hellip;-ся</Span>.{'\n'} 4. Корень &ndash; <Em>бри</Em>-. Однокоренные слова: <Em><Span
            className="litera"><Span>бри</Span>-тв</Span>-а, <Span
            className="litera">вы-<Span>бри</Span></Span>-ть.</Em>{'\n'} 5. <Em>по</Em>-
    &ndash; приставка, ср.: <Span className="litera"><Span
           >по</Span>-сл-а</Span>-<Em>ть</Em>, <Span className="litera"><Span
           >по</Span>-сад-и</Span>-<Em>ть</Em>.{'\n'}
    &nbsp;&nbsp;&nbsp;&nbsp;-<Em>ся</Em> &ndash; постфикс возвратного глагола, ср.: <Em><Span
            className="litera">мы</Span>-ть-<Span className="litera"><Span>ся</Span></Span>,
        <Span className="litera">куп-а</Span>-ть-<Span className="litera"><Span
               >ся</Span></Span>.</Em></P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>побриться</Em>.{'\n'} 2. Основа слова &ndash; <Span
        className="litera">по-бри-&hellip;-ся</Span>. Основа производная.{'\n'} 3&ndash;6. а) <Em><Span
            className="litera">по-бри</Span>-ть-<Span className="litera"><Span
               >ся</Span></Span> &larr; <Span className="litera"><Span
               >по</Span>-бри</Span>-ть; -ся</Em> &ndash; словообразовательный
    постфикс; постфиксальный способ.{'\n'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;б) <Em><Span
            className="litera">по-бри</Span>-ть-<Span className="litera"><Span
               >ся</Span></Span> &larr; <Span className="litera">бри</Span>-ть-<Span
            className="litera"><Span>ся</Span></Span>; по</Em>- &ndash;
    словообразовательная приставка; префиксальный способ.</P>
<P>&nbsp;</P>
<P><Span className="litera">Освежить</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">о-свеж-и</Span>-<Em>ть</Em> (глагол в неопределённой форме).{'\n'} 2. Окончание &ndash;
    -<Em>ть</Em>. Оно выражает значение неопределённой формы, ср.: <Em><Span className="litera">о-свеж</Span>-ит, <Span
            className="litera">о-свеж</Span>-им</Em>.{'\n'} 3. Основа формы &ndash; <Span
        className="litera">о-свеж-и-</Span>.{'\n'} 4. Корень &ndash; <Em>свеж</Em>-. Однокоренные слова: <Em><Span
            className="litera"><Span>свеж</Span></Span>-ий, <Span className="litera"><Span
               >свеж</Span></Span>-о</Em>.{'\n'} 5. <Em>о</Em>- &ndash; приставка,
    ср.: <Em><Span className="litera"><Span>о</Span>-бел-и</Span>-ть, <Span
            className="litera"><Span>о</Span>-светл-и</Span>-ть</Em>.{'\n'}
    &nbsp;&nbsp;&nbsp;&nbsp;-<Em>и</Em>- &ndash; суффикс глагола, ср.: <Em><Span className="litera">о-бел-<Span
               >и</Span></Span>-ть, <Span className="litera">о-светл-<Span
               >и</Span></Span>-ть.</Em></P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>освежить</Em>.{'\n'} 2. Основа слова &ndash; <Span className="litera">о-свеж-и-</Span>.
    Основа производная.{'\n'} 3&ndash;4. <Span className="litera"><Span
           >о</Span>-свеж-<Span
           >и</Span></Span>-<Em>ть &larr; <Span
            className="litera">свеж</Span>-ий</Em>.{'\n'} 5. <Span className="litera">о-</Span> &ndash; словообразовательная
    приставка; <Span className="litera">-и</Span> &ndash; словообразовательный суффикс.{'\n'} 6. Приставочно-суффиксальный
    способ.</P>
<P>&nbsp;</P>
<P><Span className="litera">Голову</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">голов</Span>-<Em>у</Em> (имя существительное).{'\n'} 2. Окончание &ndash; -<Em>у</Em>. Оно
    выражает значение ж.р., ед.ч., В.п., ср.: <Span className="litera">голов</Span>-<Em>а</Em>, <Span
        className="litera">голов</Span>-<Em>ой</Em>.{'\n'} 3. Основа формы &ndash; <Span className="litera">голов-</Span>.{'\n'}
    4. Корень &ndash; <Em>голов</Em>-. Однокоренные слова: <Em><Span className="litera"><Span
               >голов</Span>-н</Span>-ой, <Span className="litera"><Span
               >голов</Span>-аст</Span>-ый</Em>.{'\n'} 5. Приставок и суффиксов нет.
</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>голова</Em>.{'\n'} 2. Основа слова &ndash; <Span className="litera">голов-</Span>. Основа
    непроизводная (состоит из одного корня).</P>
<P>&nbsp;</P>
<P><Em>(В) <Span className="litera">уездном</Span> (городе)</Em></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">уезд-н</Span>-<Em>ом</Em> (имя прилагательное).{'\n'} 2. Окончание &ndash; -<Em>ом</Em>. Оно
    выражает значения ед.ч., м.р., П.п. ср.: <Em><Span className="litera">уезд-н</Span>-ый, <Span
            className="litera">уезд-н</Span>-ого</Em>.{'\n'} 3. Основа формы &ndash; <Span
        className="litera">уезд-н-</Span>.{'\n'} 4. Корень &ndash; <Em>уезд</Em>-. Однокоренные слова: <Span
        className="litera"><Span>уезд</Span></Span><Span className="kwadrat">&#9633;</Span>,
    <Span className="litera">по-<Span>уезд</Span>-н</Span>-<Em>ый</Em>.{'\n'} 5.
    -<Em>н</Em>- &ndash; суффикс. Это суффикс прилагательного, ср.: <Span className="litera">волост-<Span
           >н</Span></Span>-<Em>ой</Em>, <Span className="litera">подъ-езд-<Span
           >н</Span></Span>-<Em>ый</Em>.</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>уездный</Em>.{'\n'} 2. Основа слова &ndash; <Span className="litera">уезд-н-</Span>.
    Основа производная.{'\n'} 3&ndash;4. <Span className="litera">уезд-н</Span>-<Em>ый</Em> &larr; <Span
        className="litera">уезд</Span><Span className="kwadrat">&#9633;</Span>.{'\n'} 5. <Span className="litera">-н-</Span> &ndash;
    словообразовательный суффикс.{'\n'} 6. Суффиксальный способ.</P>
<P>&nbsp;</P>
<P><Em>(Жизнь)&hellip; (была) <Span className="litera">тишайшей</Span></Em></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">тиш-айш</Span>-<Em>ей</Em> (имя прилагательное).{'\n'} 2. Окончание &ndash; -<Em>ей</Em>. Оно
    выражает значение ед.ч., ж.р., Т.п., ср.: <Span className="litera">тиш-айш</Span>-<Em>ая</Em>, <Span
        className="litera">тиш-айш</Span>-<Em>ую</Em>.{'\n'} 3. Основа формы &ndash; <Span
        className="litera">тиш-айш-</Span>.{'\n'} 4. Корень &ndash; <Em>тиш</Em>-. Однокоренные слова: <Span
        className="litera"><Span>тих</Span></Span>-<Em>о</Em>, <Span
        className="litera"><Span>тиш</Span>-ин</Span>-<Em>а</Em>.{'\n'} 5.
    -<Em>айш</Em>- &ndash; суффикс формы превосходной степени прилагательного, ср.: <Em><Span
            className="litera">велик</Span>-ий &ndash; <Span className="litera">велич-<Span
               >айш</Span></Span>-ый, <Span className="litera">свеж</Span>-ий &ndash;
        <Span className="litera">свеж-<Span>айш</Span></Span>-ий.</Em></P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма (положительная степень прилагательного) &ndash; <Em>тихий</Em>.{'\n'} 2. Основа слова &ndash;
    <Span className="litera">тих-</Span>. Основа непроизводная (состоит из одного корня).</P>
<P>&nbsp;</P>
<P><Span className="litera">Влюблена</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">в-любл-ен</Span>-<Em>а</Em> (краткая форма причастия).{'\n'} 2. Окончание &ndash;
    -<Em>а</Em>. Оно выражает значение ед.ч., ж.р., ср.: <Span className="litera">в-любл-ён</Span><Span
        className="kwadrat">&#9633;</Span>, <Span className="litera">в-любл-ен</Span>-<Em>ы</Em>.{'\n'} 3. Основа формы &ndash;
    <Span className="litera">в-любл-ён-</Span>.{'\n'} 4. Корень &ndash; <Em>любл</Em>-. Однокоренные слова: <Span
        className="litera"><Span>люб</Span>-и</Span>-<Em>ть</Em> (чередование
    <Em>б/бл</Em>), <Span className="litera"><Span>люб</Span>-овь</Span><Span
        className="kwadrat">&#9633;</Span>.{'\n'} 5. <Em>в</Em>- &ndash; приставка, ср.: <Span className="litera"><Span
           >в</Span>-крапл-ённ</Span>-<Em>ый</Em>, <Span className="litera"><Span
           >в</Span>-плет-ённ</Span>-<Em>ый</Em>.{'\n'}
    &nbsp;&nbsp;&nbsp;&nbsp;-<Em>ен</Em> &ndash; суффикс краткого страдательного причастия прошедшего времени глагола,
    ср.: <Span className="litera">в-нес-<Span>ен</Span></Span>-<Em>а</Em>, <Span
        className="litera">в-плет-<Span>ен</Span></Span>-<Em>а</Em>.</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма причастия &ndash; <Em>влюблённый</Em>.{'\n'} 2. Основа причастия &ndash; <Span
        className="litera">в-любл-ённ-</Span>. Основа производная.{'\n'} 3&ndash;4. <Span
        className="litera">в-любл-ённ</Span>-<Em>ый</Em> &larr; <Span className="litera">в-люб-и</Span>-<Em>ть</Em>. {'\n'} 5.
    <Span className="litera">-ённ</Span> &ndash; суффикс причастия. {'\n'} 6. Суффиксальный способ.</P>
<P>&nbsp;</P>
<P><Em>(В секретаршу) </Em><Span className="litera">месткома</Span></P>
<P>&nbsp;</P>
<P><Strong>1) Морфемный разбор:</Strong></P>
<P>1. <Span className="litera">мест-ком</Span>-<Em>а</Em> (сложносокращенное слово, имя существительное).{'\n'} 2. Окончание
    &ndash; -<Em>а</Em>. Оно выражает значение м.р., ед.ч., Р.п., ср.: <Span className="litera">мест-ком</Span><Span
        className="kwadrat">&#9633;</Span>, <Span className="litera">мест-ком</Span>-<Em>ом</Em>.{'\n'} 3. Основа формы &ndash;
    <Span className="litera">мест-ком-</Span>.{'\n'} 4. Корни слова: 1) <Em>мест</Em>-; 2) <Em>ком(итет)</Em>- &ndash; в
    сокращённом виде. Однокоренные слова: <Span className="litera"><Span
           >мест</Span>-н</Span>-<Em>ый</Em>, <Span className="litera"><Span
           >мест</Span></Span>-<Em>о</Em>; <Span className="litera"><Span
           >комитет</Span></Span><Span className="kwadrat">&#9633;</Span>, <Span
        className="litera"><Span>комитет</Span>-ск</Span>-<Em>ий</Em>.{'\n'} 5.
    Приставок и суффиксов нет.</P>
<P><Strong>2) Словообразовательный разбор:</Strong></P>
<P>1. Начальная форма &ndash; <Em>местком</Em>.{'\n'} 2. Основа слова &ndash; <Span className="litera">мест-ком-</Span>.
    Основа производная.{'\n'} 3&ndash;4. <Span className="litera">мест-ком</Span><Span className="kwadrat">&#9633;</Span> &larr;
    <Span className="litera"><Span>мест</Span>-(н)</Span>-<Em>ый</Em> <Span
        className="litera"><Span>ком</Span>(итет)</Span>.{'\n'} 5&ndash;6. Сложение
    сокращённых до слогов основ &ndash; аббревиация.</P>
</View>