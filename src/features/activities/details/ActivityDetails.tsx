import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

import { IActivity } from '../../../app/models/activity'

interface IProps {
  activity: IActivity,
  setEditMode: (editMode: boolean) => void
  setSelectedActivity: (activity: IActivity | null) => void
}

export const ActivityDetails: React.FC<IProps> = ({ 
  activity, 
  setEditMode, 
  setSelectedActivity 
}) => (
  <Card fluid>
    <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span>{activity.date.toLocaleString("en-US", { timeZone: "America/New_York" })}</span>
      </Card.Meta>
      <Card.Description>
        {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths={2}>
        <Button onClick={() => setEditMode(true)} basic color='blue'>Edit</Button>
        <Button onClick={() => setSelectedActivity(null)} basic color='grey'>Cancel</Button>
      </Button.Group>
    </Card.Content>
  </Card>
)