import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../../tags";
import { Table, Col, Row } from "../../table";

export const razryady_chislitelnyh = <View><P>А) Количественные числительные</P>
<P><Strong><Span className="number">1.</Span></Strong> <Strong>Количественные числительные</Strong> обозначают количество
    предметов при счёте (<Em>два стола, сто рублей</Em>) или отвлечённое число (<Em>два, сто</Em>) и отвечают на вопрос
    <Span className="litera">сколько?</Span></P>
<P><Strong><Span className="number">2.</Span></Strong> Количественные числительные изменяются по падежам.</P>
    <Table>
        <Row>
            <Col>Падеж</Col>
            <Col>Вопросы</Col>
        </Row>
        <Row>
            <Col><Strong>Именительный падеж</Strong></Col>
            <Col>сколько (книг)?</Col>
        </Row>
        <Row>
            <Col><Strong>Родительный падеж</Strong></Col>
            <Col>скольких (книг)?</Col>
        </Row>
        <Row>
            <Col><Strong>Дательный падеж</Strong></Col>
            <Col>скольким (книгам)?</Col>
        </Row>
        <Row>
            <Col><Strong>Винительный падеж</Strong></Col>
            <Col>сколько (книг)?</Col>
        </Row>
        <Row>
            <Col><Strong>Творительный падеж</Strong></Col>
            <Col>сколькими (книгами)?</Col>
        </Row>
        <Row>
            <Col><Strong>Предложный падеж</Strong></Col>
            <Col>о скольких (книгах)?</Col>
        </Row>
    </Table>

    <Li>
        <P>Рода и числа у количественных числительных нет.</P>
        <Div className="primer">
            <P>Ср.: <Em>три человека, три окна, три банки.</Em></P>
        </Div>
    </Li>
    <Li>
        <P><Strong>Исключение</Strong> составляют числительные <Span className="litera">один</Span> и <Span
                className="litera">два</Span>.</P>
    </Li>


    <Li>
        <P>Числительное <Span className="litera">один</Span> изменяется по родам и числам, подобно прилагательному.</P>
        <Div className="primer">
            <P><Em><Span className="litera">Одна</Span> груша, <Span className="litera">один</Span> лимон, <Span
                        className="litera">одно</Span> яблоко, <Span className="litera">одни</Span> сливки.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>Числительные <Span className="litera">два</Span> и <Span className="litera">полтора</Span> имеют две родовые формы:
        </P>
        
            <Li><P>мужской и средний род &ndash; <Span className="litera">два, полтора</Span>;</P>
                <Div className="primer">
                    <P><Em>Два стола, два окна, полтора дня.</Em></P>
                </Div>
            </Li>
            <Li>
                <P>женский род &ndash; <Span className="litera">две, полторы</Span>.</P>
                <Div className="primer">
                    <P><Em>Две картины, полторы корзины.</Em></P>
                </Div>
            </Li>
        
    </Li>

<P><Strong><Span className="number">3.</Span> Склонение числительных:</Strong></P>

    <Li>
        <P>склонение числительных <Span className="litera">один, два, три, четыре</Span> напоминает склонение имён
            прилагательных;</P>
    </Li>
    <Li>
        <P>числительные от <Span className="litera">пяти</Span> до <Span className="litera">двадцати</Span> и <Span
                className="litera">тридцать</Span> склоняются как существительные третьего склонения (например, как
            существительное <Em>степь</Em>);</P>
    </Li>
    <Li>
        <P>числительные <Span className="litera">сорок</Span>, <Span className="litera">девяносто</Span> и <Span
                className="litera">сто</Span> при склонении имеют лишь две формы:</P>
        <P>именительный падеж и винительный падеж &ndash; <Em>сорок, девяносто, сто</Em>,{'\n'} остальные падежи &ndash;
            <Em>сорока, девяноста, ста</Em>;</P>
    </Li>
    <Li>
        <P>при склонении сложных количественных числительных <Span className="litera">5&ndash;80, 200&ndash;900</Span>
            изменяется каждая часть слова, хотя пишутся они в одно слово (<Em>пятьдесят &ndash; пятидесяти</Em>). При
            этом вторая часть числительных <Span className="litera">200&ndash;900</Span> имеет архаичные окончания, не
            совпадающие с окончаниями самостоятельного числительного <Em>сто</Em>;</P>
        <Div className="primer">
            <P>Ср.: <Em>сто рублей &ndash; трист<Span className="litera">а</Span> рублей; нет ст<Span
                        className="litera">а</Span> рублей &ndash; нет трёхсот<Span className="kwadrat">&#9633;</Span> рублей, к
                    ст<Span className="litera">а</Span> рублям &ndash; к трёмст<Span className="litera">ам</Span> рублям.</Em>
            </P>
        </Div>
    </Li>
    <Li>
        <P>в составных количественных числительных склоняются все слова и все части сложных слов.</P>
        <Div className="primer">
            <P><Em>Пятьсот сорок шесть &ndash; о пятистах сорока шести.</Em></P>
        </Div>
    </Li>

