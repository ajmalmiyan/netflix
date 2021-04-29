import Jumbotron from './components/Jumbotron/'
import jumboData from './fixtures/jumbo.json'

export default function App() {
  return (
    <Jumbotron.Container>
      {
        jumboData.map(item=>(
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTtile>{item.subTitle}</Jumbotron.SubTtile>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt}/>
            </Jumbotron.Pane>
          </Jumbotron>
        ))
      }
    </Jumbotron.Container>
  );
}
