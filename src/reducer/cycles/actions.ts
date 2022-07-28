import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CURRENT_CYCLE = 'INTERRUPTED_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}
export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptedCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPTED_CURRENT_CYCLE,
  }
}
