import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={ () => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => console.log('Featured')}>
            Event starts in
          </ListItem>
          <ListItem button onClick={() => console.log('Venue Infos')}>
            Venue Infos
          </ListItem>
          <ListItem button onClick={() => console.log('Highlights')}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => console.log('Pricing')}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => console.log('Locations')}>
            Locations
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer;
