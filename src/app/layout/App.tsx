import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import { IActivity } from '../models/activity'

import NavBar from '../../features/nav/NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import LoadingComponent from './LoadingComponent'

import agent from '../api/agent'

import ActivityStore from '../stores/activityStore'

const App = () => {

  const activityStore = useContext(ActivityStore)
  const [activities, setActivities] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [target, setTarget] = useState('')

  const handleEditActivity = (activity: IActivity) => {
    setSubmitting(true)
    agent.Activities.update(activity).then(() => {
      setActivities([...activities.filter(item => item.id !== activity.id), activity])
      setSelectedActivity(activity)
      setEditMode(false)
    })
      .then(() => setSubmitting(false))
  }

  const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true)
    setTarget(event.currentTarget.name)
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(activity => activity.id !== id)])
    })
      .then(() => setSubmitting(false))
  }

  useEffect(() => {
    activityStore.loadActivities()
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content="Loading Activities..." />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
          target={target}
        />
      </Container>
    </Fragment>
  )
}

export default observer(App)
