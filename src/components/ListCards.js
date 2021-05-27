import React, { useEffect, useContext } from 'react';
import { CardFilterContext } from "../context/CardFilterContext";
import { actions } from "../context/CardFilterContext/actions";
import CardUser from './CardUser';
import api from '../helpers/api';

const ListCards = () => {
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
        <CardUser />
    );
}
 
export default ListCards;