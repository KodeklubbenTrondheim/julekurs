import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useThrottleFn } from 'react-use'
import { useStore } from '../store'
import { CSSShadows } from '../constants'
import { LinkButton } from './Button'

const colors = ['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#000000']

export function Graphics({ props }) {
  const canvasRef = useRef()
  const canvasCtxRef = useRef()
  const turtleCanvasContainerRef = useRef()
  const setCanvas = useStore((state) => state.setCanvas)

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
      canvasCtxRef.current.fillRect(0, 0, 400, 400)
    }
  }, [canvasColor])

  const BottomSettings = () => (
    <BottomContainer>
      <LinkButton
        onClick={() => {
          if (turtleCanvasContainerRef.current && canvasCtxRef.current) {
            const turtleCanvas = turtleCanvasContainerRef.current.children[1]
            canvasCtxRef.current.drawImage(turtleCanvas, 0, 0, 400, 400)

            const linkElement = document.createElement('a')
            linkElement.download = 'julekort.png'
            linkElement.href = canvasRef.current.toDataURL('image/png;base64')
            linkElement.click()

            canvasCtxRef.current.fillStyle = canvasColor
            canvasCtxRef.current.fillRect(0, 0, 400, 400)
          }
        }}
      >
        Last ned bilde <i className="fas fa-download" />
      </LinkButton>
    </BottomContainer>
  )

  return (
    <GraphicsContainer>
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
        <ColorPicker value={canvasColor || '#ffffff'} onChange={(e) => setThrottledCanvasColor(e.target.value)} />
      </TopContainer>
      <Canvas height="400px" width="400px" ref={canvasRef} {...props} />
      <CanvasContainer id="julekort-grafikk-turtle" ref={turtleCanvasContainerRef} />
      <CanvasContainer id="julekort-grafikk-p5" />
      <BottomSettings />
    </GraphicsContainer>
  )
}

const GraphicsContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  margin-top: 44px;
  ${CSSShadows.large}
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
  ${CSSShadows.medium}

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
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  border: 3px solid ${(props) => (props.isSelected ? 'white' : 'transparent')};
  ${(props) => (props.isSelected ? CSSShadows.medium : '')}
  border-radius: 8px;
  cursor: pointer;
`
