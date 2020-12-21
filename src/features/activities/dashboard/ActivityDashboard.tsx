import React, { SyntheticEvent } from 'react'
import { Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import { IActivity } from '../../../app/models/activity'

import ActivityList from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
  activities: IActivity[]
  selectedActivity: IActivity | null
  selectActivity: (id: string) => void
  editMode: boolean
  setEditMode: (editMode: boolean) => void
  setSelectedActivity: (activity: IActivity | null) => void
  createActivity: (activity: IActivity) => void
  editActivity: (activity: IActivity) => void
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void
  submitting: boolean,
  target: string
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectedActivity,
  selectActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
  createActivity,
  editActivity,
  deleteActivity,
  submitting,
  target
}) => (
  <Grid>
    <Grid.Column width={10}>
      <ActivityList
        activities={activities}
        selectActivity={selectActivity}
        deleteActivity={deleteActivity}
        submitting={submitting}
        target={target}
      />
    </Grid.Column>
    <Grid.Column width={6}>
      {
        selectedActivity
        && !editMode
        && (
          <ActivityDetails
            activity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )
      }
      {editMode && (
        <ActivityForm
          key={(selectedActivity && selectedActivity.id) || 0}
          setEditMode={setEditMode}
          activity={selectedActivity}
          createActivity={createActivity}
          editActivity={editActivity}
          submitting={submitting}
        />
      )}
    </Grid.Column>
  </Grid>
)

ActivityDashboard.displayName = 'ActivityDashboard'

export default observer(ActivityDashboard)