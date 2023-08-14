import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Map from './components/Map';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import theme from './theme';

const httpLink = createHttpLink({
  url: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          {/* You can add a header component here if you have one */}
          <Flex as="main" padding="1.5rem">
            <Routes>
              <Route path="/" element={<Map />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/profile" element={<Profile />} />
              {/* Add more routes as needed */}
            </Routes>
          </Flex>
          {/* You can add a footer component here if you have one */}
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;

