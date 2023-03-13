import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../../tags";
import { Table, Col, Row } from "../../table";

export const pravopisanie_glagolov = <View><P><Strong>Правописание глаголов включает несколько типов правил:</Strong></P>
<P>1) правописание гласных в глагольных формах;{'\n'} 2) правописание <Span className="litera">ь</Span> в глагольных формах.
</P>
<P>Поскольку использование <Span className="litera">ь</Span> в глагольных формах рассматривалось в п. 1.11. Употребление букв Ь и Ъ, в данном пункте оно специально разбираться не будет.</P>
<P>Правописание гласных в глагольных формах:</P>
<P><Strong>а)</Strong> глаголы I спряжения в настоящем и простом будущем времени в личных окончаниях имеют гласные <Span
        className="litera">е</Span> и <Span className="litera">у(ю)</Span>;</P>
<Div className="primer">
    <P><Em>Чита<Span className="litera">е</Span>т, чита<Span className="litera">е</Span>м, чита<Span
                className="litera">ю</Span>т.</Em></P>
</Div>
<P>глаголы II спряжения &ndash; гласные <Span className="litera">и</Span> и <Span className="litera">а(я)</Span>;</P>
<Div className="primer">
    <P><Em>Выход<Span className="litera">и</Span>т, выход<Span className="litera">и</Span>м, выход<Span
                className="litera">я</Span>т.</Em></P>
</Div>
<P><Strong>б)</Strong> глаголы во 2-м лице повелительного наклонения независимо от спряжения могут иметь только один
    суффикс &ndash; <Span className="litera">и</Span>;</P>
<Div className="primer">
    <P>Ср.: <Em>Если вы стукн<Span className="litera"><Span>е</Span>те</Span> в окно,
            она услышит</Em> &ndash; глагол I спряжения в простом будущем времени с окончанием <Span
            className="litera">-ете</Span>; <Em>Пожалуйста, стукн<Span className="litera">и</Span>те в окно!</Em> &ndash; глагол
        в повелительном наклонении с суффиксом <Span className="litera">-и</Span> и суффиксом (или окончанием)
        множественного числа <Span className="litera">-те</Span>;</P>
</Div>
<P><Strong>в)</Strong> в прошедшем времени перед суффиксом <Span className="litera">-л</Span> пишется та же гласная, что
    перед <Span className="litera">-ть</Span> в инфинитиве;</P>
<Div className="primer">
    <P><Em>Ср.: кле<Span className="litera">и</Span>ть &ndash; кле<Span className="litera">и</Span>л; вид<Span
                className="litera">е</Span>ть &ndash; вид<Span className="litera">е</Span>л.</Em></P>
</Div>
    <Table>
        <Row>
            <Col><Strong>Нельзя проверять правописание гласной в прошедшем времени по спряжению глагола!</Strong></Col>
        </Row>
    </Table>
<Div className="primer">
    <P>Ср.: <Em>он вид<Span className="litera"><Span>и</Span>т</Span></Em> (настоящее
        время, глагол II спряжения) &ndash; <Em>он вид<Span className="litera"><Span
                   >е</Span></Span>л</Em> (прошедшее время от <Em>вид<Span
                className="litera"><Span>е</Span></Span>ть</Em>); <Em>он та<Span
                className="litera"><Span>е</Span>т</Span></Em> (настоящее время, глагол
        I спряжения) &ndash; <Em>он та<Span className="litera"><Span
                   >я</Span></Span>л</Em> (прошедшее время от <Em>та<Span
                className="litera"><Span>я</Span></Span>ть</Em>);</P>
</Div>
<P><Strong>г)</Strong> переходные глаголы с сочетанием приставок или с приставкой <Span
        className="litera">обез-/обес-</Span> в инфинитиве и в прошедшем времени имеют суффикс <Span
        className="litera">-и-</Span>, непереходные &ndash; суффикс <Span className="litera">-е-</Span>;</P>
<Div className="primer">
    <P>Ср.: <Em>обессил<Span className="litera">и</Span>ть</Em> (кого? что?) <Em>врага</Em>; <Em>я обессил<Span
                className="litera">и</Span>л</Em> (кого? что?) <Em>противника &ndash; обессил<Span className="litera">е</Span>ть
            самому; я вконец обессил<Span className="litera">е</Span>л</Em>.</P>
