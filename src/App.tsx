import React from 'react';
import Container from '@material-ui/core/Container';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import GlobalStyle, {useStyles} from './assets/styles/global';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container maxWidth="sm" className={classes.container}>
        <Auth />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default App;
