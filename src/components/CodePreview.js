import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python.min.js'
import './prism-dark-vsc-theme.css'
import styled from 'styled-components'

export function CodePreview({ code, language = 'python' }) {
  const [HTML, setHTML] = useState('')

  useEffect(() => {
    setHTML(Prism.highlight(code, Prism.languages[language], language))
  }, [code, language])

  return (
    <Container>
      <code className={'language-' + language} dangerouslySetInnerHTML={{ __html: HTML }} />
    </Container>
  )
}

const Container = styled.pre`
  background-color: #1d1f21;
  border-radius: 4px;

  > code {
    display: block;
    padding: 10px 20px;
    overflow-x: auto;

    :empty {
      display: none;
    }
  }
`
