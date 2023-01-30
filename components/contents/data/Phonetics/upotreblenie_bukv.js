import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const upotreblenie_bukv = <View><P>В русском языке нет двух разновидностей букв для обозначения твёрдых согласных и мягких согласных. На письме парные
    твёрдые и мягкие согласные обозначаются одной и той же буквой (см. п. 1.5. Звуки речи и буквы).</P>
    <P>Для обозначения на письме мягкого согласного в русском языке есть специальная буква <Span className="litera">ь</Span>
        (<Strong>мягкий знак</Strong>, или &laquo;ерь&raquo;).</P>
    <Div className="primer">
        <P>Ср.: <Em>стол &ndash; столь, банка &ndash; банька.</Em></P>
    </Div>
    <Table>
        <Row>
            <Col><Span className="litera">Ь</Span> пишется</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Strong>1.</Strong> На конце слова.</Col>
            <Col><Em>Ни<Span className="litera">ть</Span></Em> [н&rsquo;и&#769;<Span className="litera0">т&rsquo;</Span>],
                <Em>се<Span className="litera">мь</Span></Em> [с&rsquo;э&#769;<Span className="litera0">м&rsquo;</Span>].
            </Col>
        </Row>
        <Row>
            <Col><Strong>2.</Strong> В середине слова после мягкого согласного перед твёрдым согласным.</Col>
            <Col><Em>Су<Span className="litera">дьб</Span>а</Em> [су<Span className="litera0">д&rsquo;б</Span>а&#769;], <Em><Span
                className="litera">тьм</Span>а</Em> [<Span className="litera0">т&rsquo;м</Span>а&#769;].</Col>
        </Row>
        <Row>
            <Col><Strong>3.</Strong> В середине слова между двумя мягкими согласными в том случае, если при изменении
                слова или в родственных словах второй согласный становится твёрдым, а первый сохраняет свою мягкость.
            </Col>
            <Col><Em>Ку<Span className="litera">зьм</Span>ич</Em> [Ку<Span
                className="litera0">з&rsquo;м&rsquo;</Span>и&#769;ч&rsquo;] &ndash; <Em>Ку<Span
                    className="litera">зьм</Span>а</Em> [Ку<Span className="litera0">з&rsquo;м</Span>а&#769;], но:
                <Em>ба<Span className="litera">нт</Span>ик</Em> [ба&#769;<Span className="litera0">н&rsquo;т&rsquo;</Span>ик]
                &ndash; <Em>ба<Span className="litera">нт</Span></Em> [ба&#769;<Span className="litera0">нт</Span>].
            </Col>
        </Row>
        <Row>
            <Col><Strong>4.</Strong> После мягкого согласного <Span className="litera">л</Span> <Span
                className="litera0">[л&rsquo;]</Span> перед любыми согласными.</Col>
            <Col><Em>Ба<Span className="litera">ль</Span>ный</Em> [ба&#769;<Span className="litera0">л&rsquo;</Span>ныj],
                <Em>се<Span className="litera">ль</Span>дь</Em> [с&rsquo;э&#769;<Span
                    className="litera0">л&rsquo;</Span>д&rsquo;].
            </Col>
        </Row>
        <Row>
            <Col><Strong>5.</Strong> В формах творительного падежа множественного числа.</Col>
            <Col><Em>Люд<Span className="litera">ьми</Span>, дет<Span className="litera">ьми</Span>, лошад<Span
                className="litera">ьми</Span></Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>6.</Strong> В середине числительных, оканчивающихся на <Span className="litera">-десят, -сот</Span>.
            </Col>
            <Col><Em>Пят<Span className="litera">ьдесят</Span>, девят<Span className="litera">ьсот</Span>.</Em></Col>
        </Row>
        <Row>
            <Col><Strong>7.</Strong> На конце числительных, оканчивающихся на <Span className="litera">-дцать</Span>.</Col>
            <Col><Em>Одинна<Span className="litera">дцать</Span>, пятна<Span className="litera">дцать</Span></Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>8.</Strong> В прилагательных, образованных от названий месяцев с помощью суффикса <Span
                className="litera">-ск</Span>.</Col>
            <Col><Em>Сентябр<Span className="litera">ь</Span>ский, октябр<Span className="litera">ь</Span>ский</Em> (но:
                <Em>январский</Em>).
            </Col>
        </Row>
    </Table>

    <Table>
        <Row>
            <Col><Span className="litera">Ь</Span> не пишется{'\n'}в сочетаниях</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Span className="litera">-чк-</Span></Col>
            <Col><Em>Бо<Span className="litera">чк</Span>а, ре<Span className="litera">чк</Span>а, пе<Span
                className="litera">чк</Span>а.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-чн-</Span></Col>
            <Col><Em>Коне<Span className="litera">чн</Span>ый, серде<Span className="litera">чн</Span>ый</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-нч-</Span></Col>
            <Col><Em>Ве<Span className="litera">нч</Span>ик, ня<Span className="litera">нч</Span>ить.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-нщ-</Span></Col>
            <Col><Em>Ба<Span className="litera">нщ</Span>ик, каме<Span className="litera">нщ</Span>ик.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-рщ-</Span></Col>
            <Col><Em>Фона<Span className="litera">рщ</Span>ик, сва<Span className="litera">рщ</Span>ик.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-рч-</Span></Col>
            <Col><Em>Испо<Span className="litera">рч</Span>енный.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-ст-</Span></Col>
            <Col><Em>Мо<Span className="litera">ст</Span>ик, хво<Span className="litera">ст</Span>ик.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-нт-</Span></Col>
            <Col><Em>Ви<Span className="litera">нт</Span>ик, ба<Span className="litera">нт</Span>ик.</Em></Col>
        </Row>
        <Row>
            <Col><Span className="litera">-щн-</Span></Col>
            <Col><Em>Помо<Span className="litera">щн</Span>ик.</Em></Col>
        </Row>
    </Table>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><Strong>1)</Strong> Необходимо различать слова: <Em>нян<Span className="litera">ь</Span>ка</Em> и
        <Em>ня<Span className="litera">нч</Span>ить</Em>; <Em>тон<Span className="litera">ь</Span>ше</Em> и <Em>то<Span
            className="litera">нч</Span>айший</Em>.
        <View>
            <Li>
                <P>В словах <Em>нян<Span className="litera">ь</Span>ка, тон<Span className="litera">ь</Span>ше</Em> второй
                    согласный
                    твёрдый, мягкость первого согласного обозначается буквой <Span className="litera">ь</Span>.</P>
            </Li>
            <Li>В словах <Em>ня<Span className="litera">нч</Span>ить, то<Span className="litera">нч</Span>айший</Em> есть
                сочетание
                <Span className="litera">нч</Span>, которое пишется без <Span className="litera">ь</Span>.
            </Li>
        </View>
        <P><Strong>2)</Strong> <Span className="litera">Ь</Span> не пишется между двумя <Span className="litera">л</Span> и
            двумя
            <Span className="litera">н</Span>.
        </P>
        <Div className="primer"><Em>А<Span className="litera">лл</Span>ея, це<Span className="litera">лл</Span>юлоза, ра<Span
            className="litera">нн</Span>ий.</Em></Div>
    </Div>
    <P>1.11.2. Употребление <Em>Ь</Em> для обозначения грамматических форм</P>
    <P>Мягкий знак, или ерь (<Span className="litera">ь</Span>), может употребляться как показатель определённой
        грамматической
        формы.</P>
    <Table>
        <Row>
            <Col><Span className="litera">Ь</Span> пишется</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Strong>1.</Strong> После шипящих в именах существительных женского рода III склонения в форме
                единственного числа именительного и винительного падежа.</Col>
            <Col><Em>Но<Span className="litera">чь</Span></Em> [но&#769;<Span className="litera0">ч&rsquo;</Span>], <Em>ти<Span
                className="litera">шь</Span></Em> [т&rsquo;и&#769;<Span className="litera0">ш</Span>].</Col>
        </Row>
        <Row>
            <Col><Strong>2.</Strong> После шипящих в наречиях (исключения: <Em>уж, замуж, невтерпёж</Em>).</Col>
            <Col><Em>Спло<Span className="litera">шь</Span></Em> [спло&#769;<Span className="litera0">ш</Span>], <Em>вска<Span
                className="litera">чь</Span></Em> [фска&#769;<Span className="litera0">ч&rsquo;</Span>].</Col>
        </Row>
        <Row>
            <Col><Strong>3.</Strong> После шипящих во втором лице единственного числа глаголов настоящего и простого
                будущего времени &ndash; вопросы <Em>что делаешь? что сделаешь?</Em></Col>
            <Col><Em>Идё<Span className="litera">шь</Span></Em> [ид&rsquo;о&#769;<Span className="litera0">ш</Span>],
                <Em>вози<Span className="litera">шь</Span></Em> [во&#769;з&rsquo;и<Span className="litera0">ш</Span>].
            </Col>
        </Row>
        <Row>
            <Col><Strong>4.</Strong> После шипящих и других согласных в повелительном наклонении &ndash; вопросы <Em>что
                делай(те)? что сделай(те)?</Em></Col>
            <Col><Em>Съе<Span className="litera">шь</Span></Em> [сjэ&#769;<Span className="litera0">ш</Span>], <Em>съе<Span
                className="litera">шь</Span>те</Em>; <Em>вста<Span className="litera">нь</Span></Em> [фста&#769;<Span
                    className="litera0">н&rsquo;</Span>], <Em>вста<Span className="litera">нь</Span>те</Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>5.</Strong> В неопределённой форме глагола (после <Span className="litera">т</Span> и <Span
                className="litera">ч</Span>) &ndash; вопросы <Em>что делать? что сделать?</Em></Col>
            <Col><Em>Бра<Span className="litera">ть</Span></Em> [бра&#769;<Span className="litera0">т&rsquo;</Span>],
                <Em>бра<Span className="litera">ть</Span>ся, стри<Span className="litera">чь</Span></Em> [стр&rsquo;и&#769;<Span
                    className="litera0">ч&rsquo;</Span>], <Em>стри<Span className="litera">чь</Span>ся</Em>.
            </Col>
        </Row>
        <Row>
            <Col><Strong>6.</Strong> В родительном падеже множественного числа существительных на <Span
                className="litera">-ня</Span> (I склонение), если перед <Em>-ня</Em> стоит гласная, а также в четырёх
                существительных-исключениях (<Em>барышня, боярышня, деревня, кухня</Em>).</Col>
            <Col><Em>Ябло<Span className="litera">ня</Span> &ndash; ябло<Span className="litera">нь</Span>, рабы<Span
                className="litera">ня</Span> &ndash; рабы<Span className="litera">нь</Span>.</Em>{'\n'} <Em>Бары<Span
                    className="litera">шня</Span> &ndash; барыше<Span className="litera">нь</Span>, бояры<Span
                        className="litera">шня</Span> &ndash; боярыше<Span className="litera">нь</Span>, дере<Span
                            className="litera">вня</Span> &ndash; дереве<Span className="litera">нь</Span>, ку<Span
                                className="litera">хня</Span> &ndash; кухо<Span className="litera">нь</Span>.</Em></Col>
        </Row>
    </Table>
    <Table>
        <Row>
            <Col><Span className="litera">Ь</Span> не пишется</Col>
            <Col>Примеры</Col>
        </Row>
        <Row>
            <Col><Strong>1.</Strong> После шипящих в именах существительных мужского рода II склонения в форме
                единственного числа именительного падежа.</Col>
            <Col><Em>Но<Span className="litera">ж</Span></Em> [но&#769;<Span className="litera0">ш</Span>], <Em>вра<Span
                className="litera">ч</Span></Em> [вра&#769;<Span className="litera0">ч&rsquo;</Span>].</Col>
        </Row>
        <Row>
            <Col><Strong>2.</Strong> После шипящих в краткой форме имён прилагательных (мужской род).</Col>
            <Col><Em>Горя<Span className="litera">ч</Span>, горю<Span className="litera">ч</Span></Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>3.</Strong> После шипящих в трёх наречиях-исключениях.</Col>
            <Col><Em>У<Span className="litera">ж</Span>, заму<Span className="litera">ж</Span>, невтерпё<Span
                className="litera">ж</Span>.</Em></Col>
        </Row>
        <Row>
            <Col><Strong>4.</Strong> После шипящих в родительном падеже множественного числа существительных женского
                рода на <Span className="litera">-а</Span> (I склонение).</Col>
            <Col><Em>Ту<Span className="litera">ча</Span> &ndash; ту<Span className="litera">ч</Span>, ро<Span
                className="litera">ща</Span> &ndash; ро<Span className="litera">щ</Span>.</Em></Col>
        </Row>
        <Row>
            <Col><Strong>5.</Strong> В родительном падеже множественного числа существительных на <Span
                className="litera">-ня</Span> (I склонение), если перед <Span className="litera">-ня</Span> стоит согласная
                (исключения: <Em>барышня, боярышня, деревня, кухня</Em>).</Col>
            <Col><Em>Ба<Span className="litera">шня</Span> &ndash; баше<Span className="litera">н</Span>, ви<Span
                className="litera">шня</Span> &ndash; више<Span className="litera">н</Span></Em>.</Col>
        </Row>
        <Row>
            <Col><Strong>6.</Strong> В глаголах в форме третьего лица единственного и множественного числа настоящего и
                простого будущего времени &ndash; вопросы <Em>что делает? что сделает? что делают? что сделают?</Em>
            </Col>
            <Col><Em>Он наде<Span className="litera">ет</Span>ся, ему не вер<Span className="litera">ит</Span>ся, они наде<Span
                className="litera">ют</Span>ся.</Em></Col>
        </Row>
    </Table>
    <h2>1.11.3. Употребление разделительных <Em>Ь</Em> и <Em>Ъ</Em></h2>
    <P>Как отмечалось, разделительные <Span className="litera">ъ</Span> и <Span className="litera">ь</Span> сигнализируют о
        наличии
        в слове звука <Span className="litera0">[ j ]</Span> (после согласной буквы и перед гласными буквами <Span
            className="litera">е, ё, ю, я</Span>).</P>
    <P><Strong><Span className="number">1.</Span></Strong> Разделительный <Span className="litera">Ъ</Span> пишется после
        согласного
        перед буквами <Span className="litera">е, ё, ю, я</Span> в следующих случаях:</P>
    <View>
        <Li>
            <P>после приставки, оканчивающейся на согласную;</P>
            <Div className="primer">
                <P><Em>В<Span className="litera">ъ</Span>езд, пред<Span className="litera">ъ</Span>юбилейный, об<Span
                    className="litera">ъ</Span>явить, об<Span className="litera">ъ</Span>ём.</Em></P>
            </Div>
        </Li>
        <Li>
            <P>в сложных словах, первую часть которых составляют числительные <Span className="litera">двух-, трёх-,
                четырёх-</Span>;</P>
            <Div className="primer">
                <P><Em><Span className="litera">Двухъ</Span>ярусный, <Span className="litera">трёхъ</Span>ярусный.</Em></P>
            </Div>
        </Li>
        <Li>
            <P>в иноязычных по происхождению словах после приставки на согласную: <Span className="litera">ад-, диз-, ин-,
                интер-, кон-, контр-, об-, суб-, супер-, транс-</Span> или составной частицей <Span
                    className="litera">пан-</Span>.</P>
            <Div className="primer">
                <P><Em><Span className="litera">Адъ</Span>ютант, <Span className="litera">дизъ</Span>юнкция, <Span
                    className="litera">инъ</Span>екция, <Span className="litera">интеръ</Span>екция, <Span
                        className="litera">конъ</Span>юнкция, <Span className="litera">контръ</Span>ярус, <Span
                            className="litera">объ</Span>ект, <Span className="litera">субъ</Span>ект, <Span
                                className="litera">трансъ</Span>европейский, <Span className="litera">панъ</Span>европейский.</Em>
                </P>
            </Div>
        </Li>
    </View>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><Strong>1)</Strong> Буква <Span className="litera">ъ</Span> не пишется перед буквами <Span
        className="litera">а, о, у, э, и, ы</Span>.
        <Div className="primer">
            <P>Ср.: <Em><Span className="litera">меж</Span>атомный, <Span className="litera">контр</Span>удар, <Span
                className="litera">транс</Span>океанский, <Span className="litera">трёх</Span>этажный.</Em></P>
        </Div>
        <P><Strong>2)</Strong> Буква <Span className="litera">ъ</Span> не пишется в середине слова (не после приставки!).
        </P>
        <Div className="primer">
            <P>Ср.: <Em>платье, дьяк.</Em> <Strong>Исключение</Strong> &ndash; <Em>фельд<Span
                className="litera">ъ</Span>егерь.</Em></P>
        </Div>
        <P><Strong>3)</Strong> Буква <Span className="litera">ъ</Span> не пишется на стыке частей сложного слова.</P>
        <Div className="primer">
            <P>Ср.: <Em>детясли</Em> (детские ясли), <Em>Иняз</Em> (Институт иностранных языков).</P>
        </Div>
        <P><Strong>4)</Strong> Буква <Span className="litera">ъ</Span> не пишется в существительном <Em>под<Span
            className="litera">ь</Span>ячий</Em> (в этом слове нет приставки <Span className="litera">под-</Span>!). В
            середине слова пишется разделительный <Span className="litera">ь</Span>, поскольку здесь выделяется приставка
            <Span className="litera">по-</Span> и корень <Span className="litera">дьяк</Span> (<Span
                className="litera">-дьяч-</Span>).
        </P>
        <P><Strong>5)</Strong> В середине слова (в корне) <Em>ар<Span className="litera">ь</Span>ергард</Em> пишется
            разделительный <Span className="litera">ь</Span>, а не <Span className="litera">ъ</Span>, поскольку приставки <Span
                className="litera">ар-</Span> в русском языке нет.</P>
        <Strong>6)</Strong> В слове <Em>из<Span className="litera">ъ</Span>ян</Em> (тюрк.) пишется <Span
            className="litera">ъ</Span>
        по аналогии с глаголом <Em>изъять</Em>.
    </Div>
    <P><Strong><Span className="number">2.</Span></Strong> Разделительный <Span className="litera">Ь</Span> пишется в следующих
        случаях:</P>
    <View>
        <Li>
            <P>в середине слова (не после приставки!) после согласного перед буквами <Span className="litera">е, ё, ю,
                я</Span>,
                если после согласного перед гласным звучит <Span className="litera0">[ j ]</Span>;</P>
            <Div className="primer">
                <P><Em><Em>Вьёт</Em> [в&rsquo;jо&#769;т], <Em>вьюн</Em> [в&rsquo;jу&#769;н], <Em>дьяк</Em>
                    [д&rsquo;jа&#769;к]).</Em></P>
            </Div>
        </Li>
        <Li>
            <P>в некоторых заимствованных словах (как сигнал звука <Span className="litera0">[ j ]</Span>) после согласного
                перед буквой <Span className="litera">о</Span>.</P>
            <Div className="primer">
                <P><Em>Бульон</Em> [бул&rsquo;jо&#769;н], <Em>синьор</Em> [син&rsquo;jо&#769;р], <Em>миньон</Em>
                    [мин&rsquo;jо&#769;н].</P>
            </Div>
        </Li>
    </View></View>