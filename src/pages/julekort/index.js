import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage'
import { setOptions, setEngine, runCode } from 'client-side-python-runner'
import { CodeEditor, BlocklyEditor } from '../../components/CodeEditor'
import { Graphics } from '../../components/Graphics'
import { Button } from '../../components/Button'
import { useStore } from '../../store'
import { useParams, useHistory } from 'react-router'
import Blockly from 'blockly'
import { login } from '../../App'

export function JulekortSide() {
  const { prosjektId = null } = useParams()
  const history = useHistory()
  const [projectData, setProjectData] = useState(null)
  const isLoadingProject = useRef(false)
  const [youAreOwner, setYouAreOwner] = useState(false)
  const [codeGotSaved, setCodeGotSaved] = useState(false)
  const [imageNumber, updateImageNumber] = useState(0)

  const userId = useStore((state) => state.userId)
  const title = useStore((store) => store.title)
  const setTitle = useStore((store) => store.setTitle)
  const image = useStore((store) => store.image)
  const canvasColor = useStore((store) => store.canvasColor)
  const setCanvasColor = useStore((store) => store.setCanvasColor)

  const pythonCode = useStore((state) => state.pythonCode)
  const setPythonCode = useStore((state) => state.setPythonCode)
  const preDefinedPythonCode = useStore((state) => state.preDefinedPythonCode)
  const extraPythonCodeForTheBrowserRendering = useStore((state) => state.extraPythonCodeForTheBrowserRendering)
  const blocklyPythonCode = useStore((state) => state.blocklyPythonCode)
  const downloadablePythonCode = useStore((state) => state.downloadablePythonCode)
  const blocklyXml = useStore((state) => state.blocklyXml)
  const setBlocklyXml = useStore((state) => state.setBlocklyXml)
  const blocklyWorkspace = useStore((state) => state.blocklyWorkspace)
  const addLog = useStore((state) => state.addLog)
  const [pythonEngineLoading, setLoadingPython] = useState(false)
  const editorMode = useStore((state) => state.editorMode)
  const editor = useStore((state) => state.editor)
  const setEditorMode = useStore((state) => state.setEditorMode)
  const setError = useStore((state) => state.setError)
  const clearError = useStore((state) => state.clearError)
  const pythonErrorLineNumberOffset = useStore((state) => state.pythonErrorLineNumberOffset)

  useEffect(() => {
    if (prosjektId && (projectData === null || prosjektId !== projectData.id)) {
      if ((blocklyWorkspace, userId)) {
        const getProject = async () => {
          isLoadingProject.current = true
          const docSnap = await getDoc(doc(getFirestore(), 'projects', prosjektId))
          if (docSnap.exists()) {
            const data = docSnap.data()
            try {
              if (data.blocklyXml === '') {
                blocklyWorkspace.clear()
              } else {
                blocklyWorkspace.clear()
                const xml = Blockly.Xml.textToDom(data.blocklyXml)
                Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, blocklyWorkspace)
              }
            } catch (error) {
              console.error('Kunne ikke laste inn Blockly-koden. Det var noe feil med den...', error)
              alert('Kunne ikke laste inn oppgaven...')
            }
            if (data.blocklyXml) setBlocklyXml(data.blocklyXml)
            if (data.pythonCode) setPythonCode(data.pythonCode)
            if (data.canvasColor) setCanvasColor(data.canvasColor)
            setTitle(data.title)
            setProjectData({ id: prosjektId, ...data })
            setYouAreOwner(data.author === '/users/' + userId)
            console.log('Document data:', docSnap.data())
          } else {
            console.log('Fant ikke dokumentet :(')
            history.push('/julekort')
          }
          isLoadingProject.current = false
        }
        if (!isLoadingProject.current) getProject()
      }
    }
  }, [
    prosjektId,
    projectData,
    setBlocklyXml,
    setPythonCode,
    setCanvasColor,
    setTitle,
    blocklyWorkspace,
    history,
    userId,
  ])

  useEffect(() => {
    setOptions({
      output: (item) => {
        addLog(item)
        console.log(item)
      },
      error: null,
      onLoading: (engine) => setLoadingPython(engine),
      onLoaded: () => {
        setLoadingPython(false)
      },
      loadVariablesBeforeRun: true,
      storeVariablesAfterRun: true,
    })
    setEngine('skulpt', '1.0.0')
  }, [addLog])

  const EditorHeader = ({ runCodeFunction }) => (
    <StyledEditorHeader>
      {editorMode === 'python' && (
        <>
          <Button onClick={() => setEditorMode('blockly')}>
            Gå tilbake til blokker <i className="fas fa-shapes" />
          </Button>
        </>
      )}
      {editorMode === 'blockly' && (
        <Button
          onClick={() => {
            setEditorMode('python')
            setPythonCode(downloadablePythonCode)
          }}
        >
          Gjør om til Python <i className="fas fa-code" />
        </Button>
      )}
      {editorMode === 'python' && false && (
        <>
          <Button onClick={() => download('julekort.py', pythonCode)}>
            Last ned Python-koden som en fil <i className="fas fa-download" />
          </Button>
        </>
      )}
      {editorMode === 'blockly' && false && (
        <>
          <Button onClick={() => download('julekort-blockly.xml', blocklyXml)}>
            Last ned blokkene som en fil <i className="fas fa-download" />
          </Button>
          <Button onClick={() => download('julekort.py', downloadablePythonCode)}>
            Last ned blokkene som Python-kode <i className="fas fa-code" /> <i className="fas fa-download" />
          </Button>
        </>
      )}
      {prosjektId && youAreOwner && (
        <SaveButton onClick={codeGotSaved ? () => {} : save}>
          {codeGotSaved ? (
            <>
              Koden ble lagret <i className="fas fa-check" />
            </>
          ) : (
            <>
              Lagre koden <i className="fas fa-save" />
            </>
          )}
        </SaveButton>
      )}
      {!prosjektId && (
        <SaveButton onClick={create}>
          Lagre koden <i className="fas fa-save" />
        </SaveButton>
      )}
      {prosjektId && !youAreOwner && (
        <Button onClick={remix}>
          Lag en kopi av julekortet <i className="fas fa-copy" />
        </Button>
      )}
      {prosjektId && youAreOwner && (
        <Button onClick={remix}>
          Lag en kopi av julekortet <i className="fas fa-copy" />
        </Button>
      )}
      {prosjektId && youAreOwner && (
        <Button onClick={deleteProject}>
          Slett julekortet <i className="fas fa-trash" />
        </Button>
      )}
      <RunButton onClick={runCodeFunction}>
        Kjør koden <i className="fas fa-play" />
      </RunButton>
    </StyledEditorHeader>
  )

  const download = (filename, text) => {
    const linkElement = document.createElement('a')
    linkElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    linkElement.download = filename
    linkElement.click()
  }

  const getTitle = useCallback(() => {
    let newTitle = title
    if (!newTitle) {
      newTitle = prompt('Hva skal julekortet hete?')
      setTitle(newTitle)
    }
    return newTitle
  }, [title, setTitle])

  const captureAndUploadImage = async (id) => {
    if (image) {
      const storage = getStorage()
      const imageRef = ref(storage, 'projects/' + id + '.png')
      await uploadString(imageRef, image, 'data_url')
      return await getDownloadURL(imageRef)
    }
    return ''
  }

  const save = async () => {
    const image = await captureAndUploadImage(prosjektId)
    await setDoc(
      doc(getFirestore(), 'projects', prosjektId),
      {
        blocklyXml,
        modified: new Date(),
        pythonCode,
        title: getTitle(),
        usingPython: false,
        canvasColor,
        ...(image ? { image } : {}),
      },
      { merge: true }
    )
    setCodeGotSaved(true)
  }

  const create = async () => {
    const email = userId || (await login())

    const docRef = await addDoc(collection(getFirestore(), 'projects'), {
      author: '/users/' + email,
      blocklyXml,
      created: new Date(),
      image: await captureAndUploadImage(prosjektId),
      modified: new Date(),
      pythonCode,
      title: getTitle(),
      usingPython: false,
      canvasColor,
    })

    await updateDoc(doc(getFirestore(), 'collections', 'trondheim-julekurs-2021'), {
      projects: arrayUnion(docRef.id),
    })

    await updateDoc(doc(getFirestore(), 'users', email), {
      projects: arrayUnion(docRef.id),
    })

    setCodeGotSaved(true)

    history.push('/julekort/' + docRef.id)
  }

  const remix = async () => {
    const email = userId || (await login())

    const docRef = await addDoc(collection(getFirestore(), 'projects'), {
      author: '/users/' + email,
      blocklyXml,
      copiedFrom: prosjektId,
      created: new Date(),
      image: projectData.image || '',
      modified: new Date(),
      pythonCode,
      title: getTitle(),
      usingPython: false,
      canvasColor,
    })

    await updateDoc(doc(getFirestore(), 'projects', docRef.id), {
      image: await captureAndUploadImage(docRef.id),
    })

    await updateDoc(doc(getFirestore(), 'collections', 'trondheim-julekurs-2021'), {
      projects: arrayUnion(docRef.id),
    })

    await updateDoc(doc(getFirestore(), 'users', email), {
      projects: arrayUnion(docRef.id),
    })

    history.push('/julekort/' + docRef.id)
  }

  const deleteProject = async () => {
    if (
      prosjektId &&
      prompt('Skriv: "Jeg vil slette julekortet" for å slette julekortet') === 'Jeg vil slette julekortet'
    ) {
      const email = userId || (await login())

      const docRef = doc(getFirestore(), 'projects', prosjektId)

      await updateDoc(doc(getFirestore(), 'users', email), {
        projects: arrayRemove(docRef.id),
      })

      await updateDoc(doc(getFirestore(), 'collections', 'trondheim-julekurs-2021'), {
        projects: arrayRemove(docRef.id),
      })

      await deleteDoc(docRef)

      setTitle('')
      alert('Julekortet ble fjernet!')
      history.push('/julekort')
    } else {
      alert('Du skrev "Jeg vil slette julekortet" feil. Prøv igjen...')
    }
  }

  const afterCodeRun = () => {
    updateImageNumber((n) => n + 1)
    setCodeGotSaved(false)
  }

  return (
    <>
      <EditableTitle
        placeholder="Sett et navn på julekortet 🖊"
        value={title || ''}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={prosjektId !== null && !youAreOwner}
      />
      <Container>
        <Graphics imageNumber={imageNumber} />
        {editorMode === 'python' ? (
          <CodeEditor
            onChange={() => {
              setCodeGotSaved(false)
            }}
            language="python"
            above={
              <EditorHeader
                runCodeFunction={async () => {
                  await setEngine('skulpt', '1.0.0')
                  clearError()
                  if (editor) {
                    window.monaco.editor.setModelMarkers(
                      'getModel' in editor ? editor.getModel() : editor,
                      'python-editor',
                      []
                    )
                  }
                  try {
                    await runCode(preDefinedPythonCode + extraPythonCodeForTheBrowserRendering + pythonCode, {
                      turtleGraphics: {
                        target: 'julekort-grafikk-turtle',
                        width: 1600,
                        height: 1600,
                        assets: {
                          'nisse-old-female': process.env.PUBLIC_URL + '/nisse-old-female.png',
                          'nisse-old-male': process.env.PUBLIC_URL + '/nisse-old-male.png',
                        },
                      },
                    })
                    afterCodeRun()
                  } catch (error) {
                    setError(error)
                    console.error(error)
                    if (error.lineNumber && error.lineNumber > pythonErrorLineNumberOffset && editor) {
                      const lineNumberInEditor = error.lineNumber - pythonErrorLineNumberOffset
                      window.monaco.editor.setModelMarkers(
                        'getModel' in editor ? editor.getModel() : editor,
                        'python-editor',
                        [
                          {
                            startLineNumber: lineNumberInEditor,
                            startColumn: 0,
                            endLineNumber: lineNumberInEditor + 1,
                            endColumn: 0,
                            message: error.type + ': ' + error.message,
                            severity: 3,
                            source: '',
                          },
                        ]
                      )
                    }
                  }
                }}
              />
            }
          />
        ) : (
          <BlocklyEditor
            onChange={() => {
              setCodeGotSaved(false)
            }}
            above={
              <EditorHeader
                runCodeFunction={async () => {
                  await setEngine('skulpt', '1.0.0')
                  clearError()
                  try {
                    await runCode(blocklyPythonCode, {
                      turtleGraphics: {
                        target: 'julekort-grafikk-turtle',
                        width: 1600,
                        height: 1600,
                        assets: {
                          'nisse-old-female': process.env.PUBLIC_URL + '/nisse-old-female.png',
                          'nisse-old-male': process.env.PUBLIC_URL + '/nisse-old-male.png',
                        },
                      },
                    })
                    afterCodeRun()
                  } catch (error) {
                    setError(error)
                    console.error(error)
                  }
                }}
              />
            }
          />
        )}
        {pythonEngineLoading ? `Laster inn Python (${pythonEngineLoading}) ...` : ''}
      </Container>
    </>
  )
}

const EditableTitle = styled.input.attrs({ type: 'text' })`
  font-size: 3rem;
  width: 100%;
  margin: 1rem 2rem 3rem;
  padding: 1rem 0;
  color: #fff;
  background: none;
  border: none;
  outline: none;
  text-align: center;
  box-sizing: border-box;

  text-shadow: 0 4px 8px #0008;
`

const Container = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;
`

const StyledEditorHeader = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`

const RunButton = styled(Button)`
  background-color: #080;
  color: #fff;

  :hover {
    background-color: #060;
  }
`

const SaveButton = styled(Button)``
