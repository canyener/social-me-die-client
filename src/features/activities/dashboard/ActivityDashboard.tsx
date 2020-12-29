import React, { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import ActivityStore from '../../../app/stores/activityStore'

import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore)
  const { editMode, selectedActivity } = activityStore
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          selectedActivity
          && !editMode
          && (
            <ActivityDetails />
          )
        }
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  )
}

ActivityDashboard.displayName = 'ActivityDashboard'

export default observer(ActivityDashboard)