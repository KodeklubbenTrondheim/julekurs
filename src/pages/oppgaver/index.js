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
    fetch('/oppgaver/index.json')
      .then((r) => r.json())
      .then((index) => {
        setTasks(index.oppgaver)
      })
  }, [])

  return (
    <Container>
      {tasks.map((task) => (
        <Link key={task.id} to={'/oppgaver/' + task.id}>
          {task.tittel}
        </Link>
      ))}
    </Container>
  )
}

export function OppgaveSide() {
  const [task, setTask] = useState('')
  const { oppgaveId = null } = useParams()

  useEffect(() => {
    fetch(`/oppgaver/${oppgaveId}.md`)
      .then((r) => r.text())
      .then((markdown) => {
        setTask(markdown)
      })
  }, [oppgaveId])

  return (
    <Container>
      <Markdown>{task}</Markdown>
    </Container>
  )
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
`

const RenderedMarkdown = styled.div`
  text-align: left;
  width: 100%;
  max-width: 640px;

  img {
    max-width: 100%;
  }
`