<P><Strong><Span className="number">4.</Span> Образцы склонения числительных:</Strong></P>
<P>Числительное <Em>ОДИН</Em></P>
    <Table>
        <Row>
            <Col>Падеж</Col>
            <Col>Единственное число</Col>
            <Col>Множественное число</Col>
        </Row>
        <Row>
            <Col>М. р.</Col>
            <Col>Ср. р.</Col>
            <Col>Ж. р.</Col>
        </Row>
        <Row>
            <Col>И. п.</Col>
            <Col>Один</Col>
            <Col>Одно</Col>
            <Col>Одна</Col>
            <Col>Одни</Col>
        </Row>
        <Row>
            <Col>Р. п.</Col>
            <Col>Одного</Col>
            <Col>Одного</Col>
            <Col>Одной</Col>
            <Col>Одних</Col>
        </Row>
        <Row>
            <Col>Д. п.</Col>
            <Col>Одному</Col>
            <Col>Одному</Col>
            <Col>Одной</Col>
            <Col>Одним</Col>
        </Row>
        <Row>
            <Col>В. п.</Col>
            <Col>Как И. или Р. п.</Col>
            <Col>Как И. п.</Col>
            <Col>Одну</Col>
            <Col>Как И. или Р. п.</Col>
        </Row>
        <Row>
            <Col>Т. п.</Col>
            <Col>Одним</Col>
            <Col>Одним</Col>
            <Col>Одной</Col>
            <Col>Одними</Col>
        </Row>
        <Row>
            <Col>П. п.</Col>
            <Col>Об одном</Col>
            <Col>Об одном</Col>
            <Col>Об одной</Col>
            <Col>Об одних</Col>
        </Row>
    </Table>
<P>&nbsp;</P>
<P>Простые и сложные числительные</P>
    <Table>
        <Row>
            <Col>Падеж</Col>
            <Col>&nbsp;</Col>
        </Row>
        <Row>
            <Col>И. п.</Col>
            <Col>Четыре</Col>
            <Col>Десять</Col>
            <Col>Восемьдесят</Col>
            <Col>Восемьсот</Col>
        </Row>
        <Row>
            <Col>Р. п.</Col>
            <Col>Четырёх</Col>
            <Col>Десяти</Col>
            <Col>Восьмидесяти</Col>
            <Col>Восьмисот</Col>
        </Row>
        <Row>
            <Col>Д. п.</Col>
            <Col>Четырём</Col>
            <Col>Десяти</Col>
            <Col>Восьмидесяти</Col>
            <Col>Восьмистам</Col>
        </Row>
        <Row>
            <Col>В. п.</Col>
            <Col>Как И. или Р. п.</Col>
            <Col>Десять</Col>
            <Col>Восемьдесят</Col>
            <Col>Восемьсот</Col>
        </Row>
        <Row>
            <Col>Т. п.</Col>
            <Col>Четырьмя</Col>
            <Col>Десятью</Col>
            <Col>Восьмьюдесятью</Col>
            <Col>Восьмьюстами</Col>
        </Row>
        <Row>
            <Col>П. п.</Col>
            <Col>О четырёх</Col>
            <Col>О десяти</Col>
            <Col>О восьмидесяти</Col>
            <Col>О восьмистах</Col>
        </Row>
    </Table>
