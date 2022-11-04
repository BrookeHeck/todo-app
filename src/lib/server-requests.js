'use strict';

const superagent = require('superagent');
const baseURL = `${process.env.REACT_APP_SERVER_URL}/api/v1/tasks`;

export const getTasks = async (user_id, token) => {
  const response = await superagent
    .get(`${baseURL}/${user_id}`)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

export const addTask = async (token, task) => {
  const response = await superagent
    .post(baseURL)
    .send(task)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

export const deleteTask = async (token, task_id) => {
  const response = await superagent
    .delete(`${baseURL}/${task_id}`)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  return response.body;
}

export const updateTask = async (token, item) => {
  const response = await superagent
    .put(`${baseURL}/${item.id}`)
    .send(item)
    .set('Authorization', `Bearer ${token}`)
    .catch(err => console.log(err));
  // return response.body;
}

