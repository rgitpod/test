import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "./contents/data/tags";

export default function Test({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <P>
        <Strong>Звуки речи</Strong> &ndash; это звуки, из которых состоят слова.
        Звук есть самая мелкая единица языка.
      </P>
      <P>
        <Strong>
          <Span className="number">1.</Span>
        </Strong>{" "}
        Звуки речи, как и все другие звуки природы (звуки шагов человека, гудки
        машины, пение птиц и т.д.), порождаются колебаниями воздуха, то есть
        звуки речи [а], [б], [в], [о] относятся к акустическим явлениям, они
        воспринимаются органами слуха как разные звучания.
      </P>
      <P>
        <Strong>
          <Span className="number">2.</Span>
        </Strong>{" "}
        Колебания воздуха возникают при прохождении воздушной струи через
        речевой аппарат.
      </P>
      <Li>
        <Strong>Речевойd аппарат</Strong> состоит из лёгких, гортани с
        голосовыми связками, глотки, полости рта (с языком, губами, твёрдым и
        мягким нёбом) и полости носа.
      </Li>
      <Li>
        <Strong>Функция лёгких</Strong> &ndash; дать воздушную струю.
      </Li>
      <Li>
        Все другие органы речевого аппарата принимают непосредственное участие в
        образовании звуков. При &laquo;говорении&raquo; одни из них двигаются
        (голосовые связки, мягкое нёбо, язык, губы), эти органы речи называются{" "}
        <Strong>активными</Strong>; другие остаются неподвижными (твёрдое нёбо,
        зубы), они называются <Strong>пассивными</Strong>.
      </Li>
      <Li>
        В результате работы голосовых связок (или отсутствия таковой) и трения
        воздуха о преграды создаются различные звучания &ndash; разные звуки.
      </Li>
      <Li>
        Преграды создаются неодинаковым положением активных органов речи в
        момент образования звука. Следовательно, звук есть также явление
        физиологическое: для его возникновения требуется определённая работа
        органов речи.
      </Li>
      <P>
        <Strong>
          <Span className="number">3.</Span>
        </Strong>{" "}
        Звуки [а], [б], [в], [о] и др. являются элементами языка, функция
        которого, как известно, состоит в том, чтобы передавать смысл. Поэтому
        звуки речи связаны со значениями слов и их частей (морфем &ndash;
        корней, приставок и т.д.). С помощью изменения звуков можно превратить
        одно слово в другое.
      </P>
      <Div className="primer">
        <P>
          Ср.: <Em>дом, дым, дам</Em> (тебе книгу), (много){" "}
          <Em>дум; дом, том.</Em>
        </P>
      </Div>
    </View>
  );
}
