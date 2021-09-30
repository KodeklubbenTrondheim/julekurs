import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python.min.js'
import './prism-dark-vsc-theme.css'

export function CodePreview({ code, language = 'python' }) {
  const [HTML, setHTML] = useState('')

  useEffect(() => {
    setHTML(Prism.highlight(code, Prism.languages[language], language))
  }, [code, language])

  return (
    <pre>
      <code className={'language-' + language} dangerouslySetInnerHTML={{ __html: HTML }} />
    </pre>
  )
}
