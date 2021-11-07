import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <Container>
      <Image src="gradient-christmas-background.png" alt="Christmas image" />
      <TextContainer>
        <StyledLink to="/" $active={path === '/'}>
          Hjem 🏡
        </StyledLink>
        <StyledLink to="/oppgaver" $active={path.startsWith('/oppgaver')}>
          Finn oppgaver 📃
        </StyledLink>
        <StyledLink to="/julekort" $active={path.startsWith('/julekort')}>
          Lag julekort 🔨
        </StyledLink>
        <StyledLink to="/galleri" $active={path.startsWith('/galleri')}>
          Se andre julekort 🤩
        </StyledLink>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: clamp(1.5rem, calc(10px + 2vmin), 2rem);
  color: ${(props) => (props.$active ? '#fff' : '#61dafb')};
  flex-basis: 300px;
  white-space: nowrap;
  z-index: 1;
`

const Image = styled.img`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  opacity: 0.5;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  padding-top: max(80px, 10vw);
`
