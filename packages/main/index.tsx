import React from 'react';
import {ApolloProvider} from '@apollo/client';

import {Routes} from './Routes';
import {apolloClient} from './apollo';

const Main: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  );
};

export default Main;
