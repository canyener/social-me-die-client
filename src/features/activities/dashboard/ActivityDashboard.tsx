import React from 'react'
import { Grid } from 'semantic-ui-react'

import { IActivity } from '../../../app/models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'

interface IProps {
  activities: IActivity[]
  selectedActivity: IActivity | null
  selectActivity: (id: string) => void
  editMode: boolean
  setEditMode: (editMode: boolean) => void
}

export const ActivityDashboard: React.FC<IProps> = ({ 
  activities, 
  selectedActivity, 
  selectActivity,
  editMode,
  setEditMode 
}) => (
  <Grid>
    <Grid.Column width={10}>
      <ActivityList activities={activities} selectActivity={selectActivity} />
    </Grid.Column>
    <Grid.Column width={6}>
      {
        selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} setEditMode={setEditMode} />
      }
      {
        editMode && <ActivityForm />
      }
    </Grid.Column>
  </Grid>
)
