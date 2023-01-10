import { View, Text } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Row, Col } from "../table";

export const grafika_bukvy_alfavit = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Для обозначения звуков на письме используются специальные знаки, которые
      называются <Strong>буквами</Strong>.
    </P>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Обозначение звуков речи на письме изучает <Strong>графика</Strong>
      (от греч. &laquo;графо&raquo; &ndash; пишу).
    </P>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Совокупность букв, расположенных в установленном порядке, называется <Strong>алфавитом</Strong>, или <Strong>азбукой</Strong>.
    </P>
    <Table>
      <Row>
        <Col pr='colHed'>Буквы</Col>
        <Col pr='colHed'>Название букв</Col>
        <Col pr='colHed'>Буквы</Col>
        <Col pr='colHed'>Название букв</Col>
      </Row>
      <Row>
        <Col>
          <Strong>А а</Strong>
        </Col>
        <Col>А</Col>
        <Col>
          <Strong>Р р</Strong>
        </Col>
        <Col>Эр</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Б б</Strong>
        </Col>
        <Col>Бэ</Col>
        <Col>
          <Strong>С с</Strong>
        </Col>
        <Col>Эс</Col>
      </Row>
      <Row>
        <Col>
          <Strong>В в</Strong>
        </Col>
        <Col>Вэ</Col>
        <Col>
          <Strong>Т т</Strong>
        </Col>
        <Col>Тэ</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Г г</Strong>
        </Col>
        <Col>Гэ</Col>
        <Col>
          <Strong>У у</Strong>
        </Col>
        <Col>У</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Д д</Strong>
        </Col>
        <Col>Дэ</Col>
        <Col>
          <Strong>Ф ф</Strong>
        </Col>
        <Col>Эф</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Е е</Strong>
        </Col>
        <Col>Е</Col>
        <Col>
          <Strong>Х х</Strong>
        </Col>
        <Col>Ха</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Ё ё</Strong>
        </Col>
        <Col>Ё</Col>
        <Col>
          <Strong>Ц ц</Strong>
        </Col>
        <Col>Цэ</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Ж ж</Strong>
        </Col>
        <Col>Жэ</Col>
        <Col>
          <Strong>Ч ч</Strong>
        </Col>
        <Col>Че</Col>
      </Row>
      <Row>
        <Col>
          <Strong>З з</Strong>
        </Col>
        <Col>Зэ</Col>
        <Col>
          <Strong>Ш ш</Strong>
        </Col>
        <Col>Ша</Col>
      </Row>
      <Row>
        <Col>
          <Strong>И и</Strong>
        </Col>
        <Col>И</Col>
        <Col>
          <Strong>Щ щ</Strong>
        </Col>
        <Col>Ща</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Й й</Strong>
        </Col>
        <Col>И краткое</Col>
        <Col>
          <Strong>Ъ ъ</Strong>
        </Col>
        <Col>Твёрдый знак (ер)</Col>
      </Row>
      <Row>
        <Col>
          <Strong>К к</Strong>
        </Col>
        <Col>Ка</Col>
        <Col>
          <Strong>Ы ы</Strong>
        </Col>
        <Col>Ы</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Л л</Strong>
        </Col>
        <Col>Эль</Col>
        <Col>
          <Strong>Ь ь</Strong>
        </Col>
        <Col>Мягкий знак (ерь)</Col>
      </Row>
      <Row>
        <Col>
          <Strong>М м</Strong>
        </Col>
        <Col>Эм</Col>
        <Col>
          <Strong>Э э</Strong>
        </Col>
        <Col>Э (оборотное)</Col>
      </Row>
      <Row>
        <Col>
          <Strong>Н н</Strong>
        </Col>
        <Col>Эн</Col>
        <Col>
          <Strong>Ю ю</Strong>
        </Col>
        <Col>Ю</Col>
      </Row>
      <Row>
        <Col>
          <Strong>О о</Strong>
        </Col>
        <Col>О</Col>
        <Col>
          <Strong>Я я</Strong>
        </Col>
        <Col>Я</Col>
      </Row>
      <Row>
        <Col>
          <Strong>П п</Strong>
        </Col>
        <Col>Пэ</Col>
        <Col>&nbsp;</Col>
        <Col>&nbsp;</Col>
      </Row>
    </Table>
  </View>
);
