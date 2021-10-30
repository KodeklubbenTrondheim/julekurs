import styled from 'styled-components'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { JulekortSide } from './pages/julekort'
import { OppgaveSide, OppgaveOversiktSide } from './pages/oppgaver'
import { Header } from './components/Header'

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/" exact>
              <h1>Julekortverkstedet</h1>
              <p>Lyst til å programmere julekort? Da har du kommet til riktig sted!</p>
              <Link to="/julekort">Trykk her for å lage et julekort 🔨</Link>
              <Link to="/oppgaver">Finn ut hva du kan lage her 📃</Link>
            </Route>
            <Route path="/julekort">
              <JulekortSide />
            </Route>
            <Route path="/oppgaver" exact>
              <OppgaveOversiktSide />
            </Route>
            <Route path="/oppgaver/:oppgaveId">
              <OppgaveSide />
            </Route>
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

export default App

const Container = styled.div`
  background-color: #4c1616;
  text-align: center;
`

const Content = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
