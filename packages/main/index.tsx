import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {App} from './App';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const Main: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Main;
