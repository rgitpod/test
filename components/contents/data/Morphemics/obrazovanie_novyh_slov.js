import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const obrazovanie_novyh_slov = (
  <View>
    <P>
      Наиболее продуктивным в русском языке является{" "}
      <Strong>
        образование новых слов с помощью приставок, суффиксов, постфиксов
      </Strong>
      . Однако, во-первых, они не исчерпывают всех возможных способов
      морфологического способа образования слов, во-вторых, внутри каждого из
      этих способов можно выделить более частные разновидности. Рассмотрим более
      подробно каждый из них.
    </P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      <Strong>Приставочный способ</Strong> &ndash; образование новых слов с
      помощью приставок.
    </P>
    <Div className="primer">
      <P>
        Например, глагол <Em>переплыть</Em> образован от глагола <Em>плыть</Em>{" "}
        с помощью приставки <Em>пере</Em>- (
        <Span className="litera">пере-плы</Span>-<Em>ть</Em> &larr;{" "}
        <Span className="litera">плы</Span>-<Em>ть</Em>).
      </P>
    </Div>

    <Li>
      <P>
        Словообразовательная приставка присоединяется ко всему слову. При этом
        производные слова, образованные приставочным способом, всегда относятся
        к той же части речи, что и производящие слова.
      </P>
    </Li>
    <Li>
      <P>
        Приставочный способ используется при образовании всех знаменательных
        частей речи.
      </P>
      <Div className="primer">
        <P>
          Например:{" "}
          <Span className="litera">
            <Span>дис</Span>-комфорт
          </Span>
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">комфорт</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            <Span>вы</Span>-ходи
          </Span>
          -<Em>ть</Em> &larr; <Span className="litera">ходи</Span>-<Em>ть</Em>;{" "}
          <Span className="litera">
            <Span>сверх</Span>-одарённ
          </Span>
          -<Em>ый</Em> &larr; <Span className="litera">одарённ</Span>-
          <Em>ый</Em>;{" "}
          <Span className="litera">
            <Span>по</Span>-ныне
          </Span>{" "}
          &larr; <Span className="litera">ныне</Span>.
        </P>
      </Div>
    </Li>

    <P>Но наиболее продуктивен он при образовании новых глаголов.</P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Span className="litera">
          <Span>за</Span>-пе
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">пе</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">
          <Span>до</Span>-пе-ть
        </Span>{" "}
        &larr; <Span className="litera">пе</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">
          <Span>с</Span>-пе
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">пе</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">
          <Span>пере</Span>-пе
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">пе</Span>-<Em>ть</Em>.
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      <Strong>Суффиксальный способ</Strong> &ndash; образование нового слова с
      помощью словообразовательных суффиксов.
    </P>
    <Div className="primer">
      <P>
        Например: глагол <Em>смолить</Em> образован от существительного{" "}
        <Em>смола</Em> с помощью глагольного суффикса{" "}
        <Span className="litera">-и-</Span> (
        <Span className="litera">
          смол-<Span>и</Span>
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">смол</Span>-<Em>а</Em>).
      </P>
    </Div>

    <Li>
      <P>
        Суффиксальный способ &ndash; один из самых распространённых в языке. С
        его помощью в русском языке образуются все знаменательные части речи.
        При этом часть речи производного слова может быть той же, что и у
        производящего (ср.:{" "}
        <Span className="litera">
          берез-<Span>няк</Span>
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">берёз</Span>-<Em>а</Em>;{" "}
        <Span className="litera">
          перепис-<Span>ыва</Span>
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">перепис/а</Span>-
        <Em>ть</Em>;{" "}
        <Span className="litera">
          сер-<Span>оват</Span>
        </Span>
        -<Em>ый</Em> &larr; <Span className="litera">сер</Span>-<Em>ый</Em>),
        может быть иной, чем у производящего слова (ср.:{" "}
        <Span className="litera">
          сер-<Span>е</Span>
        </Span>
        -<Em>ть</Em> &larr; <Span className="litera">сер</Span>-<Em>ый</Em>;{" "}
        <Span className="litera">
          сер-<Span>ость</Span>
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">сер</Span>-<Em>ый</Em>;{" "}
        <Span className="litera">
          сер-<Span>о</Span>
        </Span>{" "}
        &larr; <Span className="litera">сер</Span>-<Em>ый</Em>).
      </P>
    </Li>

    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      <Strong>Постфиксальный способ</Strong> &ndash; образование нового слова с
      помощью словообразовательных постфиксов.
    </P>

    <Li>
      <P>
        В русском языке, как отмечалось, к словообразовательным постфиксам
        относятся:
      </P>
      <P>
        а) возвратный постфикс <Span className="litera">-ся</Span>;{"\n"} б)
        постфиксы неопределённых местоимений{" "}
        <Span className="litera">-то, -либо, -нибудь</Span>.
      </P>
    </Li>
    <Li>
      <P>
        Поэтому постфиксальным способом образуются возвратные глаголы,
        неопределённые местоимения и местоименные наречия.
      </P>
      <Div className="primer">
        <P>
          Например: <Span className="litera">учи</Span>-<Em>ть</Em>-
          <Span className="litera">
            <Span>ся</Span>
          </Span>{" "}
          &larr; <Span className="litera">учи</Span>-<Em>ть</Em>;{" "}
          <Span className="litera">как</Span>-<Em>ой</Em>-
          <Span className="litera">
            <Span>то</Span>
          </Span>{" "}
          &larr; <Span className="litera">как</Span>-<Em>ой</Em>;{" "}
          <Span className="litera">
            когда-<Span>либо</Span>
          </Span>{" "}
          &larr; <Span className="litera">когда</Span>.
        </P>
      </Div>
    </Li>

    <P>
      <Span>
        <Strong>Примечание.</Strong> Если рассматривать постфикс как
        разновидность суффикса, то такого рода образования можно относить к
        суффиксальному способу образования слов.
      </Span>
    </P>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      <Strong>Нулевая суффиксация</Strong> &ndash; образование нового
      существительного путём значимого использования отсутствия суффикса.
    </P>
    <P>
      <Span>
        <Strong>Примечание.</Strong> В некоторых пособиях этот способ называют
        также <Strong>бессуффиксным</Strong>.
      </Span>
    </P>
    <Div className="primer">
      <P>
        Например: <Span className="litera">высь</Span>-&Oslash;
        <Span className="kwadrat">&#9633;</Span> (&laquo;высокое
        пространство&raquo;) &larr; <Span className="litera">выс/ок</Span>-
        <Em>ий</Em>; <Span className="litera">задир</Span>-&Oslash;-а
        (&laquo;тот, кто задирает&raquo;) &larr;{" "}
        <Span className="litera">задира</Span>-<Em>ть</Em>.
      </P>
    </Div>

    <Li>
      <P>
        Отсутствие суффикса значимо для нового слова подобно тому, как значимо
        отсутствие материально выраженного окончания при наличии нулевого
        окончания.
      </P>
    </Li>
    <Li>
      <P>Для сравнения сопоставим образование однокоренных слов:</P>
      <P>
        1.{" "}
        <Span className="litera">
          восхожд-<Span>ениj</Span>
        </Span>
        -<Em>е</Em> &larr; <Span className="litera">восход/и</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">
          надрез-<Span>к</Span>
        </Span>
        -<Em>а</Em> &larr; <Span className="litera">надрез/а</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">
          удаль-<Span>ств</Span>
        </Span>
        -<Em>о</Em> &larr; <Span className="litera">удал</Span>-<Em>ой</Em>;
      </P>
      <P>
        2. <Span className="litera">восход</Span>-&Oslash;
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">восход/и</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">надрез</Span>-&Oslash;
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">надрез/а</Span>-<Em>ть</Em>;{" "}
        <Span className="litera">удаль</Span>-&Oslash;
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">удал</Span>-<Em>ой</Em>.
      </P>
      <P>
        В первом случае (<Em>восхождение, надрезка, удальство</Em>) при
        образовании отглагольного существительного использован материально
        выраженный суффикс, во втором случае (<Em>восход</Em>-&Oslash;,{" "}
        <Em>надрез</Em>-&Oslash;, <Em>удаль</Em>-&Oslash;) &ndash; нулевая
        суффиксация.
      </P>
    </Li>

    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><P>
      В современном русском языке имеется большое число слов, образованных путём
      нулевой суффиксации:</P>
      <P>
        <Strong>1)</Strong> Отглагольные существительные мужского рода 2-го
        склонения со значением отвлечённого действия или его результата.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Вход &larr; входить, вылет &larr; вылететь, щебет &larr; щебетать.
          </Em>
        </P>
      </Div>
      <P>
        <Strong>2)</Strong> Отглагольные существительные женского рода 1-го
        склонения со значением отвлечённого действия или его результата.
      </P>
      <Div className="primer">
        <P>
          <Em>Расплата &larr; расплатиться, заслуга &larr; заслужить.</Em>
        </P>
      </Div>
      <P>
        <Strong>3)</Strong> Отглагольные существительные женского рода 3-го
        склонения со значением отвлечённого действия или состояния.
      </P>
      <Div className="primer">
        <P>
          <Em>Брань &larr; бранить, дрожь &larr; дрожать.</Em>
        </P>
      </Div>
      <P>
        <Strong>4)</Strong> Отглагольные существительные общего рода на{" "}
        <Span className="litera">-а, -я</Span>, обозначающие человека по
        характерному для него действию.
      </P>
      <Div className="primer">
        <P>
          <Em>Задира &larr; задирать, рёва &larr; реветь.</Em>
        </P>
      </Div>
      <P>
        <Strong>5)</Strong> Существительные мужского рода 2-го склонения,
        образованные от прилагательных, со значением отвлечённого признака или
        названия лица по отличительному признаку.
      </P>
      <Div className="primer">
        <P>
          <Em>Примитив &larr; примитивный, оригинал &larr; оригинальный.</Em>
        </P>
      </Div>
      <P>
        <Strong>6)</Strong> Существительные женского рода 1-го склонения,
        образованные от прилагательных, со значением предмета по признаку.
      </P>
      <Div className="primer">
        <P>
          <Em>Гуща &larr; густой, круча &larr; крутой.</Em>
        </P>
      </Div>
      <P>
        <Strong>7)</Strong> Существительные женского рода 3-го склонения,
        образованные от прилагательных, со значением отвлечённого признака.
      </P>
      <Div className="primer">
        <P>
          <Em>Синь &larr; синий, глушь &larr; глухой.</Em>
        </P>
      </Div>
    </Div>

    <Li>
      <P>
        При образовании отглагольных существительных с помощью нулевой
        суффиксации обычно происходит усечение производящей основы (отсекается
        глагольный суффикс).
      </P>
      <Div className="primer">
        <P>
          Например: <Span className="litera">заслуг</Span>-&Oslash;-<Em>а</Em>{" "}
          &larr; <Span className="litera">заслуж/и</Span>-<Em>ть</Em>;{" "}
          <Span className="litera">рассказ</Span>-&Oslash;
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">рассказ/а</Span>-<Em>ть</Em>;{" "}
          <Span className="litera">щебет</Span>-&Oslash;
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">щебет/а</Span>-<Em>ть</Em>.
        </P>
      </Div>
    </Li>

    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      <Strong>Приставочно-суффиксальный способ</Strong> &ndash; образование
      новых слов путём одновременного присоединения к основе производящего слова
      приставки и суффикса.
    </P>

    <Li>
      <P>
        Префиксально-суффиксальным способом образуются существительные,
        прилагательные, глаголы и наречия.
      </P>
      <Div className="primer">
        <P>
          Например:{" "}
          <Span className="litera">
            <Span>под</Span>-стакан-<Span>ник</Span>
          </Span>
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">стакан</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            <Span>под</Span>-шеф-<Span>н</Span>
          </Span>
          -<Em>ый</Em> &larr; <Span className="litera">шеф</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            <Span>обез</Span>-оруж-<Span>и</Span>-ть
          </Span>{" "}
          &larr;{" "}
          <Span className="litera">
            оружи-<Span>j</Span>
          </Span>
          -<Em>е</Em>;{" "}
          <Span className="litera">
            <Span>по</Span>-сво-<Span>ему</Span>
          </Span>{" "}
          &larr; <Span className="litera">сво</Span>-<Em>й</Em>.
        </P>
      </Div>
    </Li>

    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> Значение производного слова, образованного
        приставочно-суффиксальным способом, часто выводится из сочетания
        существительного в косвенном падеже с предлогом, причем в производном
        слове используется приставка, омонимичная предлогу.
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Span className="litera">
            <Span>под</Span>-окон-<Span>ник</Span>
          </Span>
          <Span className="kwadrat">&#9633;</Span> (&laquo;под окном&raquo;)
          &larr; <Span className="litera">окн</Span>-<Em>о</Em>;{" "}
          <Span className="litera">
            <Span>под</Span>-стакан-<Span>ник</Span>
          </Span>
          <Span className="kwadrat">&#9633;</Span> (&laquo;под стаканом&raquo;)
          &larr; <Span className="litera">стакан</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            <Span>без</Span>-лун-<Span>иj</Span>
          </Span>
          -<Em>е</Em> (&laquo;без луны&raquo;) &larr;{" "}
          <Span className="litera">лун</Span>-<Em>а</Em>.
        </P>
      </Div>
      <P>
        <Strong>2)</Strong> Не забывайте, что суффикс{" "}
        <Span className="litera">-j-</Span> может быть не выражен в слове
        специальным графическим знаком:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">без-людь-</Span>
          <Span className="litera0">
            [<Span>&nbsp;j&nbsp;</Span>]
          </Span>
          -<Em>е</Em> &larr; <Span className="litera">люд</Span>-<Em>и</Em>.
        </P>
      </Div>
      <P>
        <Strong>3)</Strong> Префиксально-суффиксальным способом образованы
        наречия, которые пишутся через дефис:
      </P>
      <P>
        а) от прилагательных &ndash; с приставкой{" "}
        <Span className="litera">по-</Span> и суффиксами{" "}
        <Span className="litera">-ому, -ему, -и</Span>:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            по-взросл<Span>ому</Span>
          </Span>{" "}
          &larr; <Span className="litera">взросл</Span>
          <Em>ый</Em>;{" "}
          <Span className="litera">
            по-хорош<Span>ему</Span>
          </Span>{" "}
          &larr; <Span className="litera">хорош</Span>
          <Em>ий</Em>;{" "}
          <Span className="litera">
            <Span>по</Span>-товарищески
          </Span>{" "}
          &larr; <Span className="litera">товарищеск</Span>
          <Em>ий</Em>;{" "}
          <Span className="litera">
            <Span>по</Span>-волчь-
          </Span>
          <Span className="litera0">
            [<Span>&nbsp;j&nbsp;</Span>]
          </Span>
          -<Em>и</Em> &larr; <Span className="litera">волч</Span>
          <Em>ий</Em>;
        </P>
      </Div>
      <P>
        б) от порядковых числительных &ndash; с приставкой{" "}
        <Span className="litera">в-, во-</Span> и суффиксом{" "}
        <Span className="litera">-ых, -их</Span>:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">во-перв-ых</Span> &larr;{" "}
          <Span className="litera">перв</Span>
          <Em>ый</Em>; <Span className="litera">в-треть-их</Span> &larr;{" "}
          <Span className="litera">трет</Span>
          <Em>ий</Em>.
        </P>
      </Div>
      <P>
        <Strong>4)</Strong> Их значение обычно мотивировано сочетанием
        существительного с предлогом, причем в производном прилагательном
        используется приставка, омонимичная предлогу:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            <Span>без</Span>-ног
          </Span>
          -&Oslash;-<Em>ий</Em> (&laquo;без ног&raquo;) &larr;{" "}
          <Span className="litera">ног</Span>-<Em>а</Em>;{" "}
          <Span className="litera">
            <Span>без</Span>-рог
          </Span>
          -&Oslash;-<Em>ий</Em> (&laquo;без рогов&raquo;) &larr;{" "}
          <Span className="litera">рог</Span>
          <Span className="kwadrat">&#9633;</Span>.
        </P>
      </Div>
      <P>
        Сопоставьте образование аналогичных прилагательных, где, наряду с
        приставкой, используется не нулевой, а материально выраженный суффикс:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            <Span>без</Span>-билет-<Span>н</Span>
          </Span>
          -<Em>ый</Em> (&laquo;без билета&raquo;) &larr;{" "}
          <Span className="litera">билет</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            <Span>без</Span>-вред-<Span>н</Span>
          </Span>
          -<Em>ый</Em> (&laquo;без вреда&raquo;) &larr;{" "}
          <Span className="litera">вред</Span>
          <Span className="kwadrat">&#9633;</Span>.
        </P>
      </Div>
    </Div>
    <P>
      <Strong>
        <Span className="number">6.</Span>
      </Strong>{" "}
      Поскольку в данном пособии <Span className="litera">-ся</Span>{" "}
      рассматривается не как разновидность суффикса, а как постфикс, то можно
      выделить несколько смешанных способов словообразования глаголов с
      постфиксом -ся:
    </P>

    <Li>
      <P>
        <Strong>приставочно-постфиксальный способ</Strong> &ndash; образование
        новых слов путём одновременного присоединения к основе производящего
        слова приставки и постфикса;
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            <Span>Вы</Span>-плака
          </Span>
          -<Em>ть</Em>-
          <Span className="litera">
            <Span>ся</Span>
          </Span>{" "}
          &larr; <Span className="litera">плака</Span>-<Em>ть</Em>;{" "}
          <Span className="litera">
            <Span>в</Span>-чита
          </Span>
          -<Em>ть</Em>-
          <Span className="litera">
            <Span>ся</Span>
          </Span>{" "}
          &larr; <Span className="litera">чита</Span>-<Em>ть</Em>.
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        <Strong>суффиксально-постфиксальный способ</Strong> &ndash; образование
        новых слов путём одновременного присоединения к основе производящего
        слова суффикса и постфикса;
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            Толп-<Span>и</Span>
          </Span>
          -<Em>ть</Em>-
          <Span className="litera">
            <Span>ся</Span>
          </Span>{" "}
          &larr; <Span className="litera">толп</Span>-<Em>а</Em>;{" "}
          <Span className="litera">
            скуп-<Span>и</Span>
          </Span>
          -<Em>ть</Em>-<Span className="litera">ся</Span> &larr;{" "}
          <Span className="litera">скуп</Span>-<Em>ой</Em>.
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        <Strong>приставочно-суффиксально-постфиксальный способ</Strong> &ndash;
        образование новых слов путём одновременного присоединения к основе
        производящего слова приставки, суффикса и постфикса.
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            <Span>Пере</Span>-шуч-<Span>ива</Span>
          </Span>
          -<Em>ть</Em>-
          <Span className="litera">
            <Span>ся</Span>
          </Span>{" "}
          &larr; <Span className="litera">шут/и</Span>-<Em>ть</Em>.
        </P>
      </Div>
    </Li>
  </View>
);
