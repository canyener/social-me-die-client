import { makeObservable, observable, action } from "mobx"
import { createContext } from 'react'

import { IActivity } from "../models/activity"
import agent from '../api/agent'

class ActivityStore {

  constructor() {
    makeObservable(this)
  }

  @observable activities: IActivity[] = []
  @observable loadingInitial = false

  @action loadActivities = () => {
    this.loadingInitial = true

    agent.Activities.list()
      .then(activityList => {

        activityList.forEach((activity) => {
          activity.date = activity.date.split('.')[0]
          this.activities.push(activity)
        })
      })      
      .finally(() => this.loadingInitial = false)
  }
}

export default createContext(new ActivityStore())
