import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #282c34;
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
    <Container>
      <Header>
        <h1>Julekortverkstedet</h1>
        <p>Lyst til å lage julekort? Da har du kommet til riktig sted!</p>
      </Header>
    </Container>
  )
}

export default App
