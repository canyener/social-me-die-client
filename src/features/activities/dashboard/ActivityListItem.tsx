import React from 'react'
import { Item, Button, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { IActivity } from '../../../app/models/activity'

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Description>
                Hosted by Cancan
            </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name='clock' /> {activity.date!.toLocaleDateString('tr-TR')}
        <Icon name='marker' /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>
        Attendees will go here
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='View'
          color='blue'
        />
      </Segment>
    </Segment.Group>
  )
}

export default ActivityListItem