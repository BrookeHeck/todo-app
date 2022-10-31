import React from 'react';

const settings = React.createContext({
  showCompleted: true,
  numberOfItems: 10
});

export default settings;