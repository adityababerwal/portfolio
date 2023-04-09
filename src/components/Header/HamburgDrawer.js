import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './HamburgDrawer.css';
import { ListItemText } from '@mui/material';

export default function TemporaryDrawer({Pages}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Button 
        onClick={toggleDrawer('right', true)}
        style={{color: 'black', fontSize: '20px', margin: '1vh'}}
      >
        <CloseIcon/>
      </Button>
      </div>
      <List className='drawerLinks'>
        {
          Pages.map((Page) => (
            <ListItem>
              <ListItemText className='listItem'>
                <a href={`#${Page}`}>{Page}</a>
              </ListItemText>
            </ListItem>
            ) 
          )
        }
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button 
          onClick={toggleDrawer('right', true)}
          style={{color: 'white', fontSize: '20px'}}
          >
          <MenuIcon/>
          </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
