import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({onPlaceChanged, onLoad}) => {
    
    const classes = useStyles();

    return (
        <AppBar position="static" style={{backgroundColor: "rgb(88, 88, 88)"}}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" style={{alignItems: "center"}}>
                    <Typography variant="h4" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon style={{fontSize: "2.5rem"}}/>
                            </div>
                            <InputBase placeholder="Search..." style={{fontSize: "2rem"}} classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;