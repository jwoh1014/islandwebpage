import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Buttons from './Button';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
  <div className={classes.root} id="place-to-visit1">
      <ImageCard place={places[1]} checked={checked} />


    </div>
  );
}
