import React, { useContext } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import ActivityStore from '../../../app/stores/activityStore'

const ActivityDetails: React.FC = () => {
  const activityStore = useContext(ActivityStore)
  const { selectedActivity: activity, openEditForm, cancelSelectedActivity } = activityStore
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
          <Button onClick={() => openEditForm(activity!.id)} basic color='blue'>Edit</Button>
          <Button onClick={cancelSelectedActivity} basic color='grey'>Cancel</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

ActivityDetails.displayName = 'ActivityDetails'

export default observer(ActivityDetails)
