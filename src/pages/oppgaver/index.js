import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #282c34;
  text-align: center;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

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
  const [task, setTask] = useState([])
  const { oppgaveId = null } = useParams()

  useEffect(() => {
    fetch(`/oppgaver/${oppgaveId}.md`)
      .then((r) => r.text())
      .then((markdown) => {
        console.log(markdown)
        setTask(markdown)
      })
  }, [oppgaveId])

  return <Container>{task}</Container>
}
