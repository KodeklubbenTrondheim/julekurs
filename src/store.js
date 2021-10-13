import create from 'zustand'

export const useStore = create((set) => ({
  pythonCode:
    localStorage.getItem('pythonCode') ||
    `from turtle import *

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
  blocklyXml: localStorage.getItem('blocklyXml') || '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
  setBlocklyXml: (blocklyXml) => {
    localStorage.setItem('blocklyXml', blocklyXml)
    set(() => ({ blocklyXml }))
  },

  editorMode: localStorage.getItem('editorMode') || 'python',
  setEditorMode: (editorMode) => {
    localStorage.setItem('editorMode', editorMode)
    set(() => ({ editorMode }))
  },

  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  canvasColor: localStorage.getItem('canvasColor') || '#fff',
  setCanvasColor: (canvasColor) => {
    localStorage.setItem('canvasColor', canvasColor)
    set(() => ({ canvasColor }))
  },

  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),
}))
