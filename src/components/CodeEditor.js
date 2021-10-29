import { useCallback, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { createBreakpoint } from 'react-use'
import styled from 'styled-components'
import { BlocklyWorkspace } from 'react-blockly'
import Blockly from 'blockly'
import 'blockly/python'
import './blockly-custom-blocks'
import { useStore } from '../store'
import { CSSShadows } from '../constants'

export const useBreakpoint = createBreakpoint({ L: 1016, S: 1015 })

const getHeight = (size) => {
  switch (size) {
    case 'L':
      return 'calc(100vh - 240px)'
    default:
      return 'max(400px, calc(50vh - 32px - 14px))'
  }
}

const getWidth = (size) => {
  switch (size) {
    case 'L':
      return 'max(400px, calc(100vw - 32px - 14px))'
    default:
      return 'max(400px, calc(100vw - 32px - 14px))'
  }
}

export function CodeEditor({ above, below, language = 'python', ...props }) {
  const pythonCode = useStore((state) => state.pythonCode)
  const setDownloadablePythonCode = useStore((state) => state.setDownloadablePythonCode)
  const setPythonCode = useStore((state) => state.setPythonCode)
  const javascriptCode = useStore((state) => state.javascriptCode)
  const setJavascriptCode = useStore((state) => state.setJavascriptCode)
  const isPythonCodeEditable = useStore((state) => state.isPythonCodeEditable)
  const setEditor = useStore((state) => state.setEditor)

  const size = useBreakpoint()

  return (
    <Container>
      {above}
      <Editor
        height={getHeight(size)}
        width={getWidth(size)}
        theme="vs-dark"
        language={language}
        value={language === 'python' ? pythonCode : javascriptCode}
        onChange={(code) => {
          if (language === 'python') {
            setPythonCode(code)
            setDownloadablePythonCode(code)
          } else {
            setJavascriptCode(code)
          }
        }}
        className="monaco-editor"
        onMount={(editor) => {
          setEditor(editor)
          const messageContribution = editor.getContribution('editor.contrib.messageController')
          editor.onDidAttemptReadOnlyEdit(() => {
            messageContribution.showMessage(`Du kan ikke endre koden akkurat nå`, editor.getPosition())
          })
        }}
        {...props}
        options={{
          scrollBeyondLastLine: false,
          wordWrap: true,
          automaticLayout: true,
          renderWhitespace: 'boundary',
          readOnly: !isPythonCodeEditable,
          scrollbar: {
            alwaysConsumeMouseWheel: false,
          },
          minimap: {
            enabled: false,
          },
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
      kind: 'label',
      text: 'Bevegelse 🏃‍♀️',
    },
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
      type: 'sideways',
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
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'gotoRandom',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'circle',
    },
    {
      kind: 'label',
      text: 'Tegning og farger 🎨',
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
      type: 'penSize',
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
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'begin_fill',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'end_fill',
    },
    {
      kind: 'label',
      text: 'Repetisjon 🔁',
    },
    {
      kind: 'block',
      blockxml:
        '<block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>',
    },
    {
      kind: 'label',
      text: 'Variabler og verdier 📐',
    },
    {
      kind: 'button',
      text: 'Lag en ny variabel...',
      callbackKey: 'createVariable',
    },
    {
      kind: 'block',
      type: 'math_number',
      gap: '4px',
    },
    {
      kind: 'block',
      blockxml: '<block type="variables_get"><field name="VAR">variabel</field></block>',
      gap: '4px',
    },
    {
      kind: 'block',
      blockxml:
        '<block type="variables_set"><field name="VAR">variabel</field><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>',
      gap: '4px',
    },
    {
      kind: 'block',
      blockxml:
        '<block type="math_change"><field name="VAR">variabel</field><value name="DELTA"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>',
    },
    {
      kind: 'label',
      text: 'Endre avatar 🤶🎅',
    },
    {
      kind: 'block',
      type: 'showturtle',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'hideturtle',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'shape',
      gap: '4px',
    },
    {
      kind: 'block',
      type: 'stamp',
    },
  ],
}

export function BlocklyEditor({ above, below, ...props }) {
  const preDefinedPythonCode = useStore((state) => state.preDefinedPythonCode)
  const extraPythonCodeForTheBrowserRendering = useStore((state) => state.extraPythonCodeForTheBrowserRendering)
  const setBlocklyPythonCode = useStore((state) => state.setBlocklyPythonCode)
  const setDownloadablePythonCode = useStore((state) => state.setDownloadablePythonCode)
  const initialXml = useStore((state) => state.blocklyXml)
  const onXmlChange = useStore((state) => state.setBlocklyXml)

  const workspaceRef = useRef()

  const size = useBreakpoint()

  const onWorkspaceChange = useCallback(
    (workspace) => {
      setBlocklyPythonCode(
        preDefinedPythonCode + extraPythonCodeForTheBrowserRendering + Blockly.Python.workspaceToCode(workspace)
      )
      setDownloadablePythonCode(preDefinedPythonCode + Blockly.Python.workspaceToCode(workspace))
    },
    [preDefinedPythonCode, extraPythonCodeForTheBrowserRendering, setBlocklyPythonCode, setDownloadablePythonCode]
  )

  return (
    <Container
      style={{
        height: getHeight(size),
        width: getWidth(size),
      }}
    >
      {above}
      <StyledBlocklyWorkspace
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
          collapse: false,
          scrollbars: true,
        }}
        onInject={(workspace) => {
          workspaceRef.current = workspace
          workspaceRef.current.createVariable('variabel', 'int')
          workspaceRef.current.registerButtonCallback('createVariable', () => {
            Blockly.Variables.createVariableButtonHandler(workspaceRef.current, null, 'int')
          })
        }}
        {...{ initialXml, toolboxConfiguration, onWorkspaceChange, onXmlChange }}
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
  min-width: 400px;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;

  .blocklyScrollbarHorizontal.blocklyMainWorkspaceScrollbar,
  .blocklyScrollbarVertical.blocklyMainWorkspaceScrollbar {
    display: none;
  }
`
