import { makeObservable, observable, action, computed, configure, runInAction } from "mobx"
import { createContext, SyntheticEvent } from 'react'

import { IActivity } from "../models/activity"
import agent from '../api/agent'

configure({
  enforceActions: 'always'
})

class ActivityStore {

  constructor() {
    makeObservable(this)
  }

  @observable activityRegistry = new Map()
  @observable activity: IActivity | null = null
  @observable loadingInitial = false
  @observable submitting = false
  @observable target = ''

  @computed get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).slice().sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  @action loadActivities = async () => {
    this.loadingInitial = true
    try {
      const activityList = await agent.Activities.list()

      runInAction(() => {
        activityList.forEach((activity) => {
          activity.date = activity.date.split('.')[0]
          this.activityRegistry.set(activity.id, activity)
        })

        this.loadingInitial = false
      })

    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false
      })
      console.log(error)
    }
  }

  @action loadActivity = async (id: string) => {
    let activity = this.getActivityFromRegistry(id)
    if (activity) {
      this.activity = activity
    } else {
      this.loadingInitial = true
      try {
        activity = await agent.Activities.details(id)
        runInAction(() => {
          this.activity = activity
          this.loadingInitial = false
        })
      } catch (error) {
        runInAction(() => {
          this.loadingInitial = false
        })
        console.log(error)
      }
    }
  }

  @action clearActivity = () => {
    this.activity = null
  }

  getActivityFromRegistry = (id: string) => {
    return this.activityRegistry.get(id)
  }

  @action createActivity = async (activity: IActivity) => {
    this.submitting = true
    try {
      await agent.Activities.create(activity)

      runInAction(() => {
        this.activityRegistry.set(activity.id, activity)
        this.submitting = false
      })

    } catch (error) {
      runInAction(() => {
        this.submitting = false
      })
      console.log(error)
    }
  }

  @action editActivity = async (activity: IActivity) => {
    this.submitting = true
    try {
      await agent.Activities.update(activity)

      runInAction(() => {
        this.activityRegistry.set(activity.id, activity)
        this.activity = activity
        this.submitting = false
      })

    } catch (error) {
      runInAction(() => {
        this.submitting = false
      })
      console.log(error)
    }
  }

  @action deleteActivity = async (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    this.submitting = true
    this.target = event.currentTarget.name
    try {
      await agent.Activities.delete(id)

      runInAction(() => {
        this.activityRegistry.delete(id)
        this.submitting = false
        this.target = ''
      })
    } catch (error) {
      runInAction(() => {
        this.submitting = false
        this.target = ''
      })

      console.log(error)
    }
  }
}

export default createContext(new ActivityStore())
