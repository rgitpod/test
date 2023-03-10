import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Table, Col, Row } from "../table";

export const suffiksy_postfiksy = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      <Strong>Суффикс</Strong> &ndash; это морфема, которая стоит после корня и
      обычно служит для образования новых слов, хотя может использоваться и при
      образовании формы одного слова.
    </P>
    <Div className="primer">
      <P>
        Например:{" "}
        <Em>
          добрый &ndash; добр<Span className="litera">от</Span>а
        </Em>{" "}
        (суффикс -<Em>от</Em> &ndash; словообразовательный),{" "}
        <Em>
          добр<Span className="litera">ее</Span>, добр
          <Span className="litera">ейш</Span>ий
        </Em>
        (суффикс -<Em>ее</Em> &ndash; формообразующий, образует форму
        сравнительной степени прилагательного; суффикс -<Em>ейш</Em> &ndash;
        формообразующий, образует форму превосходной степени прилагательного).
      </P>
    </Div>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        В некоторых случаях суффикс <Span className="litera">-j-</Span> может не
        получать в слове специального графического обозначения. На его наличие
        могут указывать гласные <Span className="litera">е, ё, ю, я</Span> в
        положении после согласного или разделительный{" "}
        <Span className="litera">ь</Span>, например:
        <Em>Поволжь</Em>[&nbsp;j&nbsp;]<Em>е</Em> [п&Lambda;во&#769;лжjь],{" "}
        <Em>Заонежь</Em>[&nbsp;j&nbsp;]<Em>е</Em>
        [зъ&Lambda;н&rsquo;э&#769;жjь].
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Большинство суффиксов служит для образования новых слов.
    </P>
    <Div className="primer">
      <P>
        <Em>
          Учить &ndash; учи<Span className="litera">тель</Span>, учитель
          <Span className="litera">ств</Span>о, учитель
          <Span className="litera">ск</Span>ий.
        </Em>
      </P>
    </Div>
    <P>
      Формообразующих суффиксов в русском языке сравнительно немного. Наиболее
      важными среди них являются следующие:
    </P>
    <Li>
      <P>
        суффиксы сравнительной и превосходной степени прилагательного:{" "}
        <Span className="litera">-ее</Span> (<Span className="litera">-ей</Span>
        ), <Span className="litera">-е, -ше, -ейш-, -айш</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Быстр<Span className="litera">ее</Span>, быстр
            <Span className="litera">ей</Span>, дорож
            <Span className="litera">е</Span>, стар
            <Span className="litera">ше</Span>, глубоч
            <Span className="litera">айш</Span>ий, мудр
            <Span className="litera">ейш</Span>ий.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        суффикс прошедшего времени глагола <Span className="litera">-л</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Пришё<Span className="litera">л</Span>, узна
            <Span className="litera">л</Span>.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        суффикс повелительного наклонения глагола{" "}
        <Span className="litera">-и</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Бер<Span className="litera">и</Span>, вед
            <Span className="litera">и</Span>.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        некоторые суффиксы существительных как показатели множественного и
        единственного числа;
      </P>
      <Div className="primer">
        <P>
          Ср.:{" "}
          <Em>
            граждан<Span className="litera">ин</Span>
          </Em>{" "}
          (ед.ч.) &ndash; <Em>граждане</Em> (мн.ч.);
          <Em>друг</Em> (ед.ч.) &ndash; <Em>друзья</Em> (мн.ч.; оно создаётся не
          только за счёт окончания <Span className="litera">-я</Span> [
          <Span className="litera">а</Span>], но и за счёт суффикса{" "}
          <Span className="litera">-j-</Span> &ndash; [друз&rsquo;
          <Span className="litera0">j</Span>а&#769;]); <Em>сын</Em>
          (ед.ч.) &ndash;{" "}
          <Em>
            сын<Span className="litera">овь</Span>я
          </Em>{" "}
          (мн.ч.; оно создаётся не только за счёт окончания{" "}
          <Span className="litera">-я</Span> [<Span className="litera">а</Span>
          ], но и за счёт суффикса <Span className="litera">-овj</Span> &ndash;
          [сын&Lambda;в&rsquo;<Span className="litera0">j</Span>а&#769;]);
          <Em>
            ут<Span className="litera">ён</Span>ок
          </Em>{" "}
          (ед.ч.) &ndash;{" "}
          <Em>
            ут<Span className="litera">ят</Span>а
          </Em>
          (мн.ч.).
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        некоторые суффиксы существительных как показатели косвенных падежей.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>мать</Em> &ndash; (нет){" "}
          <Em>
            мат<Span className="litera">ер</Span>и
          </Em>
          , <Em>время</Em> &ndash; (нет){" "}
          <Em>
            врем<Span className="litera">ен</Span>и.
          </Em>
        </P>
      </Div>
    </Li>
    <P>
      Правописание суффиксов зависит от частеречной принадлежности слова и
      поэтому будет рассмотрено при характеристике соответствующих частей речи.
    </P>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>1)</Strong> В лингвистике нет единства в определении статуса
        показателя неопределённой формы глагола (инфинитива) &ndash;{" "}
        <Span className="litera">-ть, -ти, -чь</Span> (
        <Em>
          бежа<Span className="litera">ть</Span>, вез
          <Span className="litera">ти</Span>, бере
          <Span className="litera">чь</Span>
        </Em>
        ). Часть исследователей характеризует эти морфемы как окончание, другие
        &ndash; как суффикс. В данном пособии мы рассматриваем{" "}
        <Strong>показатель инфинитива</Strong> (
        <Span className="litera">-ть, -ти, -чь</Span>){" "}
        <Strong>как окончание</Strong> (!). {"\n"}
        {"\n"} <Strong>2)</Strong> В лингвистике нет единой точки зрения на
        частеречную принадлежность причастий (
        <Em>
          чита<Span className="litera">ющ</Span>ий, чита
          <Span className="litera">ем</Span>ый, прочита
          <Span className="litera">вш</Span>ий, прочита
          <Span className="litera">нн</Span>ый
        </Em>
        ) и деепричастий (
        <Em>
          чита<Span className="litera">я</Span>, прочита
          <Span className="litera">в</Span>
        </Em>
        ). В одних пособиях причастия и деепричастия характеризуются как
        самостоятельные части речи (и в этом случае соответствующие суффиксы
        будут словообразовательными), в других &ndash; как особые формы глагола
        (и тогда те же суффиксы будут формообразующими). В данном пособии
        причастия и деепричастия рассматриваются как самостоятельные части речи.
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Как корни и приставки, суффиксы могут изменять свой внешний облик. При
      этом, как и в корнях, здесь наблюдаются чередования согласных и гласных
      звуков. В частности, возможны &laquo;беглые гласные&raquo;.
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          книж-<Span className="litera">к</Span>-а &ndash; книж-
          <Span className="litera">ек</Span>; скольз-
          <Span className="litera">к</Span>-ий &ndash; скольз-
          <Span className="litera">ок</Span>, смеш-
          <Span className="litera">н</Span>-ой &ndash; смеш-
          <Span className="litera">он</Span>, стар-
          <Span className="litera">ец</Span> &ndash; стар-
          <Span className="litera">ц</Span>-а, блюд-
          <Span className="litera">ц</Span>-е &ndash; блюд-
          <Span className="litera">ец</Span>.
        </Em>
      </P>
    </Div>
    <P>
      Достаточно регулярно в суффиксах наблюдаются чередования согласных и
      сочетаний звуков (<Span className="litera">к</Span>/
      <Span className="litera">ч</Span>, <Span className="litera">ова</Span>/
      <Span className="litera">уj</Span>).
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          книж-<Span className="litera">к</Span>-а &ndash; книж-
          <Span className="litera">еч</Span>-к-а, ком-
          <Span className="litera">ок</Span> &ndash; ком-
          <Span className="litera">оч</Span>-ек, пир-
          <Span className="litera">ова</Span>-ть &ndash; пир-
          <Span className="litera">уj</Span>-ю.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      В целом при выделении суффиксов и комплексов суффиксов необходимо
      ориентироваться на слова, от которых образовано данное слово. При этом
      удобно использовать перифраз с таким однокоренным словом.
    </P>
    <P>
      <Strong>Например:</Strong>
    </P>
      <Li><P>
        Сравним морфемный состав имён существительных:{" "}
        <Span className="litera">Сашенька, вишенка, горошинка</Span>.</P>
        <Li>
          <P>
            В слове <Span className="litera">Сашенька</Span> (
            <Em>Саш-еньк-а</Em>) выделяется корень <Em>Саш-</Em>(<Em>Саш-а</Em>)
            и суффикс <Em>-еньк</Em>(<Em>а</Em>): &laquo;<Em>Сашенька</Em>{" "}
            &ndash; уменьшительно-ласкательное к{" "}
            <Span className="litera">Саш</Span>
            <Em>а</Em>&raquo;.
          </P>
        </Li>
        <Li>
          <P>
            В слове <Span className="litera">вишенка</Span> (<Em>вишен-к-а</Em>)
            выделяется корень <Em>вишен-</Em> с беглой гласной (<Em>вишн-я</Em>)
            и суффикс <Em>-к</Em>(<Em>а</Em>): &laquo;<Em>Вишенка</Em> &ndash;
            маленькая <Span className="litera">вишн</Span>
            <Em>я</Em>&raquo;.
          </P>
        </Li>
        <Li>
          <P>
            В слове <Span className="litera">горошинка</Span> (
            <Em>горош-ин-к-а</Em>) выделяется корень
            <Em>горош-</Em> с чередующимися согласными <Em>х</Em>/<Em>ш</Em> (
            <Em>горох</Em>) и два суффикса: суффикс <Em>-ин-</Em> (
            <Em>горош-ин-а</Em>): &laquo;<Em>Горошина</Em> &ndash; единичная
            составляющая
            <Span className="litera">гороха&raquo;</Span>; суффикс <Em>-к</Em>(
            <Em>а</Em>): &laquo;<Em>Горошинка</Em> &ndash; маленькая{" "}
            <Span className="litera">горош</Span>
            <Em>ина</Em>&raquo;.
          </P>
        </Li>
      </Li>
      <Li><P>
        Сравним морфемный состав имён прилагательных:{" "}
        <Span className="litera">мечтательный</Span> и{" "}
        <Span className="litera">сознательный</Span>.</P>
        <Li>
          <P>
            В слове <Span className="litera">мечтательный</Span> (
            <Em>мечт-а-тель-н-ый</Em>) выделяется корень
            <Em>мечт-</Em> (<Em>мечт-а</Em>) и три суффикса: суффикс глагола{" "}
            <Em>-а-</Em> (<Em>мечт-а-ть</Em>): &laquo;<Em>Мечтать</Em> &ndash;
            предаваться <Span className="litera">мечт</Span>
            <Em>ам</Em>&raquo;; суффикс <Em>-тель</Em> со значением
            &laquo;деятель&raquo; (<Em>мечт-а-тель</Em>): &laquo;
            <Em>Мечтатель</Em> &ndash; тот, кто любит{" "}
            <Span className="litera">мечт</Span>
            <Em>ать</Em>&raquo;; суффикс прилагательного <Em>-н</Em>(<Em>ый</Em>
            ): &laquo;<Em>Мечтательный</Em> &ndash; такой, как{" "}
            <Span className="litera">мечтатель</Span>; свойственный
            <Span className="litera">мечтател</Span>
            <Em>ю</Em>&raquo;.
          </P>
        </Li>
        <Li>
          <P>
            В слове <Span className="litera">сознательный</Span> (
            <Em>со-зна-тельн-ый</Em>) выделяется корень
            <Em>зна-</Em> (<Em>зна-ть</Em>) с приставкой <Em>со-</Em> (
            <Em>со-зна-ть</Em>), а также один суффикс
            <Em>-тельн</Em>(<Em>ый</Em>): &laquo;<Em>Сознательный</Em> &ndash;
            такой, который правильно <Span className="litera">созн</Span>
            <Em>аёт</Em>, понимает окружающую действительность&raquo;. Суффикс
            <Em>-тель</Em> в данном случае не выделяется, поскольку в русском
            языке нет существительного
            <Em>сознатель</Em>.
          </P>
        </Li>
      </Li>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
      <P>
        <Strong>
          Наиболее типичными ошибками при выделении суффиксов являются
          следующие.
        </Strong>
      </P>
      <P>
        <Strong>1)</Strong> Отнесение конечных букв суффикса к окончанию.
        Особенно часто это происходит с суффиксами:
        <Span className="litera">-ениj</Span>(<Em>е</Em>) &ndash;{" "}
        <Em>
          влад-<Span className="litera">ениj</Span>-е, -тиj
        </Em>
        (<Em>е</Em>) &ndash; <Em>взя-тиj-е, -иj</Em>(<Em>е</Em>) &ndash;{" "}
        <Em>самолюб-иj-е, -j</Em>(<Em>е</Em>) &ndash; <Em>счасть-j-е, -j</Em>(
        <Em>ё</Em>) &ndash; <Em>старь-j-ё, -ациj</Em>(<Em>я</Em>) &ndash;{" "}
        <Em>делег-ациj-я, -иj</Em>(<Em>я</Em>) &ndash; <Em>арм-иj-я</Em>. Во
        всех этих случаях <Em>иj</Em> или <Em>j</Em> относятся к суффиксу, а не
        к окончанию (!).
      </P>
      <P>
        <Strong>2)</Strong> Отнесение к суффиксу части корня или части
        предыдущего суффикса (обычно при наличии в конце слова одинаковых звуков
        и букв).
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>юбоч-к-а</Em> (корень <Em>юбоч-</Em> &ndash; <Em>юбк-а</Em> и
          суффикс <Em>-к</Em>(<Em>а</Em>)) &ndash; <Em>пил-оч-к-а</Em> (корень{" "}
          <Em>пил-</Em> &ndash; <Em>пил-а</Em> и два суффикса: а) <Em>-оч-</Em>
          (здесь есть беглая гласная и чередование <Em>к</Em>/<Em>ч</Em>)
          &ndash; <Em>пил-к-а, пил-ок</Em>; б) -<Em>к</Em>(<Em>а</Em>) &ndash;{" "}
          <Em>пил-оч-к-а, тёл-оч-к-а</Em>).
        </P>
      </Div>
      <P>
        <Strong>3)</Strong> Неразличение отдельных суффиксов и суммы суффиксов.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>косн-</Em>
          <Span className="litera">ость</Span> (от{" "}
          <Span className="litera">косн</Span>
          <Em>ый</Em>, где
          <Em>косн</Em>- &ndash; корень), <Em>готов</Em>-
          <Span className="litera">ность</Span> (от{" "}
          <Span className="litera">готов</Span>
          <Em>ый</Em>, где <Em>готов</Em>- &ndash; корень), <Em>грамот-н-</Em>
          <Span className="litera">ость</Span> (ср.:{" "}
          <Span className="litera">грамот</Span>-<Em>а</Em> &rarr;
          <Em>грамот</Em>-<Span className="litera">н</Span>-<Em>ый</Em> &rarr;{" "}
          <Em>грамот-н-</Em>
          <Span className="litera">ость</Span>).
        </P>
      </Div>
      <P>
        <Strong>4)</Strong> Выделение в качестве суффикса части корня или
        основы.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Люб<Span className="litera">л</Span>-ю
          </Em>{" "}
          (корень <Em>любл</Em>- с чередованием{" "}
          <Span className="litera">б</Span>/<Span className="litera">бл</Span>);
        </P><P>
        <Em>
          бесед-<Span className="litera">уй</Span>-те
        </Em>{" "}
        (в данном суффиксе наблюдается чередование{" "}
        <Span className="litera">-ова-</Span>/
        <Span className="litera">-уj-</Span>, причем обычно{" "}
        <Span className="litera0">[&nbsp;j&nbsp;]</Span> не получает
        специального графического выражения (перед гласной буквой) &ndash;{" "}
        <Em>бесед-</Em>
        <Span className="litera">у[j]</Span>-<Em>ю</Em>, а в повелительном
        наклонении (перед согласной буквой) такое графическое выражение есть
        &ndash;{" "}
        <Em>
          бесед-<Span className="litera">уй</Span>-те
        </Em>
        ).</P>
      </Div>
    </Div>
    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      Суффиксы занимают положение после корня <Strong>перед окончанием</Strong>{" "}
      (если оно имеется у слова).
    </P>
    <P>
      В русском языке есть несколько суффиксов, которые могут располагаться{" "}
      <Strong>после окончания</Strong>:
    </P>

    <Li>
      <P>
        возвратный суффикс <Span className="litera">-ся</Span> (
        <Span className="litera">-сь</Span>);
      </P>
      <Div className="primer">
        <P>
          <Em>
            Учит<Span className="litera">ся</Span>, учила
            <Span className="litera">сь</Span>.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        суффикс множественного числа в формах повелительного наклонения глаголов{" "}
        <Span className="litera">-те</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Идём<Span className="litera">те</Span>.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        суффиксы неопределённых местоимений{" "}
        <Span className="litera">-то, -либо, -нибудь</Span> (обратите внимание
        на то, что эти элементы пишутся через дефис!).
      </P>
      <Div className="primer">
        <P>
          <Em>
            Какой-<Span className="litera">то</Span>, какой-
            <Span className="litera">либо</Span>, какой-
            <Span className="litera">нибудь</Span>.
          </Em>
        </P>
      </Div>
    </Li>

    <P>
      В лингвистике для этой разновидности суффиксов есть специальный термин
      &ndash; <Strong>постфиксы</Strong>.
    </P>
    <P>
      Постфикс <Span className="litera">-ся</Span> выступает в двух вариантах:
    </P>

    <Li>
      <P>
        после согласных &ndash; <Span className="litera">-ся</Span>;
      </P>
      <Div className="primer">
        <P>
          <Em>
            Учил<Span className="litera">ся</Span>, занял
            <Span className="litera">ся</Span>, ветвить
            <Span className="litera">ся</Span>.
          </Em>
        </P>
      </Div>
    </Li>
    <Li>
      <P>
        после гласных &ndash; <Span className="litera">-сь</Span>.
      </P>
      <Div className="primer">
        <P>
          <Em>
            Учила<Span className="litera">сь</Span>, заняла
            <Span className="litera">сь</Span>, ветвила
            <Span className="litera">сь</Span>.
          </Em>
        </P>
      </Div>
    </Li>
  </View>
);
