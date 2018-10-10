import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
       <Drawer anchor='right'
               open={props.open}
               onClose={ () => props.onClose()}>

            <List component='nav'>
                <ListItem button onClick={ () => console.log('SlideImages')}>
                    Images
                </ListItem>
                <ListItem button onClick={ () => console.log('Second')}>
                    Images
                </ListItem>
                <ListItem button onClick={ () => console.log('Third')}>
                    Images
                </ListItem>
                <ListItem button onClick={ () => console.log('Fourth')}>
                    Images
                </ListItem>
            </List>
       </Drawer>
    );
};

export default SideDrawer;