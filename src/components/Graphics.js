import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useStore } from '../store'

const GraphicsContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: white;
  overflow: hidden;
  border-radius: 8px;

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export function Graphics({ props }) {
  const setCanvas = useStore((state) => state.setCanvas)
  const canvasRef = useRef()

  useEffect(() => {
    if (canvasRef.current !== null) {
      setCanvas(canvasRef.current)
    }
  }, [setCanvas])

  return (
    <GraphicsContainer>
      <div id="julekort-grafikk-turtle" />
      <div id="julekort-grafikk-p5" />
      <canvas height="400px" width="400px" ref={canvasRef} {...props} />
    </GraphicsContainer>
  )
}
