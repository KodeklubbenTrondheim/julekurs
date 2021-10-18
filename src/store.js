import create from 'zustand'

export const useStore = create((set) => ({
  preDefinedPythonCode: `from random import *
from turtle import *

`,
  pythonCode:
    localStorage.getItem('pythonCode') ||
    `from random import *
from turtle import *

color("red")
forward(100)
left(45)
forward(100)
`,
  setPythonCode: (pythonCode) => {
    localStorage.setItem('pythonCode', pythonCode)
    set(() => ({ pythonCode }))
  },
  javascriptCode: localStorage.getItem('javascriptCode') || ``,
  setJavascriptCode: (javascriptCode) => {
    localStorage.setItem('javascriptCode', javascriptCode)
    set(() => ({ javascriptCode }))
  },
  blocklyPythonCode: localStorage.getItem('blocklyPythonCode') || ``,
  setBlocklyPythonCode: (blocklyPythonCode) => {
    localStorage.setItem('blocklyPythonCode', blocklyPythonCode)
    set(() => ({ blocklyPythonCode }))
  },
  blocklyXml:
    localStorage.getItem('blocklyXml') ||
    `<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_repeat" id="*Q4b-j2Gk=+EI9YKue+?" x="70" y="50"><field name="TIMES">3</field><statement name="DO"><block type="farge" id="m_}Q/PVE/?FoO*BP)l,H"><field name="COLOR">#ff0000</field><next><block type="fremover" id="ZlXa=;^K)n33zp(9fl)~"><field name="DISTANCE">100</field><next><block type="venstre" id=",zS%5o$YQQm8/-Sya8-n"><field name="DEGREES">90</field><next><block type="fremover" id="it;=-):3J-?U/!lQU.7U"><field name="DISTANCE">100</field><next><block type="farge" id="U0k:h\`P{X[8Ed0X^i$_F"><field name="COLOR">#000000</field><next><block type="venstre" id="=o)rvJ_(}bB(;q?9X3RQ"><field name="DEGREES">90</field><next><block type="fremover" id="Z],D3OV-w|#N_wDG(eW}"><field name="DISTANCE">100</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>`,
  setBlocklyXml: (blocklyXml) => {
    localStorage.setItem('blocklyXml', blocklyXml)
    set(() => ({ blocklyXml }))
  },

  editorMode: localStorage.getItem('editorMode') || 'python',
  setEditorMode: (editorMode) => {
    localStorage.setItem('editorMode', editorMode)
    set(() => ({ editorMode }))
  },
  isPythonCodeEditable: localStorage.getItem('isPythonCodeEditable') || true,
  setIsPythonCodeEditable: (isPythonCodeEditable) => {
    localStorage.setItem('isPythonCodeEditable', isPythonCodeEditable)
    set(() => ({ isPythonCodeEditable }))
  },

  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  canvasColor: localStorage.getItem('canvasColor') || '#ffffff',
  setCanvasColor: (canvasColor) => {
    localStorage.setItem('canvasColor', canvasColor)
    set(() => ({ canvasColor }))
  },

  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),
}))
