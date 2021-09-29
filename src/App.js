import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Demo } from './pages/demo'
import { Prosjekt } from './pages/project'

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
          <h1>Julekortverkstedet</h1>
          <p>Lyst til å lage julekort? Da har du kommet til riktig sted!</p>
          <Switch>
            <Route path="/" exact>
              <Link to="/demo">Gå til demosiden</Link>
              <Link to="/project">Gå til prosjekt-siden</Link>
              Her er det ingenting :) Prøv å gå til demosiden
            </Route>
            <Route path="/demo">
              <Link to="/">Gå tilbake til hjem</Link>
              <h2>Demo</h2>
              <Demo />
            </Route>
            <Route path="/project">
              <Link to="/">Gå tilbake til hjem</Link>
              <h2>Prosjekt</h2>
              <Prosjekt />
            </Route>
          </Switch>
        </Header>
      </Container>
    </Router>
  )
}

export default App
