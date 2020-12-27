import React, { useContext } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import ActivityStore from '../../../app/stores/activityStore'

import { IActivity } from '../../../app/models/activity'


interface IProps {
  setEditMode: (editMode: boolean) => void
  setSelectedActivity: (activity: IActivity | null) => void
}

const ActivityDetails: React.FC<IProps> = ({
  setEditMode,
  setSelectedActivity
}) => {
  const activityStore = useContext(ActivityStore)
  const { selectedActivity: activity } = activityStore
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity!.description}
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
}

ActivityDetails.displayName = 'ActivityDetails'

export default observer(ActivityDetails)
