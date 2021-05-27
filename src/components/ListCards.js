import React, { Fragment, useEffect, useContext } from 'react';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";
import { colorHEX } from '../helpers';
import CardUser from './CardUser';
import api from '../helpers/api';
import { 
    makeStyles, 
    Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const ListCards = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(CardFilterContext);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: actions.getCards });
            try {
                const { data } = await api.get("/character")
                dispatch({ 
                    type: actions.getCardsSuccess,
                    payload: data.results
                });
                dispatch({ 
                    type: actions.filterCards,
                    payload: data.results
                });
            } catch (error) {
                dispatch({ 
                    type: actions.getCardsError,
                    payload: error
                });
            }
        }
        fetchData();
    }, []);

    return ( 
        <div className={classes.root}>
            <Grid container>
                {state.cardsFilter ? 
                    state.cardsFilter.map((item, idx) => {
                        return (
                            <Grid item xs={4} key={idx}>
                                <CardUser 
                                    name={item.name}
                                    gender={item.gender}
                                    origin={origin.name}
                                    type={item.origin.type}
                                    image={item.image}
                                    color={colorHEX()}/>
                            </Grid>
                        )
                    }) 
                    : null 
                }
            </Grid>
        </div>
    );
}
 
export default ListCards;