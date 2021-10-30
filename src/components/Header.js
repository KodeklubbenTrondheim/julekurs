import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <Container>
      <Image src="gradient-christmas-background.png" alt="Christmas image" />
      <TextContainer>
        <StyledLink to="/" $active={path === '/'}>
          Hjem
        </StyledLink>
        <StyledLink to="/julekort" $active={path === '/julekort'}>
          Julekortverkstedet 🔨
        </StyledLink>
        <StyledLink to="/oppgaver" $active={path.startsWith('/oppgaver')}>
          Finn oppgaver her 📃
        </StyledLink>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 20vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => (props.$active ? '#fff' : '#61dafb')};
  flex-basis: 300px;
  white-space: nowrap;
  z-index: 1;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding-top: 10rem;
`
