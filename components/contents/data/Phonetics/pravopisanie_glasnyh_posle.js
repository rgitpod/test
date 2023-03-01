import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const pravopisanie_glasnyh_posle = (
  <View>
    <P>
      В древнерусском языке все шипящие звуки были мягкими. В дальнейшем в
      литературном языке <Span className="litera0">[ж]</Span> и{" "}
      <Span className="litera0">[ш]</Span> отвердели, а{" "}
      <Span className="litera0">[ч&rsquo;]</Span> и{" "}
      <Span className="litera0">[щ&rsquo;]</Span> остались мягкими. Поэтому
      независимо от того, какая гласная буква следует за буквами{" "}
      <Span className="litera">ж, ш, ч, щ,</Span> звуки{" "}
      <Span className="litera0">[ж]</Span> и{" "}
      <Span className="litera0">[ш]</Span> произносятся твёрдо, а звуки{" "}
      <Span className="litera0">[ч&rsquo;]</Span> и{" "}
      <Span className="litera0">[щ&rsquo;]</Span> &ndash; мягко.
    </P>
    <Div className="primer">
      <P>
        Ср.: <Em>жил</Em> [жы&#769;л], <Em>шёл</Em> [шо&#769;л] &ndash;{" "}
        <Em>лучом</Em> [луч&rsquo;о&#769;м],
        <Em>Щорс</Em> [Щ&rsquo;о&#769;рс].
      </P>
    </Div>
    <P>
      Разнообразие написаний гласных после шипящих объясняется историческими
      причинами.
    </P>
    <P>
      1.12.1. Гласные <Em>И, Ы, А, Я, У, Ю</Em> после шипящих{" "}
      <Em>Ж, Ш, Ч, Щ</Em>
    </P>
    <P>
      После шипящих <Span className="litera">ж, ш, ч, щ</Span> не пишутся
      гласные <Span className="litera">ы, я, ю</Span>, а пишутся{" "}
      <Span className="litera">и, а, у</Span>:
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">жи</Span>л,{" "}
          <Span className="litera">ши</Span>на,{" "}
          <Span className="litera">чи</Span>ж,{" "}
          <Span className="litera">щи</Span>пать,{" "}
          <Span className="litera">жа</Span>ть,{" "}
          <Span className="litera">ша</Span>г,{" "}
          <Span className="litera">ча</Span>с,{" "}
          <Span className="litera">ща</Span>вель,{" "}
          <Span className="litera">жу</Span>рчит,{" "}
          <Span className="litera">шу</Span>ршит,{" "}
          <Span className="litera">чу</Span>до,{" "}
          <Span className="litera">щу</Span>пальца.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>Исключения:</Strong>{" "}
      <Em>
        брош<Span className="litera">ю</Span>ра, ж
        <Span className="litera">ю</Span>ри, параш
        <Span className="litera">ю</Span>т
      </Em>{" "}
      (и производные от них:{" "}
      <Em>
        параш<Span className="litera">ю</Span>тный, брош
        <Span className="litera">ю</Span>ровать
      </Em>{" "}
      и т.д.), а также некоторые иноязычные имена собственные, например:
      <Em>
        Ж<Span className="litera">ю</Span>ль, Сент-Ж
        <Span className="litera">ю</Span>ст, Ч<Span className="litera">ю</Span>
        рлёнис, Мкртч<Span className="litera">я</Span>н, Лонж
        <Span className="litera">ю</Span>мо, Ш<Span className="litera">я</Span>
        уляй
      </Em>{" "}
      и др.
    </P>
    <P>
      1.12.2. Гласные <Em>Е, Ё, О</Em> после шипящих <Em>Ж, Ш, Ч, Щ</Em>
    </P>
    <Table>
      <Row>
        <Col>
          Пишется <Em>Е</Em> (<Em>Ё</Em>)
        </Col>
        <Col>
          Пишется <Em>О</Em>
        </Col>
      </Row>
      <Row>
        <Col>А) В корнях слов под ударением</Col>
      </Row>
      <Row>
        <Col>
          <Strong>1.</Strong> Можно подобрать однокоренное слово с{" "}
          <Span className="litera">е</Span>, например:{" "}
          <Em>
            ш<Span className="litera">ё</Span>рстка &ndash; ш
            <Span className="litera">е</Span>рсть, ч
            <Span className="litera">ё</Span>рт &ndash; ч
            <Span className="litera">е</Span>рти, ш
            <Span className="litera">ё</Span>пот &ndash; ш
            <Span className="litera">е</Span>пчет; ж
            <Span className="litera">ё</Span>лтый &ndash; ж
            <Span className="litera">е</Span>лтеть
          </Em>
          .
        </Col>
        <Col>
          <Strong>1.</Strong> Нельзя подобрать однокоренное слово с{" "}
          <Span className="litera">е</Span>, например:{" "}
          <Em>
            крыж<Span className="litera">о</Span>вник, трущ
            <Span className="litera">о</Span>ба, ш
            <Span className="litera">о</Span>рох, ш
            <Span className="litera">о</Span>ры, ш
            <Span className="litera">о</Span>рник, ш
            <Span className="litera">о</Span>ркать, ч
            <Span className="litera">о</Span>каться, ч
            <Span className="litera">о</Span>порный, ч
            <Span className="litera">о</Span>хом; Ш
            <Span className="litera">о</Span>лохов, Щ
            <Span className="litera">о</Span>рс, Печ
            <Span className="litera">о</Span>ра, Печ
            <Span className="litera">о</Span>рин, Иж
            <Span className="litera">о</Span>ра
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
        <Col>
          <Strong>2.</Strong> При изменении слова или в однокоренных словах есть
          беглость гласных (например:{" "}
          <Em>
            ш<Span className="litera">о</Span>в &ndash;{" "}
            <Span className="litera">шв</Span>а, обж
            <Span className="litera">о</Span>ра &ndash;{" "}
            <Span className="litera">жр</Span>ать, ж
            <Span className="litera">о</Span>м &ndash;{" "}
            <Span className="litera">жм</Span>у,{" "}
            <Span className="litera">жм</Span>ых
          </Em>
          ).
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>3.</Strong> Во многих заимствованных словах (причем как в
          ударных, так и в безударных слогах), например:{" "}
          <Em>
            ш<Span className="litera">о</Span>к, ш
            <Span className="litera">о</Span>мпол, ш
            <Span className="litera">о</Span>рты, артиш
            <Span className="litera">о</Span>к, капюш
            <Span className="litera">о</Span>н, крюш
            <Span className="litera">о</Span>н, ш
            <Span className="litera">о</Span>у, ш
            <Span className="litera">о</Span>колад, Ш
            <Span className="litera">о</Span>тландия, ш
            <Span className="litera">о</Span>ссе, ш
            <Span className="litera">о</Span>фёр, ш
            <Span className="litera">о</Span>винист, борж
            <Span className="litera">о</Span>м, дж
            <Span className="litera">о</Span>нка, пиж
            <Span className="litera">о</Span>н, маж
            <Span className="litera">о</Span>р, маж
            <Span className="litera">о</Span>рдом, креп-ж
            <Span className="litera">о</Span>ржет, ж
            <Span className="litera">о</Span>нглёр, анч
            <Span className="litera">о</Span>ус
          </Em>{" "}
          и др.
        </Col>
      </Row>
      <Row>
        <Col>
          Б) Слова, образованные от глагола <Em>жечь</Em>
        </Col>
      </Row>
      <Row>
        <Col>
          Глаголы и отглагольные прилагательные, причастия, например:{" "}
          <Em>
            ож<Span className="litera">ё</Span>г руку, подж
            <Span className="litera">ё</Span>г крышу, сожж
            <Span className="litera">ё</Span>нный, жж
            <Span className="litera">ё</Span>нный
          </Em>
          .
        </Col>
        <Col>
          Существительные, например:{" "}
          <Em>
            ож<Span className="litera">о</Span>г руки, подж
            <Span className="litera">о</Span>г дома, изж
            <Span className="litera">о</Span>га
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>В) В окончаниях и суффиксах</Col>
      </Row>
      <Row>
        <Col>
          <Strong>1.</Strong> В безударном положении в окончаниях имён
          существительных и прилагательных, например:{" "}
          <Em>
            с пейза&#769;ж<Span className="litera">е</Span>м, с да&#769;ч
            <Span className="litera">е</Span>й, ры&#769;ж
            <Span className="litera">е</Span>го
          </Em>{" "}
          (котёнка),
          <Em>
            хоро&#769;ш<Span className="litera">е</Span>го
          </Em>{" "}
          (друга).
        </Col>
        <Col>
          <Strong>1.</Strong> Под ударением в окончаниях имён существительных и
          прилагательных, например:{" "}
          <Em>
            под луч<Span className="litera">о&#769;</Span>м, со свеч
            <Span className="litera">о&#769;</Span>й, больш
            <Span className="litera">о&#769;</Span>го
          </Em>{" "}
          (успеха),{" "}
          <Em>
            с чуж<Span className="litera">о&#769;</Span>го
          </Em>{" "}
          (плеча).
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>2.</Strong> В безударном положении в суффиксах имён
          существительных и прилагательных, не образованных от глаголов,
          например:{" "}
          <Em>
            до&#769;ч<Span className="litera">е</Span>нька, горо&#769;ш
            <Span className="litera">е</Span>к, плеч
            <Span className="litera">е</Span>во&#769;й, плю&#769;ш
            <Span className="litera">е</Span>вый
          </Em>
          .
        </Col>
        <Col>
          <Strong>2.</Strong> Под ударением в суффиксах имён существительных и
          прилагательных, не образованных от глаголов, например:{" "}
          <Em>
            казач<Span className="litera">о&#769;</Span>к, девч
            <Span className="litera">о&#769;</Span>нка, чащ
            <Span className="litera">о&#769;</Span>ба, морж
            <Span className="litera">о&#769;</Span>вый, грош
            <Span className="litera">о&#769;</Span>вый
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>3.</Strong> Без ударения на конце наречий, например:{" "}
          <Em>
            неуклю&#769;ж<Span className="litera">е</Span>, бога&#769;ч
            <Span className="litera">е</Span>
          </Em>
          .
        </Col>
        <Col>
          <Strong>3.</Strong> Под ударением на конце наречий, например:{" "}
          <Em>
            свеж<Span className="litera">о&#769;</Span>, общ
            <Span className="litera">о&#769;</Span>
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>4.</Strong> Без ударения в существительных и прилагательных с
          беглым гласным, например:{" "}
          <Em>
            гре&#769;ш<Span className="litera">е</Span>н &ndash; грешна,
            стра&#769;ш<Span className="litera">е</Span>н &ndash; страшна
          </Em>
          .
        </Col>
        <Col>
          <Strong>4.</Strong> Под ударением в существительных и прилагательных с
          беглым гласным, например:{" "}
          <Em>
            княж<Span className="litera">о&#769;</Span>н &ndash; кня
            <Span className="litera">жн</Span>а, смеш
            <Span className="litera">о&#769;</Span>н &ndash; сме
            <Span className="litera">шн</Span>а
          </Em>
          .
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col>
          <Strong>5.</Strong> Под ударением в суффиксе существительных{" "}
          <Span className="litera">-ёр</Span>, например:
          <Em>
            дириж<Span className="litera">ёр</Span>, стаж
            <Span className="litera">ёр</Span>
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>6.</Strong> Под ударением в окончаниях глаголов, например:{" "}
          <Em>
            печ<Span className="litera">ёт</Span>, жж
            <Span className="litera">ёт</Span>
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>7.</Strong> Под ударением в глагольном суффиксе{" "}
          <Span className="litera">-ёвыва-</Span>, например:
          <Em>
            разж<Span className="litera">ёвыва</Span>ть, выкорч
            <Span className="litera">ёвыва</Span>ть
          </Em>
          .
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>8.</Strong> Под ударением в отглагольных существительных с
          сочетанием суффиксов
          <Span className="litera">-ёвк-а</Span>, например:{" "}
          <Em>
            корч<Span className="litera">ёвк</Span>а
          </Em>{" "}
          (от
          <Em>
            корчевать
            <Em>
              ),{" "}
              <Em>
                ноч<Span className="litera">ёвк</Span>а
              </Em>{" "}
              (от <Em>ночевать</Em>).
            </Em>
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>9.</Strong> Под ударением в суффиксе страдательных причастий{" "}
          <Span className="litera">-ённ-</Span>(
          <Span className="litera">-ён-</Span>), а также в производных от них
          существительных, например:{" "}
          <Em>
            копч<Span className="litera">ён</Span>ый &ndash; копч
            <Span className="litera">ён</Span>ости, туш
            <Span className="litera">ён</Span>ый &ndash; туш
            <Span className="litera">ён</Span>ка, сгущ
            <Span className="litera">ённ</Span>ый &ndash; сгущ
            <Span className="litera">ён</Span>ка.
          </Em>
        </Col>
      </Row>
      <Row>
        <Col>
          <Strong>10.</Strong> В предложном падеже местоимения{" "}
          <Span className="litera">что</Span>: <Em>о чём</Em>, а также в словах{" "}
          <Span className="litera">нипочём, причём, ни при чём</Span>.
        </Col>
      </Row>
    </Table>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><P>
      <Strong>1)</Strong> Слово{" "}
      <Em>
        ш<Span className="litera">е</Span>роховатый
      </Em>{" "}
      не воспринимается как однокоренное со словом{" "}
      <Em>
        ш<Span className="litera">о</Span>рох
      </Em>
      .</P>
      <P>
        <Strong>2)</Strong> Слово{" "}
        <Em>
          трещ<Span className="litera">о</Span>тка
        </Em>
        , хотя и образовано от глагола, но не имеется сочетания суффиксов{" "}
        <Em>-ёвк-а</Em>, поэтому пишется с гласным{" "}
        <Span className="litera">о</Span>.
      </P>
      <P>
        <Strong>3)</Strong> В наречии <Span className="litera">ещё</Span> нет
        суффикса, поэтому на конце пишется <Span className="litera">ё</Span>.
      </P>
      <P>
        <Strong>4)</Strong> В фамилиях и географических названиях под ударением
        после шипящих в суффиксах может писаться как{" "}
        <Span className="litera">-ов</Span>, так и{" "}
        <Span className="litera">-ёв</Span> (зависит от традиции).
      </P>
      <Div className="primer"><P>
        Ср.: <Em>Лихачёв, Пугачёв, Сычёвка, но: Ромашов, Балашов, Межовск.</Em></P>
      </Div>
    </Div>
  </View>
);
