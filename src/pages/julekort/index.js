import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { setOptions, setEngine, runCode } from 'client-side-python-runner'
import { CodeEditor, BlocklyEditor } from '../../components/CodeEditor'
import { Graphics } from '../../components/Graphics'
import { useStore } from '../../store'

const Container = styled.div`
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 32px;
`

const StyledEditorHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #666;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;

  :hover {
    background-color: #444;
  }
`

const RunButton = styled(Button)`
  background-color: #080;
  color: #fff;

  :hover {
    background-color: #060;
  }
`

export function JulekortSide() {
  const pythonCode = useStore((state) => state.pythonCode)
  const blocklyPythonCode = useStore((state) => state.blocklyPythonCode)
  const addLog = useStore((state) => state.addLog)
  const [pythonEngineLoading, setLoadingPython] = useState(false)
  const editorMode = useStore((state) => state.editorMode)
  const setEditorMode = useStore((state) => state.setEditorMode)

  useEffect(() => {
    setOptions({
      output: (item) => {
        addLog(item)
        console.log(item)
      },
      error: (item) => {
        addLog(item, true)
        console.log(item)
      },
      onLoading: (engine) => setLoadingPython(engine),
      onLoaded: (engine) => {
        setLoadingPython(false)
      },
      loadVariablesBeforeRun: true,
      storeVariablesAfterRun: true,
    })
    setEngine('skulpt')
  }, [addLog])

  const EditorHeader = ({ runCodeFunction }) => (
    <StyledEditorHeader>
      {editorMode === 'python' && (
        <Button onClick={() => setEditorMode('blockly')}>
          Kode med blokker <i className="fas fa-shapes" />
        </Button>
      )}
      {editorMode === 'blockly' && (
        <Button onClick={() => setEditorMode('python')}>
          Kode i Python <i className="fas fa-code" />
        </Button>
      )}
      <RunButton onClick={runCodeFunction}>
        Kjør koden <i className="fas fa-play" />
      </RunButton>
    </StyledEditorHeader>
  )

  return (
    <Container>
      {editorMode === 'python' ? (
        <CodeEditor
          language="python"
          above={
            <EditorHeader
              runCodeFunction={async () => {
                await setEngine('skulpt')
                await runCode(pythonCode, {
                  canvasParentId: 'julekort-grafikk-turtle',
                  canvasWidth: 400,
                  canvasHeight: 400,
                })
              }}
            />
          }
        />
      ) : (
        <BlocklyEditor
          language="python"
          above={
            <EditorHeader
              runCodeFunction={async () => {
                await setEngine('skulpt')
                console.log(blocklyPythonCode)
                await runCode(blocklyPythonCode, {
                  canvasParentId: 'julekort-grafikk-turtle',
                  canvasWidth: 400,
                  canvasHeight: 400,
                })
              }}
            />
          }
        />
      )}
      <Graphics />
      {pythonEngineLoading ? `Laster inn Python (${pythonEngineLoading}) ...` : ''}
    </Container>
  )
}
