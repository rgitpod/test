import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Root, Prefix, Suffix, Ending } from '../../assets/symbols'

export const sostav_slova = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      <Strong>Морфемика</Strong> (от греч. &laquo;морфе&raquo; &ndash; форма)
      &ndash; раздел науки о языке, в котором изучается состав (строение) слова.
    </P>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Слова состоят из значимых частей, или морфем: корней, приставок,
      суффиксов, окончаний.
    </P>

    <Li>
      <P>
        <Strong>Морфемы</Strong> &ndash; это минимальные значимые части слова.
        Они образуют морфемный состав языка.
      </P>
    </Li>
    <Li>
      <P>Каждая морфема имеет свое значение.</P>
      <P>
        <Strong>Например:</Strong> <Em>подводник</Em>.
      </P>
      <P>Данное имя существительное состоит из 4 морфем:</P>
      <P>
      <Strong>
        <Em>-вод-</Em>
      </Strong>{" "}
      &ndash; корень, общая часть родственных слов, составляет основу
      лексического значения слова;{"\n"}{" "}
      <Strong>
        <Em>под-</Em>
      </Strong>{" "}
      &ndash; приставка, указывает на положение в пространстве &ndash; ниже
      чего-либо;{"\n"}{" "}
      <Strong>
        <Em>-ник</Em>
      </Strong>{" "}
      &ndash; суффикс, указывает на человека по роду деятельности.{"\n"}{" "}
      <Ending /> &ndash; нулевое окончание, имеет
      грамматическое значение: указывает на форму именительного падежа
      единственного числа существительного мужского рода 2-го склонения.
      </P>
    </Li>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Для разных морфем есть свои условные значки:
    </P>
    <Div className="primer">
    <P><Root /> &ndash;  корень;</P>
    <P><Prefix /> &ndash;  приставка;</P>
    <P><Suffix /> &ndash;  суффикс;</P>
    <P><Ending /> &ndash;  окончание.</P>
    </Div>
  </View>
);
