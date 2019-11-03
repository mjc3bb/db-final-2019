import React from 'react';
import {ApolloProvider, useQuery} from '@apollo/react-hooks';
import {client} from './API';
import RootNavigator from './navigation/RootNavigator';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <RootNavigator/>
    </ApolloProvider>
  );
};

export default App;
