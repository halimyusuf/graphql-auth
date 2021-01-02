import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import App from './components/App';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function Root() {
  return (
    <ApolloProvider client={client}>
      <App />
      <div>Hello</div>
    </ApolloProvider>
  );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
