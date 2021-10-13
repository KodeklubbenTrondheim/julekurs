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
  blocklyCode: localStorage.getItem('blocklyCode') || ``,
  setBlocklyCode: (blocklyCode) => {
    localStorage.setItem('blocklyCode', blocklyCode)
    set(() => ({ blocklyCode }))
  },
  editorMode: localStorage.getItem('editorMode') || 'python',
  setEditorMode: (editorMode) => {
    localStorage.setItem('editorMode', editorMode)
    set(() => ({ editorMode }))
  },
  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),
}))
