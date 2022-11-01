'use strict'

// Sorting Function Library

function filterByComplete(list) {
  return list.filter(item => !item.complete)
}

function sortByDifficulty(list) {
  return list.sort((previous, current) => previous.difficulty - current.difficulty);
}

function sortByTask() {
  return list.sort((previous, current) => previous.task.toLowerCase() - current.task.toLowerCase());
}

function sortByAssignee() {
  return list.sort((previous, current) => previous.assignee.toLowerCase() - current.assignee.toLowerCase());
}

export default {
  filterByComplete,
  sortByTask,
  sortByAssignee,
}