</Div>
<Div className="alert"><P><Strong>Обратите внимание</Strong> на формы настоящего и простого будущего времени непереходных
    глаголов:{'\n'}</P>
    <Div className="primer"><P><Em>Я сам обессил<Span className="litera">е</Span>ю; я выздоров<Span className="litera">е</Span>ю.</Em></P>
    </Div>
</Div>
<P><Strong>д)</Strong> глаголы типа <Span className="litera">лед<Span>е</Span>неть,
        олед<Span>е</Span>неть, окров<Span
           >е</Span>нить</Span> образованы не от прилагательного с суффиксом <Span
        className="litera">-ян-</Span>, а от существительного, поэтому имеют после корня (в глагольном суффиксе) гласную
    <Span className="litera">е</Span>:</P>

    <Li><P>переходные глаголы &ndash; <Span className="litera">-ени(ть)</Span>;</P>
        <Div className="primer">
            <P><Em>Лед<Span className="litera"><Span>е</Span>ни</Span>ть душу,
                    окров<Span className="litera"><Span>е</Span>ни</Span>ть руку.</Em>
            </P>
        </Div>
    </Li>
    <Li><P>непереходные глаголы &ndash; <Span className="litera">-ене(ть)</Span>;</P>
        <Div className="primer">
            <P><Em>Вконец облед<Span className="litera"><Span>е</Span>не</Span>ть,
                    вконец окост<Span className="litera"><Span>е</Span>не</Span>ть.</Em>
            </P>
        </Div>
    </Li>

<P><Strong>е)</Strong> в инфинитиве и в прошедшем времени глагола пишутся суффиксы <Span className="litera">-ова-,
        -ева-</Span>, если в 1-м лице единственного числа настоящего или простого будущего времени эти суффиксы
    чередуются с суффиксами <Span className="litera">-у(ю)</Span>, <Span className="litera">-ю(ю)</Span>.</P>
<Div className="primer">
    <P>Ср.: <Em>завед<Span className="litera"><Span>о</Span>ва</Span>ть &ndash;
            завед<Span className="litera">у</Span>ю; гор<Span className="litera"><Span
                   >е</Span>ва</Span>ть &ndash; гор<Span
                className="litera">ю</Span>ю.</Em></P>
</Div>
<P>Если такого чередования нет, то пишутся суффиксы <Span className="litera">-ыва-, -ива-</Span>;</P>
<Div className="primer">
    <P>Ср.: <Em>перепис<Span className="litera"><Span>ы</Span>ва</Span>ть &ndash;
            перепис<Span className="litera"><Span>ы</Span>ва</Span>ю, переплач<Span
                className="litera"><Span>и</Span>ва</Span>ть &ndash; переплач<Span
                className="litera"><Span>и</Span>ва</Span>ю.</Em></P>
</Div>
<P><Strong>ж)</Strong> глаголы, оканчивающиеся на ударяемые <Span className="litera">-ва&#769;ть, -ва&#769;ю &nbsp;</Span>,
    имеют суффикс <Span className="litera">-ва-</Span>. Перед суффиксом <Span className="litera">-ва-</Span> пишется та же
    гласная, что и в неопределённой форме мотивирующих глаголов без этого суффикса.</P>
<Div className="primer">
    <P>Ср.: <Em>зал<Span className="litera"><Span>и</Span></Span>ть &rarr; зал<Span
                className="litera"><Span>и</Span>ва&#769;ть</Span>; преодол<Span
                className="litera"><Span>е</Span></Span>ть &rarr; преодол<Span
                className="litera"><Span>е</Span>ва&#769;ть</Span>.</Em></P>
    <P><Strong>Исключения:</Strong> <Em>затм<Span className="litera">е</Span>вать</Em> (от <Em>затм<Span
                className="litera">и</Span>ть</Em>), <Em>продл<Span className="litera">е</Span>вать</Em> (от <Em>продл<Span
                className="litera">и</Span>ть</Em>), <Em>застр<Span className="litera">е</Span>вать</Em> (от <Em>застр<Span
                className="litera">я</Span>ть</Em>).</P>
</Div></View>