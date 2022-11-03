import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";
import SettingsProvider from '../context/settings';
import { LoginContext } from "../context/auth";
import ToDo from './../components/todo.jsx';
jest.mock('./../lib/server-requests');
import { getTasks, addTask } from './../lib/server-requests';
import { act } from "react-dom/test-utils";

const mockLoginContext = {
  loggedIn: true,
  user: {
    username: 'test2',
    id: '1',
    role: 'admin',
  }
}

const mockTaskReturn = {
  id: 1,
  user_id: '1',
  complete: false,
  difficulty: 1,
  text: 'text',
  assignee: 'test',
}


getTasks.mockImplementation(() => []);
addTask.mockImplementation(() => mockTaskReturn);

describe('Testing item list functions', () => {

  afterEach(() => {
    cleanup();
  });

  render( 
    <LoginContext.Provider value={mockLoginContext}>
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    </LoginContext.Provider>
  );

  test('Should be able to add item to list', async () => {
    const addButton = screen.getByTestId('add-button');
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);
    await waitFor(() => {
      const list = screen.getByTestId('item-list');
      expect(list).toBeVisible();
    });
  });  

  // test('Should be able to change the status of the item', async () => {  
  //   const changeStatusButton = screen.getByText('Complete: false');
  //   fireEvent.click(changeStatusButton);
  //   await waitFor(() => {
  //     const newStatus = screen.getByText('Complete: true');
  //   });
  // });

  // test('Should be able to delete an item', async () => {  
  //   const deleteButton = screen.getByText('Delete Item');
  //   fireEvent.click(deleteButton);
  //   await waitFor(() => {
  //     expect(deleteButton).not.toBeVisible();
  //   });
    
  // });
});

