import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const zvuki_rechi_i_bukvy = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      В соответствии с тем, какие звуки обозначаются буквами, все буквы делятся
      на <Strong>гласные и согласные</Strong>.
    </P>
    <P>
      <Strong>Гласных букв 10:</Strong>
    </P>
    <Table>
      <Row>
        <Col>
          <Strong>A</Strong>
        </Col>
        <Col>
          <Strong>Е</Strong>
        </Col>
        <Col>
          <Strong>Ё</Strong>
        </Col>
        <Col>
          <Strong>И</Strong>
        </Col>
        <Col>
          <Strong>О</Strong>
        </Col>
        <Col>
          <Strong>У</Strong>
        </Col>
        <Col>
          <Strong>Ы</Strong>
        </Col>
        <Col>
          <Strong>Э</Strong>
        </Col>
        <Col>
          <Strong>Ю</Strong>
        </Col>
        <Col>
          <Strong>Я</Strong>
        </Col>
      </Row>
    </Table>
    <P>&nbsp;</P>
    <P>
      <Strong>Согласных букв 21:</Strong>
    </P>
    <Table>
      <Row>
        <Col>
          <Strong>Б</Strong>
        </Col>
        <Col>
          <Strong>В</Strong>
        </Col>
        <Col>
          <Strong>Г</Strong>
        </Col>
        <Col>
          <Strong>Д</Strong>
        </Col>
        <Col>
          <Strong>Ж</Strong>
        </Col>
        <Col>
          <Strong>З</Strong>
        </Col>
        <Col>
          <Strong>Й</Strong>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>К</Strong>
        </Col>
        <Col>
          <Strong>Л</Strong>
        </Col>
        <Col>
          <Strong>М</Strong>
        </Col>
        <Col>
          <Strong>Н</Strong>
        </Col>
        <Col>
          <Strong>П</Strong>
        </Col>
        <Col>
          <Strong>Р</Strong>
        </Col>
        <Col>
          <Strong>С</Strong>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Т</Strong>
        </Col>
        <Col>
          <Strong>Ф</Strong>
        </Col>
        <Col>
          <Strong>Х</Strong>
        </Col>
        <Col>
          <Strong>Ц</Strong>
        </Col>
        <Col>
          <Strong>Ч</Strong>
        </Col>
        <Col>
          <Strong>Ш</Strong>
        </Col>
        <Col>
          <Strong>Щ</Strong>
        </Col>
      </Row>
    </Table>
    <P>&nbsp;</P>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В русском языке обозначаются не все звуки речи, а только основные. В
      русском языке <Strong>42 основных звука</Strong> &ndash;{" "}
      <Strong>6</Strong> гласных и <Strong>36</Strong> согласных, тогда как{" "}
      <Strong>число букв &ndash; 33</Strong>. Не совпадает также количество
      основных гласных (10 букв, но 6 звуков) и согласных (21 буква, но 36
      звуков). Разница в количественном составе основных звуков и букв
      определяется особенностями русского письма.
    </P>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      В русском языке твёрдый и мягкий звук обозначается одной и той же буквой.
    </P>
    <Div className="primer">
      <P>
        Ср.: <Em>сэр</Em> [сэ&#769;р] и <Em>сер</Em> [с&rsquo;э&#769;р].
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      Шесть основных гласных звуков обозначаются десятью гласными буквами:
    </P>
    <Div className="primer">
      <P>
        <Span className="litera0">[и]</Span> - <Em>и</Em> (
        <Em>
          м<Span className="litera">и</Span>лый
        </Em>
        ).
      </P>
      <P>
        <Span className="litera0">[ы]</Span> &ndash; <Em>ы</Em> (
        <Em>
          м<Span className="litera">ы</Span>ло
        </Em>
        ).
      </P>
      <P>
        <Span className="litera0">[а]</Span> &ndash; <Em>а</Em> (
        <Em>
          м<Span className="litera">а</Span>й
        </Em>
        ) и <Em>я</Em>(
        <Em>
          мо<Span className="litera">я</Span>
        </Em>
        ).
      </P>
      <P>
        <Span className="litera0">[о]</Span> &ndash; <Em>о</Em> (
        <Em>
          м<Span className="litera">о</Span>й
        </Em>
        ) и <Em>ё</Em>(
        <Em>
          <Span className="litera">ё</Span>лка
        </Em>
        ).
      </P>
      <P>
        <Span className="litera0">[э]</Span> &ndash; <Em>э</Em> (
        <Em>
          <Span className="litera">э</Span>то
        </Em>
        ) и <Em>е</Em>(
        <Em>
          м<Span className="litera">e</Span>л
        </Em>
        ).
      </P>
      <P>
        <Span className="litera0">[у]</Span> &ndash; <Em>у</Em> (
        <Em>
          к<Span className="litera">у</Span>ст
        </Em>
        ) и <Em>ю</Em>(
        <Em>
          <Span className="litera">ю</Span>ла
        </Em>
        ).
      </P>
    </Div>
    <P>
      Таким образом, для обозначения четырёх гласных звуков (
      <Span className="litera0">[а], [о], [э], [у]</Span>) имеется два ряда
      букв: 1) <Span className="litera">а, о, э, у</Span>; &nbsp;2){" "}
      <Span className="litera">я, ё, е, ю</Span>.
    </P>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <Strong>1)</Strong> <Span className="litera">Я, е, ё, ю</Span> &ndash; это
      буквы, а не звуки! Поэтому они никогда не используются в транскрипции.
      {"\n"}
      {"\n"} <Strong>2)</Strong> Буквы <Span className="litera">а</Span> и{" "}
      <Span className="litera">я</Span>, <Span className="litera">о</Span> и{" "}
      <Span className="litera">ё</Span>, <Span className="litera">э</Span> и{" "}
      <Span className="litera">е</Span> обозначают соответственно:{" "}
      <Span className="litera">а</Span>и <Span className="litera">я</Span>{" "}
      &ndash; звук [а]; <Span className="litera">о</Span> и{" "}
      <Span className="litera">ё</Span>
      &ndash; звук [о], <Span className="litera">э</Span> и{" "}
      <Span className="litera">е</Span> &ndash; [э] &ndash; только под
      ударением! О произношении этих гласных в безударном положении см. в п.
      1.8.
    </Div>
    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      Буквы <Span className="litera">я, е, ё, ю</Span> выполняют две функции:
    </P>
    <View>
      <Li>
        <P>
          <Strong>после согласного</Strong> они сигнализируют о том, что
          предшествующая согласная буква обозначает мягкий согласный звук:
        </P>
        <Div className="primer">
          <P>
            <Em>
              С<Span className="litera">я</Span>ду
            </Em>{" "}
            [<Span className="litera0">с&rsquo;</Span>а&#769;ду],
            <Em>
              с<Span className="litera">е</Span>л
            </Em>{" "}
            [<Span className="litera0">с&rsquo;</Span>э&#769;л],
            <Em>
              с<Span className="litera">ё</Span>л
            </Em>{" "}
            [<Span className="litera0">с&rsquo;</Span>о&#769;л],
            <Em>
              с<Span className="litera">ю</Span>да
            </Em>{" "}
            [<Span className="litera0">с&rsquo;</Span>уда&#769;];
          </P>
        </Div>
      </Li>
      <Li>
        <P>
          <Strong>после гласных букв</Strong>, в начале слова и после
          разделительных <Span className="litera">ъ</Span>и
          <Span className="litera">ь</Span> эти буквы обозначают два звука
          &ndash; согласный <Span className="litera0">[ j ]</Span> и
          соответствующий гласный:
        </P>
        <Div className="primer">
          <P>
            <Span className="litera">Я</Span> &ndash; [jа],{" "}
            <Span className="litera">е</Span> &ndash; [jэ],{" "}
            <Span className="litera">ё</Span> &ndash; [jо],{" "}
            <Span className="litera">ю</Span> &ndash; [jу].
          </P>
        </Div>
        <P>Например:</P>
        <P>
          <Strong>1.</Strong> после гласных:{" "}
          <Em>
            жу<Span className="litera">ё</Span>т
          </Em>{" "}
          [жу<Span className="litera0">jо&#769;</Span>т],{" "}
          <Em>
            бре<Span className="litera">ю</Span>т
          </Em>
          [бр&rsquo;э&#769;<Span className="litera0">jу</Span>т];
        </P>
        <P>
          <Strong>2.</Strong> в начале слова:{" "}
          <Em>
            <Span className="litera">е</Span>л
          </Em>{" "}
          [<Span className="litera0">jэ&#769;</Span>л],{" "}
          <Em>
            <Span className="litera">я</Span>к
          </Em>{" "}
          [<Span className="litera0">jа&#769;</Span>к];
        </P>
        <P>
          <Strong>3.</Strong> после разделительных <Em>ъ</Em> и <Em>ь</Em>:{" "}
          <Em>
            съ<Span className="litera">е</Span>л
          </Em>
          [с<Span className="litera0">jэ&#769;</Span>л],{" "}
          <Em>
            вь<Span className="litera">ю</Span>н
          </Em>{" "}
          [в&rsquo;<Span className="litera0">jу&#769;</Span>н].
        </P>
      </Li>
    </View>
    <View>
      <Li>
        <P>
          после гласных и на конце слова &ndash; буквой{" "}
          <Span className="litera">й</Span>;
        </P>
        <Div className="primer">
          <P>
            <Em>
              Ма<Span className="litera">й</Span>
            </Em>{" "}
            [ма&#769;<Span className="litera0">j</Span>].
          </P>
        </Div>
      </Li>
      <Li>
        <P>
          в начале слова и между двумя гласными &ndash; с помощью букв{" "}
          <Span className="litera">е, ё, ю, я</Span>, которые обозначают
          сочетание согласного <Span className="litera0">[ j ]</Span> и
          соответствующего гласного;
        </P>
        <Div className="primer">
          <P>
            <Em>
              <Span className="litera">Е</Span>л
            </Em>{" "}
            [<Span className="litera0">jэ&#769;</Span>л],{" "}
            <Em>
              <Span className="litera">я</Span>к
            </Em>{" "}
            [<Span className="litera0">jа&#769;</Span>к].
          </P>
        </Div>
      </Li>
      <Li>
        <P>
          на наличие звука <Span className="litera0">[ j ]</Span> указывают
          также разделительные <Span className="litera">ъ</Span> и{" "}
          <Span className="litera">ь</Span> &ndash; между согласным и гласными
          буквами <Span className="litera">е, ё, ю, я</Span>.
        </P>
        <Div className="primer">
          <P>
            <Em>
              Съ<Span className="litera">е</Span>л
            </Em>{" "}
            [с<Span className="litera0">jэ&#769;</Span>л],{" "}
            <Em>
              вь<Span className="litera">ю</Span>н
            </Em>{" "}
            [в&rsquo;<Span className="litera0">jу&#769;</Span>н].
          </P>
        </Div>
      </Li>
    </View>
    <P>
      <Strong>
        <Span className="number">7.</Span>
      </Strong>{" "}
      Буквы <Span className="litera">ъ</Span> и{" "}
      <Span className="litera">ь</Span>
      не обозначают никаких звуков.
    </P>
    <View>
      <Li>
        <P>
          <Strong>
            Разделительные <Span className="litera">ъ</Span> и{" "}
            <Span className="litera">ь</Span>
          </Strong>
          сигнализируют о том, что следующие за ними{" "}
          <Span className="litera">е, ё, ю, я</Span> обозначают два звука,
          первый из которых
          <Span className="litera0">[ j ]</Span>.
        </P>
      </Li>
      <Li>
        <P>
          <Strong>
            Неразделительный <Span className="litera">ь</Span>
          </Strong>
          :
        </P>
        <P>1) указывает на мягкость предшествующего согласного:</P>
        <Div className="primer">
          <P>
            <Em>Мель</Em> [м&rsquo;э&#769;л&rsquo;];
          </P>
        </Div>
      </Li>
      <Li>
        <P>2) выполняет грамматическую функцию.</P>
        <Div className="primer">
          <P>
            Например, в слове <Em>мышь</Em> <Span className="litera">ь</Span> не
            указывает на мягкость предшествующего согласного, а сигнализирует о
            том, что данное существительное женского рода.
          </P>
        </Div>
      </Li>
    </View>
  </View>
);
