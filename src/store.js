import create from 'zustand'

export const useStore = create((set) => ({
  code:
    localStorage.getItem('code') ??
    `from turtle import *

t = Turtle()
t.color("red")
t.forward(100)
t.left(45)
t.forward(100)
`,
  setCode: (code) => {
    localStorage.setItem('code', code)
    set(() => ({ code }))
  },
  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),
}))
