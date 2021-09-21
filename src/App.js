import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import PlaceToVisit from './components/PlaceToVisit';
import PlaceToVisit1 from './components/PlaceToVisit1';
import SignIn from './components/SignIn'
import Buttons from './components/Button';
import { FooterContainer } from './containers/footer'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '80%'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
       <Header />
      <PlaceToVisit />   
       <Header2></Header2>
      <PlaceToVisit1 />
      <Buttons></Buttons>
       <Header3></Header3>
       <FooterContainer />
    </div>
  );
}
