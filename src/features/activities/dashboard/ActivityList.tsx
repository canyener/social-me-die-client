import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useContext } from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'

import ActivityStore from '../../../app/stores/activityStore'

interface IProps {
  deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void
  submitting: boolean
  target: string
}

const ActivityList: React.FC<IProps> = ({
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore)
  const { activitiesByDate, selectActivity } = activityStore
  return (
    <Segment clearing>
      <Item.Group divided>
        {
          activitiesByDate.map(activity =>
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>{activity.city}, {activity.venue}</div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => selectActivity(activity.id)}
                    floated='right'
                    content='View'
                    color='blue'
                  />
                  <Button
                    name={activity.id}
                    loading={target === activity.id && submitting}
                    onClick={(e) => deleteActivity(e, activity.id)}
                    floated='right'
                    content='Delete'
                    color='red'
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          )
        }
      </Item.Group>
    </Segment>
  )
}

ActivityList.displayName = 'ActivityList'

export default observer(ActivityList)