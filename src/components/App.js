import React from 'react';
import Header from './Header';
import Form from './Form';
import Result from './Result';

import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <Container>
      <Header />
      <Form />
      <Result />
    </Container>
  );
}

export default App;
