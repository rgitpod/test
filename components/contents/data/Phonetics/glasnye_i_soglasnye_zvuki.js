import { View } from "react-native";
import { Strong, Span, P, Li, Div } from "../tags";

export const glasnye_i_soglasnye_zvuki = (
  <View>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      При образовании каждого конкретного звука движение органов речи строго
      индивидуально.
    </P>
    <Div className="primer"><P>
      Например, при образовании звуков <Span className="litera0">[д], [т]</Span>{" "}
      кончик и передняя часть языка смыкается с верхними зубами; при образовании
      звуков <Span className="litera0">[з], [с]</Span> кончик и передняя часть
      языка приближается к верхним зубам, но не смыкается с ними; при
      образовании звука <Span className="litera0">[у]</Span> язык отодвигается
      назад и задняя его часть поднимается высоко к нёбу, а губы при этом
      выпячиваются вперёд и округляются.
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Характер звука зависит ещё и от того, участвуют ли в его образовании
      голосовые связки и создаются ли шумы при прохождении воздуха через речевой
      аппарат.
    </P>
    <Div className="primer"><P>
      Например, в образовании звуков{" "}
      <Span className="litera0">[а], [о], [у]</Span> голосовые связки принимают
      участие: их колебание создаёт голос, а шумы почти отсутствуют, так как
      воздушная струя, проходя через полость рта, не встречает достаточно
      серьёзных преград.{"\n"}
      При образовании звуков <Span className="litera0">[д], [з]</Span> голосовые
      связки также колеблются (значит, есть голос), но при этом есть ещё и шумы,
      которые возникают в результате трения воздуха о преграду (преградой в этом
      случае являются сомкнутые (звук <Span className="litera0">[д]</Span>) или
      сближенные (звук <Span className="litera0">[з]</Span>) кончик языка с
      верхними зубами). {"\n"}При образовании звуков{" "}
      <Span className="litera0">[т], [с]</Span> речевой аппарат работает так же,
      как при образовании звуков <Span className="litera0">[д], [з]</Span>, но
      голосовые связки не колеблются. Следовательно, шумы есть (за счёт
      образования преград), а голос не образуется.</P>
    </Div>
    <P>
      Таким образом, одни звуки состоят из голоса, а другие &ndash; из голоса и
      шума или только из шума. Это и является критерием разграничения гласных и
      согласных звуков.
    </P>
    <P>
      <Strong>
        <Span className="number">3.</Span> Гласные звуки
      </Strong>{" "}
      состоят из голоса; шумов при их образовании почти не возникает.{" "}
      <Strong>Ударные</Strong> гласные звуки русского языка &ndash;{" "}
      <Span className="litera0">[а], [о], [у], [э], [и], [ы]</Span>.
    </P>
    <P>
      <Strong>
        <Span className="number">4.</Span> Согласные звуки
      </Strong>{" "}
      состоят из голоса и шума или только из шума.
    </P>
    <Div className="primer"><P>
      Например: [б], [п], [м], [в], [ф], [н], [к], [г], [д], [з], [т], [с] и др.</P>
    </Div>
    <Li><P>
      &#x2023; <Strong>Звонкие</Strong> согласные (например, [д], [з], [м], [в]) состоят
      из голоса и шума.</P>
    </Li>
    <Li><P>
      &#x2023; <Strong>Глухие</Strong> согласные (например, [т], [с], [ф], [п]) состоят
      только из шума.</P>
    </Li>
  </View>
);
