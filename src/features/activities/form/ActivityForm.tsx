import React, { FormEvent, useContext, useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid'

import { IActivity } from '../../../app/models/activity'

import ActivityStore from '../../../app/stores/activityStore'
interface IProps {
  setEditMode: (editMode: boolean) => void
  activity: IActivity | undefined,
  editActivity: (activity: IActivity) => void
  submitting: boolean
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  editActivity,
  submitting
}) => {

  const activityStore = useContext(ActivityStore)
  const { createActivity } = activityStore
  
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState
    } else {
      return {
        id: '',
        title: '',
        description: '',
        category: '',
        city: '',
        venue: '',
        date: ''
      }
    }
  }

  const [activity, setActivity] = useState<IActivity>(initializeForm)

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity)
    } else {
      editActivity(activity)
    }
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget
    setActivity({ ...activity, [name]: value })
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='title'
          placeholder='Title'
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          rows={2}
          placeholder='Description'
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name='category'
          placeholder='Category'
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name='date'
          type='datetime-local'
          placeholder='Date'
          value={activity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          name='city'
          placeholder='City'
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name='venue'
          placeholder='Venue'
          value={activity.venue} />
        <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
        <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  )
}

ActivityForm.displayName = 'ActivityForm'

export { ActivityForm }