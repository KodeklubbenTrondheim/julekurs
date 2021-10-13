import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { JulekortSide } from './pages/julekort'
import { OppgaveSide, OppgaveOversiktSide } from './pages/oppgaver'

const Container = styled.div`
  background-color: #4c1616;
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

const ButtonLink = styled.button`
  color: #61dafb;
  cursor: pointer;
  background: none;
  border: none;
  font-size: calc(10px + 2vmin);
`

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Switch>
            <Route path="/" exact>
              <h1>Julekortverkstedet</h1>
              <p>Lyst til å programmere julekort? Da har du kommet til riktig sted!</p>
              <Link to="/julekort">Trykk her for å lage et julekort!</Link>
              <Link to="/oppgaver">Finn ut hva du kan lage her!</Link>
            </Route>
            <Route path="/julekort">
              <Link to="/">Gå tilbake til forsiden</Link>
              <h2>Lag ditt eget julekort</h2>
              <JulekortSide />
              <ButtonLink
                onClick={() => {
                  window.open(window.location.origin + '/oppgaver', '_blank', 'toolbar=0,location=0,menubar=0')
                }}
              >
                <span style={{ textDecoration: 'underline' }}>Finn ut hva du kan lage her!</span>{' '}
                <i className="fas fa-external-link-alt" />
              </ButtonLink>
            </Route>
            <Route path="/oppgaver" exact>
              <Link to="/">Gå tilbake til forsiden</Link>
              <h2>Velg hva du vil lage</h2>
              <OppgaveOversiktSide />
            </Route>
            <Route path="/oppgaver/:oppgaveId">
              <Link to="/oppgaver">Gå tilbake til oppgavesiden</Link>
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
