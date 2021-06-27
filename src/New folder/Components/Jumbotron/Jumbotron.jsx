import jumboData from "../../Fixtures/jumbo.json";
import {
  Inner,
  Container,
  Title,
  SubTtile,
  Image,
  Pane,
  Item,
} from "../../Styles/Jumbotron/Jumbotron";

export default function Jumbotron() {
  return (
    <Container>
      {jumboData.map((item) => (
        <Item key={item.id}>
          <Inner direction={item.direction}>
            <Pane>
              <Title>{item.title}</Title>
              <SubTtile>{item.subTitle}</SubTtile>
            </Pane>
            <Pane>
              <Image src={item.image} alt={item.alt} />
            </Pane>
          </Inner>
        </Item>
      ))}
    </Container>
  );
}