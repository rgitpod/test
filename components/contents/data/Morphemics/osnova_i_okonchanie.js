import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const osnova_i_okonchanie = <View><P><Strong><Span className="number">1.</Span></Strong> <Strong>Окончание</Strong> &ndash; это морфема, которая обычно стоит
    в конце слова и которая указывает на связь данного слова с другими словами. Окончание выражает значения рода, числа,
    падежа, лица.</P>
<P>Окончание часто называют изменяемой частью слова.</P>
<Div className="primer">
    <P>Ср.: <Em>книг<Span className="litera">а</Span> &ndash; книг<Span className="litera">и</Span> &ndash; книг<Span
                className="litera">у</Span>.</Em></P>
</Div>
<P>Это значит, что изменение окончания не приводит к изменению лексического значения слова.</P>
<P>Окончания не участвуют в словообразовании. Это всегда формообразующие морфемы. Они используются при образовании форм
    одного и того же слова.</P>
<P><Strong><Span className="number">2.</Span></Strong> Окончания выражают грамматические значения:</P>
    <Li>
        <P><Strong>рода, числа, падежа</Strong> &ndash; у существительных (<Em>книг<Span className="litera">а</Span></Em>
            &ndash; окончание -<Em>а</Em> указывает на женский род, единственное число, именительный падеж),
            прилагательных (<Em>больш<Span className="litera">ая</Span> книга</Em> &ndash; окончание -<Em>ая</Em> указывает
            на женский род, единственное число, именительный падеж), причастий (<Em>написанн<Span
                    className="litera">ая</Span> книга</Em> &ndash; окончание -<Em>ая</Em> указывает на женский род,
            единственное число, именительный падеж), некоторых местоимений (<Em>мо<Span className="litera">я</Span>
                книга</Em> &ndash; окончание -<Em>я</Em> указывает на женский род, единственное число, именительный
            падеж), некоторых числительных (<Em>одн<Span className="litera">а</Span> книга</Em> &ndash; окончание
            -<Em>а</Em> указывает на женский род, единственное число, именительный падеж);</P>
    </Li>


    <Li>
        <P><Strong>падежа</Strong> &ndash; у некоторых местоимений (<Em>нет к<Span className="litera">ого</Span></Em>
            &ndash; окончание -<Em>ого</Em> указывает на родительный падеж) и числительных (<Em>нет пят<Span
                    className="litera">и</Span></Em> &ndash; окончание -<Em>и</Em> указывает на родительный падеж);</P>
    </Li>
    <Li>
        <P><Strong>лица и числа</Strong> &ndash; у глаголов в настоящем и будущем времени (<Em>дума<Span
                    className="litera">ю</Span></Em> &ndash; окончание -<Em>ю</Em> указывает на 1 лицо, единственное число);
        </P>
    </Li>
    <Li>
        <P><Strong>рода и числа</Strong> &ndash; у глаголов в прошедшем времени (<Em>читал<Span
                    className="litera">а</Span></Em> &ndash; окончание -<Em>а</Em> указывает на женский род, единственное
            число).</P>
    </Li>

<P><Strong><Span className="number">3.</Span></Strong> Окончание может быть выражено одним или несколькими звуками.</P>
<Div className="primer">
    <P><Em>Нет нож<Span className="litera">а</Span>, резать нож<Span className="litera">ом</Span>.</Em></P>
