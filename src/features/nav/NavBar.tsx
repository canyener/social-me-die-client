import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export const NavBar = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
          Social Me Die
        </Menu.Item>
      <Menu.Item name='Activities' />
      <Menu.Item>
        <Button positive content='Create Activity' />
      </Menu.Item>
    </Container>
  </Menu>
)
