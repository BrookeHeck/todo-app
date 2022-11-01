import { useState, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props) {
  const [showCompleted, setShowCompleted] = useState(true);
  const [ numberOfItems, setNumberOfItems ] = useState(3);

  useEffect(() => {
    // do local storage stuff
  }, []);

  return (
    <SettingsContext.Provider
      value = {{ showCompleted, setShowCompleted, numberOfItems, setNumberOfItems }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;