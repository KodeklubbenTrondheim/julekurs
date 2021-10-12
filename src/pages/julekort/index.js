import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { setOptions, setEngine, getVariables, runCode } from 'client-side-python-runner'
import { CodeEditor } from '../../components/CodeEditor'
import { Graphics } from '../../components/Graphics'
import { useStore } from '../../store'

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

const RunButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #080;
  color: #fff;
  padding: 8px 12px;
  align-self: flex-end;
  cursor: pointer;

  :hover {
    background-color: #060;
  }
`

export function JulekortSide() {
  const code = useStore((state) => state.code)
  const addLog = useStore((state) => state.addLog)
  const [pythonEngineLoading, setLoadingPython] = useState(false)

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

  return (
    <Container>
      <CodeEditor
        above={
          <RunButton
            onClick={async () => {
              await setEngine('skulpt')
              await runCode(code, {
                canvasParentId: 'julekort-grafikk-turtle',
                canvasWidth: 400,
                canvasHeight: 400,
              })
              console.log(await getVariables())
            }}
          >
            Kjør koden
          </RunButton>
        }
      />
      <Graphics />
      {pythonEngineLoading ? `Laster inn Python (${pythonEngineLoading}) ...` : ''}
    </Container>
  )
}