<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> В именительном и винительном падежах числительные от <Span
        className="litera">5</Span> до <Span className="litera">20</Span> и <Span className="litera">30</Span> пишутся с <Span
        className="litera">ь</Span> на конце слова.</P>
    <Div className="primer">
        <P><Em>Пять, пятнадцать, тридцать.</Em></P>
    </Div>
    <P>Числительные от <Span className="litera">50</Span> до <Span className="litera">80</Span> и от <Span
            className="litera">500</Span> до <Span className="litera">900</Span> &ndash; с <Span className="litera">ь</Span> в
        середине слова.</P>
    <Div className="primer">
        <P><Em>Пятьдесят, шестьсот, девятьсот.</Em></P>
    </Div>
    <P><Strong>2)</Strong> В середине числительных: <Em>пятнадцать, шестнадцать, семнадцать, восемнадцать,
            девятнадцать</Em> &ndash; <Span className="litera">ь</Span> не пишется.</P>
    <P><Strong>3)</Strong> Слово <Span className="litera">одиннадцать</Span> пишется с удвоенной согласной буквой.</P>
</Div>
<P><Strong><Span className="number">5.</Span></Strong> При сочетании с существительными числительные либо управляют
    существительными, либо согласуются с существительными:</P>

    <Li>
        <P>если числительное стоит в именительном падеже (или в сходном с ним винительном падеже), то числительное
            управляет родительным падежом существительного (<Em>два стола, пять книг</Em>), причём при числительных
            <Em>два, три, четыре</Em>, а также составных числительных, оканчивающихся на <Em>два, три, четыре</Em>,
            существительное стоит в единственном числе (<Em>два окна, двадцать два окна</Em>), при всех остальных
            числительных &ndash; во множественном числе (<Em>пять окон, пятьдесят окон, пятьдесят пять окон</Em>);</P>
    </Li>
    <Li>
        <P>если числительное стоит в любом другом падеже, то главным словом является существительное, числительное
            согласуется с ним.</P>
        <Div className="primer">
            <P>Ср.: <Em>нет пяти окон; к пяти окнам, пятью окнами, о пяти окнах.</Em></P>
        </Div>
    </Li>

<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> Слова <Span className="litera">тысяча, миллион, миллиард</Span> по-разному
    классифицируются языковедами. Некоторые называют их числительными, другие &ndash; существительными со значением
    числа. В любом случае следует помнить, что данные слова по своим морфологическим и синтаксическим признакам
    совпадают с именами существительными.</P>
    <P><Span className="litera">Тысяча</Span> &ndash; относится к женскому роду и склоняется как существительное 1-го
        склонения: <Em>нет тысячи, с тысячей</Em>.</P>
    <P><Span className="litera">Миллион, миллиард</Span> &ndash; слова мужского рода и склоняются как существительные 2-го
        склонения: <Em>нет миллиона, с миллионом</Em>.</P>
    <P><Strong>2)</Strong> Слова <Span className="litera">тысяча, миллион, миллиард</Span>, как и существительные, всегда
        управляют формой родительного падежа зависимого существительного, независимо от собственного падежа.</P>
    <Div className="primer">
        <P><Em>Ср.: тысяча рублей, нет тысячи рублей, с тысячей рублей, о тысяче рублей.</Em></P>
    </Div>
    <P>Однако если эти слова включены в состав составных числительных, то там действуют общие правила сочетаемости
        числительных с существительными.</P>
    <Div className="primer"><P><Em>Нет тысячи пяти рублей, к тысяче пяти рублям, с тысячей пятью рублями, о тысяче пяти
            рублях.</Em></P></Div>
</Div>
<P>Б) Собирательные числительные</P>
<P><Strong><Span className="number">1.</Span></Strong> <Strong>Собирательные числительные</Strong> обозначают определённое
    количество предметов как одно целое.</P>
<Div className="primer">
    <P><Em>Двое, трое, пятеро.</Em></P>
