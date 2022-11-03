import SettingsProvider from '../context/settings';
import SettingsForm from '../components/SettingsForm';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginContext } from '../context/auth';



describe('Test the item list component', () => {

  test('Test show complete', () => {
    render(
      <LoginContext.Provider value ={mockLoginContext}>
        <SettingsProvider>
          <SettingsForm />
        </SettingsProvider>
      </LoginContext.Provider>
    )

    const storeSettings = jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation();

    const showCompleted = screen.getByTestId('show-completed');
    fireEvent.click(showCompleted);
    expect(storeSettings).toHaveBeenCalled();

    // const increment = screen.getByRole('increment');
    // console.log(increment);

    // const select = getByRole('')
  })


});

