import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const pravopisanie_soglasnyh_v_korne = (
  <View>
    <P>
      <Strong>Правописание согласных в корне</Strong> включает три типа правил:
    </P>
    <P>
      1) правописание звонких/глухих согласных;{"\n"} 2) правописание
      непроизносимых согласных;{"\n"} 3) двойные согласные.
    </P>
    <P>
      Правила 1 и 2 рассмотрены нами в п. 1.14. Изменения согласных в речи, п.
      1.15. Правопи&shy;сание согласных. В данном пункте остановимся более
      подробно на правописании <Strong>двойных согласных в корне</Strong>.
    </P>
    <P>
      О правописании двойных согласных на стыке морфем, в суффиксах, приставках
      см. п. 2.6. Правописание приставок, п. 2.7. Суффиксы. Постфиксы.
    </P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      В корне слова двойные согласные пишутся, как правило, в заимствованных
      словах.
    </P>
    <Div className="primer">
      <P>
        <Em>
          Аллея, ассамблея, баллада, колонна, корреспон&shy;дент, репрессия,
          теннис, тонна, терраса, эффект.
        </Em>
      </P>
    </Div>
    <Li>
      <P>
        Слово{" "}
        <Em>
          ба<Span className="litera">лл</Span>
        </Em>{" "}
        имеет значения:
      </P>
      <P>
      1. &laquo;единица оценки степени чего-либо&raquo; (
      <Em>ветер в шесть баллов</Em>);{"\n"} 2. &laquo;оценка в школе, в спорте и
      т.д.&raquo; (<Em>проходной балл</Em>).
      </P>
    </Li>
    <Li>
      <P>
        Слово{" "}
        <Em>
          ба<Span className="litera">л</Span>
        </Em>{" "}
        имеет значение &laquo;большой танцевальный вечер&raquo; (
        <Em>выпускной бал</Em>).
      </P>
    </Li>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В корнях русских слов две одинаковые согласные пишутся в следующих
      случаях:
    </P>

    <Li>
      <P>
        <Span className="litera">жж</Span> &ndash;{" "}
        <Em>вожжи, дрожжи, жужжать, можжевельник</Em> (и в производных от них);
      </P>
      <P>
        в формах и производных от глагола жечь, в которых нет отчётливо
        произносимого <Span className="litera">жг</Span>.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>жгу &ndash; жжёшь, жжёт, сожжённый, жжёнка.</Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        <Span className="litera">сс</Span> &ndash; <Em>ссора</Em> и производные
        от него (<Em>поссориться, перессориться</Em>), <Em>Россия</Em> и
        производные от него (<Em>россияне, российский</Em>; но:
        <Em>Русь</Em>).
      </P>
      <Li>
        <P>
          Слово{" "}
          <Em>
            иску<Span className="litera">с</Span>ный
          </Em>{" "}
          пишется с одним <Span className="litera">с</Span>, поскольку ранее в
          нём выделялся корень <Span className="litera">кус-</Span> (
          <Em>кусать, кусок</Em>), а<Span className="litera">-н-</Span> был
          суффиксом. В современном русском языке{" "}
          <Span className="litera">искусн-</Span> полностью является корнем.
        </P>
      </Li>
      <Li>
        <P>
          Слово{" "}
          <Em>
            иску<Span className="litera">сс</Span>тво
          </Em>{" "}
          пишется с двумя <Span className="litera">с</Span>, поскольку ранее оно
          имело тот же корень <Span className="litera">кус-</Span>, а{" "}
          <Span className="litera">-ств-</Span> &ndash; суффикс абстрактного
          существительного.
        </P>
      </Li>
    </Li>

    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Корневые двойные согласные сохраняются в производных словах.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          программа &ndash; программировать &ndash; программный &ndash;
          программка, Канны &ndash; каннский.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      <Strong>Исключения:</Strong>
    </P>
    <Table>
      <Row>
        <Col>Пишется одна согласная</Col>
        <Col>Пишется двойная согласная</Col>
      </Row>
      <Row>
        <Col>
          <Strong>1.</Strong> В первой части сложносокращенных слов:{" "}
          <Em>
            Ко<Span className="litera">м</Span>партия
          </Em>{" "}
          (
          <Em>
            ко<Span className="litera">мм</Span>унистическая партия
          </Em>
          ),{" "}
          <Em>
            ко<Span className="litera">р</Span>пункт
          </Em>{" "}
          (
          <Em>
            ко<Span className="litera">рр</Span>еспондентский пункт
          </Em>
          ).
        </Col>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <Strong>2.</Strong> В уменьшительно-ласкательных формах личных имён с
          суффиксом <Span className="litera">-к-</Span>, ср.:{" "}
          <Em>
            А<Span className="litera">лл</Span>а &ndash; А
            <Span className="litera">л</Span>ка, А
            <Span className="litera">нн</Span>а &ndash; А
            <Span className="litera">н</Span>ка, Кири
            <Span className="litera">лл</Span> &ndash; Кири
            <Span className="litera">л</Span>ка, Ри
            <Span className="litera">мм</Span>а &ndash; Ри
            <Span className="litera">м</Span>ка, Са
            <Span className="litera">вв</Span>а &ndash; Са
            <Span className="litera">в</Span>ка
          </Em>
          .
        </Col>
        <Col>
          В других случаях пишется двойная согласная &ndash;{" "}
          <Em>
            А<Span className="litera">лл</Span>очка, А
            <Span className="litera">нн</Span>ушка
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>3.</Strong> В некоторых производных от слова{" "}
          <Span className="litera">кристалл</Span>
          (если после <Span className="litera">л</Span> пишется{" "}
          <Span className="litera">ь</Span>):{" "}
          <Em>
            криста<Span className="litera">ль</Span>ный, криста
            <Span className="litera">ль</Span>но, криста
            <Span className="litera">ль</Span>ность, криста
            <Span className="litera">ль</Span>чик
          </Em>
          .
        </Col>
        <Col>
          В других производных пишется двойная согласная:{" "}
          <Em>
            криста<Span className="litera">лл</Span>ический, криста
            <Span className="litera">лл</Span>ик
          </Em>{" "}
          и др.
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>4.</Strong> В некоторых производных от слова{" "}
          <Span className="litera">колонна</Span>:
          <Em>
            коло<Span className="litera">н</Span>ка, коло
            <Span className="litera">н</Span>очный, коло
            <Span className="litera">н</Span>чатый, коло
            <Span className="litera">н</Span>ковый
          </Em>
          .
        </Col>
        <Col>
          В остальных словах пишется двойная согласная:{" "}
          <Em>
            коло<Span className="litera">нн</Span>ый, коло
            <Span className="litera">нн</Span>ада, коло
            <Span className="litera">нн</Span>ообразный
          </Em>{" "}
          и др.
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>5.</Strong> В некоторых производных от слова{" "}
          <Span className="litera">оперетта</Span>:
          <Em>
            опере<Span className="litera">т</Span>ка, опере
            <Span className="litera">т</Span>очный, опере
            <Span className="litera">т</Span>очник
          </Em>
          .
        </Col>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <Strong>6.</Strong> В некоторых производных от слова{" "}
          <Span className="litera">финн</Span>:
          <Em>
            фи<Span className="litera">н</Span>ский, Фи
            <Span className="litera">н</Span>ляндия, фи
            <Span className="litera">н</Span>ка
          </Em>
          .
        </Col>
        <Col>
          Но:{" "}
          <Em>
            фи<Span className="litera">нн</Span>о-угорский
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>7.</Strong> В одном из производных отдельных слов, ср.:{" "}
          <Em>
            <Span className="litera">антенна</Span> &ndash; антенка,{" "}
            <Span className="litera">тонна</Span> &ndash; трёхтонка, пятитонка
          </Em>
          .
        </Col>
        <Col>
          Но:{" "}
          <Em>
            анте<Span className="litera">нн</Span>очка, анте
            <Span className="litera">нн</Span>ый
          </Em>
          .{"\n"}Но:{" "}
          <Em>
            то<Span className="litera">нн</Span>аж
          </Em>{" "}
          и др.
        </Col>
      </Row>
    </Table>
  </View>
);