</Div>

    <Li>
        <P>В современном русском языке собирательные числительные могут обозначать количество предметов как целое в
            промежутке от двух до десяти. Образуются они от количественных числительных с помощью суффиксов <Span
                className="litera">-оj-</Span> (<Em>два &rarr; двое, три &rarr; трое</Em>) и <Span
                className="litera">-ер-</Span> (<Em>четыре &rarr; четверо, пять &rarr; пятеро, шесть &rarr; шестеро, семь
                &rarr; семеро, восемь &rarr; восьмеро, девять &rarr; девятеро, десять &rarr; десятеро</Em>).</P>
    </Li>
    <Li>
        <P>Слово <Span className="litera">оба</Span> (<Span className="litera">обе</Span>) по-разному характеризуется в разных
            пособиях. Одни лингвисты относят их к местоимениям-числительным; другие исследователи &ndash; к
            собирательным числительным.</P>
    </Li>

<P><Strong><Span className="number">2.</Span></Strong> Собирательные числительные (кроме слова <Span
        className="litera">оба</Span>) могут сочетаться с ограниченной группой слов:</P>

    <Li>
        <P>с существительными, имеющими только форму множественного числа;</P>
    </Li>
    <Div className="primer">
        <P><Em>Двое щипцов, двое ножниц.</Em></P>
    </Div>
    <Li>
        <P>с существительными <Span className="litera">дети, ребята, люди</Span>;</P>
        <Div className="primer">
            <P><Em>Двое детей, трое ребят.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>с существительными, обозначающими лиц мужского пола;</P>
        <Div className="primer">
            <P><Em>Двое друзей.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>с существительными, обозначающими детёнышей животных;</P>
        <Div className="primer">
            <P><Em>Двое котят.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>с личными местоимениями.</P>
        <Div className="primer">
            <P><Em>Нас было трое.</Em></P>
        </Div>
    </Li>

    <Table>
        <Row>
            <Col>С существительными женского рода собирательные числительные <Strong>не употребляются</Strong>!</Col>
        </Row>
    </Table>
<P><Strong><Span className="number">3.</Span></Strong> Собирательные числительные склоняются как имена прилагательные во
    множественном числе:</P>
    <Table>
        <Row>
            <Col>Падеж</Col>
            <Col>Вопросы</Col>
        </Row>
        <Row>
            <Col><Strong>Именительный падеж</Strong></Col>
            <Col>пятеро</Col>
        </Row>
        <Row>
            <Col><Strong>Родительный падеж</Strong></Col>
            <Col>пятерых (ср.: новых)</Col>
        </Row>
        <Row>
            <Col><Strong>Дательный падеж</Strong></Col>
            <Col>пятерым (ср.: новым)</Col>
        </Row>
        <Row>
            <Col><Strong>Винительный падеж</Strong></Col>
            <Col>как И. или Р. п.</Col>
        </Row>
        <Row>
            <Col><Strong>Творительный падеж</Strong></Col>
            <Col>пятерыми (ср.: новыми)</Col>
        </Row>
        <Row>
            <Col><Strong>Предложный падеж</Strong></Col>
            <Col>о пятерых (ср.: о новых)</Col>
        </Row>
    </Table>
<P><Strong><Span className="number">4.</Span></Strong> Слово <Span className="litera">оба</Span> изменяется по родам: <Span
        className="litera">оба</Span> &ndash; мужской и средний род (нет формы <Span className="litera">обои</Span>!), <Span
        className="litera">обе</Span> &ndash; женский род. Склонение этого слова напоминает склонение прилагательных во
    множественном числе, причем формы мужского/среднего и женского рода имеют разную основу в косвенных падежах.</P>
    <Table>
        <Row>
            <Col>Падеж</Col>
            <Col>М. р./Ср. р.</Col>
            <Col>Ж. р.</Col>
        </Row>
        <Row>
            <Col>И. п.</Col>
            <Col>Оба берега</Col>
            <Col>Обе реки</Col>
        </Row>
        <Row>
            <Col>Р. п.</Col>
            <Col>Обоих берегов</Col>
            <Col>Обеих рек</Col>
        </Row>
        <Row>
            <Col>Д. п.</Col>
            <Col>Обоим берегам</Col>
            <Col>Обеим рекам</Col>
        </Row>
        <Row>
            <Col>В. п.</Col>
            <Col>Как И. или Р. п.</Col>
            <Col>Как И. или Р. п.</Col>
        </Row>
        <Row>
            <Col>Т. п.</Col>
            <Col>Обоими берегами</Col>
            <Col>Обеими реками</Col>
        </Row>
        <Row>
            <Col>П. п.</Col>
            <Col>Об обоих берегах</Col>
            <Col>Об обеих реках</Col>
        </Row>
    </Table>
