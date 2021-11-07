import styled from 'styled-components'
import { getFirestore, doc } from 'firebase/firestore'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import { CSSShadows } from '../../constants'

export function ProfilSide({ email }) {
  const [value, loading, error] = useDocumentOnce(doc(getFirestore(), 'users', email))
  const projects = value?.data()?.projects

  return (
    <Container>
      <h2>Her er dine julekort</h2>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Henter julekort ...</span>}
      {projects &&
        (projects.length === 0 ? (
          <>Du har ingen julekort for øyeblikket</>
        ) : (
          <ProjectsContainer>
            {projects.map((project) => (
              <ProjectItem key={project} id={project} />
            ))}
          </ProjectsContainer>
        ))}
    </Container>
  )
}

function ProjectItem({ id }) {
  const [value, loading, error] = useDocumentOnce(doc(getFirestore(), 'projects', id))
  const data = value?.data()

  return (
    <Project>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Henter julekort ...</span>}
      {data && (
        <LinkButton href={window.location.origin + process.env.PUBLIC_URL + '#/julekort/' + id} target="_blank">
          <ThumbnailImage src={data.image} alt={data.title} />
        </LinkButton>
      )}
    </Project>
  )
}

const Container = styled.div`
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
`

const ProjectsContainer = styled.div`
  margin-bottom: 2em;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 1rem;
  justify-content: space-evenly;
`

const Project = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    transition: transform 0.1s;
  }

  :hover {
    > * {
      transform: translateY(-10px);
    }
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 8px;
  ${CSSShadows.large}
`

const LinkButton = styled.a`
  color: #61dafb;
  cursor: pointer;
  background: none;
  border: none;
  font-size: calc(10px + 2vmin);
  padding: 0;
`
