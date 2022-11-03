import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MockProvider, MockConsumer } from "../context/mock";
import SettingsProvider from '../context/settings';
import ToDo from './../components/todo.jsx';

jest.mock('./../context/auth', () => {
  jest.requireActual('./../context/auth'),
})

describe('Testing item list functions', () => {

  afterEach(() => {
    cleanup();
  })

  render( 
    <LoginContext.Provider value={mockLoginContext}>
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    </LoginContext.Provider>
  );

  test('Should be able to add item to list', () => {
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const list = screen.getByTestId('item-list');
    expect(list).toBeVisible();
  });

  test('Should be able to change the status of the item', () => {

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const changeStatusButton = screen.getByText('Complete: false');
    fireEvent.click(changeStatusButton);
    
    const newStatus = screen.getByText('Complete: true');
  });

  test('Should be able to delete an item', () => {

    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);

    const list = screen.getByTestId('item-list');
    expect(list).toBeVisible();

    const deleteButton = screen.getByText('Delete Item');
    fireEvent.click(deleteButton);

    expect(deleteButton).not.toBeVisible();
    
  });
});

