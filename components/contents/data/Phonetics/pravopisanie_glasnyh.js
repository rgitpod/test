import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div, Sup } from "../tags";
import { Table, Col, Row } from "../table";

export const pravopisanie_glasnyh = (
  <View>
    <P>
      В русском языке, как правило, различное произношение гласных (в
      зависимости от ударения и сочетания с согласными) не влияет на их
      написание.
    </P>
    <Div className="primer">
      <P>
        Ср.: одинаковое написание безударных и ударных гласных в слове:{" "}
        <Em>
          л<Span className="litera">е</Span>с
        </Em>
        [л&rsquo;<Span className="litera0">э&#769;</Span>с] &ndash;{" "}
        <Em>
          в л<Span className="litera">е</Span>су
        </Em>
        [в<Sup>&cap;</Sup>л&rsquo;
        <Span className="litera0">
          и<Sup>э</Sup>
        </Span>
        су&#769;].
      </P>
    </Div>
    <P>
      <Strong>
        В то же время в некоторых редких случаях произношение гласного
        отражается на письме.
      </Strong>
    </P>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      Гласная буква <Span className="litera">и</Span> в начале корня после
      приставок, оканчивающихся на согласную букву, меняется на{" "}
      <Span className="litera">ы</Span> (в соответствии с произношением).
    </P>
    <Div className="primer">
      <P>
        Ср.:{" "}
        <Em>
          <Span className="litera">и</Span>гра &ndash; с
          <Span className="litera">ы</Span>грать, раз
          <Span className="litera">ы</Span>граться, под
          <Span className="litera">ы</Span>грать.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>Исключения:</Strong> гласный <Span className="litera">и</Span> в
      начале корня сохраняется:
    </P>
    <View>
      <Li>
        <P>
          после приставок <Span className="litera">меж-, сверх-</Span>;
        </P>
        <Div className="primer">
          <P>
            <Em>
              Меж<Span className="litera">и</Span>нститутский, сверх
              <Span className="litera">и</Span>нтересный.
            </Em>
          </P>
        </Div>
      </Li>
      <Li>
        после иноязычных приставок и частиц (
        <Span className="litera">
          ад-, диз-, ин-, -интер-, кон-, контр-, об-, суб-, супер-, транс-, пан-
        </Span>
        );
        <Div className="primer">
          <P>
            <Em>
              Суб<Span className="litera">и</Span>нспектор, контр
              <Span className="litera">и</Span>ск, пан
              <Span className="litera">и</Span>ндийский.
            </Em>
          </P>
        </Div>
      </Li>
      <Li>
        в сложносокращённых словах.
        <Div className="primer">
          <P>
            <Em>
              Пед<Span className="litera">и</Span>нститут, спорт
              <Span className="litera">и</Span>нвентарь.
            </Em>
          </P>
        </Div>
      </Li>
    </View>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      В приставках <Span className="litera">раз-, рас-, роз-, рос-</Span> в
      ударном положении (в соответствии с произношением) пишется{" "}
      <Span className="litera">о</Span>, а в безударном положении (в
      соответствии с произношением) пишется <Span className="litera">а</Span>.
    </P>
    <Div className="primer">
      <P>
        <Em>
          Р<Span>о&#769;</Span>звальни &ndash; р<Span>а</Span>звали&#769;ться, р
          <Span>о&#769;</Span>ссыпи &ndash; р<Span>а</Span>ссы&#769;паться.
        </Em>
      </P>
    </Div>
    <P>
      <Strong>Исключение:</Strong>{" "}
      <Em>
        р<Span>о</Span>зыскно&#769;й
      </Em>{" "}
      (от{" "}
      <Em>
        р<Span>о&#769;</Span>зыск
      </Em>
      ).
    </P>
  </View>
);
