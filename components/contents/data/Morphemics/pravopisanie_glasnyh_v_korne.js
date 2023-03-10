import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const pravopisanie_glasnyh_v_korne = <View><P>Правописание гласных в корне включает пять типов правил:</P>
<P>1) правописание безударных гласных;{'\n'} 2) правописание корней с чередованием гласных;{'\n'} 3) употребление <Span
        className="litera">э</Span>;{'\n'} 4) правописание гласных после шипящих и <Span className="litera">ц</Span>;{'\n'} 5)
    употребление <Span className="litera">ы/и</Span> после приставок.</P>
<P>Правила 4&ndash;5 рассмотрены нами в п. 1.5, 1.8, 1.9, 1.12, 1.13. В данном пункте остановимся более подробно на тех,
    что не подвергались анализу.</P>
<P>2.3.1. Правописание безударных гласных в корне</P>
<Table>
    <Row>
        <Col>Правило</Col>
        <Col>Примеры</Col>
    </Row>
    <Row>
        <Col><Strong>1.</Strong> В безударном положении употребляется та буква, которая пишется в том же слоге, когда
            она находится под ударением.</Col>
        <Col><Em>Гром<Span>о</Span>здиться &ndash; гром<Span>о&#769;</Span>здкий, вообр<Span>а</Span>жать,
                обр<Span>а</Span>з &ndash; обр<Span>а&#769;</Span>зчик, раздр<Span>а</Span>жать &ndash;
                др<Span>а&#769;</Span>знит, ум<Span>о</Span>лять &ndash; м<Span>о&#769;</Span>лит, ум<Span>а</Span>лять
                &ndash; м<Span>а&#769;л</Span>ый.</Em></Col>
    </Row>
    <Row>
        <Col><Strong>2.</Strong> Если под ударением пишется <Span className="litera">ё</Span>, то без ударения в том же
            слоге пишется <Span className="litera">е</Span>.</Col>
        <Col><Em>Ч<Span>ё</Span>ркать &ndash; ч<Span>е</Span>ркнуть, п<Span>ё</Span>стрый &ndash; исп<Span>е</Span>щрить,
                тв<Span>ё</Span>рдый &ndash; затв<Span>е</Span>рдеть.</Em></Col>
    </Row>
    <Row>
        <Col><Strong>3.</Strong> В словах старославянского происхождения в безударном положении пишется
            неполногласное сочетание с одним гласным <Span className="litera">а&ndash;ра, ла</Span>; в параллельных
            исконно русских словах пишется полногласное сочетание с двумя гласными <Span className="litera">о&ndash;оро,
                оло</Span>.</Col>
        <Col><Em>Б<Span className="litera">р<Span>а</Span></Span>зды &ndash; б<Span
                    className="litera"><Span>о</Span>р<Span>о</Span></Span>зда, об<Span
                    className="litera">л<Span>а</Span></Span>ко &ndash; об<Span
                    className="litera"><Span>о</Span>л<Span>о</Span></Span>чка, ох<Span
                    className="litera">л<Span>а</Span></Span>ждение &ndash; х<Span
                    className="litera"><Span>о</Span>л<Span>о</Span></Span>д, возг<Span
                    className="litera">л<Span>а</Span></Span>с &ndash; г<Span
                    className="litera"><Span>о</Span>л<Span>о</Span></Span>с, ог<Span
                    className="litera">р<Span>а</Span></Span>да &ndash; ог<Span
                    className="litera"><Span>о</Span>р<Span>о</Span></Span>дить, г<Span
                    className="litera">л<Span>а</Span></Span>ва &ndash; г<Span
                    className="litera"><Span>о</Span>л<Span>о</Span></Span>ва, сок<Span
                    className="litera">р<Span>а</Span></Span>щать &ndash; к<Span
                    className="litera"><Span>о</Span>р<Span>о</Span></Span>ткий.</Em></Col>
    </Row>
    <Row>
        <Col><Strong>4.</Strong> Если правописание гласного в безударном положении нельзя проверить ударным
            положением, то написание гласного надо запомнить (или проверить его написание по словарю).</Col>
        <Col><Em>Возр<Span>а</Span>жать, нав<Span>а</Span>ждение, <Span>а</Span>ромат, п<Span>а</Span>норама,
                л<Span>а</Span>б<Span>и</Span>ринт, л<Span>о</Span>т<Span>е</Span>рея, б<Span>е</Span>тон,
                к<Span>а</Span>стрюля, пр<Span>и</Span>в<Span>и</Span>легия, эт<Span>и</Span>кет.</Em></Col>
    </Row>
