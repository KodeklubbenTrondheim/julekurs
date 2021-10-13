import Editor from '@monaco-editor/react'
import styled from 'styled-components'
import { BlocklyWorkspace } from 'react-blockly'
//import Blockly from 'blockly'
import 'blockly/python'
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

export function CodeEditor({ above, language = 'python', ...props }) {
  const pythonCode = useStore((state) => state.pythonCode)
  const setPythonCode = useStore((state) => state.setPythonCode)
  const javascriptCode = useStore((state) => state.javascriptCode)
  const setJavascriptCode = useStore((state) => state.setJavascriptCode)

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

const StyledBlocklyWorkspace = styled(BlocklyWorkspace)`
  width: 100%;
  min-width: 640px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
`

const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'

const toolboxConfiguration = {
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      //blockxml: '<block type="turtle_move_internal"><field name="VALUE">100</field></block>',
      type: 'controls_if',
    },
    {
      kind: 'block',
      type: 'controls_if',
    },
    {
      kind: 'block',
      type: 'controls_whileUntil',
    },
    {
      kind: 'block',
      type: 'controls_for',
    },
    {
      kind: 'block',
      type: 'logic_compare',
    },
    {
      kind: 'block',
      type: 'logic_operation',
    },
    {
      kind: 'block',
      type: 'logic_boolean',
    },
    {
      kind: 'block',
      type: 'math_number',
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

export function BlocklyEditor({ above, ...props }) {
  //const setPythonCode = useStore((state) => state.setPythonCode)

  const onWorkspaceChange = () => {
    //setJavascriptCode(Blockly.JavaScript.workspaceToCode(props.workspace))
    //console.log(props.workspace)
    //setPythonCode(Blockly.Python.workspaceToCode(props.workspace))
  }

  return (
    <Container>
      {above}
      <StyledBlocklyWorkspace
        {...{ initialXml, toolboxConfiguration, workspaceConfiguration, onWorkspaceChange }}
        {...props}
      />
    </Container>
  )
}
