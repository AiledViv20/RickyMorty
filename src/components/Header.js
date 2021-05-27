import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    size: {
        padding: '1rem'
    },
}));

const Header = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <AppBar position="static"className={classes.size} >
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        RICK Y MORTY
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
 
export default Header;