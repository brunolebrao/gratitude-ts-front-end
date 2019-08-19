import React from 'react';
import Container from '@material-ui/core/Container';
import Login from './components/Login';
import Header from './components/Header';
import GlobalStyle, {useStyles} from './styles/global';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="sm" className={classes.container}>
        <Login />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default App;
