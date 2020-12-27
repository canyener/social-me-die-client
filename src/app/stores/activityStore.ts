import { makeObservable, observable, action } from "mobx"
import { createContext } from 'react'

import { IActivity } from "../models/activity"
import agent from '../api/agent'

class ActivityStore {

  constructor() {
    makeObservable(this)
  }

  @observable activities: IActivity[] = []
  @observable selectedActivity: IActivity | undefined
  @observable loadingInitial = false
  @observable editMode = false

  @action loadActivities = async () => {
    this.loadingInitial = true
    try {
      const activityList = await agent.Activities.list()

      activityList.forEach((activity) => {
        activity.date = activity.date.split('.')[0]
        this.activities.push(activity)
      })

      this.loadingInitial = false
    } catch (error) {
      console.log(error)
      this.loadingInitial = false
    }
  }

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find(activity => activity.id === id)
    this.editMode = false
  }

}

export default createContext(new ActivityStore())
