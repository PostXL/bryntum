import React, { useEffect, useRef, useState } from 'react'

import '@bryntum/schedulerpro/schedulerpro.classic-dark.css'
import '@bryntum/schedulerpro/schedulerpro.classic-light.css'
import '@bryntum/schedulerpro/schedulerpro.classic.css'
import '@bryntum/schedulerpro/schedulerpro.material.css'
import '@bryntum/schedulerpro/schedulerpro.stockholm.css'

import dynamic from 'next/dynamic'
import styled from 'styled-components'
import {
  AssignmentModel,
  AssignmentStore,
  DependencyStore,
  EventStore,
  Model,
  ResourceModel,
  ResourceModelConfig,
  ResourceStore,
} from '@bryntum/schedulerpro'
import type { BryntumSchedulerPro } from '@bryntum/schedulerpro-react'

const SchedulerPro = dynamic(() => import('./SchedulerPro'), { ssr: false, loading: () => <GanttChartShimmer /> })

// NOTE: Bryntum components are client-side only so we need to properly load them.
// https://bryntum.com/products/schedulerpro/docs/guide/SchedulerPro/integration/react/guide#loading-components-dynamically-with-next-js
export const GanttChart = () => {
  const ref = useRef<BryntumSchedulerPro>(null)

  // const [events] = useState<EventStore | null>(null)
  // const [dependencies] = useState(() => new DependencyStore({}))
  // const [resources] = useState(() => new ResourceStore({}))

  const loadedRef = useRef(false)

  useEffect(() => {
    // REPRODUCTION: Comment or uncomment this block to see the issue when reloading!
    const store = new EventStore({})
  }, [])

  return (
    <Wrapper>
      <SchedulerPro
        ref={ref}
        viewPreset="hourAndDay"
        project={{}}
        columns={[
          {
            type: 'resourceInfo',
            text: 'Name',
            field: 'name',
            showEventCount: false,
            width: 150,
          },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius);
  overflow: hidden;
`

const GanttChartShimmer = styled.div`
  background-color: red;
  height: 420px;
  width: 100%;
`
