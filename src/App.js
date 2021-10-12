import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { JulekortSide } from './pages/julekort'
import { OppgaveSide } from './pages/oppgaver'

const Container = styled.div`
  background-color: #282c34;
  text-align: center;
  padding: 0 2rem 2rem;
`

const Header = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Switch>
            <Route path="/" exact>
              <h1>Julekortverkstedet</h1>
              <p>Lyst til å lage julekort? Da har du kommet til riktig sted!</p>
              <Link to="/julekort">Trykk her for å lage et julekort!</Link>
              <Link to="/oppgaver">Finn ut hva du kan lage her!</Link>
            </Route>
            <Route path="/julekort">
              <Link to="/">Gå tilbake til forsiden</Link>
              <h2>Lag ditt eget julekort</h2>
              <JulekortSide />
              <Link to="/oppgaver">Finn ut hva du kan lage her!</Link>
            </Route>
            <Route path="/oppgaver">
              <Link to="/">Gå tilbake til forsiden</Link>
              <h2>Velg hva du vil lage</h2>
              <OppgaveSide />
            </Route>
          </Switch>
        </Header>
      </Container>
    </Router>
  )
}

export default App
