import { makeObservable, observable, action, computed } from "mobx"
import { createContext } from 'react'

import { IActivity } from "../models/activity"
import agent from '../api/agent'

class ActivityStore {

  constructor() {
    makeObservable(this)
  }

  @observable activityRegistry = new Map()
  @observable activities: IActivity[] = []
  @observable selectedActivity: IActivity | undefined
  @observable loadingInitial = false
  @observable editMode = false
  @observable submitting = false

  @computed get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).slice().sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  @action loadActivities = async () => {
    this.loadingInitial = true
    try {
      const activityList = await agent.Activities.list()

      activityList.forEach((activity) => {
        activity.date = activity.date.split('.')[0]
        this.activityRegistry.set(activity.id, activity)
      })

      this.loadingInitial = false
    } catch (error) {
      console.log(error)
      this.loadingInitial = false
    }
  }

  @action createActivity = async (activity: IActivity) => {
    this.submitting = true
    try {
      await agent.Activities.create(activity)
      this.activityRegistry.set(activity.id, activity)
      this.editMode = false
      this.submitting = false
    } catch (error) {
      this.submitting = false
      console.log(error)
    }
  }

  @action editActivity = async (activity: IActivity) => {
    this.submitting = true
    try {
      await agent.Activities.update(activity)
      this.activityRegistry.set(activity.id, activity)
      this.selectedActivity = activity
      this.editMode = false
      this.submitting = false
    } catch (error) {
      this.submitting = false
      console.log(error)
    }
  }

  @action openEditForm = async (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id)
    this.editMode = true
  }

  @action openCreateForm = () => {
    this.editMode = true
    this.selectedActivity = undefined
  }

  @action cancelSelectedActivity = () => {
    this.selectedActivity = undefined
  }

  @action cancelFormOpen = () => {
    this.editMode = false
  }

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id)
    this.editMode = false
  }
}

export default createContext(new ActivityStore())
