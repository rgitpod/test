import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../../tags";
import { Table, Col, Row } from "../../table";

export const pravopisanie_suffiksov = (
  <View>
    <P>
      <Strong>
        При правописании суффиксов прилагательных можно выделить несколько типов
        правил:
      </Strong>
    </P>
    <P>
      1) правописание гласных в суффиксах прилагательных;{"\n"} 2) правописание
      согласных в суффиксах прилагательных;{"\n"}
      3) правописание <Span className="litera">н</Span> и{" "}
      <Span className="litera">нн</Span> в прилагательных, не образованных от
      глаголов;{"\n"} 4) правописание <Span className="litera">н</Span> и{" "}
      <Span className="litera">нн</Span> в существительных и наречиях на{" "}
      <Span className="litera">-о</Span>, образованных от неотглагольных
      прилагательных.
    </P>
    <P>
      Поскольку правописание гласных после шипящих и{" "}
      <Span className="litera">ц</Span> в суффиксах прилагательных было
      рассмотрено в п. 1.12. Правописание гласных после шипящих, 1.13.
      Правописание гласных после Ц, в данном пункте этот вид правил не
      анализируется. Правописание <Span className="litera">н</Span> и{" "}
      <Span className="litera">нн</Span> в прилагательных, образованных от
      глаголов, аналогично правописанию <Span className="litera">н</Span> и{" "}
      <Span className="litera">нн</Span> в причастиях, поэтому будет рассмотрено
      в п. 3.8.3. Правописание причастий.
    </P>
    <P>
      <Strong>
        <Span className="number">1.</Span> Правописание гласных в суффиксах
        прилагательных:
      </Strong>
    </P>
    <P>
      <Strong>а)</Strong> суффиксы <Span className="litera">-чив-, лив-</Span>{" "}
      пишутся с гласным <Span className="litera">и</Span>:
    </P>
    <Div className="primer">
      <P>
        <Em>
          занос
          <Span className="litera">
            ч<Span>и</Span>в
          </Span>
          ый, забот
          <Span className="litera">
            л<Span>и</Span>в
          </Span>
          ый
        </Em>
        ;
      </P>
    </Div>
    <P>
      <Strong>б)</Strong> суффикс <Span className="litera">-ив-</Span> пишется
      под ударением:
    </P>
    <Div className="primer">
      <P>
        <Em>
          лен
          <Span className="litera">
            <Span>и</Span>&#769;в
          </Span>
          ый
        </Em>
        ;
      </P>
    </Div>
    <P>
      суффикс <Span className="litera">-ев-</Span> &ndash; в безударном
      положении:
    </P>
    <Div className="primer">
      <P>
        <Em>
          бо
          <Span className="litera">
            <Span>е</Span>в
          </Span>
          о&#769;й
        </Em>
        .
      </P>
    </Div>
    <Div className="primer">
      <P>
        <Strong>Исключения:</Strong>{" "}
        <Em>
          ми&#769;лост
          <Span className="litera">
            <Span>и</Span>в
          </Span>
          ый, юро&#769;д
          <Span className="litera">
            <Span>и</Span>в
          </Span>
          ый
        </Em>
        ;
      </P>
    </Div>
    <P>
      <Strong>в)</Strong> суффиксы <Span className="litera">-ов-, -оват-</Span>{" "}
      пишутся после твёрдых согласных:
    </P>
    <Div className="primer">
      <P>
        <Em>
          ве<Span>к</Span>
          <Span className="litera">ов</Span>ой, ви<Span>н</Span>
          <Span className="litera">оват</Span>ый
        </Em>
        ;
      </P>
    </Div>
    <P>
      суффиксы <Span className="litera">-ев-, -еват-</Span> пишутся после мягких
      согласных, шипящих и <Span className="litera">ц</Span>:
    </P>
    <Div className="primer">
      <P>
        <Em>
          сире<Span>н</Span>
          <Span className="litera">ев</Span>ый, уг<Span>р</Span>
          <Span className="litera">еват</Span>ый
        </Em>
        .
      </P>
    </Div>
    <P>
      <Strong>г)</Strong> суффикс <Span className="litera">-оньк-</Span> пишется
      после <Span className="litera">г, к, х</Span>:
    </P>
    <Div className="primer">
      <P>
        <Em>
          лё<Span>г</Span>
          <Span className="litera">оньк</Span>ий, ти<Span>х</Span>
          <Span className="litera">оньк</Span>ий
        </Em>
        ;
      </P>
    </Div>
    <P>
      суффикс <Span className="litera">-еньк-</Span> &ndash; после всех других
      букв:
    </P>
    <Div className="primer">
      <P>
        <Em>
          голуб<Span className="litera">еньк</Span>ий
        </Em>
        .
      </P>
    </Div>
    <P>
      <Strong>д)</Strong> обычно в прилагательных, образованных от
      географических названий, пишется суффикс{" "}
      <Span className="litera">-енск-</Span>:
    </P>
    <Div className="primer">
      <P>
        <Em>
          грозн<Span className="litera">енск</Span>ий, фрунз
          <Span className="litera">енск</Span>ий
        </Em>
        ;
      </P>
    </Div>
    <P>
      суффикс <Span className="litera">-инск-</Span> пишется в следующих
      случаях:
    </P>
    <Li>
      <P>
        если прилагательное образовано от географических названий на{" "}
        <Span className="litera">-а, -я</Span>:
      </P>
      <Div className="primer"><P>
        <Em>
          Ялта &rarr; ялт<Span className="litera">инск</Span>ий, Ельня &rarr;
          ельн<Span className="litera">инск</Span>ий
        </Em>
        .</P>
        <P>
          <Strong>Исключения:</Strong>{" "}
          <Em>
            пенз<Span className="litera">енск</Span>ий, пресн
            <Span className="litera">енск</Span>ий
          </Em>
          ;
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        если прилагательное образовано от географических названий на{" "}
        <Span className="litera">-и, -ы</Span>:
      </P>
      <Div className="primer">
        <P>
          <Em>
            Химки &rarr; химк<Span className="litera">инск</Span>ий
          </Em>
          ;
        </P>
      </Div>
    </Li>
    <P>
      <Strong>е)</Strong> в прилагательных на{" "}
      <Span className="litera">-чий</Span>, образованных от существительных на{" "}
      <Span className="litera">-шка</Span>, перед{" "}
      <Span className="litera">ч</Span>:
    </P>
    <Li>
      <P>
        в безударном положении пишется <Span className="litera">е</Span>:
      </P>
      <Div className="primer">
        <P>
          <Em>лягушка &rarr; лягу&#769;шечий</Em>;
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        под ударением &ndash; <Span className="litera">а</Span>:
      </P>
      <Div className="primer">
        <P>
          <Em>лягушка &rarr; лягуша&#769;чий</Em>.
        </P>
      </Div>
    </Li>

    <P>
      <Strong>ж)</Strong> от существительного{" "}
      <Span className="litera">ветер</Span> могут быть образованы два
      прилагательных &ndash; с суффиксом <Span className="litera">-ен-</Span> (
      <Em>
        ветр<Span className="litera">ен</Span>ый
      </Em>
      ) и с суффиксом
      <Span className="litera">-ян-</Span> (
      <Em>
        ветр<Span className="litera">ян</Span>ой
      </Em>
      ).
    </P>

    <Li>
      <P>
        Прилагательное{" "}
        <Em>
          ветр<Span className="litera">ен</Span>ый
        </Em>{" "}
        имеет значение &laquo;с ветром&raquo; в прямом или в переносном смысле
        (ср.:{" "}
        <Em>
          ветр<Span className="litera">ен</Span>ый день
        </Em>{" "}
        &ndash; день с ветром;
        <Em>
          ветр<Span className="litera">ен</Span>ый человек &rarr; ветр
          <Span className="litera">ен</Span>ик, ветр
          <Span className="litera">ен</Span>ица
        </Em>{" "}
        &ndash; человек с ветром в голове).
      </P>
    </Li>
    <Li>
      <P>
        Прилагательное{" "}
        <Em>
          ветр<Span className="litera">ян</Span>ой
        </Em>{" "}
        имеет значение &laquo;с помощью ветра&raquo; (
        <Em>
          ветр<Span className="litera">ян</Span>ая мельница
        </Em>{" "}
        &ndash; приводится в движение с помощью ветра;
        <Em>
          ветр<Span className="litera">ян</Span>ая оспа
        </Em>{" "}
        &ndash; распространяется по воздуху с помощью ветра);
      </P>
    </Li>

    <P>
      <Strong>з)</Strong> от существительного{" "}
      <Span className="litera">масло</Span> могут быть образованы два
      прилагательных &ndash; с суффиксом <Span className="litera">-ен-</Span> (
      <Em>
        масл<Span className="litera">ен</Span>ый
      </Em>
      ) и с суффиксом
      <Span className="litera">-ян-</Span> (
      <Em>
        масл<Span className="litera">ян</Span>ый
      </Em>
      ).
    </P>

    <Li>
      <P>
        Прилагательное{" "}
        <Em>
          масл<Span className="litera">ен</Span>ый
        </Em>{" "}
        имеет значение &laquo;пропитанный, смазанный, испачканный маслом&raquo;
        в прямом и в переносном смысле (ср.:{" "}
        <Em>
          масл<Span className="litera">ен</Span>ый блин, масл
          <Span className="litera">ен</Span>ая каша, масл
          <Span className="litera">ен</Span>ые брюки &ndash; масл
          <Span className="litera">ен</Span>ые глаза, масл
          <Span className="litera">ен</Span>ая неделя &rarr; масл
          <Span className="litera">ен</Span>ица
        </Em>
        ).
      </P>
    </Li>
    <Li>
      <P>
        Прилагательное{" "}
        <Em>
          масл<Span className="litera">ян</Span>ый
        </Em>{" "}
        имеет значение &laquo;из масла, на масле, для масла&raquo; (
        <Em>
          масл<Span className="litera">ян</Span>ое пятно
        </Em>{" "}
        &ndash; пятно из масла,{" "}
        <Em>
          масл<Span className="litera">ян</Span>ые краски
        </Em>{" "}
        &ndash; краски на масле, из масла,{" "}
        <Em>
          масл<Span className="litera">ян</Span>ый насос
        </Em>{" "}
        &ndash; насос, работающий на масле);
      </P>
    </Li>

    <P>
      <Strong>и)</Strong> прилагательное{" "}
      <Span className="litera">
        сегодн<Span>я</Span>шний
      </Span>{" "}
      пишется с гласной <Span className="litera">я</Span>.
    </P>
    <P>
      <Strong>
        <Span className="number">2.</Span> Правописание согласных в суффиксах
        прилагательных:
      </Strong>
    </P>
    <P>
      <Strong>а)</Strong> суффикс <Span className="litera">-ск-</Span> пишется в
      относительных прилагательных:
    </P>
    <Div className="primer">
      <P>
        <Em>
          абхазы &rarr; абхаз<Span className="litera">ск</Span>ий
        </Em>
        ;
      </P>
    </Div>
    <P>
      суффикс <Span className="litera">-к-</Span> пишется:
    </P>
    <Li>
      <P>
        в качественных прилагательных (такие прилагательные имеют краткую
        форму):
      </P>
      <Div className="primer">
        <P>
          <Em>
            низ<Span className="litera">к</Span>ий
          </Em>{" "}
          (<Em>низок</Em>);
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        в относительных прилагательных, образованных от существительных на{" "}
        <Span className="litera">ц</Span>:
      </P>
      <Div className="primer">
        <P>
          <Em>
            неме<Span>ц</Span> &rarr; неме<Span>ц</Span>
            <Span className="litera">к</Span>ий
          </Em>
          ;
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        в относительных прилагательных, образованных от существительных на{" "}
        <Span className="litera">к, ч</Span>, если
        <Span className="litera">к, ч</Span> чередуются с{" "}
        <Span className="litera">ц</Span>;
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Em>
            каза<Span>к</Span> &rarr; каза<Span>ц</Span>
            <Span className="litera">к</Span>ий, тка<Span>ч</Span> &rarr; тка
            <Span>ц</Span>
            <Span className="litera">к</Span>ий.
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      <Strong>б)</Strong> при правописании прилагательных с суффиксом{" "}
      <Span className="litera">-ск-</Span> следует помнить:
    </P>

    <Li>
      <P>
        если основа производящего существительного оканчивается на{" "}
        <Span className="litera">с</Span>, то в прилагательном пишется две буквы{" "}
        <Span className="litera">с</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Белору<Span className="litera">с</Span> &rarr; белору
            <Span className="litera">сс</Span>кий.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        если основа производящего существительного оканчивается на две буквы{" "}
        <Span className="litera">с</Span>, то одно из них опускается и в
        прилагательном также пишется две буквы <Span className="litera">с</Span>
        ;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Оде<Span className="litera">сс</Span>а &rarr; оде
            <Span className="litera">сс</Span>кий.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        если основа иноязычного производящего слова оканчивается на{" "}
        <Span className="litera">ск</Span>, то в прилагательном конечная{" "}
        <Span className="litera">к</Span> опускается и в прилагательном также
        пишется две буквы
        <Span className="litera">с</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Дама<Span className="litera">ск</Span> &rarr; дама
            <Span className="litera">сск</Span>ий.
          </Em>
        </P>
      </Div>
      <P>
        <Strong>Исключение:</Strong>{" "}
        <Em>
          ба<Span className="litera">ск</Span> &rarr; ба
          <Span className="litera">скск</Span>ий
        </Em>
        .
      </P>
    </Li>
    <Li>
      <P>
        русские географические названия на <Span className="litera">-ск</Span>{" "}
        образуют прилагательные без суффикса{" "}
        <Span className="litera">-ск-</Span> (поэтому в них пишется одна{" "}
        <Span className="litera">с</Span>);
      </P>
      <Div className="primer">
        <P>
          <Em>
            Кур<Span className="litera">ск</Span> &rarr; кур
            <Span className="litera">ск</Span>ий.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        если основа оканчивается на <Span className="litera">-нь, -рь</Span>, то
        перед суффиксом <Span className="litera">-ск- ь</Span> не пишется.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Кон<Span className="litera">ь</Span> &rarr; конский, январ
            <Span className="litera">ь</Span> &rarr; январский.
          </Em>
        </P>
      </Div>
      <P>
        <Strong>Исключение</Strong> составляют прилагательные, образованные от
        названий месяцев (кроме
        <Em>январский</Em>):{" "}
        <Em>
          ноябр<Span className="litera">ь</Span> &rarr; ноябр
          <Span className="litera">ь</Span>ский; декабр
          <Span className="litera">ь</Span> &rarr; декабр
          <Span className="litera">ь</Span>ский
        </Em>
        , а также некоторые географические наименования (в соответствии с
        произношением:{" "}
        <Em>
          тянь-шан<Span className="litera">ь</Span>ский, гдын
          <Span className="litera">ь</Span>ский
        </Em>
        ) и выражение
        <Em>
          день-ден<Span className="litera">ь</Span>ской
        </Em>
        ;
      </P>
    </Li>
    <Li>
      <P>
        мягкость <Span className="litera">л</Span> всегда отражается на письме
        (!);
      </P>
      <Div className="primer">
        <P>
          <Em>
            Сел<Span className="litera">ь</Span>ский, феврал
            <Span className="litera">ь</Span>ский, апрел
            <Span className="litera">ь</Span>ский.
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      <Strong>в)</Strong> в прилагательных на{" "}
      <Span className="litera">-атый</Span> пишется:
    </P>

    <Li>
      <P>
        <Span className="litera">-щат-</Span>, если слово образовано от
        существительного с конечными корневыми согласными
        <Span className="litera">ск</Span> (<Span className="litera">ск</Span>{" "}
        чередуется с <Span className="litera">щ</Span>);
      </P>
      <Div className="primer">
        <P>
          <Em>
            До<Span className="litera">ск</Span>-а &rarr; до
            <Span className="litera">щат</Span>ый.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        <Span className="litera">-чат-</Span>, если слово образовано от
        существительного с конечным <Span className="litera">-к-</Span> (
        <Span className="litera">-ок-</Span>) &ndash; суффиксом (
        <Span className="litera">к</Span> чередуется с{" "}
        <Span className="litera">ч</Span>);
      </P>
      <Div className="primer">
        <P>
          <Em>
            Брус-о<Span className="litera">к</Span> &rarr; брус
            <Span className="litera">чат</Span>ый; веснуш-
            <Span className="litera">к</Span>-а &rarr; веснуш
            <Span className="litera">чат</Span>ый.
          </Em>
        </P>
      </Div>
      <P>
        Перед суффиксом <Span className="litera">-чат-</Span> конечное{" "}
        <Span className="litera">ц</Span> производящей основы чередуется с{" "}
        <Span className="litera">т</Span>.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Крупи
            <Span className="litera">
              <Span>ц</Span>
            </Span>
            -а &rarr; крупи<Span>т</Span>
            <Span className="litera">чат</Span>ый.
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      <Strong>
        <Span className="number">3.</Span> Правописание{" "}
        <Span className="litera">н</Span> и <Span className="litera">нн</Span> в
        прилагательных, не образованных от глаголов:
      </Strong>
    </P>
    <Table>
      <Row>
        <Col>
          Пишется <Span className="litera">Н</Span>
        </Col>
        <Col>
          Пишется <Span className="litera">НН</Span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>1.</Strong> В прилагательных без суффикса:{" "}
          <Em>
            зеле<Span className="litera">н</Span>ый, си
            <Span className="litera">н</Span>ий, румя
            <Span className="litera">н</Span>ый, сви
            <Span className="litera">н</Span>ой, ю
            <Span className="litera">н</Span>ый
          </Em>
          .
        </Col>
        <Col>
          <Strong>1.</Strong> В прилагательных, образованных от существительных
          на <Span className="litera">н</Span>, с помощью суффикса{" "}
          <Span className="litera">-н-</Span>:{" "}
          <Em>
            осе<Span className="litera">н</Span>ь &rarr; осе
            <Span className="litera">н-н</Span>-ий; дли
            <Span className="litera">н</Span>-а &rarr; дли
            <Span className="litera">н-н</Span>-ый
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>2.</Strong> В прилагательных, образованных от существительных,
          с суффиксами <Span className="litera">-ан-, -ян-, -ин-</Span>:{" "}
          <Em>
            кож<Span className="litera">ан</Span>ый, полотн
            <Span className="litera">ян</Span>ый, ут
            <Span className="litera">ин</Span>ый
          </Em>
          .{"\n"}
          <Strong>Исключения:</Strong>{" "}
          <Em>
            олов<Span className="litera">янн</Span>ый, дерев
            <Span className="litera">янн</Span>ый, стекл
            <Span className="litera">янн</Span>ый
          </Em>
          .
        </Col>
        <Col>
          <Strong>2.</Strong> В прилагательных, образованных от существительных,
          с суффиксами <Span className="litera">-енн-, -ённ-, -онн-</Span>:{" "}
          <Em>
            редакци<Span className="litera">онн</Span>ый, искусств
            <Span className="litera">енн</Span>ый
          </Em>
          .{"\n"} <Strong>Исключения:</Strong>{" "}
          <Em>
            смышл<Span className="litera">ён</Span>ый, ветр
            <Span className="litera">ен</Span>ый, масл
            <Span className="litera">ен</Span>ый
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>3.</Strong> В бесприставочных прилагательных{" "}
          <Em>
            ветр<Span className="litera">ен</Span>ый, масл
            <Span className="litera">ен</Span>ый
          </Em>
          .
        </Col>
        <Col>
          <Strong>3.</Strong> В приставочных прилагательных с корнем{" "}
          <Span className="litera">-ветр-, -масл-</Span> и суффиксом{" "}
          <Span className="litera">-енн-</Span>:{" "}
          <Em>
            <Span className="litera">без</Span>ветр
            <Span className="litera">енн</Span>ый,{" "}
            <Span className="litera">под</Span>ветр
            <Span className="litera">енн</Span>ый, промасл
            <Span className="litera">енн</Span>ый,{" "}
            <Span className="litera">за</Span>масл
            <Span className="litera">енн</Span>ый
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>4.</Strong> В словах:{" "}
          <Em>
            рья<Span className="litera">н</Span>ый, рдя
            <Span className="litera">н</Span>ый, пья
            <Span className="litera">н</Span>ый, пря
            <Span className="litera">н</Span>ый
          </Em>
          .
        </Col>
        <Col>
          <Strong>4.</Strong> В словах, образованных от разносклоняемых
          существительных на <Span className="litera">-мя</Span>:{" "}
          <Em>
            врем<Span className="litera">енн</Span>ый, плем
            <Span className="litera">енн</Span>ой, стрем
            <Span className="litera">енн</Span>ой, безым
            <Span className="litera">янн</Span>ый
          </Em>
          .
        </Col>
      </Row>
    </Table>
    <P>
      <Strong>
        <Span className="number">4.</Span> Правописание{" "}
        <Span className="litera">н</Span> и <Span className="litera">нн</Span> в
        существительных и наречиях на <Span className="litera">-о</Span>,
        образованных от неотглагольных прилагательных.
      </Strong>
    </P>

    <Li>
      <P>
        В существительных, образованных от неотглагольных прилагательных, с
        помощью суффиксов <Span className="litera">-ик, -иц(а)</Span> и др., и в
        наречиях на <Span className="litera">-о</Span> пишется столько же букв{" "}
        <Span className="litera">н</Span>, сколько в производящих
        прилагательных.
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Em>
            конопля<Span className="litera">н</Span>ый &rarr; конопля
            <Span className="litera">н</Span>ик; гости
            <Span className="litera">н</Span>ый &rarr; гости
            <Span className="litera">н</Span>ица; масле
            <Span className="litera">н</Span>ый &rarr; масле
            <Span className="litera">н</Span>ица; ветре
            <Span className="litera">н</Span>ый &rarr; ветре
            <Span className="litera">н</Span>ик, ветре
            <Span className="litera">н</Span>ица, ветре
            <Span className="litera">н</Span>о; листве
            <Span className="litera">нн</Span>ый &rarr; листве
            <Span className="litera">нн</Span>ица; ко
            <Span className="litera">нн</Span>ый &rarr; ко
            <Span className="litera">нн</Span>ик, ко
            <Span className="litera">нн</Span>ица; ю
            <Span className="litera">н</Span>ый &rarr; ю
            <Span className="litera">н</Span>о; степе
            <Span className="litera">н</Span>ный &rarr; степе
            <Span className="litera">н</Span>но.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        <Strong>Следует запомнить</Strong> правописание существительных:
      </P>
      <P>
        с одной буквой <Span className="litera">н</Span>:{" "}
        <Em>труженик, сребреник</Em> (монета),{" "}
        <Em>бессребреник, румяна, пряности</Em>;
      </P>
      <P>
        с двумя буквами <Span className="litera">н</Span>:{" "}
        <Em>
          малинник, рябинник, племянник, именинник, путешественник, мошенник,
          дружинник, сторонник, юннат
        </Em>{" "}
        (
        <Em>
          <Span className="litera">юн</Span>ый{" "}
          <Span className="litera">нат</Span>уралист
        </Em>
        ).
      </P>
    </Li>
  </View>
);