</Table>
<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> Слово <Em>д<Span>о</Span>лина</Em> является
    однокоренным со словом <Em>д<Span className="litera">о</Span>л</Em>; слово <Em>препод<Span
            className="litera"><Span>а</Span></Span>ватель</Em> &ndash; со словом <Em>д<Span className="litera">а</Span>ть</Em>;
    слова <Em>од<Span>о</Span>леть,
        преод<Span>о</Span>леть</Em> &ndash; со словом <Em>д<Span className="litera">о</Span>ля</Em>.</P>
    <P><Strong>2)</Strong> Имена существительные <Em>к<Span className="litera">а</Span>мпания</Em> и <Em>к<Span
                className="litera">о</Span>мпания</Em> различаются по значению.</P>
    <Div className="primer"><P><Span className="litera">К<Span>а</Span>мпания</Span> &ndash; 1.
        &laquo;Совокупность военных операций; война в определённый период&raquo; (<Em>военная кампания, русско-японская
            кампания</Em>); 2. &laquo;Мероприятия, деятельность&raquo; (<Em>предвыборная кампания, посевная
            кампания</Em>).{'\n'} <Span className="litera">К<Span>о</Span>мпания</Span>
        &ndash; 1. &laquo;Общество, группа людей, проводящих вместе время&raquo; (дружная компания); 2. &laquo;Торговое
        или промышленное предприятие&raquo; (ср.: <Em>сталелитейная компания</Em>).</P></Div>
    <P><Strong>3)</Strong> Гласные <Span className="litera">о&ndash;а</Span> в корнях глаголов нельзя проверять при помощи
        формы несовершенного вида на <Span className="litera">-ывать</Span> (<Span className="litera">-ивать</Span>), ср.:
        <Em>раск<Span>о</Span>лет &ndash; раск<Span className="litera"><Span>а</Span></Span>лывать, гов<Span>о</Span>рить
            &ndash; разгов<Span className="litera"><Span>а</Span></Span>ривать</Em>.
    </P>
    <P><Strong>4)</Strong> В некоторых заимствованных словах с выделявшимся в прошлом суффиксом написание безударной
        гласной нельзя проверять однокоренным словом, если проверяемая и проверочная гласные относятся к разным по
        происхождению суффиксам, ср.:</P>
    <Div className="primer"><P><Em>интелл<Span className="litera">е</Span>кт &bull; интелл<Span
                className="litera">и</Span>гент,{'\n'}аккомпан<Span className="litera">е</Span>мент &bull; аккомпан<Span
                className="litera">и</Span>ровать,{'\n'}лид<Span className="litera">е</Span>р &bull; лид<Span
                className="litera">и</Span>ровать,{'\n'}трен<Span className="litera">е</Span>р &bull; трен<Span
                className="litera">и</Span>ровать,{'\n'}абон<Span className="litera">е</Span>мент &bull; абон<Span
                className="litera">и</Span>ровать,{'\n'}дезинф<Span className="litera">е</Span>кция &bull; дезинф<Span
                className="litera">и</Span>цировать.</Em></P></Div>
