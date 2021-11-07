import styled from 'styled-components'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { CSSShadows } from '../../constants'

export function GalleriSide() {
  const [value, loading, error] = useCollection(collection(getFirestore(), 'projects'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  })

  return (
    <Container>
      <h2 style={{ margin: 0 }}>Her er alle julekortene</h2>
      <h4 style={{ marginTop: 0 }}>(Trykk på julekortene for å se på koden bak 🧐)</h4>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Henter julekort ...</span>}
      <ProjectsContainer>
        {value &&
          value.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => b.modified.seconds - a.modified.seconds)
            .map(({ id, title, image }) => {
              return (
                <Project key={id}>
                  <LinkButton
                    href={window.location.origin + process.env.PUBLIC_URL + '#/julekort/' + id}
                    target="_blank"
                  >
                    <ThumbnailImage src={image} alt={title} />
                  </LinkButton>
                </Project>
              )
            })}
      </ProjectsContainer>
    </Container>
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
