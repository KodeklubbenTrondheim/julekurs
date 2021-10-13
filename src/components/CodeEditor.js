import Editor from '@monaco-editor/react'
import styled from 'styled-components'
import { useStore } from '../store'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .monaco-editor {
    overflow: hidden;
    border-radius: 8px;
  }
`

export function CodeEditor({ above, ...props }) {
  const code = useStore((state) => state.code)
  const setCode = useStore((state) => state.setCode)

  return (
    <Container>
      {above}
      <Editor
        height="400px"
        width="640px"
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value)}
        className="monaco-editor"
        {...props}
        options={{
          scrollBeyondLastLine: false,
          wordWrap: true,
          renderWhitespace: 'boundary',
          ...(props.options || {}),
        }}
      />
    </Container>
  )
}
