import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Item, Segment } from 'semantic-ui-react'

import ActivityStore from '../../../app/stores/activityStore'
import ActivityListItem from './ActivityListItem'

const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore)
  const { activitiesByDate } = activityStore
  return (
    <Segment clearing>
      <Item.Group divided>
        {
          activitiesByDate.map(activity =>
            <ActivityListItem key={activity.id} activity={activity} />
          )
        }
      </Item.Group>
    </Segment>
  )
}

ActivityList.displayName = 'ActivityList'

export default observer(ActivityList)