</Div>
<P><Strong>Примечание.</Strong> Читайте также о способах проверки безударных гласных в корне на странице: Как проверить слова с безударными гласными в корне?</P>
<P>2.3.2. Правописание корней с чередованием гласных</P>
<P>Корни с чередующимися гласными <Span className="litera">А</Span>/<Span className="litera">О</Span></P>
<P>1. Зависимость от ударения</P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
            <Col>Исключения</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Гар-/гор-</Span></Col>
            <Col>Независимо от того, какой гласный пишется под ударением (<Span className="litera">а</Span> или
                <Span className="litera">о</Span>), в безударном положении пишется <Span className="litera">о</Span>.
            </Col>
            <Col><Em>Заг<Span>а&#769;</Span>р &ndash; заг<Span>о</Span>релый, уг<Span>о</Span>реть,
                    пог<Span>о</Span>релец.</Em></Col>
            <Col><Em>Приг<Span>а</Span>рь, изг<Span>а</Span>рь, выг<Span>а</Span>рки.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Клан-/клон-</Span></Col>
            <Col><Em>Кл<Span>а&#769;</Span>няться, покло&#769;н &ndash; покл<Span>о</Span>ниться, скл<Span>о</Span>нять,
                    накл<Span>о</Span>нение, скл<Span>о</Span>нение.</Em></Col>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Твар-/твор-</Span></Col>
            <Col><Em>Тв<Span>а&#769;</Span>рь, тво&#769;рчество &ndash; тв<Span>о</Span>рить, сотв<Span>о</Span>рить,
                    претв<Span>о</Span>рить, притв<Span>о</Span>риться.</Em></Col>
            <Col><Em>Утв<Span>а</Span>рь.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Зар-/зор-</Span></Col>
            <Col>Независимо от того, какой гласный пишется под ударением (<Span className="litera">а</Span> или <Span
                    className="litera">о</Span>), в безударном положении пишется <Span className="litera">а</Span>.</Col>
            <Col><Em>З<Span>а&#769;</Span>рево, з<Span>о&#769;</Span>рька &ndash; з<Span>а</Span>ря,
                    з<Span>а</Span>рница, оз<Span>а</Span>рять.</Em></Col>
            <Col><Em>З<Span>о</Span>ревать, з<Span>о</Span>рянка.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Плав-/плов-</Span></Col>
            <Col>Независимо от того, какой гласный пишется под ударением (<Span className="litera">а</Span>, <Span
                    className="litera">о</Span>, или <Span className="litera">ы</Span>), в безударном положении пишется <Span
                    className="litera">а</Span>.</Col>
            <Col><Em>Пл<Span>а&#769;</Span>вать, пл<Span>ы&#769;</Span>ть &ndash; пл<Span>а</Span>вучесть,
                    попл<Span>а</Span>вок, жук-пл<Span>а</Span>вунец.</Em></Col>
            <Col><Em>Пл<Span>о</Span>вец, пл<Span>о</Span>вчиха;{'\n'} пл<Span>ы</Span>вуны</Em></Col>
        </Row>
    </Table>
<P>2. Зависимость от конечных согласных корня</P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
            <Col>Исключения</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Раст-</Span>{'\n'} <Span className="litera">Ращ-/рос-</Span></Col>
            <Col>Перед <Span className="litera">ст</Span> и <Span className="litera">щ</Span> пишется <Span
                    className="litera">а</Span>, перед <Span className="litera">с</Span> пишется <Span className="litera">о</Span>.
            </Col>
            <Col><Em>Р<Span>а</Span><Span className="litera">ст</Span>и, р<Span>а</Span><Span className="litera">ст</Span>ение,
                    выр<Span>а</Span><Span className="litera">щ</Span>ивать, нар<Span>а</Span><Span
                        className="litera">щ</Span>ение &ndash; выр<Span>о</Span><Span className="litera">с</Span>ший,
                    зар<Span>о</Span><Span className="litera">с</Span>ли, пор<Span>о</Span><Span
                        className="litera">с</Span>ль.</Em></Col>
            <Col>а) <Em>Р<Span>о</Span>стов, Р<Span>о</Span>стислав, р<Span>о</Span>сток, р<Span>о</Span>стовщик,
                    выр<Span>о</Span>сток</Em> (и производные от них, например:
                <Em>р<Span>о</Span>стовщический</Em>).{'\n'} б) <Em>отр<Span>а</Span>сль</Em> (и производные от них,
                например:
                <Em>отр<Span>а</Span>слевой</Em>).
            </Col>
        </Row>
        <Row>
            <Col><Span className="litera">Скак-/скоч-</Span></Col>
            <Col>Независимо от того, какой гласный пишется под ударением (<Span className="litera">а</Span> или <Span
                    className="litera">о</Span>), в безударном положении перед <Span className="litera">к</Span> пишется <Span
                    className="litera">а</Span>, перед <Span className="litera">ч</Span> пишется <Span className="litera">о</Span>.
            </Col>
            <Col><Em>Ск<Span>а</Span><Span className="litera">к</Span>ать, проск<Span>а</Span><Span
                        className="litera">к</Span>ать, на ск<Span>а</Span><Span className="litera">к</Span>у &ndash;
                    выск<Span>о</Span><Span className="litera">ч</Span>ка, заск<Span>о</Span><Span
                        className="litera">ч</Span>ить, выск<Span>о</Span><Span className="litera">ч</Span>ить.</Em></Col>
            <Col><Em>Ск<Span>а</Span>чу, ск<Span>а</Span>чок, ск<Span>а</Span>чи, вск<Span>а</Span>чь.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Лаг-/лож-</Span></Col>
            <Col>Перед <Span className="litera">г</Span> пишется <Span className="litera">а</Span>, перед <Span
                    className="litera">ж</Span> пишется <Span className="litera">о</Span>.</Col>
            <Col><Em>Сл<Span>а</Span><Span className="litera">г</Span>аемое, пол<Span>а</Span><Span
                        className="litera">г</Span>ать, разл<Span>а</Span><Span className="litera">г</Span>ать &ndash;
                    сл<Span>о</Span><Span className="litera">ж</Span>ить, пол<Span>о</Span><Span className="litera">ж</Span>ить,
                    разл<Span>о</Span><Span className="litera">ж</Span>ить.</Em></Col>
            <Col><Em>Пол<Span>о</Span>г</Em>.</Col>
        </Row>
    </Table>
