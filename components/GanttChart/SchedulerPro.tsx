import React from 'react'
import { BryntumSchedulerPro, BryntumSchedulerProProps } from '@bryntum/schedulerpro-react'

const SchedulerPro = React.forwardRef<BryntumSchedulerPro, BryntumSchedulerProProps>((props, forwardedRef) => {
  return <BryntumSchedulerPro {...props} ref={forwardedRef} />
})

SchedulerPro.displayName = 'SchedulerPro'

export default SchedulerPro
