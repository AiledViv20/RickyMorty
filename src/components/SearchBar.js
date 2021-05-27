import React, { useState, useEffect, useContext,  } from 'react';
import {
    makeStyles,
    Paper,
    InputBase,
    IconButton,
    FormHelperText
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    marginFilterText: {
        marginBottom: '2rem'
    },
    position: {
        display: 'inline-grid',
        marginTop: '1rem'
    }
}));

const SearchBar = ({ filterType }) => {
    const classes = useStyles();
    const { state, dispatch } = useContext(CardFilterContext);

    useEffect(() => {
        dispatch({
            type: actions.searchCards,
            payload: ""
        });
    }, []);

    const handleChange = (e) => {
        dispatch({
            type: actions.searchCards,
            payload: e.target.value
        });
    };

    const submitData = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.position}>
            <Paper component="form" onSubmit={submitData} className={classes.root}>
                <InputBase
                    name="searchBar"
                    className={classes.input}
                    placeholder="Buscar..."
                    value={state.searchBar}
                    onChange={handleChange}
                />
                <IconButton type="button" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <FormHelperText id="component-helper-text" className={classes.marginFilterText}>
                {filterType}
            </FormHelperText>
        </div>
    );
}
 
export default SearchBar;