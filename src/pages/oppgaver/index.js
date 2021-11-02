import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import mdIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const md = mdIt({
  langPrefix: 'language-',
  highlight: function (code, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return hljs.highlight(code, {
          language,
        }).value
      } catch (ex) {}
    }

    return ''
  },
})

export function OppgaveOversiktSide() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/oppgaver/index.json')
      .then((r) => r.json())
      .then((index) => {
        setTasks(index.oppgaver)
      })
  }, [])

  return (
    <Container>
      <h2>Velg hva du vil lage</h2>
      {tasks.map((task) => (
        <Link key={task.id} to={'/oppgaver/' + task.id + (task.pdf ? '.pdf' : '')}>
          {task.tittel}
        </Link>
      ))}
    </Container>
  )
}

export function OppgaveSide() {
  const [task, setTask] = useState('')
  const { oppgaveId = null } = useParams()
  const [isPdf, setIsPdf] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  useEffect(() => {
    const isPdf = oppgaveId.endsWith('.pdf')
    setIsPdf(isPdf)
    if (isPdf) {
      fetch(process.env.PUBLIC_URL + `/oppgaver/index.json`)
        .then((r) => r.json())
        .then((index) => {
          if ('oppgaver' in index) {
            setPdfUrl(index.oppgaver.find((task) => task.id === oppgaveId.slice(0, -4))?.pdf || '')
          }
        })
    } else {
      fetch(process.env.PUBLIC_URL + `/oppgaver/${oppgaveId}.md`)
        .then((r) => r.text())
        .then((markdown) => {
          setTask(markdown)
        })
    }
  }, [oppgaveId])

  return <Container>{isPdf ? <PDFContainer src={pdfUrl}></PDFContainer> : <Markdown>{task}</Markdown>}</Container>
}

function Markdown({ children, ...props }) {
  const [renderedMarkdown, setRenderedMarkdown] = useState('')

  useEffect(() => {
    setRenderedMarkdown(md.render(children.replace(/\\n/g, '\n')))
  }, [children])

  return <RenderedMarkdown dangerouslySetInnerHTML={{ __html: renderedMarkdown }} {...props} />
}

const Container = styled.div`
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 900px;
  flex: 1 0 auto;
  box-sizing: border-box;
`

const PDFContainer = styled.iframe`
  border: none;
  width: 100%;
  flex: 1 0 auto;
`

const RenderedMarkdown = styled.div`
  text-align: left;
  width: 100%;
  max-width: 640px;

  img {
    max-width: 100%;
  }
`
