import React, { Component } from 'react'
import { Header, Icon, List } from 'semantic-ui-react'

import axios from 'axios'

import { IActivity } from '../app/models/activity'

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state : IState = {
    activities: []
  }

  componentDidMount() {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(response => {
      this.setState(() => ({ 
        activities: response.data 
      }))
    })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Social Me Die</Header.Content>
        </Header>
        <List>
          {
            this.state.activities.map((activity) => 
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>)
          }
        </List>
      </div>
    )
  }
}

export default App
