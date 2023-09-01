export interface Goal {
  id?: string,
  status?: boolean,
  name: string,
  description: string,
  composedTasks?: ComposedTask[]

}

export interface ComposedTask {
  id?: string,
  name?: string,
  description: string,
  status: boolean
  simpleTasks?: SimpleTask[]
}


export interface SimpleTask {
  id?: string,
  name: string,
  description: string,
  start_date?: Date,
  end_date?: Date,
  status?: boolean,
}