<P>В) Порядковые числительные</P>
<P><Strong><Span className="number">1.</Span></Strong> <Strong>Порядковые числительные</Strong> обозначают порядковый номер
    предметов при счёте, то есть порядковые числительные, указывая на порядковый номер предмета, обозначают
    <Strong>один</Strong> предмет.</P>
<Div className="primer">
    <P><Em>Первый день, пятнадцатый день.</Em></P>
</Div>
<P><Strong><Span className="number">2.</Span></Strong> Порядковые числительные образуются от количественных числительных,
    кроме таких порядковых числительных, как <Em>первый, второй</Em>.</P>
<Div className="primer">
    <P><Em>Пять &rarr; пятый, тридцать &rarr; тридцатый.</Em></P>
</Div>
<P><Strong><Span className="number">3.</Span></Strong> Порядковые числительные, как и полные прилагательные, изменяются по
    числам, родам (в единственном числе) и падежам.</P>
<Div className="primer">
    <P><Em>Первый, первая, первое, первые.</Em></P>
</Div>

    <Li>
        <P>Их склонение совпадает со склонением прилагательных. Именно поэтому некоторые лингвисты включают порядковые
            числительные в состав имён прилагательных.</P>
        <Div className="primer">
            <P>Ср.: <Em>первого &ndash; нового, первому &ndash; новому.</Em></P>
        </Div>
    </Li>

<P><Strong><Span className="number">4.</Span></Strong> При склонении составных порядковых числительных изменяется только
    последнее слово (в отличие от склонения составных количественных числительных, где изменяется каждое слово).</P>
<Div className="primer">
    <P><Em>Тысяча девятьсот сорок пятый год &ndash; в тысяча девятьсот сорок пятом; две тысячи третий год &ndash; с две
            тысячи третьего года.</Em></P>
</Div>
<P>Г) Дробные числительные</P>
<P><Strong><Span className="number">1.</Span></Strong> <Strong>Дробные числительные</Strong> называют не целые числа.</P>
<Div className="primer">
    <P><Em>Две третьих, пять десятых.</Em></P>
</Div>

    <Li>
        <P>По значению дробные числительные примыкают к количественным числительным.</P>
    </Li>

<P><Strong><Span className="number">2.</Span></Strong> По составу дробные числительные, кроме слов <Span
        className="litera">полтора</Span>, <Span className="litera">полтораста</Span>, состоят из количественного числительного
    (числитель дроби) и порядкового числительного во множественном числе (знаменатель дроби).</P>
<Div className="primer">
    <P><Em>Шесть семнадцатых, три пятых.</Em></P>
</Div>

    <Li>
        <P>В состав дробных числительных могут входить существительные ноль и целое. Это <Strong>смешанные</Strong>
            числительные.</P>
        <Div className="primer">
            <P><Em>Ноль целых пять десятых.</Em></P>
        </Div>
    </Li>

<P><Strong><Span className="number">3.</Span></Strong> Числительное <Span className="litera">полтора</Span> изменяется по родам:
</P>

    <Li>
        <P><Span className="litera">полтора</Span> &ndash; мужской и средний род;</P>
        <Div className="primer">
            <P><Em>Полтора дня, полтора яблока.</Em></P>
        </Div>
    </Li>
    <Li>
        <P><Span className="litera">полторы</Span> &ndash; женский род.</P>
        <Div className="primer">
            <P><Em>Полторы бутылки.</Em></P>
        </Div>
    </Li>


    <Li>
        <P>Числительные <Span className="litera">полтора</Span> (<Span className="litera">полторы</Span>), <Span
                className="litera">полтораста</Span> при склонении имеют только две падежные формы:</P>
        <P>именительный и винительный падежи &ndash; <Span className="litera">полтора, полторы, полтораста</Span>;{'\n'}
            остальные падежи &ndash; <Span className="litera">полутора, полутораста</Span>.</P>
    </Li>
</View>