import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const obrazovanie_novyh_slov_putem = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      <Strong>Сложение</Strong> &ndash; способ образования новых слов путём
      сложения двух (или нескольких) слов, основ производящих слов с
      соединительной гласной или без неё. В результате сложения всегда
      образуется сложное слово, то есть слово с несколькими корнями.
    </P>
    <P>
      В зависимости от того, насколько полно производящие слова и основы входят
      в состав производного слова, выделяются следующие разновидности сложения:
    </P>

    <Li>
      <P>сложение производящих слов.</P>
      <Div className="primer">
        <P>
          Например: <Em>диван-кровать &larr; диван</Em>
          <Span className="kwadrat">&#9633;</Span>
          <Em>, кровать</Em>
          <Span className="kwadrat">&#9633;</Span>
          <Em>; платье-костюм &larr; платье, костюм</Em>
          <Span className="kwadrat">&#9633;</Span>
          <Em>; школа-интернат &larr; школа, интернат</Em>
          <Span className="kwadrat">&#9633;</Span>
          <Em>; ракета-носитель &larr; ракета, носитель</Em>
          <Span className="kwadrat">&#9633;</Span>.
        </P>
      </Div>
      <P>
        При склонении каждая из частей сложного слова склоняется самостоятельно,
        ср.: <Em>на диване-кровати, в школе-интернате</Em>;
      </P>
    </Li>
    <Li>
      <P>сложение производящих основ с помощью соединительной гласной.</P>
    </Li>

    <Div className="primer">
      <P>
        Например: <Em>лесостепь</Em> &ndash;{" "}
        <Span className="litera">
          лес-<Span>о</Span>-степь
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;
        <Span className="litera">лес</Span>
        <Span className="kwadrat">&#9633;</Span>,{" "}
        <Span className="litera">степь</Span>
        <Span className="kwadrat">&#9633;</Span>; <Em>каменотёс</Em> &ndash;{" "}
        <Span className="litera">
          камен-<Span>о</Span>-тёс
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">камень</Span>
        <Span className="kwadrat">&#9633;</Span>,{" "}
        <Span className="litera">тес/а</Span>-<Em>ть</Em> (с усечением
        глагольного суффикса <Span className="litera">-а-</Span>);
        <Em>серо-синий</Em> &ndash;{" "}
        <Span className="litera">
          сер-<Span>о</Span>-син
        </Span>
        -<Em>ий</Em> &larr; <Span className="litera">сер</Span>-<Em>ый</Em>,{" "}
        <Span className="litera">син</Span>-<Em>ий</Em>;
        <Em>научно-исследовательский</Em> &ndash;{" "}
        <Span className="litera">
          научн-<Span>о</Span>-исследовательск
        </Span>
        -<Em>ий</Em> &larr; <Span className="litera">научн</Span>-<Em>ый</Em>,{" "}
        <Span className="litera">исследовательск</Span>-<Em>ий</Em>;
        <Em>грязеводолечебница</Em> &ndash;{" "}
        <Span className="litera">
          гряз-<Span>е</Span>-вод-<Span>о</Span>-лечебниц
        </Span>
        -<Em>а</Em> &larr; <Span className="litera">грязь</Span>
        <Span className="kwadrat">&#9633;</Span>,{" "}
        <Span className="litera">вод</Span>-<Em>а</Em>,
        <Span className="litera">лечебниц</Span>-<Em>а</Em>; <Em>тренога</Em>{" "}
        &ndash;{" "}
        <Span className="litera">
          тр-<Span>е</Span>-ног
        </Span>
        -<Em>а</Em> &larr; <Span className="litera">тр</Span>-<Em>и</Em>,{" "}
        <Span className="litera">ног</Span>-<Em>а</Em>;
      </P>
    </Div>

    <Li>
      <P>сложение производящих основ без соединительной гласной.</P>
      <Div className="primer">
        <P>
          Например: <Em>Ленинград</Em> &ndash;{" "}
          <Span className="litera">Ленинград</Span>
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">Ленин</Span>
          <Span className="kwadrat">&#9633;</Span>,{" "}
          <Span className="litera">град</Span>
          <Span className="kwadrat">&#9633;</Span>; <Em>царь-колокол</Em>{" "}
          &ndash; <Span className="litera">царь-колокол</Span>
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">царь</Span>
          <Span className="kwadrat">&#9633;</Span>,{" "}
          <Span className="litera">колокол</Span>
          <Span className="kwadrat">&#9633;</Span>;
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        сложение начальной части слова (основы) с целым словом, то есть
        образование сложносокращённых слов.
      </P>
      <Div className="primer">
        <P>
          Например: <Em>комроты</Em> &larr;{" "}
          <Em>
            <Span className="litera">ком</Span>андир{" "}
            <Span className="litera">рот</Span>ы
          </Em>
          ; <Em>стенгазета</Em> &larr;{" "}
          <Em>
            <Span className="litera">стен</Span>ная{" "}
            <Span className="litera">газет</Span>а
          </Em>
          ; <Em>медсестра</Em> &larr;
          <Em>
            <Span className="litera">мед</Span>ицинская{" "}
            <Span className="litera">сестр</Span>а
          </Em>
          ; <Em>полдня</Em>
          &larr;{" "}
          <Em>
            <Span className="litera">пол</Span>овина{" "}
            <Span className="litera">дн</Span>я
          </Em>
          ;<Em>пол-огурца</Em> &larr;{" "}
          <Em>
            <Span className="litera">пол</Span>овина{" "}
            <Span className="litera">огурц</Span>а
          </Em>
          ;
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        сложение сокращённых основ (до слогов, букв, звуков), то есть
        образование сложносокращённых слов.
      </P>
      <Div className="primer">
        <P>
          Например: <Em>облоно</Em> &larr;{" "}
          <Em>
            <Span className="litera">обл</Span>астной{" "}
            <Span className="litera">о</Span>тдел{" "}
            <Span className="litera">н</Span>ародного{" "}
            <Span className="litera">о</Span>бразования
          </Em>
          ; <Em>Минфин</Em> &larr;{" "}
          <Em>
            <Span className="litera">Мин</Span>истерство{" "}
            <Span className="litera">фин</Span>ансов
          </Em>
          ; <Em>ОНН</Em>
          &larr;{" "}
          <Em>
            <Span className="litera">О</Span>рганизация{" "}
            <Span className="litera">О</Span>бъединённых{" "}
            <Span className="litera">Н</Span>аций
          </Em>
          ; <Em>вуз</Em> &larr;{" "}
          <Em>
            <Span className="litera">в</Span>ысшее
            <Span className="litera">у</Span>чебное{" "}
            <Span className="litera">з</Span>аведение
          </Em>
          .
        </P>
      </Div>
    </Li>

    <P>
      Образование сложносокращённых слов называют также{" "}
      <Strong>аббревиацией</Strong>, а сами сложносокращённые слова называют{" "}
      <Strong>аббревиатурами</Strong>.
    </P>
    <P>
      <Span>
        <Strong>Примечание</Strong>. В ряде пособий аббревиацию, то есть
        образование сложносокращённых слов, выделяют в самостоятельный тип
        словообразования.
      </Span>
    </P>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>Не всякое сложное слово образовано путём сложения!</Strong> Дело
        в том, что от сложных слов с помощью различных морфем (прежде всего
        &ndash; суффиксов) может быть образовано новое производное слово:
      </P>
      <Div className="primer">
        <P>
          <Span className="litera">
            водопровод-<Span style="text-decoration: underline;">чик</Span>
          </Span>
          <Span className="kwadrat">&#9633;</Span> &larr;{" "}
          <Span className="litera">водопровод</Span>
          <Span className="kwadrat">&#9633;</Span>;{" "}
          <Span className="litera">
            разноголос-<Span style="text-decoration: underline;">иц</Span>
          </Span>
          -<Em>а</Em> &larr; <Span className="litera">разноголос</Span>-
          <Em>ый</Em>.
        </P>
      </Div>
      <P>
        Для того чтобы не ошибиться в определении способа образования сложного
        слова, необходимо использовать приём
        <Strong>перифраза</Strong> &ndash; дать определение производного слова
        через производящее, мотивирующее, например:
      </P>
      <P>
        <Strong>1.</Strong> <Em>Водопровод</Em> (&laquo;система сооружений, в
        которой по трубам <Em>воду</Em> доставляют (проводят) к месту
        потребления&raquo;);{" "}
        <Span className="litera">
          вод-<Span>о</Span>-провод
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;
        <Span className="litera">вод</Span>-<Em>а</Em>,{" "}
        <Span className="litera">провод/и</Span>-<Em>ть</Em> &ndash; сложение
        основ с соединительной гласной <Span className="litera">-о-</Span> (с
        усечением суффикса <Span className="litera">-и-</Span> в глагольной
        основе <Span className="litera">проводи-</Span>).
      </P>
      <P>
        <Strong>2.</Strong> <Em>Водопроводчик</Em> &laquo;тот, кто обслуживает,
        ремонтирует водопровод&raquo;);{" "}
        <Span className="litera">
          водопровод-<Span style="text-decoration: underline;">чик</Span>
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;{" "}
        <Span className="litera">водопровод</Span>
        <Span className="kwadrat">&#9633;</Span>
        &ndash; <Span className="litera">-чик</Span> &ndash;
        словообразовательный суффикс; суффиксальный способ.
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      <Strong>Сложно-суффиксальный способ</Strong> и
      <Strong>сложно-приставочный способ</Strong> &ndash; это смешанные способы
      словообразования, при которых новое слово образуется путём сложения основ
      с одновременным присоединением суффикса или приставки.
    </P>
    <P>
      Сложно-суффиксальным способом могут образовываться существительные,
      прилагательные и наречия.
    </P>
    <P>Например:</P>
    <Li>
      <P>
        <Span className="litera">
          Мор-<Span style="text-decoration: underline;">е</Span>-плава-
          <Span style="text-decoration: underline;">тель</Span>
        </Span>
        <Span className="kwadrat">&#9633;</Span> &larr;
        <Span className="litera">мор</Span>-<Em>е</Em>,{" "}
        <Span className="litera">плава</Span>-<Em>ть</Em> &ndash; сложение основ{" "}
        <Span className="litera">мор-</Span>,{" "}
        <Span className="litera">плава-</Span> и суффиксация:{" "}
        <Span className="litera">-тель</Span> &ndash; словообразовательный
        суффикс.
      </P>
    </Li>
    <Li>
      <P>
        <Span className="litera">
          Хлеб-<Span style="text-decoration: underline;">о</Span>-убороч-
          <Span style="text-decoration: underline;">н</Span>
        </Span>
        -<Em>ый</Em> &larr; <Span className="litera">хлеб</Span>
        <Span className="kwadrat">&#9633;</Span>,{" "}
        <Span className="litera">уборк</Span>-<Em>а</Em> &ndash; сложение основ{" "}
        <Span className="litera">хлеб-</Span>,{" "}
        <Span className="litera">уборк-/убороч-</Span> (беглость гласных,
        чередование <Span className="litera">к/ч</Span> в производящей и
        производной основах) и суффиксация: <Span className="litera">-н-</Span>{" "}
        &ndash; словообразовательный суффикс.
      </P>
    </Li>
    <Li>
      <P>
        <Span className="litera">
          Мимоход-<Span style="text-decoration: underline;">ом</Span>
        </Span>{" "}
        &larr; <Span className="litera">мимо</Span>,{" "}
        <Span className="litera">ход/и</Span>-<Em>ть</Em> &ndash; сложение основ{" "}
        <Span className="litera">мимо-</Span>,{" "}
        <Span className="litera">ходи-/ход-</Span> (с усечением глагольного
        суффикса
        <Span className="litera">-и-</Span>) и суффиксация:{" "}
        <Span className="litera">-ом</Span> &ndash; словообразовательный
        суффикс.
      </P>
    </Li>
    <P>Сложно-приставочным способом могут образовываться глаголы.</P>
    <Div className="primer">
      <P>
        Например:{" "}
        <Span className="litera">
          <Span style="text-decoration: underline;">у</Span>-мир-<Span>о</Span>
          -твори
        </Span>
        -ть &larr; <Span className="litera">мир</Span>
        <Span className="kwadrat">&#9633;</Span>,{" "}
        <Span className="litera">твори</Span>-<Em>ть</Em> &ndash; сложение основ{" "}
        <Span className="litera">мир-</Span>,{" "}
        <Span className="litera">твори-</Span> и приставочный способ:{" "}
        <Span className="litera">у-</Span> &ndash; словообразовательная
        приставка.
      </P>
    </Div>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        Как и в других случаях, при образовании нового слова
        сложно-суффиксальным способом словообразовательный суффикс может быть
        нулевым, ср.:
      </P>
      <P>
        <Strong>1.</Strong> образование прилагательного <Em>гладкошёрстный</Em>{" "}
        &ndash;{" "}
        <Span className="litera">
          гладк-<Span>о</Span>-шёрст-<Span>н</Span>
        </Span>
        -<Em>ый</Em> &larr; <Span className="litera">гладк</Span>-<Em>ий</Em>,{" "}
        <Span className="litera">шерсть</Span>
        <Span className="kwadrat">&#9633;</Span>;{" "}
        <Span className="litera">-н-</Span> &ndash; словообразовательный суффикс
        (сложение основ с соединительной гласной{" "}
        <Span className="litera">-о-</Span> и суффиксальный способ &ndash;
        сложно-суффиксальный способ);
      </P>
      <P>
        <Strong>2.</Strong> образование прилагательного <Em>гладкокожий</Em>{" "}
        &ndash;{" "}
        <Span className="litera">
          гладк-<Span>о</Span>-кож
        </Span>
        -&Oslash;-<Em>ий</Em> &larr; <Span className="litera">гладк</Span>-
        <Em>ий</Em>, <Span className="litera">кож</Span>-а; нулевой суффикс
        (сложение основ с соединительной гласной{" "}
        <Span className="litera">-о-</Span> и нулевая суффиксация &ndash;
        сложно-суффиксальный способ).
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      <Strong>Сращение</Strong>, в отличие от морфологического способа сложения,
      образуется путём слияния воедино целого словосочетания, то есть слияние
      слов без каких-либо изменений в их морфемном составе и без участия
      соединительных гласных, в той форме, в какой они существуют в исходном
      словосочетании.
    </P>
    <P>Например:</P>
    <Li>
      <P>
        <Em>Умалишённый</Em> &ndash; слово образовано в результате слияния
        сочетания причастия <Span className="litera">лишённый</Span> и
        зависимого от него существительного <Em>ум</Em> в форме родительного
        падежа &ndash; <Span className="litera">ума</Span>, ср.:{" "}
        <Span className="litera">лишённый</Span> [чего?]{" "}
        <Span className="litera">ума</Span> <Em>человек</Em>,{" "}
        <Span className="litera">ума лишённый</Span> <Em>человек</Em>.
      </P>
    </Li>
    <Li>
      <P>
        <Em>Сумасшедший</Em> &ndash; слово образовано в результате слияния
        причастия <Span className="litera">сшедший</Span> и зависимого от него
        существительного <Em>ум</Em> в форме родительного падежа с предлогом{" "}
        <Span className="litera">с</Span> &ndash;{" "}
        <Span className="litera">с ума</Span>, ср.:{" "}
        <Span className="litera">сшедший</Span> [откуда?]{" "}
        <Span className="litera">с ума</Span> <Em>человек</Em>,{" "}
        <Span className="litera">с ума сшедший</Span> <Em>человек</Em>.
      </P>
    </Li>
    <Li>
      <P>
        <Em>Долгоиграющий</Em> &ndash; слово образовано в результате слияния
        причастия <Span className="litera">играющий</Span> и зависимого от него
        наречия <Span className="litera">долго</Span>, ср.:
        <Em>пластинка</Em>, <Span className="litera">играющая</Span> [сколько?
        как долго?] <Span className="litera">долго</Span>,{" "}
        <Span className="litera">долго играющая</Span> <Em>пластинка</Em>.
      </P>
    </Li>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        При анализе словообразования слов сращение и сложение очень часто
        путают. Чтобы не ошибиться, используйте приём перифраза. При определении
        слова, образованного путём сложения, мы можем использовать производящие
        слова, но сам перифраз не будет равен производному слову.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>водопровод</Em> (&laquo;система сооружений, в которой по
          трубам <Em>воду</Em> доставляют (проводят) к месту
          потребления&raquo;); <Em>самолёт</Em> (&laquo;воздушный аппарат,
          который <Em>летает сам</Em>&raquo;).
        </P>
      </Div>
      <P>
        При определении слова, образованного путём сращения, слово и определение
        слова полностью совпадают:
      </P>
      <Div className="primer">
        <P>
          <Em>умалишённый</Em> (&laquo;ума лишённый&raquo;);{" "}
          <Em>вышеуказанный</Em> (&laquo;выше указанный&raquo;).
        </P>
      </Div>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      Образование нового слова путём перехода из одной части речи в другую, как
      отмечалось, в современном русском языке типично для имён существительных,
      которые образуются из прилагательных или причастий без каких-либо
      изменений в морфемной структуре.
    </P>
    <Div className="primer">
      <P>
        Например: <Em>учительская, учащийся, мороженое</Em>.
      </P>
    </Div>

    <Li>
      <P>
        В лингвистике этот способ образования слов принято называть{" "}
        <Strong>субстантивацией</Strong>. Причиной субстантивации, то есть
        перехода прилагательных и причастий в существительные, становится
        использование бывших прилагательных и причастий без главного слова
        (существительного).
      </P>
      <Div className="primer">
        <P>
          Ср.: <Span className="litera">Больной</Span> (прил.){" "}
          <Em>мальчик уже выздоравливает</Em> &rarr;{" "}
          <Span className="litera">Больной</Span> (сущ.){" "}
          <Em>уже выздоравливает</Em>; <Em>Зайдите в</Em>{" "}
          <Span className="litera">учительскую</Span> (прил.) <Em>комнату</Em>{" "}
          &rarr; <Em>Зайдите в</Em> <Span className="litera">учительскую</Span>{" "}
          (сущ.).
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        Более того, субстантивированное прилагательное или причастие, то есть
        существительное, образованное путём перехода из одной части речи в
        другую, как и другие существительные, может иметь при себе согласованные
        определения.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Span className="litera">мороженое</Span> (прил.) <Em>мясо</Em>{" "}
          &rarr; <Em>вкусное</Em> <Span className="litera">мороженое</Span>{" "}
          (сущ.); <Span className="litera">трудящиеся</Span> (прич.)
          <Em>массы</Em> &rarr; <Em>все</Em>{" "}
          <Span className="litera">трудящиеся</Span> (сущ.);{" "}
          <Span className="litera">столовая</Span> (прил.) <Em>комната</Em>{" "}
          &rarr; <Em>светлая</Em> <Span className="litera">столовая</Span>{" "}
          (сущ.).
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        При переходе из одной части речи в другую образовавшееся существительное
        сохраняет окончания прилагательного или причастия, то есть продолжает
        изменяться как прилагательное или причастие.
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Em>
            мороженое мясо &ndash; мороженое, нет мороженого мяса &ndash; нет
            мороженого, с мороженым мясом &ndash; с мороженым
          </Em>
          .
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        Однако в ряде случаев субстантивированное прилагательное или причастие
        утрачивает способность прилагательных и причастий изменяться по родам
        или числам.
      </P>
      <Div className="primer">
        <P>
          Например, существительное <Em>больной</Em> в значении &laquo;больной
          человек&raquo; не имеет формы среднего рода (
          <Em>больной, больная, больные</Em>); существительные{" "}
          <Em>столовая, гостиная, горничная, учительская</Em> имеют только форму
          женского рода; существительное <Em>мороженое</Em> имеет только форму
          среднего рода единственного числа; существительное <Em>сумчатые</Em>{" "}
          употребляется только во множественном числе.
        </P>
      </Div>
    </Li>

    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> Не путайте переход из одной части речи в другую с
        нулевой суффиксацией! При нулевой суффиксации, как и при переходе из
        одной части речи в другую, производное слово:
      </P>
      <P>&nbsp;</P>
      <P>
        а) не имеет каких-либо новых словообразовательных морфем &ndash;
        приставок, суффиксов.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>вход, выход, пропажа, синь, тишь, гладь</Em>;
        </P>
      </Div>
      <P>б) относится к другой части речи, нежели производящее слово:</P>
      <Div className="primer">
        <P>
          <Em>рассказ &larr; рассказать; зелень &larr; зелёный.</Em>
        </P>
      </Div>
      <P>
        Однако при нулевой суффиксации смена части речи приводит к смене системы
        словоизменения (окончания производящего слова и производного слова не
        совпадают.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>рассказ</Em>
          <Span className="kwadrat">&#9633;</Span>
          <Em>, рассказ-а &ndash; рассказыва-ть, рассказыва-ю.</Em>
        </P>
      </Div>
      <P>
        <Strong>2)</Strong> Не путайте переход одной части речи в другую с
        приставочным или суффиксальным способом! Особенно часто это происходит
        тогда, когда субстантивированное прилагательное или причастие имеет
        приставки и словообразовательные суффиксы.
      </P>
      <Div className="primer">
        <P>
          Например, нельзя утверждать, что существительное <Em>гостиная</Em>{" "}
          образовано от существительного
          <Em>гость</Em>. Эти слова не составляют словообразовательную пару. Они
          входят в словообразовательную цепочку: <Em>гость &rarr; гостиный</Em>{" "}
          (прил.) &rarr; <Em>гостиная</Em> (сущ.). Таким образом,
          словообразование данного субстантивированного прилагательного можно
          графически обозначить так:
          <Em>гостиная</Em> (сущ.) &larr; <Em>гостиный</Em> (прил.) &ndash;
          переход из одной части речи в другую (субстантивация).
        </P>
      </Div>
    </Div>
  </View>
);