<P>3. Зависимость от наличия суффикса <Span className="litera">-а-</Span></P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Кас-/кос-</Span></Col>
            <Col>Если за корнем следует суффикс <Span className="litera">-а-</Span>, то в корне пишется <Span
                    className="litera">а</Span>, если суффикса нет, то в корне пишется <Span className="litera">о</Span>.</Col>
            <Col><Em>К<Span>а</Span>с<Span className="litera">а</Span>ться, к<Span>а</Span>с<Span
                        className="litera">а</Span>тельная &ndash; к<Span>о</Span>снуться, прик<Span>о</Span>снуться.</Em>
            </Col>
        </Row>
    </Table>
<P>4. Зависимость от значения</P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
            <Col>Исключения</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Мак-/мок-</Span></Col>
            <Col>Корень <Span className="litera">мак-</Span> (<Span className="litera">мач-</Span>) пишется в словах, имеющих
                значение &laquo;погружать в жидкость&raquo;.{'\n'} Корень <Span className="litera">мок-</Span> (<Span
                    className="litera">моч-</Span>) пишется в словах, имеющих значение &laquo;пропускать жидкость,
                становиться мокрым&raquo;.</Col>
            <Col><Em>Обм<Span>а</Span>кнуть перо в чернила</Em>
                (&laquo;погрузить&raquo;), <Em>м<Span>а</Span>кать хлеб в
                    сметану</Em> (&laquo;погружать&raquo;) &ndash; <Em>пром<Span>о</Span>кнуть пятно</Em>
                (&laquo;пропустить
                жидкость&raquo;), <Em>пром<Span>о</Span>кательная бумага</Em>
                (&laquo;пропускающая жидкость&raquo;), <Em>см<Span>о</Span>чить</Em>
                (&laquo;сделать мокрым&raquo;).</Col>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Равн-/ровн-</Span></Col>
            <Col>Корень <Span className="litera">равн-</Span> пишется в словах, имеющих значение &laquo;одинаковый, наравне,
                равный&raquo;.{'\n'} Корень <Span className="litera">ровн-</Span> пишется в словах, имеющих значение
                &laquo;гладкий, прямой&raquo;.</Col>
            <Col><Em>Пор<Span>а</Span>вняться</Em> (&laquo;оказаться на одной линии,
                в одинаковом положении&raquo;), <Em>ур<Span>а</Span>внение</Em>
                (&laquo;математическое равенство&raquo;) &ndash; <Em>подр<Span>о</Span>внять кусты</Em> (&laquo;сделать
                ровными&raquo;),
                <Em>разр<Span>о</Span>внять песок</Em> (&laquo;сделать ровным,
                гладким&raquo;).
            </Col>
            <Col><Em>Р<Span>а</Span>внина, пор<Span>о</Span>вну, ур<Span>о</Span>вень, р<Span>о</Span>весник.</Em></Col>
        </Row>
    </Table>
