'use strict';

const superagent = require('superagent');
const baseURL = `${process.env.REACT_APP_SERVER_URL}/api/v1/tasks`;

async function getTasks(user_id, token) {
  const response = await superagent
    .get(`${baseURL}/${user_id}`)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

async function addTask(token, task) {
  const response = await superagent
    .post(baseURL)
    .send(task)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

async function deleteTask(token, task_id) {
  const response = await superagent
    .delete(`${baseURL}/${task_id}`)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

module.exports = {
  getTasks,
  addTask,
  deleteTask,
}

