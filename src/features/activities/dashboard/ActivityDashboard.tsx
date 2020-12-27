import React, { SyntheticEvent, useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import { IActivity } from '../../../app/models/activity'
import ActivityStore from '../../../app/stores/activityStore'

import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
  activities: IActivity[]
  setEditMode: (editMode: boolean) => void
  setSelectedActivity: (activity: IActivity | null) => void
  editActivity: (activity: IActivity) => void
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void
  submitting: boolean,
  target: string
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  setEditMode,
  setSelectedActivity,
  editActivity,
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore)
  const { editMode, selectedActivity } = activityStore
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
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
            editActivity={editActivity}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  )
}

ActivityDashboard.displayName = 'ActivityDashboard'

export default observer(ActivityDashboard)