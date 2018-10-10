import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer/SideDrawer';

class Navbar extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = () => {
        this.setState(prevState => {
            return {drawerOpen: !prevState.drawerOpen}
        })
    }

    render() {
        return (
            <AppBar position='fixed'
                    style={{ background: this.state.headerShow ? '#2f2f2f' : 'transparent', boxShadow:'none', padding:'10px 0px'}}>
                <Toolbar>
                    
                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>C4D</div>
                        <div className='header_logo_title'>AN AMAZING STUFF</div>
                    </div>

                    <IconButton
                        aria-label='Menu'
                        color='inherit'
                        onClick={ () => this.toggleDrawer() }>

                        <MenuIcon/>

                    </IconButton>

                    <SideDrawer 
                        open={this.state.drawerOpen}
                        onClose={ () => this.toggleDrawer() } />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;