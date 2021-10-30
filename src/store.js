import create from 'zustand'

const preDefinedPythonCode = `import random
from math import *
from turtle import *

try: scale
except NameError: scale = 1

def sideways(distance):
  direction = (heading() + 90) * pi / 180
  [x, y] = pos()
  goto(x + distance * cos(direction), y + distance * sin(direction))

fontname, fontsize, fonttype, textalign = "Arial", 24, "normal", "left"
pensize(scale)

`

const extraPythonCodeForTheBrowserRendering = `screen = Screen()
screen.setworldcoordinates(-200, -200, 200, 200)
screen.register_shape("nisse-old-female")
screen.register_shape("nisse-old-male")
scale = lambda a: list(map(lambda x:[x[0]*3,x[1]*3],a))
screen.register_shape("arrow", scale([[-10,0],[10,0],[0,10]]))
screen.register_shape("square", scale([[10,-10],[10,10],[-10,10],[-10,-10]]))
screen.register_shape("triangle", scale([[10,-5.77],[0,11.55],[-10,-5.77]]))
screen.register_shape("classic", scale([[0,0],[-5,-9],[0,-7],[5,-9]]))
screen.register_shape("turtle", scale([[0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-5,-3],[-8,-6],[-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1],[6,5],[9,8],[7,9],[4,7],[1,10],[2,14]]))
screen.register_shape("circle", scale([[10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09,9.51],[-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8.09,-5.88],[-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8.09],[8.09,-5.88],[9.51,-3.09]]))
shape("nisse-old-male")
scale = 4

`

export const useStore = create((set) => ({
  preDefinedPythonCode,
  extraPythonCodeForTheBrowserRendering,
  pythonErrorLineNumberOffset:
    preDefinedPythonCode.split('\n').length + extraPythonCodeForTheBrowserRendering.split('\n').length - 2,
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
  downloadablePythonCode: localStorage.getItem('downloadablePythonCode') || ``,
  setDownloadablePythonCode: (downloadablePythonCode) => {
    localStorage.setItem('downloadablePythonCode', downloadablePythonCode)
    set(() => ({ downloadablePythonCode }))
  },
  blocklyXml:
    localStorage.getItem('blocklyXml') ||
    `<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_repeat" id="*Q4b-j2Gk=+EI9YKue+?" x="70" y="50"><field name="TIMES">3</field><statement name="DO"><block type="farge" id="m_}Q/PVE/?FoO*BP)l,H"><field name="COLOR">#ff0000</field><next><block type="fremover" id="ZlXa=;^K)n33zp(9fl)~"><field name="DISTANCE">100</field><next><block type="venstre" id=",zS%5o$YQQm8/-Sya8-n"><field name="DEGREES">90</field><next><block type="fremover" id="it;=-):3J-?U/!lQU.7U"><field name="DISTANCE">100</field><next><block type="farge" id="U0k:h\`P{X[8Ed0X^i$_F"><field name="COLOR">#000000</field><next><block type="venstre" id="=o)rvJ_(}bB(;q?9X3RQ"><field name="DEGREES">90</field><next><block type="fremover" id="Z],D3OV-w|#N_wDG(eW}"><field name="DISTANCE">100</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>`,
  setBlocklyXml: (blocklyXml) => {
    localStorage.setItem('blocklyXml', blocklyXml)
    set(() => ({ blocklyXml }))
  },

  editorMode: localStorage.getItem('editorMode') || 'blockly',
  setEditorMode: (editorMode) => {
    localStorage.setItem('editorMode', editorMode)
    set(() => ({ editorMode }))
  },
  editor: null,
  setEditor: (editor) => set(() => ({ editor })),
  isPythonCodeEditable: (localStorage.getItem('isPythonCodeEditable') || 'true') === 'true',
  setIsPythonCodeEditable: (isPythonCodeEditable) => {
    localStorage.setItem('isPythonCodeEditable', isPythonCodeEditable)
    set(() => ({ isPythonCodeEditable }))
  },

  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  canvasColor: localStorage.getItem('canvasColor') || '#ffffff',
  setCanvasColor: (canvasColor) => {
    if (canvasColor === null || canvasColor === 'null') canvasColor = '#ffffff'
    localStorage.setItem('canvasColor', canvasColor)
    set(() => ({ canvasColor }))
  },
  showGrid: (localStorage.getItem('showGrid') || 'false') === 'true',
  setShowGrid: (showGrid) => {
    localStorage.setItem('showGrid', showGrid)
    set(() => ({ showGrid }))
  },

  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),

  error: null,
  setError: (error) => set(() => ({ error })),
  clearError: () => set(() => ({ error: null })),
}))
