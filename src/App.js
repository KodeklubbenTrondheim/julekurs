import styled from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { JulekortSide } from './pages/julekort'
import { OppgaveSide, OppgaveOversiktSide } from './pages/oppgaver'
import { GalleriSide } from './pages/galleri'
import { ProfilSide } from './pages/profil'
import { Header } from './components/Header'
import { Button, LinkButton } from './components/Button'
import firebaseApp from './firebase'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { useStore } from './store'
import { CSSShadows } from './constants'

const auth = getAuth(firebaseApp)

export const login = async () => {
  const email = prompt('Email:')
  const password = prompt('Passord: (finnes ikke brukeren fra før lager vi en ny bruker med dette passordet)')
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        alert('Du må bruke en gyldig e-post, slik som dette: eksempel@hotmail.com')
        break
      case 'auth/user-not-found':
        await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(getFirestore(), 'users', email), {
          projects: [],
        })
        alert('Vi lagde en ny bruker med denne e-posten: ' + email)
        await signInWithEmailAndPassword(auth, email, password)
        break
      default:
        alert('Du fikk en ukjent error: ' + error.code)
    }
    console.dir(error)
  }
  return email
}

const logout = () => {
  signOut(auth)
}

function App() {
  const [user, loading, error] = useAuthState(auth)
  const setUserId = useStore((store) => store.setUserId)

  useEffect(() => {
    if (!loading) setUserId(user?.email || '')
  }, [user, loading, setUserId])

  return (
    <Router>
      <Container>
        <Header />
        <LoginContainer>
          {!user && !loading && !error && (
            <>
              <span>⚠ Du må logge inn for å lagre det du lager</span>
              <Button onClick={login} $color="#333" $hoverColor="#222" $size="12px">
                Logg inn her
              </Button>{' '}
            </>
          )}
          {user && (
            <>
              <span>Hei, {user.email}!</span>
              <LinkButton href={process.env.PUBLIC_URL + '#/profil'} $color="#333" $hoverColor="#222" $size="12px">
                Se dine julekort
              </LinkButton>
              <Button onClick={logout} $color="#333" $hoverColor="#222" $size="12px">
                Logg ut
              </Button>
            </>
          )}
        </LoginContainer>
        <Content>
          <Switch>
            <Route path="/" exact>
              <h1>Velkommen til julekortverkstedet</h1>
              <p>Lyst til å programmere digitale julekort som dette?</p>
              <IntroImages>
                <IntroImage
                  src="https://firebasestorage.googleapis.com/v0/b/kodeklubben-trondheim-julekurs.appspot.com/o/projects%2FDwG3PrNjLsCXwDR22TwU.png?alt=media&token=34802d5d-da2a-4a55-be91-31515a1c8f17"
                  alt="Velkommen til julekurs"
                />
                <IntroImage
                  src="https://firebasestorage.googleapis.com/v0/b/kodeklubben-trondheim-julekurs.appspot.com/o/projects%2FMpUxmjDU6yB6GBk7oxW5.png?alt=media&token=ad405435-b2aa-44d2-af48-628fff7a3ff5"
                  alt="Snøflak"
                />
              </IntroImages>
              <p>Da har du kommet til riktig sted!</p>
              <div style={{ textAlign: 'left', margin: 16 }}>
                <h3>Slik starter du:</h3>
                <ol>
                  <li>
                    Finn en oppgave på "
                    <a href={process.env.PUBLIC_URL + '#/oppgaver'} target="_blank" rel="noreferrer">
                      Finn oppgaver 📃
                    </a>
                    " (se øverst på siden)
                  </li>
                  <li>
                    Åpne "
                    <a href={process.env.PUBLIC_URL + '#/julekort'} target="_blank" rel="noreferrer">
                      Lag julekort 🔨
                    </a>
                    "
                  </li>
                  <li>
                    Lagre verket ditt med "Lagre julekortet <i className="fas fa-save" />
                    "-knappen
                  </li>
                  <li>
                    Nyt verket ditt på "
                    <a href={process.env.PUBLIC_URL + '#/galleri'} target="_blank" rel="noreferrer">
                      Se andre julekort 🤩
                    </a>
                    "
                  </li>
                </ol>
              </div>
            </Route>
            <Route path="/profil">{user ? <ProfilSide email={user.email} /> : ''}</Route>
            <Route path="/galleri">
              <GalleriSide />
            </Route>
            <Route path="/julekort" exact>
              <JulekortSide />
            </Route>
            <Route path="/julekort/:prosjektId/embedded">
              <JulekortSide embedded />
            </Route>
            <Route path="/julekort/:prosjektId">
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const LoginContainer = styled.div`
  position: fixed;
  z-index: 2000;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 16px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  align-items: center;
  border-radius: 8px;
  font-size: 14px;
  ${CSSShadows.large}

  :empty {
    display: none;
  }
`

const IntroImages = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  margin: 16px;
`

const IntroImage = styled.img`
  width: 80%;
  max-width: 300px;
  margin: auto;
  border-radius: 8px;
  display: block;
  ${CSSShadows.large}
`
