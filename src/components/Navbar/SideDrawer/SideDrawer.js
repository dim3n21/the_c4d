import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const SideDrawer = (props) => {
    return (
       <Drawer anchor='top'
               open={props.open}
               onClose={ () => props.onClose()}>
            
            <List component='nav'>
                
                <ListItem button onClick={ () => console.log('SlideImages')} style={{display:'flex', justifyContent:'center'}}>
                    Images
                </ListItem>
               
                <ListItem button onClick={ () => console.log('Second')} style={{display:'flex', justifyContent:'center'}}>
                    Images
                </ListItem>
                <ListItem button onClick={ () => console.log('Third')} style={{display:'flex', justifyContent:'center'}}>
                    Images
                </ListItem>
                <ListItem button onClick={ () => console.log('Fourth')} style={{display:'flex', justifyContent:'center'}}>
                    Images
                </ListItem>
               
            </List>
           
       </Drawer>
    );
};

export default SideDrawer;