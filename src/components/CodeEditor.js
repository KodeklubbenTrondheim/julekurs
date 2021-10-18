import { useCallback } from 'react'
import Editor from '@monaco-editor/react'
import styled from 'styled-components'
import { BlocklyWorkspace } from 'react-blockly'
import Blockly from 'blockly'
import 'blockly/python'
import { useStore } from '../store'
import { CSSShadows } from '../constants'
import './blockly-custom-blocks'

export function CodeEditor({ above, below, language = 'python', ...props }) {
  const pythonCode = useStore((state) => state.pythonCode)
  const setPythonCode = useStore((state) => state.setPythonCode)
  const javascriptCode = useStore((state) => state.javascriptCode)
  const setJavascriptCode = useStore((state) => state.setJavascriptCode)
  const isPythonCodeEditable = useStore((state) => state.isPythonCodeEditable)

  return (
    <Container>
      {above}
      <Editor
        height="400px"
        width="640px"
        theme="vs-dark"
        language={language}
        value={language === 'python' ? pythonCode : javascriptCode}
        onChange={(code) => (language === 'python' ? setPythonCode(code) : setJavascriptCode(code))}
        className="monaco-editor"
        onMount={(editor) => {
          const messageContribution = editor.getContribution('editor.contrib.messageController')
          editor.onDidAttemptReadOnlyEdit(() => {
            messageContribution.showMessage(`Du kan ikke endre koden akkurat nå`, editor.getPosition())
          })
        }}
        {...props}
        options={{
          scrollBeyondLastLine: false,
          wordWrap: true,
          renderWhitespace: 'boundary',
          readOnly: !isPythonCodeEditable,
          ...(props.options || {}),
        }}
      />
      {below}
    </Container>
  )
}

const toolboxConfiguration = {
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'speed',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'forward',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'backward',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'right',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'left',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'goto',
    },
    {
      kind: 'block',
      type: 'color',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'randomColor',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'penUp',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'penDown',
    },
    {
      kind: 'block',
      type: 'controls_repeat',
    },
  ],
}

const workspaceConfiguration = {
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true,
  },
}

export function BlocklyEditor({ above, below, ...props }) {
  const preDefinedPythonCode = useStore((state) => state.preDefinedPythonCode)
  const setBlocklyPythonCode = useStore((state) => state.setBlocklyPythonCode)
  const initialXml = useStore((state) => state.blocklyXml)
  const onXmlChange = useStore((state) => state.setBlocklyXml)

  const onWorkspaceChange = useCallback(
    (workspace) => {
      setBlocklyPythonCode(preDefinedPythonCode + Blockly.Python.workspaceToCode(workspace))
    },
    [preDefinedPythonCode, setBlocklyPythonCode]
  )

  return (
    <Container>
      {above}
      <StyledBlocklyWorkspace
        {...{ initialXml, toolboxConfiguration, workspaceConfiguration, onWorkspaceChange, onXmlChange }}
        {...props}
      />
      {below}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;

  .monaco-editor {
    overflow: hidden;
    border-radius: 8px;
    ${CSSShadows.large}
  }
`

const StyledBlocklyWorkspace = styled(BlocklyWorkspace)`
  width: 100%;
  min-width: 640px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`
