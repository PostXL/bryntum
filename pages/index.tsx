import styled from 'styled-components'

import { GanttChart } from '../components/GanttChart'

/**
 * An entry home page of the app.
 */
export default function DashboardPage() {
  return (
    <Main>
      <GanttChart />
    </Main>
  )
}

const Main = styled.div`
  padding: 40px;
  display: grid;
`
