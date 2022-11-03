import "@testing-library/jest-dom";
import { render, screen, fireEvent, getByLabelText } from "@testing-library/react";
import App from './../app';

describe('Testing item list functions', () => {

  const fakeUser = {
    eventProperties: {
      target: {
        username: {value: 'test'},
        password: {value: 'foo'},
      },
    },
  }

  beforeAll(() => {
    console.log(fakeUser.eventProperties.target.username.value)
    render( <App />);
    fireEvent.click(screen.getByText('Sign Up'));

    // fireEvent.change(screen.getByLabelText('username'), {target: {value: 'test'}});
    // fireEvent.change(screen.getByLabelText('password'), {target: {value: 'foo'}});

    fireEvent.submit(screen.getByText('submit'), fakeUser);
  });

  

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

