import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../../tags";
import { Table, Col, Row } from "../../table";

export const ponyatie_ob_chislitelnom = <View><P><Strong><Span className="number">1.</Span></Strong> <Strong>Имя числительное</Strong> &ndash; самостоятельная часть речи,
    которая обозначает число, количество предметов, порядок предметов при счёте и отвечает на вопросы <Span
        className="litera">сколько? который?</Span> (<Span className="litera">какой?</Span>).</P>
<P>Основные признаки имени числительного</P>
    <Table>
        <Row>
            <Col><Span className="table_razdel3">А) Общее грамматическое значение</Span></Col>
            <Col><Span className="table_razdel3">Примеры</Span></Col>
        </Row>
        <Row>
            <Col>Это число, количество предметов, порядок предметов при счёте.{'\n'} По значению и грамматическим
                признакам числительные делятся на два основных разряда:</Col>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col>
                <Li><P><Strong>количественные</Strong> числительные;</P></Li>
            </Col>
            <Col><Em>Два, двадцать один, пятьдесят, тысяча.</Em></Col>
        </Row>
        <Row>
            <Col>
                <Li><P><Strong>порядковые</Strong> числительные.</P></Li>
            </Col>
            <Col><Em>Второй, двадцать первый, пятидесятый, тысячный.</Em></Col>
        </Row>
        <Row>
            <Col>К количественным числительным близки по значению и морфологическим свойствам
                <Strong>собирательные</Strong> числительные.</Col>
            <Col><Em>Двое, трое, шестеро.</Em></Col>
        </Row>
        <Row>
            <Col>Особую группу представляют <Strong>дробные</Strong> числительные, которые обозначают не целые числа.
            </Col>
            <Col><Em>Полтора, две трети, шесть десятых.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="table_razdel3">Б) Морфологические признаки</Span></Col>
            <Col><Span className="table_razdel3">Примеры</Span></Col>
        </Row>
        <Row>
            <Col><Strong>Количественные</Strong> и <Strong>собирательные</Strong> числительные изменяются по падежам.
            </Col>
            <Col><Em>Два, двух, пятьдесят, пятидесяти.</Em></Col>
        </Row>
        <Row>
            <Col>Начальная форма количественных числительных &ndash; форма именительного падежа.</Col>
            <Col><Em>Два, тридцать, сто один.</Em></Col>
        </Row>
        <Row>
            <Col><Strong>Порядковые</Strong> числительные изменяются по родам, числам и падежам, подобно прилагательным.
            </Col>
            <Col><Em>Пятый, пятого; пятая, пятой; пятое, пятого; пятые, пятых.</Em></Col>
        </Row>
        <Row>
            <Col>Начальная форма порядковых числительных &ndash; единственное число, мужской род, именительный падеж.
            </Col>
            <Col><Em>Пятый.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="table_razdel3">В) Синтаксические признаки</Span></Col>
            <Col><Span className="table_razdel3">Примеры</Span></Col>
        </Row>
        <Row>
            <Col><Strong>Количественные</Strong> и <Strong>собирательные</Strong> числительные могут быть любым членом
                предложения. Сочетание количественного и собирательного числительного (в именительном падеже и
                винительном падеже) с существительным является одним членом предложения.</Col>
            <Col><Em><Span>Три стула</Span> стояли у стены</Em>;{'\n'} Ср.: <Em>Я
                    написал <Span className="uDouble">три письма</Span>;</Em>{'\n'} <Em>Я увидел <Span className="uDouble">троих
                        котят</Span></Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>Порядковое</Strong> числительное в предложении обычно бывает определением, реже &ndash;
                сказуемым, подобно имени прилагательному.</Col>
            <Col>Ср.: <Em>Я не получал <Span className="wavyline">второго</Span> письма; Это письмо уже <Span
                        className="uDashed">второе</Span>.</Em></Col>
        </Row>
    </Table>

<P><Strong><Span className="number">2.</Span></Strong> По строению числительные могут быть простыми, сложными и составными:
</P>

    <Li>
        <P><Strong>простое</Strong> числительное &ndash; это слово с одним корнем;</P>
        <Div className="primer">
            <P><Em>Пять, десять, сорок, сто, пятый, сотый.</Em></P>
        </Div>
    </Li>
    <Li>
        <P><Strong>сложное</Strong> числительное &ndash; слово с несколькими корнями;</P>
        <Div className="primer">
            <P><Em>Пятьдесят, восемьсот.</Em></P>
        </Div>
    </Li>
    <Li>
        <P><Strong>составное</Strong> числительное состоит из нескольких слов, каждое из которых может быть как простым,
            так и сложным.</P>
        <Div className="primer">
            <P><Em>Сто пять, сто пятый, шестьсот восемьдесят, шестьсот восемьдесят первый.</Em></P>
        </Div>
    </Li>
</View>