</Div>

    <Li>
        <P>Но окончание может быть и <Strong>нулевым</Strong>. Нулевое окончание не выражено звуком и на письме не
            обозначено буквой, однако именно отсутствие материально выраженного окончания имеет определённое
            грамматическое значение, например: <Em>нож</Em><Span className="kwadrat">&#9633;</Span> &ndash; нулевое
            окончание указывает на мужской род, единственное число, именительный падеж.</P>
    </Li>
    <Li>
        <P>Нулевые окончания обнаруживаются в следующих формах:</P>
    </Li>


    <Li>
        <P>у существительных в форме именительного падежа, единственного числа, мужского рода (2 склонения) и женского
            рода (3 склонения);</P>
        <Div className="primer">
            <P><Em>Стол</Em><Span className="kwadrat">&#9633;</Span>, <Em>дочь</Em><Span className="kwadrat">&#9633;</Span>.</P>
        </Div>
    </Li>
    <Li>
        <P>у части существительных в форме родительного падежа, множественного числа;</P>
        <Div className="primer">
            <P><Em>Нет сил</Em><Span className="kwadrat">&#9633;</Span><Em>, нет дел</Em><Span
                    className="kwadrat">&#9633;</Span><Em>, нет солдат</Em><Span className="kwadrat">&#9633;</Span><Em>.</Em>
            </P>
        </Div>
    </Li>
    <Li>
        <P>у кратких прилагательных в форме единственного числа, мужского рода;</P>
        <Div className="primer">
            <P><Em>Весел</Em><Span className="kwadrat">&#9633;</Span><Em>, счастлив</Em><Span
                    className="kwadrat">&#9633;</Span><Em>.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>у глаголов в форме прошедшего времени, единственного числа, мужского рода;</P>
        <Div className="primer">
            <P><Em>Читал</Em><Span className="kwadrat">&#9633;</Span><Em>, пел</Em><Span
                    className="kwadrat">&#9633;</Span><Em>.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>у притяжательных прилагательных с суффиксом <Span className="litera">-ий</Span>.</P>
        <Div className="primer">
            <P><Em>Лисий</Em><Span className="kwadrat">&#9633;</Span>, <Em>волчий</Em><Span className="kwadrat">&#9633;</Span>.
            </P>
        </Div>
    </Li>

