import React from 'react'
import { Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import ActivityList from './ActivityList'

const ActivityDashboard: React.FC = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  )
}

ActivityDashboard.displayName = 'ActivityDashboard'

export default observer(ActivityDashboard)