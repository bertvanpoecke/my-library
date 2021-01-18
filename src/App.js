import React from 'react';
import Container from '@material-ui/core/Container';
import Main from './components/Main';
import Copyright from './components/Copyright';
import Header from './components/Header';

export default function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Main />
      <Copyright />
    </Container>
  );
}
