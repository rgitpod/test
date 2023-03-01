import { View } from "react-native";
import { Strong, Span, P, Em, Li, Div, Line } from "../tags";
import { Table, Col, Row } from "../table";

export const slog_pravila_perenosa_slov = (
  <View>
    <P>
      Слова делятся на слоги. <Strong>Слог</Strong> &ndash; это один звук или
      несколько звуков, произносимых одним выдыха&shy;тельным толчком воздуха.
    </P>
    <Div className="primer"><P>
      Ср.: <Em>во-да, на-у-ка.</Em></P>
    </Div>
    <P>
      <Strong>
        <Span className="number">1.</Span>
      </Strong>{" "}
      В русском языке есть разные по слышимости звуки: гласные звуки являются
      более звучными по сравнению с согласными звуками.
    </P>
    <Li><P>
      Именно <Strong>гласные звуки</Strong> образуют слоги, являются
      слогообразующими.
    </P></Li>
    <Li><P>
      <Strong>Согласные звуки</Strong> являются неслоговыми. При произношении
      слова согласные звуки &laquo;тянутся&raquo; к гласным, образуя вместе с
      гласными слог.
    </P></Li>
    <Table>
      <Row>
        <Col>
          <Strong>В слове столько слогов, сколько гласных звуков!</Strong>
        </Col>
      </Row>
    </Table>
    <P>
      <Strong>
        <Span className="number">2.</Span>
      </Strong>{" "}
      Слог может состоять из одного звука (и тогда это обязательно гласный!) или
      нескольких звуков (в этом случае в слоге кроме гласного есть согласный или
      группа согласных).
    </P>
    <Div className="primer"><P>
      <Em>
        Ободок &ndash; о-бо-док; страна &ndash; стра-на; ночник &ndash; но-чник;
        миниатюра &ndash; ми-ни-а-тю-ра.
      </Em></P>
    </Div>
    <Table>
      <Row>
        <Col>
          <Strong>
            Если слог состоит из двух и более звуков, то начинается он
            обязательно с согласного!
          </Strong>
        </Col>
      </Row>
    </Table>
    <P>
      <Strong>
        <Span className="number">3.</Span>
      </Strong>{" "}
      Слоги бывают открытыми и закрытыми.
    </P>
    <Li><P>
      <Strong>Открытый слог</Strong> оканчивается на гласный звук.
    </P></Li>
    <Div className="primer"><P>
      <Em>Во-да, стра-на.</Em></P>
    </Div>
    <Li><P>
      <Strong>Закрытый слог</Strong> оканчивается на согласный звук.
    </P></Li>
    <Div className="primer"><P>
      <Em>Сон, лай-нер.</Em></P>
    </Div>
    <Li><P>
      Открытых слогов в русском языке больше. Закрытые слоги обычно наблюдаются
      в конце слова.
    </P></Li>
    <Div className="primer"><P>
      Ср.: <Em>но-чник</Em> (первый слог открытый, второй &ndash; закрытый),{" "}
      <Em>о-бо-док</Em> (первые два слога открытые, третий &ndash; закрытый).</P>
    </Div>
    <Li><P>
      В середине слова слог, как правило, оканчивается на гласный звук, а
      согласный или группа согласных, стоящих после гласного, обычно отходят к
      последующему слогу!
    </P></Li>
    <Div className="primer"><P>
      <Em>Но-чник, по-ддать, ди-ктор.</Em></P>
    </Div>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert"><P>
      Иногда в слове могут писаться два согласных, а звучать один, например:{" "}
      <Em>
        и<Span className="litera">зж</Span>ить
      </Em>{" "}
      [иж:ы&#769;т&rsquo;]. Поэтому в данном случае выделяются два слога:
      <Em>и-зжить</Em>.{"\n"}Деление на части <Em>из-жить</Em> соответствует
      правилам переноса слова, а не делению на слоги!</P>
      <P>
        То же самое можно проследить на примере глагола{" "}
        <Em>
          уе<Span className="litera">зж</Span>ать
        </Em>
        , в котором сочетание согласных <Span className="litera">зж</Span>{" "}
        звучит как один звук <Span className="litera0">[ж:]</Span>; поэтому
        деление на слоги будет &ndash; <Em>у-е-зжать</Em>, а деление на части
        для переноса &ndash; <Em>уез-жать</Em>.
      </P>
      <P>
        Особенно часто ошибки наблюдаются при выделении слогов у форм глаголов,
        оканчивающихся на <Span className="litera">-тся, -ться</Span>.
      </P>
      <P>
        Деление <Em>вить-ся, жмёт-ся</Em> является делением на части для
        переноса, а не делением на слоги, поскольку в таких формах сочетание
        букв <Span className="litera">тс, тьс</Span> звучит как один звук{" "}
        <Span className="litera0">[ц]</Span>.
      </P>
      <P>
        При делении на слоги сочетания букв{" "}
        <Span className="litera">тс, тьс</Span> целиком отходят к последующему
        слогу: <Em>ви-ться, жмё-тся</Em>.
      </P>
    </Div>
    <Li><P>
      В середине слова закрытые слоги могут образовывать лишь непарные звонкие
      согласные: [ j ], [р], [р&rsquo;], [л], [л&rsquo;], [м], [м&rsquo;], [н],
      [н&rsquo;].
    </P></Li>
    <Div className="primer"><P>
      <Em>
        Ма<Span className="litera">й</Span>-ка, Со
        <Span className="litera">нь</Span>-ка, со-ло
        <Span className="litera">м</Span>-ка.
      </Em></P>
    </Div>
    <Div className="alertText">Обратите внимание!</Div>
    <Div className="alert">
        <P><Strong>При сочетании нескольких согласных в середине слова:</Strong></P>
      <P>
        <Strong>1)</Strong> Два одинаковых согласных обязательно отходят к
        последующему слогу.
      </P>
      <P>
          <Em>
            О-<Span className="litera">тт</Span>ечь, да-
            <Span className="litera">нн</Span>ый.
          </Em>
      </P>
        <P><Strong>2)</Strong> Два и более согласных обычно отходят к последующему
        слогу.</P>
      <P>
          <Em>
            Ша-<Span className="litera">пк</Span>а, ра-
            <Span className="litera">вн</Span>ый.
          </Em>
      </P>
        <P><Strong>Исключение</Strong> составляют сочетания согласных, в которых
        первым является непарный звонкий (буквы
        <Span className="litera">р, рь, л, ль, м, мь, н, нь, й</Span>).</P>
      <P>
          <Em>
            Мар-ка, зорь-ка, бул-ка, стель-ка, дам-ка, бан-ка, бань-ка, лай-ка.
          </Em>
      </P>
    </Div>
    <P>
      <Strong>
        <Span className="number">4.</Span>
      </Strong>{" "}
      Деление на слоги часто не совпадает с делением на части слова (приставка,
      корень, суффикс, окончание) и с делением слова на части при переносе.
    </P>
    <Div className="primer"><P>
        Например, слово <Span className="litera">рассчитанный</Span> делится на
        морфемы <Em>рас-счит-а-нн-ый</Em>(<Em>рас</Em> &ndash; приставка,{" "}
        <Em>счит</Em> &ndash; корень; <Em>а, нн</Em> &ndash; суффиксы;{" "}
        <Em>ый</Em>
        &ndash; окончание). {"\n"} Это же слово при переносе членится следующим
        образом: <Em>рас-счи-тан-ный</Em>.{"\n"}
        На слоги слово делится так: <Em>ра-ссчи-та-нный</Em>.</P>
    </Div>
  
        <P><Strong>Правила переноса слов</Strong></P>
      
        <P>
          <Strong>1.</Strong> Как правило, слова переносятся по слогам. Буквы{" "}
          <Span className="litera">ъ, ь, й</Span>
          от предыдущих букв не отделяются.
        </P>
        <Div className="primer"><P>
          <Em>
            Раз<Span className="litera">ъ</Span>-езд, син
            <Span className="litera">ь</Span>-ка, мо
            <Span className="litera">й</Span>-ка.
          </Em>
          </P>
        </Div>
      <Line />
      
        <P>
          <Strong>2.</Strong> Нельзя переносить или оставлять на cтроке одну
          букву, даже если она обозначает слог.
        </P>
        <Div className="primer">
        <P>
          <Em>
            <Span className="litera">О</Span>бо-док
          </Em>
          ; слова <Em>осень, имя</Em> нельзя разделить для переноса.
        </P>
        </Div>
            <Line />
      
        <P>
          <Strong>3.</Strong> При переносе нельзя отрывать от приставки конечную
          согласную букву.
        </P>
        <Div className="primer">
        <P>
          <Em>
            О<Span className="litera">т</Span>-течь, ра
            <Span className="litera">з</Span>-лить.
          </Em>
        </P>
        </Div>
            <Line />
      
        <P>
          <Strong>4.</Strong> При переносе нельзя отрывать от корня первую
          согласную букву.
        </P>
        <Div className="primer">
        <P>
          <Em>
            По-<Span className="litera">к</Span>ропить, при-
            <Span className="litera">к</Span>репить.
          </Em>
        </P>
        </Div>
            <Line />
      
        <P>
          <Strong>5.</Strong> При переносе слов с двойными согласными одна буква
          остаётся на строке, а другая переносится.
        </P>
        <Div className="primer">
        <P>
          <Em>
            Ра<Span className="litera">н-н</Span>ий, те
            <Span className="litera">р-р</Span>ор, ва
            <Span className="litera">н-н</Span>а.
          </Em>
        </P>
        </Div>
            <Line />
      
        <P>
          <Strong>6.</Strong> Букву <Span className="litera">ы</Span> после
          приставки нельзя отрывать от корня, но не следует переносить часть
          слова, начинающуюся с буквы <Span className="litera">ы</Span>.
        </P>
        <Div className="primer">
        <P>
          <Em>
            Раз<Span className="litera">ы</Span>-скать.
          </Em>
        </P>
        </Div>
      
  </View>
);
