import { useContext } from 'react';
import settings from '../context/settings';
import { FormGroup, Label, NumericInput, Switch, Button } from '@blueprintjs/core'

function SettingsForm({ setShowForm }) {
  const { showCompleted, numberOfItems, setShowComplete, setNumberOfItems } = useContext(settings);

  function handleNumberChange(e) {
    setNumberOfItems(e);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: e,
      showCompleted: showCompleted,
    }));
  }

  function handleSwitchChange(e) {
    setShowComplete(e.target.checked);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: numberOfItems,
      showCompleted: e.target.checked,
    }));
  }

  return (
    <form id='settingsForm'>
      <FormGroup>
        <Label>
          Number of Items Per Page
          <NumericInput
            value={numberOfItems}
            onValueChange={handleNumberChange}
          />
        </Label>
        <Switch
          checked={showCompleted}
          label='Show Completed'
          onChange={handleSwitchChange}
        />
      </FormGroup>
      <Button onClick={() => setShowForm(false)}>Close</Button>
    </form>
  )
}

export default SettingsForm