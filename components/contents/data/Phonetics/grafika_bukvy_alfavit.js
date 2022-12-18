import { View, Text } from "react-native";
import { Strong, Span, P, Em, Li, Div } from "../tags";
import { Col, Row, Grid } from "react-native-easy-grid";

export const grafika_bukvy_alfavit = (
  <View>
   <Grid style={{margin: 10}}>
    <Col style={{borderWidth: 1}}>
        <Text>1</Text>
    </Col>
    <Col style={{borderWidth: 1}}>
        <Row style={{borderBottomWidth: 1}}>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
</Grid>
  </View>
);