<P>Корни с чередующимися гласными <Span className="litera">И</Span>/<Span className="litera">Е</Span></P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Span className="litera">Бир-/бер-</Span></Col>
            <Col>
                <P>Если за корнем следует суффикс <Span className="litera">-а-</Span>, то в корне
                    пишется <Span className="litera">и</Span>, если суффикса нет, то в корне пишется <Span
                        className="litera">е</Span>.</P>
            </Col>
            <Col><Em>Заб<Span>и</Span>р<Span className="litera">а</Span>ть &ndash;
                    заб<Span>е</Span>ру.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Жиг-/жег-</Span></Col>
            <Col><Em>Выж<Span>и</Span>г<Span className="litera">а</Span>ть &ndash;
                    выж<Span>е</Span>гший.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Стил-/стел-</Span></Col>
            <Col><Em>Заст<Span>и</Span>л<Span className="litera">а</Span>ть &ndash;
                    пост<Span>е</Span>лить.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Блист-/блест-</Span></Col>
            <Col><Em>Бл<Span>и</Span>ст<Span className="litera">а</Span>ть &ndash;
                    бл<Span>е</Span>стеть.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Мир-/мер-</Span></Col>
            <Col><Em>Ум<Span>и</Span>р<Span className="litera">а</Span>ть &ndash; ум<Span>е</Span>реть.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Тир-/тер-</Span></Col>
            <Col><Em>Ст<Span>и</Span>р<Span className="litera">а</Span>ть &ndash; ст<Span>е</Span>реть.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Дир-/дер-</Span></Col>
            <Col><Em>Разд<Span>и</Span>р<Span className="litera">а</Span>ть &ndash;
                    разд<Span>е</Span>рёт.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Пир-/пер-</Span></Col>
            <Col><Em>Зап<Span>и</Span>р<Span className="litera">а</Span>ть &ndash;
                    зап<Span>е</Span>реть.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">Чит-/чет-</Span></Col>
            <Col>
                <P><Em>Выч<Span>и</Span>т<Span className="litera">а</Span>ть &ndash;
                        выч<Span>е</Span>ты.</Em></P>
                <Strong>Исключения:</Strong> <Em>соч<Span>е</Span>тание, соч<Span>е</Span>тать, ч<Span>е</Span>та.</Em>
            </Col>
        </Row>
    </Table>
<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> Чередование <Span className="litera">и</Span>/<Span className="litera">е</Span> в корнях
    <Span className="litera">мир-</Span>/<Span className="litera">мер-</Span> характерно только для слов со значениями
    &laquo;мёртвый&raquo;, &laquo;умирать&raquo;, &laquo;замереть, стать неподвижным&raquo; и т.п.</P>
    <Div className="primer">
        <P><Em>Вым<Span className="litera">и</Span>рать &ndash; вым<Span className="litera">е</Span>реть, зам<Span
                    className="litera">и</Span>рать &ndash; зам<Span className="litera">е</Span>реть.</Em></P>
    </Div><P>
    В словах с корнем <Span className="litera">мир-</Span> со значением &laquo;отсутствие войны, вражды&raquo; всегда
    пишется <Span className="litera">и</Span>.</P>
    <Div className="primer">
        <P><Em>М<Span className="litera">и</Span>р, м<Span className="litera">и</Span>рный, усм<Span
                    className="litera">и</Span>рять.</Em></P>
    </Div><P>
    В словах с корнем <Span className="litera">мер-</Span> со значением &laquo;мерить, измерять&raquo; всегда пишется <Span
        className="litera">е</Span>.</P>
    <Div className="primer">
        <P><Em>М<Span className="litera">е</Span>рить, изм<Span className="litera">е</Span>рять, прим<Span
                    className="litera">е</Span>рять платье, м<Span className="litera">е</Span>рило.</Em></P>
    </Div><P>
    <Strong>2)</Strong> Чередование <Span className="litera">и</Span>/<Span className="litera">е</Span> в корнях <Span
        className="litera">пир-</Span>/<Span className="litera">пер-</Span> характерно только для слов со значениями
    &laquo;закрыть&raquo;, &laquo;открыть&raquo;, &laquo;двигать&raquo;, &laquo;выдаться вперёд, выдавиться&raquo; и
    т.п.</P>
    <Div className="primer">
        <P><Em>Зап<Span className="litera">и</Span>рать &ndash; зап<Span className="litera">е</Span>реть, отп<Span
                    className="litera">и</Span>рать &ndash; отп<Span className="litera">е</Span>реть, вып<Span
                    className="litera">и</Span>рать &ndash; вып<Span className="litera">е</Span>реть.</Em></P>
    </Div>
    <P>В словах с корнем <Span className="litera">пир-</Span> со значением &laquo;обильное угощение, пиршество&raquo; всегда
        пишется <Span className="litera">и</Span>.</P>
    <Div className="primer"><P><Em>П<Span className="litera">и</Span>р, п<Span className="litera">и</Span>ровать.</Em></P></Div>
