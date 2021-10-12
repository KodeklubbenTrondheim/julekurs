import styled from 'styled-components'

const Container = styled.div`
  background-color: #282c34;
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export function OppgaveSide() {
  return <Container>Oppgaver!</Container>
}
