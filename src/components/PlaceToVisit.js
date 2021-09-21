import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '0vh',
    marginTop : '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {

    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '6rem',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  
  return (
  <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
 
    </div>
          
    
  );
}
