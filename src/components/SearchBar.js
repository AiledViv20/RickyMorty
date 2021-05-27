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
    const [value, setValue] = useState({
        searchBar: ""
    });

    useEffect(() => {
        setValue({
            searchBar: ""
        });
    }, []);

    const handleChange = (e) => {
        setValue({
            [e.target.name]: e.target.value
        });
    };

    const searchCard = () => {
        dispatch({
            type: actions.searchCards,
            payload: value.searchBar
        });
    }

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
                    value={value.searchBar}
                    onChange={handleChange}
                />
                <IconButton onClick={() => searchCard()} className={classes.iconButton} aria-label="search">
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