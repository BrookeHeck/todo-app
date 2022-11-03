import { useState, useContext } from 'react';
import useForm from '../hooks/form.js';
import { FormGroup, Label } from '@blueprintjs/core';
import { LoginContext } from './../context/auth';
import { addTask } from './../lib/server-requests';
function ItemForm({ list, setList }) {
  const context = useContext(LoginContext);

  const [defaultValues] = useState({
    difficulty: 4,
  });

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  async function addItem(item) {
    item.user_id = context.user.id;
    item.complete = false;
    const itemRecord = await addTask(context.token, item);
    setList([...list, itemRecord]);
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add To Do Item</h2>

      <FormGroup>
        <Label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </Label>

        <Label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </Label>

        <Label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </Label>

        <Label>
          <button type="submit" data-testid="add-button">Add Item</button>
        </Label>
      </FormGroup>
    </form>
  )
}

export default ItemForm;