<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> Не являются окончаниями конечные звуки (и буквы) в форме родительного падежа,
    множественного числа, 1 склонения и 2 склонения &ndash; <Em>армий</Em><Span className="kwadrat">&#9633;</Span>,
    <Em>предгорий</Em><Span className="kwadrat">&#9633;</Span>, <Em>блюдец</Em><Span className="kwadrat">&#9633;</Span>. Это
    часть основы, а окончание здесь нулевое. Для проверки можно сравнить данные формы с формами именительного падежа,
    единственного числа.</P>
    <Div className="primer">
        <P>Так, существительное <Em>армия</Em> [а&#769;рм&rsquo;и<Span className="litera0">j</Span>ь] имеет окончание <Span
                className="litera">-я</Span> (звук [ь]), а [&nbsp;j&nbsp;] входит в основу [а&#769;рм&rsquo;иj]. Для того
            чтобы это доказать, можно просклонять слово: <Em>в арми</Em>[&nbsp;j&nbsp;]<Em>ю</Em>,
            <Em>арми</Em>[&nbsp;j&nbsp;]<Em>ей</Em> и др. Во всех этих формах сохраняется [&nbsp;j&nbsp;]. Значит,
            [&nbsp;j&nbsp;] &ndash; часть основы, ведь окончание &ndash; изменяемая часть слова. Только в форме
            родительного падежа этот звук графически выражен с помощью буквы <Span className="litera">й</Span>
            (<Em>арми<Span className="litera">й</Span></Em>), а в других формах он не получает специального обозначения.</P>
    </Div>
    <P>В формах типа <Em>предгорий</Em>, <Em>блюдец</Em> мы наблюдаем подобное явление. Только здесь присутствует ещё и
        беглость гласных (<Em>и, е</Em>).</P>
    <Div className="primer">
        <P>Ср.: <Em>предгорье</Em> [пр&rsquo;и<sup>э</sup>дго&#769;р&rsquo;<Span className="litera0">j</Span>ь] &ndash;
            <Em>предгор<Span className="litera">ий</Span></Em> [пр&rsquo;и<sup>э</sup>дго&#769;р&rsquo;<Span
                className="litera0">иj</Span>]; <Em>блюд<Span className="litera">ц</Span>е</Em> [бл&rsquo;у&#769;т<Span
                className="litera0">ц</Span>ъ] &ndash; <Em>блюд<Span className="litera">ец</Span></Em> [бл&rsquo;у&#769;д<Span
                className="litera0">ьц</Span>].</P>
    </Div>
    <P><Strong>2)</Strong> В форме именительного падежа, единственого числа, мужского рода качественных и относительных
        прилагательных <Span className="litera">-ий</Span> является окончанием (это изменяемая часть слова, ср.:
        <Em>син<Span className="litera">ий</Span> &ndash; син<Span className="litera">его</Span></Em>). В тех же формах
        притяжательных прилагательных (<Em>лисий, волчий</Em>) <Span className="litera">-ий</Span> является суффиксом. Он
        сохраняется при склонении. Только в других формах суффикс представлен в усечённом виде &ndash; <Span
            className="litera0">[&nbsp;j&nbsp;]</Span>, и на письме он графически не выражен. О наличии данного суффикса
        сигнализирует разделительный <Span className="litera">ь</Span>.</P>
    <Div className="primer"><P>Ср.: <Em>волч<Span className="litera">ий</Span> &ndash; волчь</Em>[&nbsp;j&nbsp;]<Em>его</Em>,
        <Em>лис<Span className="litera">ий</Span> &ndash; лись</Em>[&nbsp;j&nbsp;]<Em>его</Em>.</P></Div>
</Div>
<P><Strong><Span className="number">4.</Span></Strong> Окончание обычно находится в конце слова.</P>
<P><Strong>Исключения составляют:</Strong></P>

    <Li>
        <P>окончания, стоящие перед постфиксами <Span className="litera">-ся</Span> (у возвратных глаголов, причастий),
            <Span className="litera">-те</Span> (во множественном числе повелительного наклонения), <Span
                className="litera">-то, -либо, -нибудь</Span> (у неопределённых местоимений);</P>
        <Div className="primer">
            <P><Em>Уч<Span className="litera">ит</Span>ся, учащ<Span className="litera">ий</Span>ся, ид<Span
                        className="litera">ём</Span>те, к<Span className="litera">ого</Span>-то, к<Span
                        className="litera">ого</Span>-либо, к<Span className="litera">ого</Span>-нибудь.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>окончания в сложных числительных, где окончания следуют за каждым корнем.</P>
        <Div className="primer">
            <P><Em>В тр<Span className="litera">ёх</Span>ст<Span className="litera">ах</Span>, нет пят<Span
                        className="litera">и</Span>десят<Span className="litera">и</Span>.</Em></P>
        </Div>
    </Li>

<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P>Несклоняемые и неспрягаемые слова: наречия (например: <Em>всегда, очень</Em>), служебные части
    (<Em>под, и, будто, не</Em>), неизменяемые существительные (например: <Em>пальто, кофе</Em>), неизменяемые
    прилагательные (например: <Em>беж, маренго</Em>) не имеют окончаний! <Strong>Не путайте отсутствие окончаний с
        нулевым окончанием!</Strong></P></Div>
<P>Правописание окончаний определяется частеречной принадлежностью слова и поэтому будет рассмотрено при характеристике
    соответствующих частей речи.</P>
<P><Strong><Span className="number">5.</Span></Strong> <Strong>Основа</Strong> &ndash; это часть слова без окончания. Основа
    является носителем лексического значения данного слова.</P>

    <Li>
        <P>Чтобы выделить основу, надо отделить окончание.</P>
        <Div className="primer">
            <P><Em>Землёй &ndash; <Span className="litera">земл</Span>-ёй, основа земл-; несу &ndash; <Span
                        className="litera">нес</Span>-у, основа нес-.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>Значок основы &ndash; квадратная скобка снизу: img title="Основа слова"</P>
    </Li>
    <Li>
        <P>Основа слова может быть равна корню.</P>
        <Div className="primer">
            <P><Em><Span className="litera">Жёлт</Span>ый.</Em></P>
        </Div>
    </Li>
    <Li>
        <P>Кроме корня, основа может включать приставки и суффиксы.</P>
        <Div className="primer">
            <P><Em><Span className="litera">Желт-изн</Span>-а, <Span className="litera">по-желт-е</Span>-ет.</Em></P>
        </Div>
    </Li>

<P><Strong><Span className="number">6.</Span></Strong> При склонении и спряжении основа может меняться &ndash; сокращаться
    или увеличиваться.</P>
<Div className="primer">
    <P>Например: <Span className="litera">лист</Span><Span className="kwadrat">&#9633;</Span> и <Span
            className="litera">листь</Span>[&nbsp;j&nbsp;]-<Em>я</Em> &ndash; во множественном числе основа увеличилась за
        счёт суффикса <Span className="litera">-j-</Span>. Подобные изменения основы характерны, как правило, для глагола: у
        большинства глаголов основа инфинитива и основа настоящего времени не совпадают.</P>
</Div>
<Div className="primer">
    <P>Ср.: <Span className="litera">жд-а</Span>-<Em>ть</Em> и <Span className="litera">жд</Span>-<Em>у</Em> &ndash; основа в
        настоящем времени сократилась (утрачивается суффикс -<Em>а</Em>); <Span className="litera">чит-а</Span>-<Em>ть</Em>
        &ndash; <Span className="litera">чит-аj</Span>-<Em>ют</Em> &ndash; в данном случае основа в настоящем времени,
        напротив, увеличилась за счёт звука [&nbsp;j&nbsp;], который входит в состав суффикса настоящего времени и
        повелительного наклонения (ср.: <Span className="litera">чит-ай</Span>).</P>
</Div>
<Div className="alertText">Обратите внимание!</Div>
<Div className="alert"><P><Strong>1)</Strong> В существительных женского рода с финалью (конечными буквами) <Span
        className="litera">-ия</Span> (<Em>арм<Span className="litera">ия</Span>, сандал<Span className="litera">ия</Span>,
        революц<Span className="litera">ия</Span></Em> и др.) и среднего рода с финалью <Span className="litera">-ие</Span>
    (<Em>быт<Span className="litera">ие</Span>, напряжен<Span className="litera">ие</Span>, возмезд<Span
            className="litera">ие</Span></Em> и др.) гласный <Span className="litera">и</Span> относится к основе, поскольку он
    сохраняется при склонении существительных.</P>
    <Div className="primer">
        <P>Ср.: <Em>арм<Span className="litera">и</Span>-я, арм<Span className="litera">и</Span>-и, арм<Span
                    className="litera">и</Span>-ей; быт<Span className="litera">и</Span>-е, быт<Span className="litera">и</Span>-я,
                быт<Span className="litera">и</Span>-ем.</Em></P>
    </Div>
    <P><Strong>2)</Strong> В существительных мужского рода с финалью <Span className="litera">-й</Span> (<Em>пролетари<Span
                className="litera">й</Span>, санатори<Span className="litera">й</Span>, кра<Span className="litera">й</Span></Em> и
        др.) этот согласный также относится к основе, поскольку он сохраняется при склонении существительных, ср.:
        <Em>край, кра</Em>[&nbsp;j&nbsp;]-<Em>я, кра</Em>[&nbsp;j&nbsp;]<Em>-ю, кра</Em>[&nbsp;j&nbsp;]-<Em>ем</Em>. В
        косвенных падежах [&nbsp;j&nbsp;] графически не обозначен специальным знаком. На его наличие указывают гласные
        <Em>я, е, ю</Em> после другого гласного (см. п. 1.5).</P><P>
    Таким образом, данные существительные в именительном падеже, единственном числе, как и другие (<Em>стол</Em><Span
        className="kwadrat">&#9633;</Span>, <Em>конь</Em><Span className="kwadrat">&#9633;</Span> и подоб.), имеют нулевое
    окончание:</P>
    <Div className="primer"><P><Em>край</Em><Span className="kwadrat">&#9633;</Span>, <Em>пролетарий</Em><Span
            className="kwadrat">&#9633;</Span>, <Em>санаторий</Em><Span className="kwadrat">&#9633;</Span>.</P></Div>
</Div>
<P><Strong><Span className="number">7.</Span></Strong> Поскольку в русском языке есть несколько постфиксов, то есть
    суффиксов, которые могут располагаться после окончаний, то <Strong>основа</Strong> некоторых форм слов может быть
    <Strong>разорванной</Strong>.</P>
<Div className="primer">
    <P><Span className="litera">Как</Span><Em>ого</Em>-<Span className="litera">то</Span> &ndash; окончание -<Em>ого</Em>,
        основа <Span className="litera">как.. то</Span>; <Span className="litera">уч</Span><Em>ит</Em><Span
            className="litera">ся</Span> &ndash; окончание -<Em>ит</Em>, основа <Span className="litera">уч..ся</Span>.</P>
</Div>

    <Li>
        <P>Следует различать основу конкретной формы слова и основу слова (при словообразовании).</P>
    </Li>
    <Li>
        <P>Основа конкретной формы слова представлена частью слова без окончания.</P>
        <Div className="primer">
            <P><Span className="litera">Записа</Span>-<Em>ть</Em>, <Span className="litera">записал</Span>-<Em>а</Em>, <Span
                    className="litera">запиш</Span>-<Em>у</Em>.</P>
        </Div>
    </Li>
    <Li>
        <P>Основа слова определяется по начальной форме слова. Она включает в себя корень, приставки и
            словообразовательные суффиксы и постфиксы. Формообразующие суффиксы и постфиксы в словообразовательную
            основу включаться не будут.</P>
        <Div className="primer">
            <P>Например, для того чтобы выявить основу слова у глагольной формы <Span
                    className="litera">записал</Span>-<Em>а</Em>, надо сначала указать начальную форму глагола (инфинитив)
                <Em>записать</Em> и отбросить окончание (в других концепциях &ndash; формообразующий суффикс)
                неопределённой формы -<Em>ть</Em>: <Span className="litera">записа-</Span>.</P>
        </Div>
    </Li>

<Div className="alertText">Обратите внимание!</Div>
<Div className="alert">
    <P><Strong>1)</Strong> Словообразовательная основа глагола определяется по форме инфинитива. Это особенно важно
        учитывать, поскольку, как отмечалось, у глагола: а) часто не совпадают основы настоящего времени и инфинитива,
        б) достаточно большое число формообразующих суффиксов (<Span className="litera">-л</Span> &ndash; в прошедшем
        времени, <Span className="litera">-и</Span> &ndash; в повелительном наклонении).</P>
    <P><Strong>2)</Strong> Глагольный возвратный постфикс <Span className="litera">-ся</Span> (<Span
            className="litera">учи</Span><Em>ть</Em><Span className="litera">ся</Span>, <Span
            className="litera">мы</Span><Em>ть</Em><Span className="litera">ся</Span>) не является формообразующим, поэтому
        обязательно должен включаться в основу слова.</P>
    <P><Strong>3)</Strong> Как отмечалось, в некоторых случаях формы существительных в единственном и множественном
        числе отличаются не только окончаниями, но и формообразующими суффиксами. В этом случае основа слова (для
        словообразования) также определяется по начальной форме &ndash; единственное число, именительный падеж, ср.:
        <Em>сын</Em><Span className="kwadrat">&#9633;</Span>/<Em>сыновья</Em> &ndash; основа слова (для словообразования)
        &ndash; <Span className="litera">сын-</Span>.</P>
    <P>
        <Strong>4)</Strong> Как отмечалось, причастие и деепричастия занимают промежуточное положение между
        самостоятельными частями речи и особыми формами глагола. Поскольку в данном пособии они рассматриваются как
        самостоятельные части речи, то суффиксы причастий (<Em>-ом/-ем/-им; -ущ/-ющ/-ащ/-ящ, -нн/-н/-енн/-ен/-т,
            -ш/-вш</Em>) классифицируются как часть словообразовательной основы слова.
    </P>
</Div></View>