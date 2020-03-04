import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const mainHeader = () => {
  return (
    <Header as="h2" icon textAlign="center">
      <Icon name="child" circular />
      <Header.Content>Predict your kid's future size</Header.Content>
    </Header>
  );
}

export default mainHeader;
