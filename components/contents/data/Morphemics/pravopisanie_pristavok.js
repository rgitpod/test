import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const pravopisanie_pristavok = (
  <View>
    <P>
      <Strong>Правописание приставок</Strong> включает пять типов правил:
    </P>
    <P>
      1) слитное и дефисное правописание приставок (кроме слитного, дефисного и
      раздельного написания наречий);{"\n"} 2) правописание безударных гласных в
      приставках;{"\n"} 3) правописание конечных согласных в приставках;{"\n"}{" "}
      4) правописание двойных согласных на стыке приставки и корня;{"\n"} 5)
      правописание разделительного <Span className="litera">ъ</Span> на стыке
      приставки и корня.
    </P>
    <P>
      Частично правила 2, 3 и 4 рассмотрены в п. 1.9. Правописание гласных,
      обусловленное их произношением, 1.11. Употребление букв Ь и Ъ, 1.15.
      Правописание согласных. В данном пункте обобщим эти правила и остановимся
      более подробно на тех, что не подвергались анализу.
    </P>
    <P>2.6.1. Слитное и дефисное правописание приставок</P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Приставки (русские и заимствованные) пишутся <Strong>слитно</Strong>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">По</Span>охотиться,{" "}
          <Span className="litera">за</Span>облачный,{" "}
          <Span className="litera">на</Span>солить,{" "}
          <Span className="litera">вне</Span>классный,{" "}
          <Span className="litera">меж</Span>планетный,{" "}
          <Span className="litera">анти</Span>циклон,{" "}
          <Span className="litera">контр</Span>революция,{" "}
          <Span className="litera">архи</Span>важный.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      После приставок ставится <Strong>дефис</Strong> в следующих случаях:
    </P>

    <Li>
      <P>
        после приставки <Span className="litera">кое-</Span>.
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">Кое-</Span>кто,{" "}
            <Span className="litera">кое-</Span>кого,{" "}
            <Span className="litera">кое-</Span>как.
          </Em>
        </P>
      </Div>
      <P>
        <Strong>Исключение:</Strong> приставка{" "}
        <Span className="litera">кое-</Span> пишется отдельно, если между ней и
        местоимением стоит предлог;
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">Кое</Span> у кого,{" "}
            <Span className="litera">кое</Span> с кем.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>после любой приставки идёт имя собственное;</P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">Анти-</Span>Дюринг, авиакомпания &laquo;
            <Span className="litera">Транс-</Span>Америка&raquo;.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        в слове{" "}
        <Em>
          <Span className="litera">контр-</Span>адмирал
        </Em>{" "}
        (и{" "}
        <Em>
          <Span className="litera">контр-</Span>адмиральский
        </Em>
        ), но по общему правилу:{" "}
        <Em>
          <Span className="litera">контр</Span>наступление,{" "}
          <Span className="litera">контр</Span>марш
        </Em>
        .
      </P>
    </Li>

    <P>2.6.2. Правописание гласных в приставках</P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Правописание безударных гласных в большинстве приставок, как и безударных
      гласных в корнях слов, проверяется ударным положением.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          бе<Span className="litera">з</Span>дарный &ndash; б
          <Span className="litera">е&#769;</Span>здарь, з
          <Span className="litera">а</Span>морозить &ndash; з
          <Span className="litera">а&#769;</Span>морозки, пр
          <Span className="litera">а</Span>родина &ndash; пр
          <Span className="litera">а&#769;</Span>дед.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>Исключения:</Strong> приставки{" "}
      <Span className="litera">раз-/рас-, роз-/рос-</Span>. Гласная{" "}
      <Span className="litera">о</Span> в этих приставках пишется только под
      ударением, в безударном положении пишется гласная
      <Span className="litera">а</Span>.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          р<Span className="litera">о&#769;</Span>спись &ndash; р
          <Span className="litera">а</Span>списать, р
          <Span className="litera">о&#769;</Span>зыск &ndash; р
          <Span className="litera">а</Span>зыскать
        </Em>{" "}
        (кроме слова
        <Em>
          р<Span className="litera">о</Span>зыскной
        </Em>
        ).
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Правописание приставок <Span className="litera">пре-</Span> и{" "}
      <Span className="litera">при-</Span> определяется их значением.
    </P>
    <P>
      <Strong>
        Приставка <Span className="litera">ПРЕ-</Span>
      </Strong>{" "}
      имеет значения:
    </P>

    <Li>
      <P>
        обозначает высшую степень качества или действия (имеет значение
        &laquo;очень&raquo;, &laquo;слишком&raquo;);
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">Пре</Span>милый,{" "}
            <Span className="litera">пре</Span>высить,{" "}
            <Span className="litera">пре</Span>увеличить,{" "}
            <Span className="litera">пре</Span>забавный.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        соответствует по значению приставке{" "}
        <Span className="litera">пере-</Span> (значения &laquo;через&raquo;,
        &laquo;повторно&raquo;, &laquo;по-иному&raquo;, &laquo;предел
        действия&raquo;).
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">Пре</Span>градить (<Em>перегородить</Em>),{" "}
            <Em>
              <Span className="litera">пре</Span>дание
            </Em>{" "}
            (то, что передаётся изустно от одного поколения к другому),{" "}
            <Em>
              <Span className="litera">пре</Span>образовать
            </Em>{" "}
            (образовать повторно, заново, по-иному).
          </Em>
        </P>
      </Div>
    </Li>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> Аналогичные правила распространяются на приставку{" "}
        <Span className="litera">пред-</Span> (приставка{" "}
        <Span className="litera">пред-</Span> соответствует по значению предлогу
        и приставке <Span className="litera">перед-</Span>).
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Em>
            <Span className="litera">пред</Span>дверье
          </Em>{" "}
          (&laquo;часть пространства перед дверью&raquo;),
          <Em>
            <Span className="litera">пред</Span>стоящий
          </Em>{" "}
          (&laquo;тот, что &laquo;стоит&raquo; впереди, в будущем&raquo;),{" "}
          <Em>
            <Span className="litera">пред</Span>местье
          </Em>{" "}
          (&laquo;пространство перед местом, городом&raquo;).
        </P>
      </Div>
      <P>
        <Strong>2)</Strong> Во многих случаях в современном русском языке
        приставки <Span className="litera">пре-</Span> и
        <Span className="litera">пред-</Span> либо уже не выделяются в словах, а
        сливаются с корнем, либо их значение не столь очевидно. Однако их
        значение можно восстановить, если обратиться к этимологии
        (происхождению) слова, например:
      </P>
      <Li>
        <P>
          <Em>
            <Span className="litera">пребывать</Span> где-то, в чём
          </Em>{" "}
          (&laquo;пробыть какое-то время, срок где-либо; &laquo;перебыть,
          пережить&raquo; где-то какой-то срок&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пре<Span>в</Span>ратить
          </Span>{" "}
          (&laquo;придать иной вид; перевести в иное состояние,
          качество&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>вратный
          </Span>{" "}
          (&laquo;искажённый, ложный, по-иному представленный,
          перевёрнутый&raquo;);{" "}
          <Span className="litera">
            пр<Span>е</Span>вратность
          </Span>{" "}
          (&laquo;злоключение, резкая перемена, поворот в событиях&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>грешение
          </Span>{" "}
          (&laquo;проступок, грех в высокой степени&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дать
          </Span>{" "}
          (&laquo;передать&raquo; &ndash; <Em>предать земле</Em>; &laquo;выдать,
          передать кому&raquo; &ndash; <Em>предать родину</Em>);{" "}
          <Span className="litera">
            пр<Span>е</Span>датель
          </Span>{" "}
          (&laquo;изменник; тот, кто передаёт кого-то кому-то&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дание
          </Span>{" "}
          (переходящий из поколения в поколение рассказ о ком-либо или о
          чём-либо);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дварить
          </Span>{" "}
          (в древнерусском языке слово варити означало &laquo;опередить; прийти
          заранее; предсказать; предупредить&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дел
          </Span>{" "}
          (&laquo;рубеж, граница; крайняя степень чего-либо&raquo;,
          &laquo;страна, местность в каких-то границах&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дседатель
          </Span>{" "}
          (&laquo;тот, что сидит впереди, во главе; главный&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>дтеча
          </Span>{" "}
          (&laquo;тот, что &laquo;течёт = идёт&raquo; впереди, опережает
          кого-то&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>емник
          </Span>{" "}
          (&laquo;чей-то продолжатель; тот, кто занял, &laquo;перенял&raquo;
          чьё-то место&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>зирать
          </Span>{" "}
          (&laquo;пренебрегать как недостойным внимания &ndash; смотреть поверх
          головы, через кого-то&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>имущество
          </Span>{" "}
          (&laquo;то, что имеется в избытке, в большем количестве по сравнению с
          другими&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>клонный
          </Span>{" "}
          (&laquo;о возрасте: склоняющийся к старости, переходящий в иное
          состояние&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>клонить
          </Span>{" "}
          (&laquo;склонить не до конца&raquo; &ndash;{" "}
          <Em>преклонить знамёна, преклонить колени</Em>),{" "}
          <Span className="litera">
            пр<Span>е</Span>клоняться
          </Span>{" "}
          <Em>перед кем-либо</Em>
          (&laquo;почувствовать глубокое уважение; перегибаться, склоняться в
          поясном поклоне, не до конца&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>красный
          </Span>{" "}
          (&laquo;очень красивый&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            не пр<Span>е</Span>минуть
          </Span>{" "}
          <Em>ответить</Em>
          (&laquo;не пройти мимо, через что-либо, не миновать чего-либо&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>исподняя
          </Span>{" "}
          (&laquo;то, что находится в самом низу, очень низко&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>кословить
          </Span>{" "}
          (&laquo;говорить против чего-либо, наперекор кому-либо&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>кратить
          </Span>{" "}
          (&laquo;пересечь, рассечь&raquo; от <Em>кратити/коротити</Em> &ndash;
          &laquo;сокращать&raquo;, ср.: <Em>короткий, краткий</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>льщать
          </Span>
          (&laquo;обманывать&raquo; от <Em>лесть</Em> &ndash;
          &laquo;обман&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>ображать
          </Span>{" "}
          (&laquo;давать другой образ; делать повторно, вновь, по-иному&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>пираться
          </Span>{" "}
          (&laquo;<Span>пере</Span>браниваться&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>пятствие
          </Span>{" "}
          (&laquo;то, что натянуто, растянуто; то, что пересекает что-либо,
          мешая движению&raquo; от <Em>пяти</Em> &ndash; &laquo;тянуть,
          растягивать&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>словутый
          </Span>{" "}
          (&laquo;очень известный&raquo; от <Em>словутый</Em> &ndash;
          &laquo;известный&raquo;, ср.: <Em>слово, слава, слыть</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>смыкаться
          </Span>{" "}
          (от
          <Em>смыкатися</Em> &ndash; &laquo;ползать&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>ставиться
          </Span>
          (&laquo;умереть&raquo; &ndash; перейти, &laquo;переставиться&raquo; в
          иной мир);{" "}
          <Span className="litera">
            светопр<Span>е</Span>ставление
          </Span>
          ;
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>стол
          </Span>{" "}
          (&laquo;самый высокий стол; трон&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>ступить
          </Span>{" "}
          <Em>закон</Em>
          (&laquo;переступить границу дозволенного&raquo;);{" "}
          <Span className="litera">
            пр<Span>е</Span>ступник
          </Span>
          ;
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>творять
          </Span>{" "}
          <Em>в жизнь</Em>
          (&laquo;осуществлять задуманное; переводить что-либо из мечты в
          реальность&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>терпеть
          </Span>{" "}
          (&laquo;вытерпеть, выдержать; перенести, перетерпеть&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>тить
          </Span>{" "}
          (слово было однокоренным со словом перечить &ndash; &laquo;говорить
          поперёк&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>уменьшить
          </Span>
          (&laquo;значительно, очень уменьшить&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>е</Span>ходящий
          </Span>
          (&laquo;непостоянный; такой, который приходит и уходит&raquo; &ndash;{" "}
          <Em>преходящие радости</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            беспр<Span>е</Span>станный
          </Span>
          (&laquo;беспрерывный &ndash; такой, который не перестаёт двигаться,
          действовать и т.п.&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            непр<Span>е</Span>ложный
          </Span>{" "}
          (&laquo;не подлежащий изменению, нерушимый; такой, который нельзя
          нарушать &ndash; перекладывать, откладывать в сторону&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            непр<Span>е</Span>менный
          </Span>
          (&laquo;обязательный; такой, который нельзя переменять&raquo;).
        </P>
      </Li>
      <P>
        <Strong>3)</Strong> В иноязычных словах может также встречаться
        начальное <Span className="litera">пре-</Span> в значениях
        &laquo;впереди&raquo;, &laquo;передний; первый; главный&raquo;, однако в
        русском языке <Span className="litera">пре-</Span> входит в состав
        корня:
      </P>
      <Div className="primer">
        <P>
          <Em>
            пр<Span className="litera">е</Span>зидиум, пр
            <Span className="litera">е</Span>зидент, пр
            <Span className="litera">е</Span>людия, пр
            <Span className="litera">е</Span>мьер, пр
            <Span className="litera">е</Span>мьера.
          </Em>
        </P>
      </Div>
      <P>
        <Strong>4)</Strong> В ряде случаев правописание{" "}
        <Span className="litera">пре-</Span> следует просто запомнить:
      </P>
      <Div className="primer">
        <Em>
          пр<Span className="litera">е</Span>валировать, пр
          <Span className="litera">е</Span>вентивный, пр
          <Span className="litera">е</Span>зентация, пр
          <Span className="litera">е</Span>зентабельный, пр
          <Span className="litera">е</Span>зумпция невиновности, пр
          <Span className="litera">е</Span>йскурант, пр
          <Span className="litera">е</Span>лат, пр
          <Span className="litera">е</Span>парат, пр
          <Span className="litera">е</Span>рогатива, пр
          <Span className="litera">е</Span>стиж, пр
          <Span className="litera">е</Span>тендент, пр
          <Span className="litera">е</Span>тензия, пр
          <Span className="litera">е</Span>фект, пр
          <Span className="litera">е</Span>цедент.
        </Em>
      </Div>
    </Div>
    <P>
      <Strong>
        Приставка <Span className="litera">ПРИ-</Span>
      </Strong>{" "}
      имеет значения:
    </P>

    <Li>
      <P>приближение, присоединение, пространственная близость, смежность;</P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">При</Span>бежать,{" "}
            <Span className="litera">при</Span>стегнуть,{" "}
            <Span className="litera">при</Span>клеить,{" "}
            <Span className="litera">при</Span>школьный.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>действие, направленное сверху вниз;</P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">При</Span>давить,{" "}
            <Span className="litera">при</Span>мять,{" "}
            <Span className="litera">при</Span>жать.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        полнота, исчерпанность действия; доведение действия до конечной,
        желанной цели;
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">При</Span>учить,{" "}
            <Span className="litera">при</Span>ручить,{" "}
            <Span className="litera">при</Span>искать.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>действие, совершённое не в полном объёме или на ограниченный срок;</P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">При</Span>сесть
          </Em>{" "}
          (&laquo;опуститься на корточки, но остаться на ногах&raquo;),{" "}
          <Em>
            <Span className="litera">при</Span>лечь
          </Em>{" "}
          (&laquo;лечь на ограниченное, небольшое время&raquo;).
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        добавочное действие или действие не основное, сопутствующее какому-либо
        другому действию.
      </P>
      <Div className="primer">
        <P>
          <Em>
            <Span className="litera">При</Span>танцовывать
          </Em>{" "}
          (&laquo;сопровождать танцем другое действие &ndash; петь, говорить,
          идти и т.д.&raquo;),{" "}
          <Em>
            <Span className="litera">при</Span>даное
          </Em>{" "}
          (то, что даётся вместе с невестой, &laquo;добавляется&raquo; к ней).
        </P>
      </Div>
    </Li>

    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> Во многих случаях в современном русском языке
        приставка <Span className="litera">при-</Span> либо уже не выделяется в
        словах, а сливается с корнем, либо её значение не столь очевидно. Однако
        её значение можно восстановить, если обратиться к этимологии
        (происхождению) слова. Кроме того, некоторые слова созвучны другим, с
        приставкой <Span className="litera">пре-</Span>, например:
      </P>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>баутка
          </Span>
          (&laquo;присказка&raquo;; от глагола <Em>баяти</Em> &ndash;
          &laquo;говорить&raquo;; <Span className="litera">при-</Span> имеет
          значение добавочного действия, действия, сопровождающего основное);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>бывать
          </Span>{" "}
          <Em>куда-то</Em>
          (&laquo;приезжать в какое-то место&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>вадить
          </Span>{" "}
          (&laquo;приучить к чему-нибудь&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>вередливый
          </Span>{" "}
          (от прилагательного <Em>вередливый</Em> &ndash; &laquo;неженка,
          слабый&raquo;; <Span className="litera">при-</Span>
          имеет значение &laquo;немного, слегка&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>вратник
          </Span>{" "}
          (&laquo;тот, кто стоит при воротах, рядом с воротами, у двери&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>выкнуть
          </Span>{" "}
          (от глагола
          <Em>выкнути</Em> &ndash; &laquo;привыкать&raquo;, ср.: <Em>навык</Em>;{" "}
          <Span className="litera">при-</Span>
          имеет значение доведения действия до конечного, желанного результата);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>дать
          </Span>{" "}
          (&laquo;дать дополнительно&raquo; &ndash;{" "}
          <Em>дивизия с приданными ей подразделениями</Em>; &ldquo;усилить,
          прибавить&rdquo; &ndash; <Em>придать храбрости</Em>; &laquo;сделать
          каким-либо по виду; довести до желанного результата&raquo; &ndash;{" "}
          <Em>
            придать законную форму документу, придать значение чьим-то словам
          </Em>
          );{" "}
          <Span className="litera">
            пр<Span>и</Span>дача
          </Span>
          ;{" "}
          <Span className="litera">
            пр<Span>и</Span>даное
          </Span>{" "}
          <Em>невесты</Em>;
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>дел
          </Span>
          (&laquo;пристройка&raquo; &ndash; <Em>церковный придел</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">приёмник</Span> (&laquo;место; аппарат для
          приёма чего-либо&raquo; &ndash;
          <Em>радиоприёмник</Em>, <Em>детский приёмник</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>зирать
          </Span>
          (&laquo;присматривать, приглядывать за кем-либо; заботиться о
          ком-либо; дать приют и пропитание&raquo; &ndash;{" "}
          <Em>призреть страждущих</Em>), <Em>дом</Em>{" "}
          <Span className="litera">
            пр<Span>и</Span>зрения
          </Span>{" "}
          (&laquo;дом для престарелых, для тех, кому нужен присмотр,
          уход&raquo;);{" "}
          <Span className="litera">
            беспр<Span>и</Span>зорный
          </Span>{" "}
          (&laquo;такой, за которым нет присмотра,
          &ldquo;призора&rdquo;&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>клонить
          </Span>{" "}
          (&laquo;опустить к земле, вниз&raquo; &ndash;{" "}
          <Em>приклонить голову на подушку</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>ключение
          </Span>{" "}
          (от
          <Em>ключитися</Em> &ndash; &laquo;случиться, происходить&raquo;, то
          есть &ndash; &laquo;то, что случилось, &ldquo;пришло&rdquo;&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>ложить
          </Span>{" "}
          (&laquo;присоединить, положить вплотную&raquo; &ndash;{" "}
          <Em>приложить руку к голове</Em>; &laquo;направить действие на
          что-либо, применить&raquo; &ndash; <Em>приложить усилия</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>пирать
          </Span>{" "}
          (&laquo;подпирать, ставить вплотную&raquo; &ndash;{" "}
          <Em>припирать дверь, припирать к стенке</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>спешник
          </Span>{" "}
          (от
          <Em>приспети</Em> &ndash; &laquo;успеть&raquo;, то есть &ndash;
          &laquo;успеть к сроку&raquo;, ср.:
          <Em>успеть, поспеть</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>спичить
          </Span>{" "}
          (от <Em>спица</Em>
          &ndash; &laquo;палка, шпора&raquo;, то есть дословно: &laquo;уколами,
          ударами, заставлять идти, делать&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>ставить
          </Span>{" "}
          (&laquo;поставить вплотную&raquo; &ndash;{" "}
          <Em>приставить лестницу к окну</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>стойный
          </Span>{" "}
          (дословно: &laquo;такой, какой подходит, может стоять рядом&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>страстие
          </Span>{" "}
          (&laquo;сильная склонность, предвзятое отношение &ndash; то, что
          определяется действием страсти; страсть &ldquo;примешивается,
          добавляется&rdquo; к разуму и объективному мнению&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>ступить
          </Span>{" "}
          (&laquo;подойти вплотную; начать&raquo; &ndash;{" "}
          <Em>приступить к работе</Em>);{" "}
          <Span className="litera">
            непр<Span>и</Span>ступный
          </Span>{" "}
          (&laquo;такой, к которому нельзя подойти вплотную&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>сягать
          </Span>{" "}
          (от <Em>сягати</Em>
          &ndash; &laquo;касаться&raquo;, то есть дословно: &laquo;прикасаться к
          предмету клятвы&raquo;);{" "}
          <Span className="litera">
            пр<Span>и</Span>сяжный
          </Span>
          ;
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>творяться
          </Span>
          (&laquo;затворяться, закрываться неплотно&raquo; &ndash;{" "}
          <Em>притворять дверь</Em>);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>терпеться
          </Span>{" "}
          (&laquo;привыкнуть к чему-то неприятному&raquo;;{" "}
          <Span className="litera">при-</Span> имеет значение &laquo;довести
          действие до желанного результата&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>тязать
          </Span>{" "}
          (от <Em>тязати</Em>
          &ndash; &laquo;тянуть&raquo;, то есть дословно: &laquo;стараться
          дотянуться, взять&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>уменьшить
          </Span>{" "}
          (&laquo;немного, в незначительной степени&raquo;);
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            пр<Span>и</Span>ходящий
          </Span>{" "}
          (&laquo;тот, кто приходит, приближается&raquo; &ndash;{" "}
          <Em>приходящая домработница</Em>);{" "}
          <Span className="litera">
            пр<Span>и</Span>входящие
          </Span>{" "}
          <Em>обстоятельства</Em>;
        </P>
      </Li>
      <Li>
        <P>
          <Span className="litera">
            непр<Span>и</Span>менимый
          </Span>{" "}
          (&laquo;такой, который нельзя применить, взять в качестве отправной
          точки&raquo;).
        </P>
      </Li>
      <P>
        <Strong>2)</Strong> В иноязычных словах может также встречаться
        начальное <Span className="litera">при-</Span> в значении
        &laquo;первый&raquo; (<Em>прима</Em>):
      </P>
      <Div className="primer">
        <P>
          <Em>
            пр<Span className="litera">и</Span>мадонна, пр
            <Span className="litera">и</Span>мат, пр
            <Span className="litera">и</Span>митивный
          </Em>
        </P>
      </Div>
      <P>
        <Strong>3)</Strong> В ряде случаев правописание{" "}
        <Span className="litera">при-</Span> следует просто запомнить:
      </P>
      <Div className="primer">
        <P>
          <Em>
            пр<Span className="litera">и</Span>ватный, пр
            <Span className="litera">и</Span>ват-доцент, пр
            <Span className="litera">и</Span>ватизация, пр
            <Span className="litera">и</Span>вилегия, пр
            <Span className="litera">и</Span>оритет.
          </Em>
        </P>
      </Div>
    </Div>
    <P>2.6.3. Правописание согласных в приставках</P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Конечные согласные приставок (кроме приставок, оканчивающихся на
      <Span className="litera">з</Span>, <Span className="litera">с</Span>)
      обозначаются на письме одной и той же буквой, хотя эти согласные могут
      произноситься по-разному. (Перечень основных приставок см. в п. 2.5.
      Приставки.)
    </P>
    <P>
      Как и согласные в корне, конечные согласные приставок можно проверить,
      подобрав такое слово, в котором после данной приставки следует гласная или
      согласные <Span className="litera">р, л, м, н, в</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          <Span className="litera">От</Span>дать &ndash;{" "}
          <Span className="litera">от</Span>рыть,{" "}
          <Span className="litera">с</Span>жать &ndash;{" "}
          <Span className="litera">с</Span>резать.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В приставках, оканчивающихся на <Span className="litera">з</Span> (
      <Span className="litera">
        без-, вз-, воз-, из-, низ-, раз-, роз-, через-, чрез-
      </Span>
      ), перед гласной или звонкой согласной пишется буква{" "}
      <Span className="litera">з</Span>, перед глухими согласными пишется буква{" "}
      <Span className="litera">с</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          Бе<Span className="litera">з</Span>жалостный, бе
          <Span className="litera">з</Span>отрадный &ndash; бе
          <Span className="litera">с</Span>призорный.
        </Em>
      </P>
    </Div>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> Приставка <Span className="litera">с-</Span> не
        изменяет своего написания в зависимости от произношения, ср.:{" "}
        <Em>
          <Span className="litera">с</Span>жечь,{" "}
          <Span className="litera">с</Span>
          мести, <Span className="litera">с</Span>держать,{" "}
          <Span className="litera">с</Span>делать
        </Em>
        .
      </P>
      <P>
        <Strong>2)</Strong> В словах{" "}
        <Em>
          <Span className="litera">з</Span>десь,{" "}
          <Span className="litera">з</Span>дание,{" "}
          <Span className="litera">з</Span>доровый,{" "}
          <Span className="litera">з</Span>дравствуй, ни{" "}
          <Span className="litera">з</Span>ги не видно
        </Em>{" "}
        начальная <Span className="litera">з</Span> не является приставкой, а
        входит в состав корня.
      </P>
      <P>
        <Strong>3)</Strong> Слова{" "}
        <Em>
          бли<Span className="litera">з</Span>лежащий, бли
          <Span className="litera">з</Span>стоящий
        </Em>{" "}
        и т.п. являются сложными, где <Span className="litera">близ-</Span>
        &ndash; корень, поэтому он не подчиняется правилу правописания приставок
        на <Span className="litera">з</Span>.
      </P>
      <P>
        <Strong>4)</Strong> При написании слов{" "}
        <Em>
          бе<Span className="litera">з</Span>вкусица, и
          <Span className="litera">с</Span>чезать, чере
          <Span className="litera">с</Span>чур, чере
          <Span className="litera">с</Span>седельник, и
          <Span className="litera">с</Span>подтишка, и
          <Span className="litera">с</Span>подлобья
        </Em>{" "}
        чаще всего делаются ошибки.
      </P>
    </Div>
    <P>2.6.4. Правописание двойных согласных на стыке приставки и корня</P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      На стыке приставки и корня пишутся две одинаковые согласные, если
      приставка оканчивается на согласный, а корень начинается с той же
      согласной буквы.
    </P>
    <Div className="primer">
      <P>
        Например:{" "}
        <Em>
          бе<Span className="litera">зз</Span>аконие
        </Em>{" "}
        (приставка{" "}
        <Em>
          бе<Span className="litera">з</Span>
        </Em>
        -, корень{" "}
        <Em>
          -<Span className="litera">з</Span>акон
        </Em>
        -),{" "}
        <Em>
          во<Span className="litera">зз</Span>вание
        </Em>{" "}
        (приставка
        <Em>
          во<Span className="litera">з</Span>
        </Em>
        -, корень -
        <Em>
          <Span className="litera">з</Span>в
        </Em>
        -),{" "}
        <Em>
          ра<Span className="litera">сс</Span>тегнуть
        </Em>{" "}
        (приставка -
        <Em>
          ра<Span className="litera">с</Span>
        </Em>
        -, корень -
        <Em>
          <Span className="litera">с</Span>тег
        </Em>
        -),{" "}
        <Em>
          во<Span className="litera">сс</Span>тание
        </Em>{" "}
        (приставка -
        <Em>
          во<Span className="litera">с</Span>
        </Em>
        -, корень -
        <Em>
          <Span className="litera">с</Span>та
        </Em>
        -),{" "}
        <Em>
          о<Span className="litera">тт</Span>януть
        </Em>{" "}
        (приставка -
        <Em>
          о<Span className="litera">т</Span>
        </Em>
        -, корень -
        <Em>
          <Span className="litera">т</Span>я
        </Em>
        -).
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В словах с корнем <Span className="litera">чет-</Span> пишется одна буква
      <Span className="litera">с</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          Ра<Span className="litera">с</Span>честь, ра
          <Span className="litera">с</Span>чёт, ра
          <Span className="litera">с</Span>чётный, ра
          <Span className="litera">с</Span>чётливый.
        </Em>
      </P>
      <P>
        <Strong>Исключение:</Strong>{" "}
        <Em>
          бе<Span className="litera">сс</Span>чётный
        </Em>
        .
      </P>
    </Div>

    <Li>
      <P>
        В словах с корнем <Span className="litera">счит-</Span> пишется две
        буквы <Span className="litera">с</Span>.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Ра<Span className="litera">сс</Span>читать, ра
            <Span className="litera">сс</Span>читывать, ра
            <Span className="litera">сс</Span>читанный.
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Запомните правописание слов <Span className="litera">разевать</Span>
      (рот), <Span className="litera">разорить</Span>,{" "}
      <Span className="litera">отворить</Span>.
    </P>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      В слове{" "}
      <Em>
        ра<Span className="litera">сс</Span>ориться
      </Em>{" "}
      пишется две буквы <Span className="litera">с</Span>.
    </P>
    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      Следует различать такие пары слов, как:
    </P>
    <Li><P>
      <Em>
        ра<Span className="litera">зз</Span>еваться
      </Em>{" "}
      &ndash;{" "}
      <Em>
        ра<Span className="litera">з</Span>евать рот
      </Em>
      ;
    </P></Li>
    <Li><P>
      <Em>
        по<Span className="litera">дд</Span>елка документов
      </Em>{" "}
      &ndash;{" "}
      <Em>
        по<Span className="litera">д</Span>елки
      </Em>
      (&laquo;мелкие изделия, изготовленные ручным способом&raquo;);
    </P></Li>
    <Li><P>
      <Em>
        по<Span className="litera">дд</Span>ержанный
      </Em>{" "}
      (кем-то) &mdash;{" "}
      <Em>
        по<Span className="litera">д</Span>ержанный
      </Em>{" "}
      (&laquo;не новый, бывший в употреблении&raquo;);
    </P></Li>
    <Li><P>
      <Em>
        по<Span className="litera">дд</Span>анный
      </Em>{" "}
      (какого-либо государства) &ndash;{" "}
      <Em>
        по<Span className="litera">д</Span>анный
      </Em>{" "}
      (&laquo;поднесённый&raquo;);
    </P></Li>
    <Li><P>
      <Em>
        по<Span className="litera">дд</Span>аться
      </Em>{" "}
      (влиянию) &ndash;{" "}
      <Em>
        по<Span className="litera">д</Span>аться
      </Em>
      (в город, на заработки);
    </P></Li>
    <Li><P>
      <Em>
        по<Span className="litera">дд</Span>разнить
      </Em>{" "}
      (&laquo;слегка подразнить; дразня, подстрекнуть к чему-то&raquo;) &ndash;{" "}
      <Em>
        по<Span className="litera">д</Span>разнить
      </Em>{" "}
      (&laquo;дразнить какое-то время&raquo;).
    </P></Li>
  </View>
);
