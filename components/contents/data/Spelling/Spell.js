import { Text, View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";


export const Spell = (
  <View>
    <P>
      В научной литературе и учебных пособиях при описании звуков используется
      фонетическая транскрипция &ndash; специальный вид письма, позволяющий
      более или менее точно передать произношение отдельных звуков и их
      сочетаний, слов, словосочетаний и предложений.
    </P>
    <P>
      <Strong>Для обозначений звуков используются следующие знаки.</Strong>
    </P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Чтобы отличить звук от буквы, звуки заключаются в квадратные скобки
      &ndash; <Span className="litera0">[ ]</Span>.
    </P>
    <Div className="primer">
      <P>[а], [о], [л].</P>
    </Div>
    <P>
      В квадратные скобки заключается и весь транскрибируемый элемент: слово,
      словосочетание, предложение и т.д.
    </P>
    <Div className="primer">
      <P>[сто&#769;л], [до&#769;м бы&#769;л ма&#769;л].</P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Для обозначения основной части звуков используется русский алфавит ([м],
      [н], [ы] и др.) с добавлением некоторых специальных знаков.
    </P>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Знак <Span className="litera0">[ j ]</Span> обозначает согласный{" "}
      <Span className="litera">й</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>Май</Em> [ма&#769;j], <Em>я</Em> [jа&#769;].
      </P>
    </Div>
    <P>
      Для обозначения этого звука используется и знак{" "}
      <Span className="litera0">[й]</Span>.
    </P>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      Знак <Span className="litera0">[э]</Span> обозначает ударный гласный,
      который в обычном письме соотносится с буквой{" "}
      <Span className="litera">е</Span> и с буквой{" "}
      <Span className="litera">э</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>Сел</Em> [с&rsquo;э&#769;л], <Em>эти</Em> [э&#769;т&rsquo;и].
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">5.</Span>
      </Strong>{" "}
      Знак <Span className="litera0">[ &rsquo; ]</Span> &ndash; запятая справа
      сверху у буквы &ndash; указывает на мягкий согласный.
    </P>
    <Div className="primer">
      <P>
        <Em>Мир</Em> [м&rsquo;и&#769;р], <Em>медь</Em>{" "}
        [м&rsquo;э&#769;д&rsquo;].
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">6.</Span>
      </Strong>{" "}
      Знаки <Span className="litera0">[ &oline; ]</Span> или{" "}
      <Span className="litera0">[:]</Span> обозначают долгий согласный.
    </P>
    <Div className="primer">
      <P>
        <Em>Сжал</Em> [ж:а&#769;л].
      </P>
    </Div>
  </View>
);
