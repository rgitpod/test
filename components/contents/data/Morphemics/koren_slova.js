import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const koren_slova = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      <Strong>Корень</Strong> &ndash; общая часть родственных слов, в которой
      заключено их основное значение. Слова с одинаковым корнем называются{" "}
      <Strong>однокоренными</Strong>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">Вод</Span>а,{" "}
          <Span className="litera">вод</Span>ный, под
          <Span className="litera">вод</Span>ный, под
          <Span className="litera">вод</Span>ник, над
          <Span className="litera">вод</Span>ный, на
          <Span className="litera">вод</Span>нение, па
          <Span className="litera">вод</Span>ок и др.
        </Em>
      </P>
    </Div>

    <Li>
      <P>
        Корень может состоять из нескольких звуков (
        <Em>
          <Span className="litera">ид</Span>ёт
        </Em>
        ) или из одного звука (
        <Em>
          по<Span className="litera">й</Span>ти
        </Em>
        ).
      </P>
    </Li>

    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В сложных словах выделяются два и более корня.
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">Вод</Span>опровод,{" "}
          <Span className="litera">веч</Span>но
          <Span className="litera">зелён</Span>ый,
          <Span className="litera">бел</Span>о-
          <Span className="litera">син</Span>е-
          <Span className="litera">красн</Span>ый.
        </Em>
      </P>
    </Div>

    <Li>
      <P>
        В сложных словах корень (или корни) может быть представлен в усечённом
        виде.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Корпункт &ndash; кор(респондентский) пункт, вуз &ndash; в(ысшее)
            у(чебное) з(аведение).
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      В русском языке встречаются корни-омонимы.
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">Вод</Span>а, под
          <Span className="litera">вод</Span>ный &ndash;{" "}
          <Span className="litera">вод</Span>ить, про
          <Span className="litera">вод</Span>ник;{" "}
          <Span className="litera">сыр</Span>,
          <Span className="litera">сыр</Span>ок,{" "}
          <Span className="litera">сыр</Span>ный &ndash;{" "}
          <Span className="litera">сыр</Span>ой, от
          <Span className="litera">сыр</Span>еть,{" "}
          <Span className="litera">сыр</Span>ость.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      При образовании слов и форм звуковой облик слова может меняться. Обычно
      это исторические чередования гласных и согласных. Их необходимо учитывать
      при выделении корней, при подборе однокоренных проверочных слов и т.д.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          книга &ndash; книжечка; пахать &ndash; пашу; светить &ndash; свеча,
          освещение; рот &ndash; рта.
        </Em>
      </P>
    </Div>
    <P>Приведём примеры наиболее частотных чередований звуков.</P>
    <P>Чередование гласных</P>
    <Table>
      <Row>
        <Col>Гласные</Col>
        <Col>Примеры</Col>
      </Row>
      <Row>
        <Col>
          <Strong>О &ndash; е</Strong>
        </Col>
        <Col>
          <Em>
            В<Span className="litera">о</Span>зить &ndash; в
            <Span className="litera">е</Span>зти, н
            <Span className="litera">о</Span>сить &ndash; н
            <Span className="litera">е</Span>сти, п
            <Span className="litera">о</Span>ю &ndash; п
            <Span className="litera">е</Span>ть.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>О &ndash; а</Strong>
        </Col>
        <Col>
          <Em>
            Бр<Span className="litera">о</Span>сить &ndash; забр
            <Span className="litera">а</Span>сывать, зак
            <Span className="litera">о</Span>нчить &ndash; зак
            <Span className="litera">а</Span>нчивать.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>О &ndash; ы, е &ndash; и</Strong>
        </Col>
        <Col>
          <Em>
            В<Span className="litera">о</Span>й &ndash; в
            <Span className="litera">ы</Span>ть, ш
            <Span className="litera">е</Span>й &ndash; ш
            <Span className="litera">и</Span>ть.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>О &ndash; е &ndash; и</Strong>
        </Col>
        <Col>
          <Em>
            Сб<Span className="litera">о</Span>р &ndash; соб
            <Span className="litera">е</Span>ру &ndash; соб
            <Span className="litera">и</Span>рать.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>О &ndash; ы &ndash; у</Strong>
        </Col>
        <Col>
          <Em>
            С<Span className="litera">о</Span>хнуть &ndash; заc
            <Span className="litera">ы</Span>хать &ndash; с
            <Span className="litera">у</Span>хой.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>О/е &ndash; &laquo;ноль&raquo; звука (беглые гласные)</Strong>
        </Col>
        <Col>
          <Em>
            Р<Span className="litera">о</Span>т &ndash; рта, д
            <Span className="litera">е</Span>нь &ndash; дня.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>И &ndash; ы</Strong>
        </Col>
        <Col>
          <Em>
            <Span className="litera">И</Span>скусный &ndash; без
            <Span className="litera">ы</Span>скусный.
          </Em>
        </Col>
      </Row>
    </Table>
    <P>Чередование согласных</P>
    <Table>
      <Row>
        <Col>Согласные</Col>
        <Col>Примеры</Col>
      </Row>
      <Row>
        <Col>
          <Strong>К &ndash; ч</Strong>
        </Col>
        <Col>
          <Em>
            Ру<Span className="litera">к</Span>а &ndash; ру
            <Span className="litera">ч</Span>ной, дружо
            <Span className="litera">к</Span> &ndash; дружо
            <Span className="litera">ч</Span>ек.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Х &ndash; ш</Strong>
        </Col>
        <Col>
          <Em>
            Су<Span className="litera">х</Span>ой &ndash; су
            <Span className="litera">ш</Span>ить.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Г &ndash; ж &ndash; з</Strong>
        </Col>
        <Col>
          <Em>
            Дру<Span className="litera">г</Span> &ndash; дру
            <Span className="litera">ж</Span>ить &ndash; дру
            <Span className="litera">з</Span>ья.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Д &ndash; ж &ndash; жд</Strong>
        </Col>
        <Col>
          <Em>
            Во<Span className="litera">д</Span>ить &ndash; во
            <Span className="litera">ж</Span>у &ndash; во
            <Span className="litera">жд</Span>ение.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Т &ndash; ч &ndash; щ</Strong>
        </Col>
        <Col>
          <Em>
            Све<Span className="litera">т</Span> &ndash; све
            <Span className="litera">ч</Span>а &ndash; осве
            <Span className="litera">щ</Span>ение.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Ст &ndash; щ</Strong>
        </Col>
        <Col>
          <Em>
            Пё<Span className="litera">ст</Span>рый &ndash; испе
            <Span className="litera">щ</Span>рить.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Д/т &ndash; с</Strong>
        </Col>
        <Col>
          <Em>
            Ве<Span className="litera">д</Span>у &ndash; ве
            <Span className="litera">с</Span>ти, ме
            <Span className="litera">т</Span>у &ndash; ме
            <Span className="litera">с</Span>ти.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Б &ndash; бл</Strong>
        </Col>
        <Col>
          <Em>
            Лю<Span className="litera">б</Span>ить &ndash; лю
            <Span className="litera">бл</Span>ю.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>П &ndash; пл</Strong>
        </Col>
        <Col>
          <Em>
            Ку<Span className="litera">п</Span>ить &ndash; ку
            <Span className="litera">пл</Span>ю.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>В &ndash; вл</Strong>
        </Col>
        <Col>
          <Em>
            Ло<Span className="litera">в</Span>ить &ndash; ло
            <Span className="litera">вл</Span>ю.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Ф &ndash; фл</Strong>
        </Col>
        <Col>
          <Em>
            Гра<Span className="litera">ф</Span>ить &ndash; гра
            <Span className="litera">фл</Span>ю.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>М &ndash; мл</Strong>
        </Col>
        <Col>
          <Em>
            Кор<Span className="litera">м</Span>ить &ndash; кор
            <Span className="litera">мл</Span>ю.
          </Em>
        </Col>
      </Row>
    </Table>
    <P>Чередование сочетаний звуков</P>
    <Table>
      <Row>
        <Col>Сочетания</Col>
        <Col>Примеры</Col>
      </Row>
      <Row>
        <Col>
          <Strong>А/я &ndash; им &ndash; ин &ndash; м/н</Strong>
        </Col>
        <Col>
          <Em>
            Ж<Span className="litera">а</Span>ть &ndash; сж
            <Span className="litera">им</Span>ать &ndash; сож
            <Span className="litera">м</Span>у, ж
            <Span className="litera">а</Span>ть &ndash; пож
            <Span className="litera">ин</Span>ать &ndash; пож
            <Span className="litera">н</Span>у.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>Ова/ева &ndash; уj</Strong>
        </Col>
        <Col>
          <Em>
            К<Span className="litera">ова</Span>ть &ndash; к
            <Span className="litera">у</Span>[&nbsp;j&nbsp;]ю, ж
            <Span className="litera">ева</Span>ть &ndash; ж
            <Span className="litera">у</Span>[&nbsp;j&nbsp;]ю.
          </Em>
        </Col>
      </Row>
    </Table>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><P>
      Если один согласный чередуется с сочетанием согласных, то это сочетание
      полностью входит в состав корня, а новый суффикс не выделяется. В словах
      типа{" "}
      <Em>
        кор<Span className="litera">мл</Span>ю
      </Em>{" "}
      (
      <Em>
        кор<Span className="litera">м</Span>ить
      </Em>
      ),{" "}
      <Em>
        лю<Span className="litera">бл</Span>ю
      </Em>{" "}
      (
      <Em>
        лю<Span className="litera">б</Span>ить
      </Em>
      ),{" "}
      <Em>
        осле<Span className="litera">пл</Span>ение
      </Em>{" "}
      (
      <Em>
        сле<Span className="litera">п</Span>ой
      </Em>
      ) <Span className="litera">л</Span> не является новым суффиксом, а входит
      в состав корня!
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      Большинство корней русского языка способны самостоятельно составлять
      основу слова.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          <Span className="litera">стол</Span>,{" "}
          <Span className="litera">лев</Span>,{" "}
          <Span className="litera">стен</Span>а
        </Em>{" "}
        и др.
      </P>
    </Div>
    <P>
      Вместе с тем некоторые корни не могут встречаться в языке без
      словообразовательных приставок и суффиксов.
    </P>
    <Div className="primer">
      <P>
        Например, корень <Span className="litera">ул-</Span> (
        <Em>
          <Span className="litera">ул</Span>ица, про
          <Span className="litera">ул</Span>ок
        </Em>
        ); корень <Span className="litera">пт-</Span> (
        <Em>
          <Span className="litera">пт</Span>ица,{" "}
          <Span className="litera">пт</Span>енец
        </Em>
        ); корень <Span className="litera">роб-</Span> (
        <Em>
          <Span className="litera">роб</Span>кий,{" "}
          <Span className="litera">роб</Span>ость
        </Em>
        ), <Span className="litera">вой-</Span> (
        <Em>
          <Span className="litera">вой</Span>ско,{" "}
          <Span className="litera">вой</Span>на,{" "}
          <Span className="litera">вои</Span>н
        </Em>
        ). В последнем слове <Em>воин</Em> корень{" "}
        <Span className="litera">вой-</Span> накладывается на суффикс{" "}
        <Span className="litera">-ин</Span> (ср.:{" "}
        <Em>
          горожан<Span className="litera">ин</Span>, англичан
          <Span className="litera">ин</Span>
        </Em>
        ).
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">6.</Span>
      </Strong>{" "}
      В ходе исторического развития морфемный состав слова может меняться.
      Наиболее распространённым процессом при этом является упрощение морфемной
      структуры слова, или
      <Strong>опрощение</Strong>. Суть этого процесса заключается в том, что
      приставка и корень, реже &ndash; корень и суффикс сливаются воедино, и
      тогда образуется новый корень.
    </P>
    <Div className="primer">
      <P>
        Например, в слове <Span className="litera">воздух</Span> сейчас
        выделяется один корень &ndash; <Em>воздух</Em>, тогда как раньше в этом
        слове выделялся корень <Em>дух</Em> и приставка <Em>воз-</Em>. В слове{" "}
        <Span className="litera">вкус</Span> ранее выделялась приставка{" "}
        <Em>в-</Em> и корень <Em>кус</Em> (ср.:
        <Em>кусать</Em>), а сейчас это единый корень. В слове{" "}
        <Span className="litera">красный</Span> ранее выделялся корень
        <Em>крас-</Em> и суффикс <Em>-н-</Em>, а в настоящее время{" "}
        <Em>красн-</Em> полностью является корнем.
      </P>
    </Div>
    <P>
      Процесс опрощения идёт постепенно, и в современном русском языке можно
      обнаружить достаточно много переходных случаев. Именно поэтому в разных
      пособиях, в разных словообразовательных словарях и словарях морфем в одном
      и том же слове могут выделяться разные корни.
    </P>
    <Div className="primer">
      <P>
        Например, одни лингвисты в слове <Span className="litera">образ</Span>{" "}
        выделяют корень <Em>раз-</Em> (однокоренные слова &ndash;{" "}
        <Em>разить, разительный</Em>), а другие исследователи считают, что
        бывшие приставка и корень слились уже в один корень &ndash;{" "}
        <Em>образ-</Em>.
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">7.</Span>
      </Strong>{" "}
      Выделение этимологических, то есть исходных морфем в опрощённом слове
      может быть важным для правописания слова.
    </P>
    <Div className="primer">
      <P>
        Например, в слове <Span className="litera">приятный</Span> ранее
        выделялись приставка <Em>при-</Em> и корень
        <Em>я-</Em> (<Em>яти</Em> &laquo;взять&raquo;). Приставка <Em>при-</Em>{" "}
        первоначально имела значение &laquo;приблизить, присоединить&raquo;.
        Именно поэтому и в современном русском языке в этой бывшей приставке
        пишется гласная <Span className="litera">и</Span>.
      </P>
    </Div>
  </View>
);
