import { useContext } from 'react';
import settings from './../context/settings';
import { FormGroup, Label, Toaster, Position, NumericInput, Switch } from '@blueprintjs/core'

function SettingsForm({ showForm }) {
  const { showCompleted, numberOfItems, setShowCompleted, setNumberOfItems } = useContext(settings);

  function handleNumberChange(e) {
    setNumberOfItems(e.target.value);
  }

  function handleSwitchChange(e) {
    setShowCompleted(e.target.value);
  }

  return (
    <form onClick={() => showForm(false)}>
      <p>Close</p>
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
    </form>
  )
}

export default SettingsForm