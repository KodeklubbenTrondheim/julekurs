import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useThrottleFn } from 'react-use'
import { useStore } from '../store'
import { CSSShadows } from '../constants'
import { LinkButton } from './Button'
import { useBreakpoint } from './CodeEditor'
import { CodePreview } from './CodePreview'

const colors = ['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#000000']

export function Graphics({ props }) {
  const canvasRef = useRef()
  const canvasCtxRef = useRef()
  const turtleCanvasContainerRef = useRef()
  const setCanvas = useStore((state) => state.setCanvas)
  const error = useStore((state) => state.error)
  const pythonErrorLineNumberOffset = useStore((state) => state.pythonErrorLineNumberOffset)
  const editorMode = useStore((state) => state.editorMode)

  const size = useBreakpoint()

  const canvasColor = useStore((state) => state.canvasColor)
  const setCanvasColor = useStore((state) => state.setCanvasColor)

  // Sørge for at color picker ikke spammer state-oppdateringen
  const [color, setThrottledCanvasColor] = useState(canvasColor)
  const throttledCanvasColor = useThrottleFn((value) => value, 100, [color])

  useEffect(() => {
    setCanvasColor(throttledCanvasColor)
  }, [setCanvasColor, throttledCanvasColor])

  useEffect(() => {
    if (canvasRef.current !== null) {
      setCanvas(canvasRef.current)
      canvasCtxRef.current = canvasRef.current.getContext('2d')
    }
  }, [setCanvas])

  useEffect(() => {
    if (canvasRef.current !== null) {
      canvasCtxRef.current.fillStyle = canvasColor
      canvasCtxRef.current.fillRect(0, 0, 1600, 1600)
    }
  }, [canvasColor])

  const BottomSettings = () => (
    <BottomContainer>
      <LinkButton
        onClick={() => {
          if (turtleCanvasContainerRef.current && canvasCtxRef.current) {
            const turtleCanvas = turtleCanvasContainerRef.current.children[1]
            if (!turtleCanvas) return
            const width = turtleCanvas.width
            const height = turtleCanvas.height
            canvasRef.current.width = width
            canvasRef.current.height = height
            canvasCtxRef.current.fillStyle = canvasColor
            canvasCtxRef.current.fillRect(0, 0, width, height)

            let first = true
            for (const canvas of turtleCanvasContainerRef.current.children) {
              if (first) {
                first = false
                continue
              }
              canvasCtxRef.current.drawImage(canvas, 0, 0, width, height)
            }

            const linkElement = document.createElement('a')
            linkElement.download = 'julekort.png'
            linkElement.href = canvasRef.current.toDataURL('image/png;base64')
            linkElement.click()

            canvasCtxRef.current.fillStyle = canvasColor
            canvasCtxRef.current.fillRect(0, 0, width, height)
          }
        }}
      >
        Last ned bilde <i className="fas fa-download" />
      </LinkButton>
    </BottomContainer>
  )

  return (
    <GraphicsContainer fixedPosition={size === 'L'}>
      <TopContainer>
        {colors.map((color) => (
          <ChangeColorButton
            key={color}
            title={`Trykk for å sette bakgrunnen til denne fargen: ${color}`}
            color={color}
            isSelected={color === canvasColor}
            onClick={() => setThrottledCanvasColor(color)}
          />
        ))}
        <ColorPicker
          isSelected={!colors.includes(canvasColor || '#ffffff')}
          value={canvasColor || '#ffffff'}
          onChange={(e) => setThrottledCanvasColor(e.target.value)}
        />
      </TopContainer>
      <Canvas height="1600px" width="1600px" ref={canvasRef} {...props} />
      <CanvasContainer id="julekort-grafikk-turtle" ref={turtleCanvasContainerRef} />
      <CanvasContainer id="julekort-grafikk-p5" />
      <BottomSettings />
      {error && (
        <ShowError>
          {editorMode === 'python' ? (
            <>
              <h2>Du fikk en feilmelding 😬</h2>
              <h4>
                MEN det er ingen grunn til panikk!
                <br />
                Dette skjer hele tiden 🤗
              </h4>
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {error.type}: {error.message}
              </pre>
              {error.lineNumber && (
                <>
                  <h4>Tips: Feilen ligger på linje {error.lineNumber - pythonErrorLineNumberOffset} 😉:</h4>
                  <CodePreview
                    code={
                      error.getNLinesAbove(2).join('\n') +
                      '\n' +
                      error.line +
                      ' # <- Se her 🧐\n' +
                      error.getNLinesBelow(2).join('\n')
                    }
                  />
                </>
              )}
            </>
          ) : (
            <>
              <h1 style={{ textAlign: 'center' }}>Obs!</h1>
              <h2>Det kom en feilmelding 😬 Gjerne huk tak i noen fra kodeklubben om du står fast!</h2>
              <h4>
                (Om du vil finne ut av feilen selv kan du trykke på "Gjør om til Python <i className="fas fa-code" />
                "-knappen, så får du en mer detaljert tilbakemelding)
              </h4>
            </>
          )}
        </ShowError>
      )}
    </GraphicsContainer>
  )
}

const GraphicsContainer = styled.div`
  position: ${(props) => (props.fixedPosition ? 'absolute' : 'relative')};
  z-index: 999;
  top: ${(props) => (props.fixedPosition ? '51px' : 'unset')};
  right: ${(props) => (props.fixedPosition ? '16px' : 'unset')};
  width: 400px;
  height: 400px;
  background-color: transparent;
  border-radius: 8px;
  margin-top: 44px;
  margin-bottom: 44px;
  ${CSSShadows.large}

  canvas {
    width: 400px !important;
    height: 400px !important;
  }

  canvas + canvas {
    margin-top: -400px !important;
  }
`

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
`

const Canvas = styled.canvas`
  border-radius: 8px;
`

const TopContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`

const BottomContainer = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`

const ColorPicker = styled.input.attrs({ type: 'color' })`
  background: ${(props) => props.value};
  appearance: none;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  width: 30px;
  height: 30px;
  margin-left: 30px;
  border: 3px solid ${(props) => (props.isSelected ? 'black' : 'transparent')};
  ${CSSShadows.medium}
  cursor: pointer;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border: none;
  }
`

const ChangeColorButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.isSelected ? 1 : 0.75)};
  border: 3px solid ${(props) => (props.isSelected ? 'black' : 'transparent')};
  ${CSSShadows.medium}
  border-radius: 8px;
  cursor: pointer;
`

const ShowError = styled.div`
  border-radius: 7px;
  z-index: 999;
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  font-family: monospace;
  font-size: 16px;
  text-align: left;

  pre {
    color: red;
  }
`
