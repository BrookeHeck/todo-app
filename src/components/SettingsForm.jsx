import { useContext } from 'react';
import {SettingsContext} from '../context/settings';
import { FormGroup, Label, NumericInput, Switch, Button } from '@blueprintjs/core'

function SettingsForm({ setShowForm }) {
  const context = useContext(SettingsContext);

  function handleNumberChange(e) {
    context.setNumberOfItems(e);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: e,
      showCompleted: context.showCompleted,
    }));
  }

  function handleSwitchChange(e) {
    context.setShowCompleted(e.target.checked);
    localStorage.clear();
    localStorage.setItem('settings', JSON.stringify({
      numberOfItems: context.numberOfItems,
      showCompleted: e.target.checked,
    }));
  }

  return (
    <form id='settingsForm'>
      <FormGroup>
        <Label>
          Number of Items Per Page
          <NumericInput
            value={context.numberOfItems}
            onValueChange={handleNumberChange}
            min={1}
            max={20}
          />
        </Label>
        <Switch
          checked={context.showCompleted}
          label='Show Completed'
          onChange={handleSwitchChange}
        />
      </FormGroup>
      <Button onClick={() => setShowForm(false)}>Close</Button>
    </form>
  )
}

export default SettingsForm