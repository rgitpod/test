import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div, Sup } from "../tags";
import { Table, Col, Row } from "../table";

export const polnyi_foneticheskii_razbor = (
  <View>
    <P>План фонетического разбора</P>
    <Table>
      <Row>
        <Col>
          <Strong>1</Strong>
        </Col>
        <Col>Орфографическая запись слова.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>2</Strong>
        </Col>
        <Col>Деление слова на слоги и место ударения.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>3</Strong>
        </Col>
        <Col>Возможность переноса.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>4</Strong>
        </Col>
        <Col>Фонетическая транскрипция слова.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>5</Strong>
        </Col>
        <Col>Характеристика всех звуков по порядку:</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
        <Col>
          <Strong>а)</Strong>
        </Col>
        <Col>
          согласный &ndash; звонкий &ndash; глухой (парный &ndash; непарный),
          твёрдый &ndash; мягкий (парный &ndash; непарный), какой буквой
          обозначен;
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>б)</Strong>
        </Col>
        <Col>гласный: ударный &ndash; безударный.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>6</Strong>
        </Col>
        <Col>Количество звуков и букв.</Col>
      </Row>
      <Row>
        <Col>
          <Strong>7</Strong>
        </Col>
        <Col>Случаи несоответствия звука букве.</Col>
      </Row>
    </Table>
    <P>Образец разбора</P>
    <P>
      <Em>
        Приятели<Sup>1</Sup> жгли костёр, варили в каске похлёбку<Sup>1</Sup>
      </Em>{" "}
      (Полевой).
    </P>
  
      <Li>
        <Strong>Приятели</Strong>
      </Li>
      <Li>Слоги: при-я&#769;-те-ли (4 слога; ударение падает на 2-й слог).</Li>
      <Li>Перенос: при-я-те-ли.</Li>
      <Li>[пр&rsquo;иjа&#769;т&rsquo;ьл&rsquo;и]</Li>
      <Li>
        п&nbsp;[п] &ndash; согласный, глухой парный, твёрдый парный.{"\n"}{" "}
        р&nbsp;[р&rsquo;] &ndash; согласный, звонкий непарный, мягкий парный.
        {"\n"} и&nbsp;[и] &ndash; гласный, безударный.{"\n"}
        <Table>
          <Row>
            <Col>я</Col>
            <Col>
              [&nbsp;j&nbsp;] &ndash; согласный, звонкий непарный, мягкий
              непарный.
            </Col>
          </Row>
          <Row>
            <Col>[а&#769;] &ndash; гласный, ударный.</Col>
          </Row>
        </Table>
        т&nbsp;[т&rsquo;] &ndash; согласный, глухой парный, мягкий парный.{"\n"}{" "}
        е&nbsp;[ь] &ndash; гласный, безударный.{"\n"} л&nbsp;[л&rsquo;] &ndash;
        согласный, звонкий непарный, мягкий парный.{"\n"} и&nbsp;[и] &ndash;
        гласный, безударный.
      </Li>
      <Li>8 букв &ndash; 9 звуков.</Li>
      <Li>
        Буква{" "}
        <Strong>
          <Em>я</Em>
        </Strong>{" "}
        обозначает два звука &ndash; [jа&#769;].
      </Li>
 
      <Li>
        <Strong>Похлёбку</Strong>
      </Li>
      <Li>Слоги: по-хлё-бку (3 слога; ударение падает на 2-й слог).</Li>
      <Li>Перенос: по-хлёб-ку.</Li>
      <Li>[п&Lambda;хл&rsquo;о&#769;пку]</Li>
      <Li>п&nbsp;[п] &ndash; согласный, глухой парный, твёрдый парный.</Li>
      о&nbsp;[&Lambda;] &ndash; гласный, безударный.{"\n"} х&nbsp;[х] &ndash;
      согласный, глухой непарный, твёрдый парный.{"\n"} л&nbsp;[л&rsquo;]
      &ndash; согласный, звонкий непарный, мягкий парный.{"\n"} ё&nbsp;[о&#769;]
      &ndash; гласный, ударный.{"\n"} б&nbsp;[п] &ndash; согласный, глухой
      парный, твёрдый парный.{"\n"} к&nbsp;[к] &ndash; согласный, глухой парный,
      твёрдый парный.{"\n"} у&nbsp;[у] &ndash; гласный, безударный.{"\n"}
      <Li>8 букв &ndash; 8 звуков.</Li>
      <Li>
        Буква{" "}
        <Strong>
          <Em>б</Em>
        </Strong>{" "}
        обозначает глухой звук &ndash; [п].
      </Li>

  </View>
);
