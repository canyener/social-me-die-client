import React, { useContext, useEffect, useState } from 'react'
import { Segment, Form, Button, Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form'

import { IActivityFormValues } from '../../../app/models/activity'

import ActivityStore from '../../../app/stores/activityStore'

import TextInput from '../../../app/common/form/TextInput'
import TextAreaInput from '../../../app/common/form/TextAreaInput'
import SelectInput from '../../../app/common/form/SelectInput'
import DateInput from '../../../app/common/form/DateInput'

import { categories } from '../../../app/common/options/categoryOptions'
import { combineDateAndTime } from '../../../app/common/util/util'

interface DetailParams {
  id: string
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {

  const activityStore = useContext(ActivityStore)
  const {
    submitting,
    activity: initialFormState,
    loadActivity,
    clearActivity
  } = activityStore

  const [activity, setActivity] = useState<IActivityFormValues>({
    id: undefined,
    title: '',
    description: '',
    category: '',
    city: '',
    venue: '',
    date: undefined,
    time: undefined
  })

  useEffect(() => {
    if (match.params.id && activity.id) {
      loadActivity(match.params.id).then(
        () => initialFormState && setActivity(initialFormState)
      )
    }

    return () => {
      clearActivity()
    }
  }, [
    loadActivity,
    clearActivity,
    match.params.id,
    initialFormState,
    activity.id
  ])

  // const handleSubmit = () => {
  //   if (activity.id.length === 0) {
  //     let newActivity = {
  //       ...activity,
  //       id: uuid()
  //     }
  //     createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
  //   } else {
  //     editActivity(activity).then(() => history.push(`/activities/${activity.id}`))
  //   }
  // }

  const handleFinalFormSubmit = (values: any) => {
    const dateAndTime = combineDateAndTime(values.date, values.time)
    const {date, time, ...activity} = values
    activity.date = dateAndTime
    console.log(activity)
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name='title'
                  placeholder='Title'
                  value={activity.title}
                  component={TextInput}
                />
                <Field
                  name='description'
                  rows={3}
                  placeholder='Description'
                  value={activity.description}
                  component={TextAreaInput}
                />
                <Field
                  name='category'
                  options={categories}
                  placeholder='Category'
                  value={activity.category}
                  component={SelectInput}
                />
                <Form.Group widths='equal'>
                  <Field
                    name='date'
                    date={true}
                    placeholder='Date'
                    value={activity.date}
                    component={DateInput}
                  />
                  <Field
                    name='time'
                    time={true}
                    placeholder='Time'
                    value={activity.date}
                    component={DateInput}
                  />
                </Form.Group>

                <Field
                  name='city'
                  placeholder='City'
                  value={activity.city}
                  component={TextInput}
                />
                <Field
                  name='venue'
                  placeholder='Venue'
                  value={activity.venue}
                  component={TextInput}
                />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => history.push('/activities')} floated='right' type='button' content='Cancel' />
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

ActivityForm.displayName = 'ActivityForm'

export default observer(ActivityForm)