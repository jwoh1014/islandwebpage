import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    marginLeft: '40px',
marginRight: '40px',
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
      <ImageCard place={places[3]} checked={checked} />
      <ImageCard place={places[4]} checked={checked} />
      <ImageCard place={places[5]} checked={checked} />

    </div>
  );
}
