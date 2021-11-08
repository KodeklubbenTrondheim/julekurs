import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import mdIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import { CSSShadows } from '../../constants'

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
    <TasksContainer>
      <h2>Velg hva du vil lage</h2>
      <h3>Nivå: Lett</h3>
      <TaskLevelContainer>
        {tasks
          .filter(({ level = '' }) => level === 'easy')
          .map((task) => (
            <Task key={task.id} to={'/oppgaver/' + task.id + (task.pdf ? '.pdf' : '')}>
              {task.image && <LinkImage src={task.image} alt={task.title} />}
              <span>{task.title}</span>
            </Task>
          ))}
      </TaskLevelContainer>
      <h3>Nivå: Middels</h3>
      <TaskLevelContainer>
        {tasks
          .filter(({ level = '' }) => level === 'medium')
          .map((task) => (
            <Task key={task.id} to={'/oppgaver/' + task.id + (task.pdf ? '.pdf' : '')}>
              {task.image && <LinkImage src={task.image} alt={task.title} />}
              <span>{task.title}</span>
            </Task>
          ))}
      </TaskLevelContainer>
      <h3>Nivå: Vanskelig</h3>
      <TaskLevelContainer>
        {tasks
          .filter(({ level = '' }) => level === 'hard')
          .map((task) => (
            <Task key={task.id} to={'/oppgaver/' + task.id + (task.pdf ? '.pdf' : '')}>
              {task.image && <LinkImage src={task.image} alt={task.title} />}
              <span>{task.title}</span>
            </Task>
          ))}
      </TaskLevelContainer>
    </TasksContainer>
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

  if (isPdf) {
    return (
      <PDFContainer>
        <PDF src={pdfUrl} />
      </PDFContainer>
    )
  }

  return (
    <TaskContainer>
      <Markdown>{task}</Markdown>
    </TaskContainer>
  )
}

function Markdown({ children, ...props }) {
  const [renderedMarkdown, setRenderedMarkdown] = useState('')

  useEffect(() => {
    setRenderedMarkdown(md.render(children.replace(/\\n/g, '\n')))
  }, [children])

  return <RenderedMarkdown dangerouslySetInnerHTML={{ __html: renderedMarkdown }} {...props} />
}

const TasksContainer = styled.div`
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 auto;
  box-sizing: border-box;
  width: 100%;
`

const TaskContainer = styled(TasksContainer)`
  width: 830px;
  max-width: calc(100% - 2rem);
`

const PDFContainer = styled(TaskContainer)`
  padding: 0;
  margin: 0 1rem 1rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  ${CSSShadows.large}
`

const TaskLevelContainer = styled.div`
  margin-bottom: 2em;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 1rem;
  justify-content: space-evenly;
`

const Task = styled(Link)`
  > * {
    transition: transform 0.1s;
  }

  > span {
    display: block;
  }

  :hover {
    > * {
      transform: translateY(-10px);
    }
  }
`

const LinkImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #fff;
  ${CSSShadows.large}
`

const PDF = styled.iframe`
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
