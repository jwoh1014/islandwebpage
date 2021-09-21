import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // fontFamily: 'Nunito',
  },

  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },

  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Header3() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (

<div>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
         
        </div>
      </Collapse>
    </div>
  );
}
