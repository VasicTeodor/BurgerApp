import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggleClickHandler = () => {
        this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}});
    }

    render() {
        return (
        <React.Fragment>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleClickHandler} />
            <SideDrawer show={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
            {this.props.children}
            </main>
        </React.Fragment>
        )
    }
 
}

export default Layout;