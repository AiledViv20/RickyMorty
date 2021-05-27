import { actions } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.getCards:
            return {
                ...state,
                cardsLoader: true,
                cardsError: null,
            };
        case actions.getCardsSuccess:
            return {
                ...state,
                cards: action.payload,
                cardsLoader: false,
            };
        case actions.getCardsError:
            return {
                ...state,
                cardsLoader: false,
                cardsError: action.payload,
            };
        case actions.filterCards:
            return {
                ...state,
                cardsFilter: action.payload,
            };
        case actions.searchCards:
            return {
                ...state,
                searchBar: action.payload,
            };
        default:
            return state;
    }
}