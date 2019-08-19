import {createGlobalStyle} from 'styled-components';
import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 100,
  },
}));

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
* {
  margin:0;
  box-sizing: border-box;
}
body {
  font: 14px 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased !important;
}
`;
