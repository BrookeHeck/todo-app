import React, { createContext } from "react";

// NOTE for jest mocking to work and access these out-of-scope variables. Variable names must be prefixed with "mock"

const MockContext = createContext();

const mockLoginContext = {
  loggedIn: true,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiaWF0IjoxNjY3NDk2Mjk3fQ.ji7eodD1xKd5N-fP4T4bCapFTNh-7IMyn0v-_CPtiOA',
  user: {
    username: 'test2',
    password: 'foo',
    id: 1,
    role: 'admin',
  }
}

const MockProvider = ({ children }) => (
  <MockContext.Provider value={mockLoginContext}>
    {children}
  </MockContext.Provider>
);

const MockConsumer = (Child) => (props) => (
  <MockContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </MockContext.Consumer>
);

export { MockProvider, MockConsumer };