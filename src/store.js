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

def randomColor():
  hue, d = random.random() * pi * 2, pi * 2 / 3
  r, g, b = sin(hue - d) + 1, sin(hue) + 1, sin(hue + d) + 1
  color(r / 2, g / 2, b / 2)

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
pensize(scale)

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
  blocklyXml: localStorage.getItem('blocklyXml') || `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`,
  setBlocklyXml: (blocklyXml) => {
    localStorage.setItem('blocklyXml', blocklyXml)
    set(() => ({ blocklyXml }))
  },
  blocklyWorkspace: null,
  setBlocklyWorkspace: (blocklyWorkspace) => {
    set(() => ({ blocklyWorkspace }))
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

  userId: null,
  setUserId: (userId) => set(() => ({ userId })),

  title: null,
  setTitle: (title) => set(() => ({ title })),

  image: null,
  setImage: (image) => set(() => ({ image })),
}))