</Div>
<P>Чередование <Span className="litera">A(Я)</Span>/<Span className="litera">им(ин)</Span></P>
    <Table>
        <Row>
            <Col>Корни</Col>
            <Col>Правило</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Strong><Em>Корни с чередованием <Span className="litera">а(я)</Span>/<Span
                            className="litera">им(ин)</Span></Em></Strong></Col>
            <Col>Если за корнем следует суффикс <Span className="litera">-а-</Span>, то в корне пишется <Span
                    className="litera">им</Span>(<Span className="litera">ин</Span>), если суффикса нет, то в корне пишется
                <Span className="litera">а</Span>/<Span className="litera">я</Span>.
            </Col>
            <Col><Em>Пож<Span>им</Span><Span className="litera">а</Span>ть &ndash;
                    пож<Span>а</Span>ть, наж<Span>им</Span><Span className="litera">а</Span>ть &ndash; наж<Span>а</Span>ть,
                    разм<Span>ин</Span><Span className="litera">а</Span>ть &ndash; разм<Span>я</Span>ть,
                    пон<Span>им</Span><Span className="litera">а</Span>ть &ndash; пон<Span>я</Span>ть,
                    нач<Span>ин</Span><Span className="litera">а</Span>ть &ndash; нач<Span>а</Span>ть,
                    пом<Span>ин</Span><Span className="litera">а</Span>ть &ndash; пам<Span>я</Span>ть.</Em></Col>
        </Row>
    </Table>
<P>{'\n'}{'\n'}</P>
<P>2.3.3. Употребление буквы <Span className="litera">Э</Span></P>
<P>Как отмечалось (см. п. 1.5), гласная буква <Span className="litera">е</Span> используется, прежде всего, после
    мягких согласных и в начале слова, после гласных, если обозначает два звука <Span
        className="litera0">[&nbsp;j&nbsp;]</Span> + гласный (<Em><Span className="litera">е</Span>да, кра<Span
            className="litera">е</Span>вед</Em>).</P>
<P>В то же время по традиции во многих словах после твёрдых согласных и после гласных (там, где нет звука <Span
        className="litera0">[&nbsp;j&nbsp;]</Span>) также пишется <Span className="litera">е</Span>, а не <Span
        className="litera">э</Span>.</P>
<P><Strong>При выборе гласной следует пользоваться следующими правилами:</Strong></P>
    <Table>
        <Row>
            <Col>Пишется <Span className="litera">Е</Span></Col>
            <Col>Пишется <Span className="litera">Э</Span></Col>
        </Row>
        <Row>
            <Col><Strong>1.</Strong> В иноязычных словах после согласного, например: <Em>кашне, стенд, леди, денди,
                    Мери</Em>.</Col>
            <Col><Strong>1.</Strong> После согласных в некоторых иноязычных словах: <Em>мэр, сэр, пэр</Em> и производных
                от них (<Em>мэрия, пэрство</Em>), в некоторых именах собственных: <Em>Бэкон, Бэла, Улан-Удэ</Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>2.</Strong> После гласной <Span className="litera">и</Span>, например: <Em>диета, реквием,
                    кариес</Em>.</Col>
            <Col><Strong>2.</Strong> После гласных (кроме <Span className="litera">и</Span>) в соответствии с произношением
                пишется <Span className="litera">э</Span>, например: <Em>силуэт, поэзия, дуэт</Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>3.</Strong> В словах: <Em>проект, проекция, реестр, феерия</Em>.</Col>
            <Col><Strong>3.</Strong> В начале слова в соответствии с произношением пишется <Span className="litera">э</Span>
                (<Em>это, экзамен, этаж, экономика</Em>) и в производных от них (<Em>отэкзаменовать, сэкономить</Em>).
            </Col>
        </Row>
    </Table></View>