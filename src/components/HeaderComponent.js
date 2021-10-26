import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

export const HeaderComponent = () => {
    const location = useLocation();
    const path = location.pathname
    return (
        <Container>
            <Image src="pngkey.com-chrismas-png-3932782.png" alt="header with wreath"/>
            <TextContainer>  
            <Link to="/julekort" style={path == "/julekort" ?  {textDecoration: "none", color: "#fff"} : {textDecoration: "none"}}>
                <PContainer>Julekortverkstedet</PContainer></Link>
                <Link to="/" style={path == "/" ?  {textDecoration: "none", color: "#fff"} : {textDecoration: "none"}}>
                <PContainer>Hjem</PContainer></Link>
           
            <Link to="/oppgaver"style={path == "/oppgaver" ?  {textDecoration: "none", color: "#fff"} : {textDecoration: "none"}}><PContainer>Inspirasjon</PContainer></Link>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
position: relative;
  text-align: center;
  height: 20vh;
 
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const PContainer = styled.p`
    
    text-align: center;
    font-size: 2rem;
`

const TextContainer = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
    bottom: 5%;
  transform: translate(-50%, -50%);
  display: flex;
justify-content: space-between;
padding: 0 10vw;

`
