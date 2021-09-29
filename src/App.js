import { useState } from 'react'
import styled from 'styled-components'
import create from 'zustand'
import Editor from '@monaco-editor/react'
import { runCode, setOptions } from 'client-side-python-runner'
import { useEffect } from 'react'

const useStore = create((set) => ({
  code: '# Her er det litt pythonkode\n\na = 1\nprint(a + 2, "test")\n',
  setCode: (code) => set(() => ({ code })),
  log: [],
  addLog: (item) => set((state) => ({ log: [item, ...state.log] })),
}))

const Container = styled.div`
  background-color: #282c34;
  text-align: center;
  padding: 0 2rem 2rem;
`

const Header = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Output = styled.div`
  white-space: pre;
  background-color: #0002;
  padding: 10px 20px;

  :empty {
    display: none;
  }
`

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
`

function App() {
  const code = useStore((state) => state.code)
  const setCode = useStore((state) => state.setCode)
  const log = useStore((state) => state.log)
  const addLog = useStore((state) => state.addLog)
  const [loadingPython, setLoadingPython] = useState(false)

  useEffect(() => {
    setOptions({
      output: (item) => addLog(item),
      onLoading: () => setLoadingPython(true),
      onLoaded: () => setLoadingPython(false),
    })
  }, [])

  return (
    <Container>
      <Header>
        <h1>Julekortverkstedet</h1>
        <p>Lyst til å lage julekort? Da har du kommet til riktig sted!</p>
        <Editor
          height="240px"
          width="640px"
          theme="vs-dark"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value)}
        />
        <Button onClick={() => runCode(code)}>Kjør koden!</Button>
        {loadingPython && <h3>Laster inn Python ... Det kan ta noen sekunder</h3>}
        {log.length > 0 && <h3>Dette ble printet:</h3>}
        <Output>{log}</Output>
        <h3>Python-koden:</h3>
        <Output>{code}</Output>
      </Header>
    </Container>
  )
}

export default App
