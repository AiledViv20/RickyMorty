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
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
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

    useEffect(() => {
        if (state.searchBar === "") {
            return dispatch({ 
                type: actions.filterCards, 
                payload: state.cards 
            });
        }
        const busqueda = state.cards.filter((item) => {
            const payload = state.searchBar.toLowerCase();
            const name = item.name.toLowerCase();
            if (name.includes(payload)) {
                return item;
            }
        });
        dispatch({ type: actions.filterCards, payload: busqueda });
    }, [state.searchBar]);

    return ( 
        <div className={classes.root}>
            <Grid container>
                {state.cardsFilter ? 
                    state.cardsFilter.map((item, idx) => {
                        return (
                            <Grid item xs={4} key={idx} className={classes.center}>
                                <CardUser 
                                    id={item.id}
                                    name={item.name}
                                    gender={item.gender}
                                    origin={item.origin.name}
                                    type={item.type}
                                    image={item.image}
                                    color={colorHEX()}
                                    status={item.status}/>
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