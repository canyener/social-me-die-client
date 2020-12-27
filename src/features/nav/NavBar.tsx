import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Menu, Container, Button } from 'semantic-ui-react'

import ActivityStore from '../../app/stores/activityStore'

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore)
  return (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
          Social Me Die
      </Menu.Item>
      <Menu.Item name='Activities' />
      <Menu.Item>
        <Button onClick={activityStore.openCreateForm} positive content='Create Activity' />
      </Menu.Item>
    </Container>
  </Menu>
)}

NavBar.displayName = 'NavBar'

export default observer(NavBar)
