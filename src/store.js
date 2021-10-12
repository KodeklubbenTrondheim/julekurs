import create from 'zustand'

export const useStore = create((set) => ({
  code: localStorage.getItem('code') ?? '# Her er det litt pythonkode\n\na = 1\nprint(a + 2, "test")\n',
  setCode: (code) => {
    localStorage.setItem('code', code)
    set(() => ({ code }))
  },
  canvas: null, // Grafikk
  setCanvas: (canvas) => set(() => ({ canvas })),
  log: [],
  addLog: (content, error = false) => set((state) => ({ log: [{ content, error }, ...state.log] })),
}))
