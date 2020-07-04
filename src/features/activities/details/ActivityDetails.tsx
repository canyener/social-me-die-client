import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src='/assets/placeholder.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Title</Card.Header>
        <Card.Meta>
          <span>Date</span>
        </Card.Meta>
        <Card.Description>
          Description
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color='blue'>Edit</Button>
          <Button basic color='grey'>Cancel</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}
