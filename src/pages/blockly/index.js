import { useState } from 'react'
import { BlocklyWorkspace } from 'react-blockly'
import Blockly from 'blockly'
import 'blockly/python'
import { CodePreview } from '../../components/CodePreview'
import styled from 'styled-components'

const StyledBlocklyWorkspace = styled(BlocklyWorkspace)`
  width: 100%;
  height: 500px;
`

const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'

const toolboxConfiguration = {
  kind: 'flyoutToolbox',
  contents: [
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

export function BlocklyEditor(props) {
  const [javascript, setJavascript] = useState('')
  const [python, setPython] = useState('')

  const onWorkspaceChange = () => {
    setJavascript(Blockly.JavaScript.workspaceToCode(props.workspace))
    setPython(Blockly.Python.workspaceToCode(props.workspace))
  }

  return (
    <>
      <StyledBlocklyWorkspace
        {...{ initialXml, toolboxConfiguration, workspaceConfiguration, onWorkspaceChange, onInject }}
        {...props}
      />
      <h3>JavaScript</h3>
      <CodePreview language="javascript" code={javascript} />
      <h3>Python</h3>
      <CodePreview language="python" code={python} />
    </>
  )
}
